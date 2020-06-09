import React, { Component } from 'react';
import { List as AntdList } from '@ant-design/react-native';
import { ListProps } from '@ant-design/react-native/lib/list';
import ListStyle from '@ant-design/react-native/lib/list/style';
import Item from './Item';

const styles = {
  ...ListStyle,
};

export default class List extends Component<ListProps, any> {
  static Item = Item;
  render() {
    return <AntdList {...this.props} styles={styles} />;
  }
}
