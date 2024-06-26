/*
 * @Author: Anxure
 * @Desc:
 * @Date: 2022-10-11 10:22:29
 * @LastEditors: Anxure
 * @LastEditTime: 2024-04-19 10:48:42
 */
// Read all environment variable configuration files to process.env
type Recordable<T = any> = Record<string, T>;
interface ViteEnv {
  VITE_PROXY: [string, string][]
  VITE_PUBLIC_PATH: string
  VITE_PROD_MOCK: boolean
  VITE_APP_TITLE: string
  VITE_ICONFONT_URL: string
}
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (error) {
        realName = '';
      }
    }
    ret[envName] = realName;
    if (typeof realName === 'string') {
      process.env[envName] = realName;
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return ret;
}