import React, { Component } from 'react';
import * as ReactNative from 'react-native';

export interface MaskTextProps extends ReactNative.TextProps {}

export default class MaskText extends Component<MaskTextProps, any> {
  render() {
    return <ReactNative.Text {...this.props}>{this.props.children}</ReactNative.Text>;
  }
}
