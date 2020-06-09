import React, { Component } from 'react';
import * as ReactNavigation from 'react-navigation';

export interface SafeAreaViewProps extends ReactNavigation.SafeAreaViewProps {}

export default class SafeAreaView extends Component<SafeAreaViewProps, any> {
  render() {
    return <ReactNavigation.SafeAreaView {...this.props} />;
  }
}
