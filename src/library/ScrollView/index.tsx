import React, { Component } from 'react';
import * as ReactNative from 'react-native';

export interface ScrollViewProps extends ReactNative.ScrollViewProps {}

export default class ScrollView extends Component<ScrollViewProps, any> {
  render() {
    return <ReactNative.ScrollView {...this.props} />;
  }
}
