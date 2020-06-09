// @ts-nocheck
import { AxiosRequestConfig } from 'axios';
import request from '@/utils/request';
import Config from '@/utils/config';
import api from './api';
import { Method } from 'axios';

const { apiPrefix } = Config;

const gen = (params: string) => {
  let url = params;
  let method: Method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0] as Method;
    url = paramsArray[1];
  }

  return function(data: object, config: AxiosRequestConfig = {}): Promise<any> {
    return request({
      baseURL: apiPrefix,
      url,
      data,
      method,
      ...config,
    });
  };
};

type APIKeys = keyof typeof api;
type APIObject = { [key in APIKeys]: () => any };

const APIFunction = {} as APIObject;
for (const key of Object.keys(api)) {
  APIFunction[key] = gen(api[key]);
}

export default APIFunction;
