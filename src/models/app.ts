import { commonExtend } from '@/utils/model';
import { DvaModel } from '../types/dva';

export interface State {
  login: boolean;
  loading: boolean;
  fetching: boolean;
}

const model: DvaModel<State> = {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
  },
  effects: {
    // *login({ payload }, { call, put }) {},
  },
};

export default commonExtend(model);
