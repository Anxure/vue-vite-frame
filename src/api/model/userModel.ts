export interface LoginParams {
  username: string;
  password: string;
  code?: string
}
export interface LoginModel {
  code: number;
  desc: string;
  message: string;
  username: string;
  id: string;
  realName: string;
  token: string;
  password: string
}
export interface MenuModel {
  title?: string;
  name?: string;
  path?: string;
  icon?: string;
  children?: MenuModel[];
  [prop: string]: any;
}
export interface MenuParams {
  id: string
}