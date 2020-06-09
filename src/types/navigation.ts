import { NavigationScreenProp, NavigationState } from 'react-navigation';

export type Navigation<Params = {}> = NavigationScreenProp<
  NavigationState,
  Params
>;
