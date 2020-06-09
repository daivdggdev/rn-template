import 'react-native-gesture-handler';

import { Platform } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoadingScreen from '@/screens/loading';
import HomeScreen from '@/screens/home';

import lightTheme from '@/themes/light';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build(lightTheme);

// https://reactnavigation.org/docs/zh-Hans/react-native-screens.html
import { enableScreens } from 'react-native-screens';
enableScreens();

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    lazy: true,
    navigationOptions: {
      headerStyle: { backgroundColor: EStyleSheet.value('$barColor') },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'black',
    },
    tabBarOptions: {
      activeTintColor: EStyleSheet.value('$mainColor'),
      inactiveTintColor: EStyleSheet.value('$gray'),
      style: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : '#f9f9f9',
        shadowColor: '#bbbbbb',
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
    },
  },
);

const StackNavigator = createStackNavigator({
  Tab: { screen: TabNavigator },
});

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: { screen: LoadingScreen },
    App: StackNavigator,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(SwitchNavigator);
