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

let IconTou1Xiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M127.996 846.165A377.173 377.173 0 0 1 346.28 503.893a309.76 309.76 0 0 0 165.717 49.238 309.76 309.76 0 0 0 165.717-49.238 377.173 377.173 0 0 1 218.283 342.272c2.73 156.16-768 158.806-768 0z m566.357-410.794a229.973 229.973 0 0 1-82.944 54.784c-30.378 13.653-66.304 19.2-99.413 19.2-33.195 0-69.12-5.462-99.499-19.2a289.963 289.963 0 0 1-82.773-54.784 227.67 227.67 0 0 1-55.296-82.091c-13.824-30.123-19.37-62.976-19.37-98.645 0-32.854 5.546-65.707 19.37-98.56 13.824-30.123 33.11-60.246 55.21-82.176 24.918-24.576 52.48-43.776 82.86-54.699C445.691 5.547 478.8 0 511.995 0c33.11 0 69.12 5.461 99.413 19.2 30.38 13.653 60.843 32.853 82.944 54.699 24.747 24.746 44.203 52.053 55.211 82.176 13.824 30.122 19.37 62.976 19.37 98.56 0 32.938-5.546 65.706-19.37 98.645-11.093 30.123-30.379 57.515-55.21 82.09z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTou1Xiang.defaultProps = {
  size: 18,
};

IconTou1Xiang = React.memo ? React.memo(IconTou1Xiang) : IconTou1Xiang;

export default IconTou1Xiang;
