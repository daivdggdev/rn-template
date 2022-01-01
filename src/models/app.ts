import { commonExtend } from '@/utils/model';
import { DvaModel } from '../types/dva';

export interface State {
  initialized: boolean;
}

const model: DvaModel<State> = {
  namespace: 'app',
  state: {
    initialized: false
  },
  effects: {
    *initialized(action, { put }) {
      // yield all([put({ type: 'setupSounds' })]);
      yield put({
        type: 'updateState',
        payload: { initialized: true }
      });
    }
  }
};

export default commonExtend(model);
