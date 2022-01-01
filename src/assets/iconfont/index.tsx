/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconTou1Xiang from './IconTou1Xiang';
import IconZhongdianjianguanbiaoqianFill from './IconZhongdianjianguanbiaoqianFill';
import IconWDanwei209 from './IconWDanwei209';
import IconXiangyou from './IconXiangyou';
import IconShenpimoxingBumen from './IconShenpimoxingBumen';
import IconGuanbi2Fill from './IconGuanbi2Fill';
import IconZhaoxiangji2 from './IconZhaoxiangji2';
import IconRenyuan1 from './IconRenyuan1';
import IconJibenxinxi from './IconJibenxinxi';
export { default as IconTou1Xiang } from './IconTou1Xiang';
export { default as IconZhongdianjianguanbiaoqianFill } from './IconZhongdianjianguanbiaoqianFill';
export { default as IconWDanwei209 } from './IconWDanwei209';
export { default as IconXiangyou } from './IconXiangyou';
export { default as IconShenpimoxingBumen } from './IconShenpimoxingBumen';
export { default as IconGuanbi2Fill } from './IconGuanbi2Fill';
export { default as IconZhaoxiangji2 } from './IconZhaoxiangji2';
export { default as IconRenyuan1 } from './IconRenyuan1';
export { default as IconJibenxinxi } from './IconJibenxinxi';

export type IconNames = 'tou1xiang' | 'zhongdianjianguanbiaoqian_fill' | 'w_danwei-209' | 'xiangyou' | 'shenpimoxing-bumen' | 'guanbi2-fill' | 'zhaoxiangji2' | 'renyuan1' | 'jibenxinxi';

interface Props extends GProps, ViewProps {
  name: IconNames | string;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'tou1xiang':
      return <IconTou1Xiang key="1" {...rest} />;
    case 'zhongdianjianguanbiaoqian_fill':
      return <IconZhongdianjianguanbiaoqianFill key="2" {...rest} />;
    case 'w_danwei-209':
      return <IconWDanwei209 key="3" {...rest} />;
    case 'xiangyou':
      return <IconXiangyou key="4" {...rest} />;
    case 'shenpimoxing-bumen':
      return <IconShenpimoxingBumen key="5" {...rest} />;
    case 'guanbi2-fill':
      return <IconGuanbi2Fill key="6" {...rest} />;
    case 'zhaoxiangji2':
      return <IconZhaoxiangji2 key="7" {...rest} />;
    case 'renyuan1':
      return <IconRenyuan1 key="8" {...rest} />;
    case 'jibenxinxi':
      return <IconJibenxinxi key="9" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
