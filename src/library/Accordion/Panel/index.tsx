import React, { Component } from 'react';
import { Accordion as AntdAccordion } from '@ant-design/react-native';
import { AccordionPanelProps } from '@ant-design/react-native/lib/accordion';

export default class AccordionPanel extends Component<
  AccordionPanelProps,
  any
> {
  render() {
    return <AntdAccordion.Panel {...this.props} />;
  }
}
