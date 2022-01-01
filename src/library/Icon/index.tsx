// @ts-nocheck
import React, { Component } from 'react';
import { Icon as RNAntdIcon, IconProps } from '@ant-design/react-native';
// import * as RNVectorIcon from 'react-native-vector-icons/icon';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// Ionicons.loadFont();

export interface IconProps extends IconProps {}

export default class Icon extends Component<IconProps, any> {
  render() {
    return <RNAntdIcon {...this.props} />;
  }
}
