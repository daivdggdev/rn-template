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

let IconXiangyou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M742.81 515.95c0 11.85-4.52 23.69-13.56 32.73L358.88 919.05c-18.08 18.08-47.38 18.08-65.47 0-18.08-18.08-18.08-47.38 0-65.47l337.63-337.63-337.62-337.63c-18.08-18.08-18.08-47.38 0-65.47 18.08-18.08 47.38-18.08 65.47 0l370.37 370.37c9.03 9.04 13.55 20.88 13.55 32.73z"
        fill={getIconColor(color, 0, '#888888')}
      />
    </Svg>
  );
};

IconXiangyou.defaultProps = {
  size: 18,
};

IconXiangyou = React.memo ? React.memo(IconXiangyou) : IconXiangyou;

export default IconXiangyou;
