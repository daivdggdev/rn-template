import React, { Component } from 'react';
import { Modal as AntdModal } from '@ant-design/react-native';
import { ModalProps } from '@ant-design/react-native/lib/modal/Modal';

export default class Modal extends Component<ModalProps, any> {
  render() {
    return <AntdModal {...this.props} />;
  }
}
