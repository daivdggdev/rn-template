/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
} from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import { SafeAreaView, Text } from '@/library';
import { WholeState } from '@/types/globals';
import { InteractionManager, StyleSheet } from 'react-native';

const mapStateToProps = ({ app, loading }: WholeState) => ({
  login: app.login,
  loading: loading.effects['app/login'],
});

type StateProps = ReturnType<typeof mapStateToProps>;
type OwnProps = {};
type Props = NavigationStackScreenProps & DispatchProp & StateProps & OwnProps;

type State = {
  index: number;
};

class PokemonScreen extends PureComponent<Props, State> {
  static navigationOptions: NavigationStackOptions = {
    title: '首页',
  };

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>demo</Text>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(PokemonScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});
