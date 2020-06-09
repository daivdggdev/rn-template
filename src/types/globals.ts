import { ReactNode } from 'react';
import React from 'react-native';

export interface BaseProps {
  children?: ReactNode;
  style?: React.StyleProp<any>;
  [props: string]: any;
}

import { State as AppState } from '@/models/app';
import { DvaLoading } from './dva';

export interface WholeState {
  app: AppState;
  loading: DvaLoading;
}
