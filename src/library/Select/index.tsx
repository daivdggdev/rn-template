import React, { Component } from 'react';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';
import Icon from '../Icon';

export interface SelectProps extends PickerSelectProps {}

export default class Select extends Component<SelectProps, any> {
  render() {
    return (
      <RNPickerSelect
        Icon={() => {
          return <Icon name={'arrow-down'} size={25} color={'white'} />;
        }}
        {...this.props}
      />
    );
  }
}
