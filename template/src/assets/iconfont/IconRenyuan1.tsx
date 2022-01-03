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

let IconRenyuan1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M164.445 330.985c0-95.605 79.08-173.103 176.64-173.103 97.606 0 176.687 77.498 176.687 173.103s-79.128 173.102-176.687 173.102-176.64-77.498-176.64-173.102z m242.828 477.37v-11.962c0-88.25 45.987-165.795 115.34-211.503a230.959 230.959 0 0 0-100.492-23.086H274.85c-126.045 0-228.212 100.072-228.212 223.557v14.43c0 50.501 102.167 50.501 228.212 50.501h140.8a101.841 101.841 0 0 1-8.378-41.937z m313.623-532.852c-80.943 0-146.618 64.325-146.618 143.685s65.675 143.686 146.618 143.686c80.99 0 146.618-64.326 146.618-143.686s-65.582-143.685-146.618-143.685z m0 0c-80.943 0-146.618 64.325-146.618 143.685s65.675 143.686 146.618 143.686c80.99 0 146.618-64.326 146.618-143.686s-65.582-143.685-146.618-143.685z m-54.924 335.313c-104.634 0-189.44 83.084-189.44 185.577v11.962c0 41.89 84.806 41.89 189.44 41.89h122.229c104.587 0 189.347-1.535 189.347-41.89v-11.962c0-102.493-84.76-185.577-189.347-185.577H665.972z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRenyuan1.defaultProps = {
  size: 18,
};

IconRenyuan1 = React.memo ? React.memo(IconRenyuan1) : IconRenyuan1;

export default IconRenyuan1;
