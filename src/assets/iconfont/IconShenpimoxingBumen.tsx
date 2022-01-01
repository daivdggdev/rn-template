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

let IconShenpimoxingBumen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M269.653 501.76H481.28v136.533h61.44V501.76h208.213v136.533h61.44v-204.8H542.72v-51.2h-61.44v51.2H211.627v204.8h58.027V501.76zM409.6 682.667h204.8v204.8H409.6v-204.8z m0-546.133h204.8v204.8H409.6V136.533z m273.067 546.133h204.8v204.8h-204.8v-204.8z m-546.134 0h204.8v204.8h-204.8v-204.8z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShenpimoxingBumen.defaultProps = {
  size: 18,
};

IconShenpimoxingBumen = React.memo ? React.memo(IconShenpimoxingBumen) : IconShenpimoxingBumen;

export default IconShenpimoxingBumen;
