import { ms, mvs } from 'react-native-size-matters';

const hd = 1;

const theme = {
  theme: 'light',
  primary_color: '#f7cdbb',
  background_color: '#f9f9f9',

  /* The Color of O2Team Brand */
  color_brand: '#50c0ff',
  color_brand_light: '#78a4f4',
  color_brand_dark: '#346fc2',

  /* Color */
  color_success: '#13ce66',
  color_error: '#ff4949',
  color_warning: '#ffc82c',
  color_info: '#78a4fa',

  /* Color Palette */
  color_black_0: '#000',
  color_black_1: '#333',
  color_black_2: '#7f7f7f',
  color_black_3: '#b2b2b2',

  color_grey_0: '#333',
  color_grey_1: '#666',
  color_grey_2: '#999',
  color_grey_3: '#ccc',
  color_grey_4: '#e5e5e5',
  color_grey_5: '#f0f0f0',
  color_grey_6: '#f7f7f7',

  color_white: '#fff',

  //   /* Text Color */
  color_text_base: '#333', // 文字的基本色
  color_text_base_inverse: '#fff', // 反色
  color_text_secondary: '#36d57d', // 辅助色
  color_text_placeholder: '#c9c9c9',
  color_text_disabled: '#ccc',
  color_text_title: 'color_grey_0', // 文章标题
  color_text_paragraph: 'color_grey_1', // 文章段落
  color_text_weak: 'color_grey_2', // 文章段落
  color_text_tips: '#0088FF', //提示辅佐色

  // /* Link */
  color_link: '#6190e8',
  color_link_hover: '#79a1eb',
  color_link_active: '#4f7de2',
  color_link_disabled: '#bfbfbf',

  // /* 背景色 */
  color_bg: '#fff',
  color_bg_base: '#fafbfc',
  color_bg_light: '#ecf5fd',
  color_bg_grey: '#f7f7f7',

  //   /* Font */
  font_size_xs: 10 * hd, // 非常用字号，用于标签
  font_size_sm: 12 * hd, // 用于辅助信息
  font_size_base: 14 * hd, // 常用字号
  font_size_lg: 16 * hd, // 常规标题
  font_size_xl: 18 * hd, // 大标题
  font_size_xxl: 20 * hd, // 用于大号的数字

  // /* Line Height */
  line_height_xs: 14,
  line_height_sm: 16,
  line_height_base: 18,
  line_height_lg: 20,
  line_height_xl: 22,
  line_height_xxl: 24,

  // /* 水平间距 */
  spacing_h_sm: ms(5 * hd),
  spacing_h_md: ms(8 * hd),
  spacing_h_ml: ms(10 * hd),
  spacing_h_lg: ms(12 * hd),
  spacing_h_xl: ms(16 * hd),
  spacing_h_xxl: ms(20 * hd),

  /* 垂直间距 */
  spacing_v_xs: mvs(3 * hd),
  spacing_v_sm: mvs(6 * hd),
  spacing_v_md: mvs(9 * hd),
  spacing_v_lg: mvs(12 * hd),
  spacing_v_xl: mvs(15 * hd),
  spacing_v_xxl: mvs(18 * hd),

  // /* 图标尺寸 */
  icon_size_sm: 18 * hd,
  icon_size_md: 22 * hd,
  icon_size_lg: 36 * hd
};

export default theme;
