import React, { Component } from 'react';
import * as ReactNative from 'react-native';

export interface TouchableHighlightProps
  extends ReactNative.TouchableHighlightProps {}

export default class TouchableHighlight extends Component<
  TouchableHighlightProps,
  any
> {
  render() {
    return <ReactNative.TouchableHighlight {...this.props} />;
  }
}
