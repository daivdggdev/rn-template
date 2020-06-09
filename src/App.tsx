/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import dva from '@/utils/dva';
import models from '@/models';
import Navigation from '@/Navigator';
import mock from '@/utils/mock';

if (__DEV__) {
  mock();
}

const app = dva({
  initialState: {},
  models,
  onError(e: any) {
    console.log('onError', e);
  },
});

class Container extends React.PureComponent<{}> {
  render() {
    return <Navigation />;
  }
}

const App = app.start(<Container />);

export default App;
