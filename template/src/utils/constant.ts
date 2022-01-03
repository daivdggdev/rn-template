import { RouteName } from '@/types/navigation';
import { Dimensions } from 'react-native';

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

export const CANCEL_REQUEST_MESSAGE = 'cancle request';
export const ERROR_REQUEST_MESSAGE = 'Network Error';

export const ROUTES = [
  {
    name: RouteName.HOME,
    title: '首页',
    icon: 'ios-home'
  }
];
