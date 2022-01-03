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

let IconWDanwei209: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M433.152 146.176L154.88 275.712a37.222 37.222 0 0 0-21.504 33.792V881.28h352.896V179.968c0-27.264-28.416-45.312-53.12-33.792z m-31.104 437.376H217.472v-62.464h184.704v62.464z m0-127.488H217.472V393.6h184.704v62.464zM892.8 499.456L614.4 369.92c-24.704-11.52-52.992 6.528-52.992 33.792V881.28h352.896V533.12a37.12 37.12 0 0 0-21.504-33.664z m-62.592 155.648H645.504V592.64h184.704v62.464z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWDanwei209.defaultProps = {
  size: 18,
};

IconWDanwei209 = React.memo ? React.memo(IconWDanwei209) : IconWDanwei209;

export default IconWDanwei209;
