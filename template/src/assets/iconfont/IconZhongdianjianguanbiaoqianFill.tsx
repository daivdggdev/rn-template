/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconZhongdianjianguanbiaoqianFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 64H256c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128l256-192 256 192c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128zM640.036 480.032c55.99 168.015 20.165 209.851-127.972 96.009-148.136 113.843-183.963 72.006-127.974-96.009-143.044-104.008-125.681-157.618 47.991-160.013 54.737-170.346 104.981-171.037 159.967 0 173.663-3.089 190.859 56.005 47.988 160.013z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZhongdianjianguanbiaoqianFill.defaultProps = {
  size: 18,
};

IconZhongdianjianguanbiaoqianFill = React.memo ? React.memo(IconZhongdianjianguanbiaoqianFill) : IconZhongdianjianguanbiaoqianFill;

export default IconZhongdianjianguanbiaoqianFill;
