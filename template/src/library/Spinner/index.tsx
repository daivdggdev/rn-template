import React, { Component } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import View from '../View';
import Spinkit, { SpinnerProps as SpinkitProps } from 'react-native-spinkit';
import styles from './style';

export interface SpinnerProps extends SpinkitProps {
  style?: StyleProp<ViewStyle>;
}

export default class Spinner extends Component<SpinnerProps, any> {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Spinkit color={'white'} size={40} type={'Wave'} {...this.props} />
      </View>
    );
  }
}
