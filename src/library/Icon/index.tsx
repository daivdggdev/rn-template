// @ts-nocheck
import React, { Component } from 'react';
import { Icon as RNAntdIcon } from '@ant-design/react-native';
import * as RNVectorIcon from 'react-native-vector-icons/icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

export interface IconProps extends RNVectorIcon.IconProps {
  type: 'antd' | 'ionicons' | 'iconfont';
}

export default class Icon extends Component<IconProps, any> {
  render() {
    let component = null;
    const { type } = this.props;
    switch (type) {
      case 'antd':
        component = <RNAntdIcon {...this.props} />;
        break;

      case 'ionicons':
        component = <Ionicons {...this.props} />;
        break;

      default:
        component = <Ionicons {...this.props} />;
        break;
    }

    return component;
  }
}
