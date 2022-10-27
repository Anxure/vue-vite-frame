/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2022-10-26 15:37:41
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-26 15:37:42
 */
import { message } from 'ant-design-vue';
import { AxiosResponse } from 'axios'

// 下载文件，后台返回的文件流 stream--流 | fileName--文件名 | fileFormat--文件类型
export const downloadFileFromStream = (stream: BlobPart, fileName = '') => {
    // 转为blob
    const blob = new Blob([stream]);
    if ((window.navigator as any).msSaveOrOpenBlob) {
        // 兼容IE
       ( navigator as any).msSaveBlob(blob, fileName);
    } else {
        const elink = document.createElement('a');
        elink.download = fileName;
        elink.style.display = 'none';
        elink.href = URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        document.body.removeChild(elink);
    }
};
// 带有处理异常的文件流下载(处理json异常, fileName默认后台获取)
export const handleExceptDown = (streamRes: AxiosResponse, fileName?: string, fileFormat = '.xlsx') => {
    const { data, headers } = streamRes;
    let resFileName = '';
    // 前端才能正常获取到Content-Disposition内容
    const disposition = headers['content-disposition'];
    if (disposition) {
        resFileName = disposition?.substring(disposition.indexOf('filename=') + 9, disposition.length);
        resFileName = decodeURI(resFileName)
        // 去掉双引号
        resFileName = resFileName.replace(/"/g, '');
    }
    fileName = resFileName || `${fileName}${fileFormat}`;
    const fileReader = new FileReader();
    fileReader.onload = (e: Event) => {
        try {
            const jsonData = JSON.parse((e?.target as any).result); // 说明是普通对象数据，后台转换失败
            if (jsonData.code !== 200) {
                message.error(jsonData.message);
            }
        } catch (e) {
            downloadFileFromStream(data, fileName);
        }
    };
    fileReader.readAsText(data);
};
