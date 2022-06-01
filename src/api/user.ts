import request from '@/utils/request'
import { LoginParams, LoginModel, MenuModel, MenuParams } from '@/api/model/userModel'
import { IResponseData } from '@/types/axios'

export function login(params: LoginParams):Promise<IResponseData<LoginModel>>{
  return  request.post('/login', params)
}

export function getMenu(params: MenuParams): Promise<IResponseData<Array<MenuModel>>> {
  return request.get('/getMenuTree', { params })
}