import axios, { Method } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mocks from '@/mock';
import { isEmpty, isPlainObject } from 'lodash';
import config from './config';

const { apiPrefix } = config;
const mock = new MockAdapter(axios);

interface RequestOption {
  method: string;
  url: string;
}

const gen = (params: string): RequestOption => {
  let url = apiPrefix + params;
  let method: Method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0] as Method;
    url = apiPrefix + paramsArray[1];
  }

  return { method, url };
};

const wrapper = (data: any) => {
  return {
    success: true,
    code: 200,
    msg: '',
    value: data
  };
};

export default function () {
  if (isEmpty(mocks)) {
    return;
  }

  mocks.forEach((item) => {
    if (!isPlainObject(item)) {
      console.error('mocks item is not object');
      return;
    }

    const keys = Object.keys(item);
    keys.forEach((key) => {
      const option = gen(key);
      let { method, url } = option;
      const func = method.toLowerCase() === 'get' ? mock.onGet.bind(mock) : mock.onPost.bind(mock);

      // 兼容restful风格接口
      url = url.replace(':id', '1');
      // url = url.replace(/\:.*\//, '1/');

      // 用正则匹配携带param的url
      const regexp = new RegExp(`${url}.*`);
      func(regexp).reply(200, wrapper(item[key]));
    });
  });
}
