import React, { Component } from 'react';
import { List as AntdList } from '@ant-design/react-native';
import { ListItemProps } from '@ant-design/react-native/lib/list/ListItem';

export default class ListItem extends Component<ListItemProps, any> {
  static Brief = AntdList.Item.Brief;
  render() {
    return <AntdList.Item {...this.props} />;
  }
}
