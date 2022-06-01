export interface IResponseData<T=any> {
    code: number;
    type: number;
    message: string;
    result: T;
}