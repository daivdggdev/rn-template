import React, { Component } from 'react';
import { Button as AntdButton } from '@ant-design/react-native';
import { ButtonProps } from '@ant-design/react-native/lib/button/index';
import ButtonStyle from '@ant-design/react-native/lib/button/style/index';
// import EStyleSheet from 'react-native-extended-stylesheet';

const styles = {
  ...ButtonStyle
};

export default class Button extends Component<ButtonProps, any> {
  render() {
    return <AntdButton {...this.props} styles={{ ...styles, ...this.props.styles }} />;
  }
}
