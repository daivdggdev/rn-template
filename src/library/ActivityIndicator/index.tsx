import React, { Component } from 'react';
import * as ReactNative from 'react-native';

export interface ActivityIndicatorProps
  extends ReactNative.ActivityIndicatorProps {}

export default class ActivityIndicator extends Component<
  ActivityIndicatorProps,
  any
> {
  render() {
    return <ReactNative.ActivityIndicator {...this.props} />;
  }
}
