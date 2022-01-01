import React, { Component } from 'react';
import * as ReactNative from 'react-native';
import Separator from '../Separator';
import EmptyView from '../EmptyView';
import View from '../View';
import ActivityIndicator from '../ActivityIndicator';
import _ from 'lodash';
import styles from './style';

export interface ListViewProps extends ReactNative.FlatListProps<any> {
  pageSizeToRender: number;
}
export interface ListRenderItemInfo<T> extends ReactNative.ListRenderItemInfo<T> {}

type Props = ListViewProps;

type State = {
  data: ReadonlyArray<any> | null | undefined;
  lastData: ReadonlyArray<any> | null | undefined;
  refreshing: boolean;
  waiting: boolean;
  done: boolean;
};

export default class ListView extends Component<Props, State> {
  onEndReachedCalledDuringMomentum: boolean;

  static getDerivedStateFromProps(props: Props, _state: State) {
    let { data, pageSizeToRender, refreshing, onEndReached } = props;
    const newState = {} as State;

    if (_state.lastData !== data) {
      // 新数据重置等待状态
      newState.lastData = data;
      newState.waiting = false;

      if (!refreshing && onEndReached) {
        data = _state.data.concat(data);
      }

      // 判断是否已经加载完毕
      let length = data?.length ?? 0;
      let done = length <= 0 || length < (pageSizeToRender as number);

      // 只有在非刷新情况下获取的新数据少于预期则已经加载完毕
      if (!refreshing) {
        if (length < (_state.data?.length as number) + (pageSizeToRender as number)) {
          done = true;
        }
      }

      newState.data = data;
      newState.done = done;
    }

    if (typeof refreshing === 'boolean' && refreshing !== _state.refreshing) {
      newState.refreshing = refreshing;
    }

    return _.isEmpty(newState) ? null : newState;
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      lastData: [],
      refreshing: false,
      waiting: false,
      done: false
    };

    this.onEndReachedCalledDuringMomentum = true;
  }

  renderSeparator = () => {
    return <Separator />;
  };

  renderEmpty = () => {
    return <EmptyView />;
  };

  renderFooter = () => {
    let cpt = null;
    if (this.state.done) {
      cpt = this.props.ListFooterComponent as React.ReactElement;
    } else if (this.state.waiting) {
      cpt = (
        <View style={styles.footer}>
          <ActivityIndicator />
        </View>
      );
    }

    return cpt || null;
  };

  render() {
    return (
      <ReactNative.FlatList
        contentContainerStyle={styles.contentContainer}
        initialNumToRender={this.props.pageSizeToRender}
        ItemSeparatorComponent={this.renderSeparator}
        ListEmptyComponent={this.renderEmpty}
        keyExtractor={(item: any, index: number) => `${item.id} - ${index}`}
        onEndReachedThreshold={0.2}
        onMomentumScrollBegin={() => {
          this.onEndReachedCalledDuringMomentum = false;
        }}
        {...this.props}
        data={this.state.data}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        onEndReached={this.onEndReached}
        ListFooterComponent={this.renderFooter}
      />
    );
  }

  onRefresh = () => {
    if (!this.props.onRefresh) {
      return;
    }

    this.setState({ done: false, refreshing: true });
    this.props.onRefresh?.();
  };

  onEndReached = (info: { distanceFromEnd: number }) => {
    if (!this.props.onEndReached) {
      return;
    }

    if (this.onEndReachedCalledDuringMomentum) {
      return;
    }

    let count = this.state.data?.length ?? 0;
    if (count <= 0 || this.state.done) {
      return;
    }

    if (count < (this.props.pageSizeToRender as number)) {
      return;
    }

    if (this.state.waiting) {
      return;
    }

    this.onEndReachedCalledDuringMomentum = true;
    this.setState({ waiting: true });
    this.props.onEndReached?.(info);
  };
}
