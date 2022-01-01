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

let IconGuanbi2Fill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.991 64 64 264.96 64 512s200.96 448 448 448c247.009 0 448-200.96 448-448S759.04 64 512 64z m182.752 585.984c12.48 12.544 12.448 32.768-0.063 45.248a31.937 31.937 0 0 1-22.592 9.344c-8.224 0-16.416-3.136-22.657-9.408l-137.6-138.016-138.048 136.577c-6.239 6.144-14.368 9.247-22.496 9.247a31.886 31.886 0 0 1-22.752-9.504c-12.416-12.576-12.32-32.8 0.257-45.248L466.688 511.84 329.311 374.016c-12.48-12.513-12.447-32.768 0.064-45.248 12.513-12.513 32.735-12.448 45.248 0.063l137.568 137.985L650.239 330.24c12.543-12.447 32.831-12.32 45.248 0.257 12.447 12.576 12.32 32.831-0.257 45.248L557.344 512.127l137.408 137.857z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGuanbi2Fill.defaultProps = {
  size: 18,
};

IconGuanbi2Fill = React.memo ? React.memo(IconGuanbi2Fill) : IconGuanbi2Fill;

export default IconGuanbi2Fill;
