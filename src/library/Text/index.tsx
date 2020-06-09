import React, { Component } from 'react';
// import * as ReactNative from 'react-native';
import ScalableText, {
  TextProps as ScalableTextProps,
} from 'react-native-text';

export interface TextProps extends ScalableTextProps {}

export default class Text extends Component<TextProps, any> {
  render() {
    return <ScalableText {...this.props} />;
  }
}
