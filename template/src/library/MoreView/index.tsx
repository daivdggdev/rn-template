/*
 * @Author: dwwang
 * @Date: 2019-12-27 15:34:00
 */

import React, { PureComponent } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import Text from '../Text';
import Icon from '../Icon';
import TouchableOpacity from '../TouchableOpacity';
import styles from './style';

type Props = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress?: Function;
};

type State = {};

class MoreView extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.onPress}>
        <Text style={[styles.text, this.props.textStyle]}>
          {this.props.title}
        </Text>
        <Icon
          type={'ionicons'}
          name="ios-arrow-forward"
          size={18}
          color={'#848691'}
          style={[styles.icon, this.props.iconStyle]}
        />
      </TouchableOpacity>
    );
  }

  onPress = () => {
    this.props?.onPress();
  };
}

export default MoreView;
