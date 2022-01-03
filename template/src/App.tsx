/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import dva, { getDva } from '@/utils/dva';
import models from '@/models';
import Navigation from '@/Navigator';
import { persistEnhancer } from './utils/configureStore';
// import mock from '@/utils/mock';

if (__DEV__) {
  // mock();
}

class Container extends React.PureComponent<{}> {
  render() {
    return <Navigation />;
  }
}

interface Props {}
interface State {
  initialized: boolean;
}

export default class App extends React.PureComponent<Props, State> {
  app: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      initialized: false
    };
  }

  componentDidMount() {
    this._initialize();
  }

  _initialize() {
    const extraEnhancer = persistEnhancer(this.onComplete);

    this.app = getDva();
    if (!this.app) {
      this.app = dva({
        initialState: {},
        models,
        extraEnhancers: [extraEnhancer],
        onError(e: any) {
          console.log('onError', e);
        }
      });
    } else {
      this.onComplete();
    }
  }

  render() {
    if (!this.state.initialized) {
      return <View />;
    }

    return this.app.start(<Container />)();
  }

  onComplete = () => {
    // const state = this.app.getStore().getState();
    // console.log('state: ', state);

    this.setState({ initialized: true });
  };
}
