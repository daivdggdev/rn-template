import React, { Component } from 'react';
import * as ReactNative from 'react-native';

export interface TouchableOpacityProps
  extends ReactNative.TouchableOpacityProps {}

export default class TouchableOpacity extends Component<
  TouchableOpacityProps,
  any
> {
  render() {
    return <ReactNative.TouchableOpacity {...this.props} />;
  }
}
