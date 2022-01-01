import { ReactNode } from 'react';
import React from 'react-native';

export interface BaseProps {
  children?: ReactNode;
  style?: React.StyleProp<any>;
  [props: string]: any;
}

import { State as AppState } from '@/models/app';
import { State as SectionState } from '@/models/section';
import { DvaLoading } from './dva';

export interface WholeState {
  app: AppState;
  section: SectionState;
  loading: DvaLoading;
}
