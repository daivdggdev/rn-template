import React, { Component } from 'react';
import * as ReactNative from 'react-native';
import Separator from '../Separator';

export interface SectionListProps extends ReactNative.SectionListProps<any> {}

export interface SectionListRenderItemInfo<T> extends ReactNative.SectionListRenderItemInfo<T> {}

export default class SectionList extends Component<SectionListProps, any> {
  renderSeparator = () => {
    return <Separator />;
  };

  render() {
    return (
      <ReactNative.SectionList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={(item: any, index: number) => `${item.id} - ${index}`}
        {...this.props}
      />
    );
  }
}
