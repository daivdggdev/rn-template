/*
 * @Author: dwwang
 * @Date: 2019-12-27 15:34:00
 */

import React, { PureComponent } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import View from '../View';
import styles from './style';

type Props = {
  style?: StyleProp<ViewStyle>;
};

type State = {};

class EmptyView extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <View style={[styles.container, this.props.style]} />;
  }
}

export default EmptyView;
