/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2022-10-27 10:56:48
 * @LastEditors: Anxure
 * @LastEditTime: 2022-10-27 11:12:16
 */
export interface tableParams {
  pageNum: number;
  pageSize: number;
  keyword?: string;
  [propName: string]: any
}