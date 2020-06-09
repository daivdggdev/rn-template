import React, { Component } from 'react';
import { SearchBar as AntdSearchBar } from '@ant-design/react-native';
import { SearchBarProps } from '@ant-design/react-native/lib/search-bar';
import SearchBarStyle from '@ant-design/react-native/lib/search-bar/style';

const styles = {
  ...SearchBarStyle,
};

export default class SearchBar extends Component<SearchBarProps, any> {
  render() {
    return <AntdSearchBar {...this.props} styles={styles} />;
  }
}
