import React, { Component } from 'react';
import * as RNSlider from '@react-native-community/slider';

export interface SliderProps extends RNSlider.SliderProps {}

export default class Slider extends Component<SliderProps, any> {
  render() {
    return <RNSlider.default {...this.props} />;
  }
}
