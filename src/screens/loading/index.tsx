/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from '@/library';
import { NavigationTabScreenProps } from 'react-navigation-tabs';

type Props = NavigationTabScreenProps<{}> & {
  appInitialized: () => Promise<any>;
};

type State = {
  refreshing: boolean;
};

class LoadingScreen extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>demo</Text>
      </SafeAreaView>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});
