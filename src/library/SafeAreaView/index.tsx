import React, { Component } from 'react';
import {
  SafeAreaView as RNSafeAreaView,
  NativeSafeAreaViewProps
} from 'react-native-safe-area-context';

export interface SafeAreaViewProps extends NativeSafeAreaViewProps {}

export default class SafeAreaView extends Component<SafeAreaViewProps, any> {
  render() {
    return <RNSafeAreaView edges={['bottom']} {...this.props} />;
  }
}
