import { Platform, Dimensions } from 'react-native';

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get(
  'window',
);

import ExtraDimensions from 'react-native-extra-dimensions-android';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const PAD_WIDTH = 768;
// const PAD_HEIGHT = 1024;

const { width: D_WIDTH, height: D_HEIGHT } = Dimensions.get('window');

// const { PlatformConstants = {} } = NativeModules;
// const { minor = 0 } = PlatformConstants.reactNativeVersion || {};

export const isIPhoneX = (() => {
  if (Platform.OS === 'web') {
    return false;
  }

  return (
    (Platform.OS === 'ios' &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
    (D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
    (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)
  );
})();

export const isIPad = (() => {
  if (Platform.OS !== 'ios' || isIPhoneX) {
    return false;
  }

  // if portrait and width is smaller than iPad width
  if (D_HEIGHT > D_WIDTH && D_WIDTH < PAD_WIDTH) {
    return false;
  }

  // if landscape and height is smaller that iPad height
  if (D_WIDTH > D_HEIGHT && D_HEIGHT < PAD_WIDTH) {
    return false;
  }

  return true;
})();

// 状态栏高度, 默认竖屏
export const STATUS_BAR_HEIGHT = ((isLandscape: boolean) => {
  /**
   * This is a temporary workaround because we don't have a way to detect
   * if the status bar is translucent or opaque. If opaque, we don't need to
   * factor in the height here; if translucent (content renders under it) then
   * we do.
   */
  if (Platform.OS === 'android') {
    return ExtraDimensions.get('STATUS_BAR_HEIGHT');
  }

  if (isIPhoneX) {
    return isLandscape ? 0 : 44;
  }

  if (isIPad) {
    return 20;
  }

  return isLandscape ? 0 : 20;
})(false);

// 导航栏高度
export const getAppBarHeight = (isLandscape: boolean) => {
  return Platform.OS === 'ios'
    ? isLandscape && !Platform.isPad
      ? 32
      : 44
    : 56;
};

// Android机型底部功能栏
export const softMenuBarHeight = Platform.select({
  ios: 0,
  android: ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT'),
});

//设备的宽度和高度
export const deviceWidth = Platform.select({
  ios: D_WIDTH,
  android: ExtraDimensions.get('REAL_WINDOW_WIDTH'),
});

export const deviceHeight = Platform.select({
  ios: D_HEIGHT - STATUS_BAR_HEIGHT,
  android:
    ExtraDimensions.get('REAL_WINDOW_HEIGHT') -
    STATUS_BAR_HEIGHT -
    softMenuBarHeight,
});

export const DEFAULT_PAGE_SIZE = 10;

if (__DEV__) {
  console.log('REAL_WINDOW_HEIGHT = ', deviceHeight);
  console.log('STATUS_BAR_HEIGHT = ', STATUS_BAR_HEIGHT);
  console.log('SOFT_MENU_BAR_HEIGHT = ', softMenuBarHeight);
}

export const CANCEL_REQUEST_MESSAGE = 'cancle request';
export const ERROR_REQUEST_MESSAGE = 'Network Error';
