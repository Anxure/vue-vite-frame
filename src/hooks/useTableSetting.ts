/*
 * @Author: Anxure
 * @Desc: 封装表格示例
 * @Date: 2022-10-26 15:37:03
 * @LastEditors: Anxure
 * @LastEditTime: 2023-10-09 11:23:29
 */
import { message } from 'ant-design-vue';
import { cloneDeep } from 'lodash-es';
import {computed ,toRefs , reactive} from 'vue';
import {downloadFileFromStream } from '@/hooks/useDownload';
import dayjs from 'dayjs';
interface TableSetting {
  rowSelectionType: 'checkbox' | 'radio'; // 默认checkbox,添加radio支持
  extraParams: any; // 组件额外参数配置(允许组件界面额外传入一些参数)
  loading: boolean; // 表格loading
  batchExportLoading: boolean; // 导出文件loading
  dataList: any[];
  pageNum: number;
  pageSize: number;
  rowKey: string;
  totalLength: number;
  totalPages: number; // 总页数
  curSelectKeys: Array<number | string>;// 当前页选中keys
  curSelectRows: any[]; // 当前页选中条目
  totalSelectedKeys: Array<number | string>;// 全部数据选中keys
  // 搜索参数
  searchParams: any;
  getListCallback: any
}
export default <T>()=> {
    const state = reactive<TableSetting>({
        rowSelectionType: 'checkbox', // 默认checkbox,添加radio支持
        extraParams: {}, // 组件额外参数配置(允许组件界面额外传入一些参数)
        loading: false, // 表格loading
        batchExportLoading: false, // 导出文件loading
        dataList: [],
        pageNum: 1,
        pageSize: 10,
        rowKey: 'id',
        totalLength: 0,
        totalPages: 0, // 总页数
        curSelectKeys: [], // 当前页选中keys
        curSelectRows: [], // 当前页选中条目
        totalSelectedKeys: [],// 全部数据选中keys
        // 搜索参数
        searchParams: {},
        getListCallback: undefined
    })
    // 位置表格rowKey
    function setRowKey(rowKey: string) {
        state.rowKey = rowKey;
    }
    // 设置请求api
    let ajaxFunc: any = null;
    function setAjaxFunc(func: any) {
        ajaxFunc = func
    }
    // 设置导出api
    let exportFile: any = null;
    function setExportFile(func: any) {
        exportFile = func
  }
  // 全选当前页
    const rowSelection = computed(() => {
        return {
            fixed: true,
            selectedRowKeys: state.curSelectKeys,
            onChange: (selectedRowKeys:string[], selectedRows:[]) => {
                state.curSelectKeys = [...selectedRowKeys];
                state.curSelectRows = selectedRows;
                state.totalSelectedKeys = [...selectedRowKeys]
            },
            type: state.rowSelectionType,
        };
    });
    const curKeys = computed(() => {
        return state.dataList.map((item: T) => item[state.rowKey]) || [];
    });

    /**
     * @description: 初始化 & 搜索 & 翻页 & 刷新方法
     * @param isSearch 是否为搜索进入，需要重置页码
     * @param needResetCheck 是否需要清除勾选项
     * @param cb
     */
    async function getNewsList(isSearch = true, needResetCheck = true, cb?: Function|undefined) {
        cb = cb || state.getListCallback; // 支持组件内部声明
        if (isSearch) {
            state.pageNum = 1;
        }
        if (needResetCheck) {
            // 重置checkbox
            resetMutiCheck();
        }
        if (!ajaxFunc || typeof ajaxFunc !== 'function') {
            throw new Error('请在使用的组件data中声明数据请求方法');
        }
        if (!state.searchParams) {
            throw new Error('请在使用的组件data中声明searchParams字段');
        }
        const transformParams = cloneDeep(state.searchParams);
        state.loading = true;
        try{
            const res = await (ajaxFunc as Function)({
                ...transformParams,
                pageNum: state.pageNum,
                pageSize: state.pageSize
            });
            state.loading = false;
            const {total, items} = res.result;
            // 防止删除 | 修改pageSize后 最后一页无数据的情况(提前一页请求)
            if (items.length === 0 && state.pageNum !== 1) {
                state.pageNum--;
                getNewsList(isSearch);
                return;
            }
            state.dataList = items;
            state.totalLength = total;
            // state.totalPages = pages;
            cb && typeof cb === 'function' && cb(reactive(res));
        }
        finally {
            state.loading = false;
        }
    }

    // 批量导出
    async function batchExport() {
        if (state.totalSelectedKeys.length === 0) {
            message.warning('请至少选择一条数据')
            return;
        }
        // 工具函数 to 的用法查看下 @/utils/index.js 末尾
        state.batchExportLoading = true;
        if (!exportFile || typeof exportFile !== 'function') {
            throw new Error('请在使用的组件data中声明数据请求方法');
        }
        try {
            const res = await exportFile({ids:state.totalSelectedKeys, type: 1});
            const fileName: string = dayjs().format('YYYY-MM-DD HH:mm')
            downloadFileFromStream(res, fileName + '.xlsx');
            resetMutiCheck()
        }catch (e) {
            console.log('下载报错', e)
        }finally {
            state.batchExportLoading = false;
        }
    }

    function resetMutiCheck() {
        state.curSelectKeys = [];
        state.totalSelectedKeys = [];
    }
    // 这里不要修改两个参数，无值会出现page 0 情况
    function pageChange(page: number) {
        state.pageNum = page;
        getNewsList(false, false);
    }

    function pageSizeChange(page: number | string, size: number) {
        // size变化重置选中项
        state.pageSize = size;
        getNewsList(false);
    }

    return {
        ...toRefs(state),
        rowSelection,
        setRowKey,
        ajaxFunc,
        setAjaxFunc,
        batchExport,
        setExportFile,
        getNewsList,
        pageChange,
        pageSizeChange
    };
}
