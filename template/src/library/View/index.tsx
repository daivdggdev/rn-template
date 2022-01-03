import React, { Component } from 'react';
import * as ReactNative from 'react-native';

export interface ViewProps extends ReactNative.ViewProps {}

export default class View extends Component<ViewProps, any> {
  render() {
    return <ReactNative.View {...this.props} />;
  }
}
