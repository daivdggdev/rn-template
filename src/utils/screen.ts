import { Platform, Dimensions, PixelRatio } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const PAD_WIDTH = 768;
// const PAD_HEIGHT = 1024;

const { width: D_WIDTH, height: D_HEIGHT } = Dimensions.get('window');

// const { PlatformConstants = {} } = NativeModules;
// const { minor = 0 } = PlatformConstants.reactNativeVersion || {};

// export const isIPhoneX = (() => {
//   if (Platform.OS === 'web') {
//     return false;
//   }

//   return (
//     (Platform.OS === 'ios' &&
//       ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
//         (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
//     (D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
//     (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)
//   );
// })();

export const isIPhoneX = isIphoneX();

export { getStatusBarHeight } from 'react-native-iphone-x-helper';

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
export const statusBarHeight = ((isLandscape: boolean) => {
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
  return Platform.OS === 'ios' ? (isLandscape && !Platform.isPad ? 32 : 44) : 56;
};

// Android机型底部功能栏
export const softMenuBarHeight = Platform.select({
  ios: 0,
  android: ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')
});

//设备的宽度和高度
export const deviceWidth = Platform.select({
  ios: D_WIDTH,
  android: ExtraDimensions.get('REAL_WINDOW_WIDTH')
});

export const getDeviceWidth = () => {
  return Platform.select({
    ios: D_WIDTH,
    android: ExtraDimensions.get('REAL_WINDOW_WIDTH')
  });
};

export const deviceHeight = Platform.select({
  ios: D_HEIGHT - statusBarHeight,
  android: ExtraDimensions.get('REAL_WINDOW_HEIGHT') - statusBarHeight - softMenuBarHeight
}) as number;

if (__DEV__) {
  console.log('REAL_WINDOW_HEIGHT = ', deviceHeight);
  console.log('STATUS_BAR_HEIGHT = ', statusBarHeight);
  console.log('SOFT_MENU_BAR_HEIGHT = ', softMenuBarHeight);
}

let defaultPixel: any, w2, h2, scale: any;
export function setDesignSize(width: number, height: number, pixelRatio: number) {
  defaultPixel = pixelRatio;
  w2 = width / defaultPixel;
  h2 = height / defaultPixel;

  //获取缩放比例
  scale = Math.min(D_HEIGHT / h2, D_WIDTH / w2);
}

/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
export function getFontSize(size: number) {
  if (Platform.OS === 'ios') {
    return size;
  }

  let fontScale = PixelRatio.getFontScale();
  // let pixelRatio = PixelRatio.get();
  //console.log(`fontScale = ${fontScale}, pixelRatio = ${pixelRatio}`);
  return size * scale * fontScale;

  // size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
  // console.log(`size = ${size}, defaultPixel = ${defaultPixel}`);
  // return size / defaultPixel;
}

export function getViewSize(size: number) {
  size = Math.round(size * scale + 0.5);
  return size / defaultPixel;
}

setDesignSize(750, 1334, 2);

export let dimen = {
  px4dp: getViewSize(4),
  px6dp: getViewSize(6),
  px8dp: getViewSize(8),
  px10dp: getViewSize(10),
  px12dp: getViewSize(12),
  px15dp: getViewSize(15),
  px16dp: getViewSize(16),
  px18dp: getViewSize(18),
  px20dp: getViewSize(20),
  px24dp: getViewSize(24),
  px28dp: getViewSize(28),
  px30dp: getViewSize(30),
  px32dp: getViewSize(32),
  px36dp: getViewSize(36),
  px40dp: getViewSize(40),
  px44dp: getViewSize(44),
  px48dp: getViewSize(48),
  px50dp: getViewSize(50),
  px55dp: getViewSize(55),
  px60dp: getViewSize(60),
  px66dp: getViewSize(66),
  px70dp: getViewSize(70),
  px80dp: getViewSize(80),
  px90dp: getViewSize(90),
  px100dp: getViewSize(100),
  px110dp: getViewSize(110),
  px120dp: getViewSize(120),
  px130dp: getViewSize(130),
  px140dp: getViewSize(140),
  px126dp: getViewSize(126),
  px160dp: getViewSize(160),
  px150dp: getViewSize(150),
  px180dp: getViewSize(180),
  px200dp: getViewSize(200),
  px240dp: getViewSize(240),
  px300dp: getViewSize(300),
  px320dp: getViewSize(320),
  px350dp: getViewSize(350),

  // 字体
  px10sp: getFontSize(10),
  px11sp: getFontSize(11),
  px12sp: getFontSize(12),
  px13sp: getFontSize(13),
  px14sp: getFontSize(14),
  px15sp: getFontSize(15),
  px16sp: getFontSize(16),
  px17sp: getFontSize(17),
  px18sp: getFontSize(18),
  px19sp: getFontSize(19),
  px20sp: getFontSize(20),
  px22sp: getFontSize(22),
  px24sp: getFontSize(24),
  px48sp: getFontSize(48)
};
