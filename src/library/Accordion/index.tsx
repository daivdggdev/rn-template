import React, { Component } from 'react';
import { Accordion as AntdAccordion } from '@ant-design/react-native';
import { AccordionNativeProps } from '@ant-design/react-native/lib/accordion';
import AccordionStyle from '@ant-design/react-native/lib/accordion/style';
import Panel from './Panel';

const styles = {
  ...AccordionStyle,
};

export default class Accordion extends Component<
  AccordionNativeProps<any>,
  any
> {
  static Panel = Panel;
  render() {
    return <AntdAccordion {...this.props} styles={styles} />;
  }
}
