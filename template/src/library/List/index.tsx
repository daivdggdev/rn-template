import React, { Component } from 'react';
import { List as AntdList } from '@ant-design/react-native';
import { ListProps } from '@ant-design/react-native/lib/list';
import Item from './Item';
export default class List extends Component<ListProps, any> {
  static Item = Item;
  render() {
    return <AntdList {...this.props} />;
  }
}
