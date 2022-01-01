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

let IconJibenxinxi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M234.656 213.344H256A106.656 106.656 0 0 0 362.656 320h298.688A106.656 106.656 0 0 0 768 213.344h21.344a85.344 85.344 0 0 1 85.312 85.312v512A85.344 85.344 0 0 1 789.344 896H234.656a85.344 85.344 0 0 1-85.312-85.344v-512a85.344 85.344 0 0 1 85.312-85.312z m85.344 192A21.344 21.344 0 1 0 320 448h362.656a21.344 21.344 0 1 0 0-42.656H320z m0 149.312a21.344 21.344 0 0 0 0 42.688h362.656a21.344 21.344 0 0 0 0-42.688H320zM320 704a21.344 21.344 0 1 0 0 42.656h234.656a21.344 21.344 0 1 0 0-42.656H320z m42.656-554.656h298.688a64 64 0 1 1 0 128H362.656a64 64 0 0 1 0-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJibenxinxi.defaultProps = {
  size: 18,
};

IconJibenxinxi = React.memo ? React.memo(IconJibenxinxi) : IconJibenxinxi;

export default IconJibenxinxi;
