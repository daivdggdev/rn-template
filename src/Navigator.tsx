import * as React from 'react';
import theme from '@/themes';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from '@/screens';
import { ROUTES } from './utils/constant';
import { RouteName } from './types/navigation';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

// EStyleSheet.build(theme);
enableScreens();

const defaultScreenOptions = {
  headerStyle: { backgroundColor: theme.color_white },
  headerTitleStyle: { color: '#333', textAlign: 'center' },
  headerTintColor: '#333',
  headerBackTitleVisible: false,
  cardStyleInterpolator: Platform.select({
    ios: CardStyleInterpolators.forHorizontalIOS,
    android: CardStyleInterpolators.forScaleFromCenterAndroid
  })
};

const StackNavigator = () => {
  const Stack: any = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={(props) => {
        const { route } = props;
        let routeName = route.name;
        let customOptions = {};
        // if (routeName === RouteName.TAB) {
        //   routeName = getFocusedRouteNameFromRoute(route) ?? RouteName.HOME;
        // }

        const { title } = ROUTES.find((item) => item.name === routeName) ?? {};
        return {
          headerTitle: title,
          headerTitleAlign: 'center',
          ...defaultScreenOptions,
          ...customOptions
        };
      }}>
      <Stack.Screen name={RouteName.HOME} component={Home} />
    </Stack.Navigator>
  );
};

// const LoadingNavigator = () => {
//   const Stack = createStackNavigator();

//   return (
//     <Stack.Navigator
//       screenOptions={(props) => {
//         const { route } = props;
//         let routeName = route.name;
//         const { title } = ROUTES.find((item) => item.name === routeName) ?? {};
//         return {
//           headerTitle: title,
//           ...defaultScreenOptions
//         };
//       }}>
//       {/* 登录页 */}
//       <Stack.Screen name={RouteName.LOGIN} component={Login} options={{ headerShown: false }} />
//       {/* 单位信息 */}
//       <Stack.Screen name={RouteName.UnitInfo} component={UnitInfo} />
//     </Stack.Navigator>
//   );
// };

const App = () => {
  // const { initialized } = useSelector(({ app }: WholeState) => ({
  //   initialized: app.initialized
  // }));

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ActionSheetProvider>
          <StackNavigator />
        </ActionSheetProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
