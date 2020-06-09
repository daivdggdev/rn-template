import { Mock } from './_utils';
import api from '@/services/api';

const { getUser } = api;

const moveList = Mock.mock({
  'data|20': '',
});

export default {
  [getUser]: moveList.data,
};
