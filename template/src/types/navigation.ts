import { RouteProp } from '@react-navigation/core';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export enum RouteName {
  HOME = 'Home'
}

export type RootStackParamList = {
  [RouteName.HOME]: undefined;
};

export type DefaultRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type DefaultScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

export type DefaultNavigationProps<T extends keyof RootStackParamList> = StackNavigationProp<
  RootStackParamList,
  T
>;
