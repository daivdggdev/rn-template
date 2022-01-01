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

let IconZhaoxiangji2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.2 68C266.6 68 68.4 266.2 68.4 510.8s198.2 442.8 442.8 442.8S954 755.3 954 510.8 755.7 68 511.2 68zM328.6 364.7c0-5 4.1-9.1 9.1-9.1h27.4c5 0 9.1 4.1 9.1 9.1v9.1h-45.6v-9.1z m410.8 292.1c0 15.1-12.3 27.4-27.4 27.4H310.4c-15.1 0-27.4-12.3-27.4-27.4V419.5c0-15.1 12.3-27.4 27.4-27.4h82.2c27.4 0 36.5-54.8 54.8-54.8h118.7c27.1 0 37.5 54.8 63.9 54.8h82.2c15.1 0 27.4 12.3 27.4 27.4v237.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M511.2 419.5c-60.5 0-109.5 49-109.5 109.5s49 109.5 109.5 109.5 109.5-49 109.5-109.5-49-109.5-109.5-109.5z m0 191.7c-45.4 0-82.2-36.8-82.2-82.2 0-45.4 36.8-82.2 82.2-82.2 45.4 0 82.2 36.8 82.2 82.2-0.1 45.4-36.9 82.2-82.2 82.2zM629.8 433.2a13.7 13.7 0 1 0 27.4 0 13.7 13.7 0 1 0-27.4 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconZhaoxiangji2.defaultProps = {
  size: 18,
};

IconZhaoxiangji2 = React.memo ? React.memo(IconZhaoxiangji2) : IconZhaoxiangji2;

export default IconZhaoxiangji2;
