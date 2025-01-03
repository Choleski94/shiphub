import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

import { IIconProps } from './../Icon.controller';

const DEFAULT_SIZE = 24;

const DeliveryIcon: React.FC<IIconProps> = ({
  color,
  height,
  width = DEFAULT_SIZE,
  ...props
}) => (
  <Svg
    fill="none"
    width={width}
    viewBox="0 0 24 24"
    height={height || width}
    {...props}
  >
    <Mask
      id="mask0_2004_1529"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <Rect width={24} height={24} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_2004_1529)">
      <Path
        d="M11.1 19.275V12.525L5.40001 9.225V15.975L11.1 19.275ZM12.9 19.275L18.6 16V9.25L12.9 12.525V19.275ZM11.1 21.375L4.50001 17.55C4.21501 17.3853 3.99376 17.1682 3.83626 16.8985C3.67876 16.629 3.60001 16.3295 3.60001 16V8C3.60001 7.6705 3.67876 7.371 3.83626 7.1015C3.99376 6.83183 4.21501 6.61467 4.50001 6.45L11.1 2.625C11.3855 2.45833 11.6861 2.375 12.0018 2.375C12.3173 2.375 12.6167 2.45833 12.9 2.625L19.5 6.45C19.785 6.61467 20.0063 6.83183 20.1638 7.1015C20.3213 7.371 20.4 7.6705 20.4 8V16C20.4 16.3295 20.3213 16.629 20.1638 16.8985C20.0063 17.1682 19.785 17.3853 19.5 17.55L12.9 21.375C12.6145 21.5417 12.3139 21.625 11.9983 21.625C11.6828 21.625 11.3833 21.5417 11.1 21.375ZM15.8 8.75L17.875 7.575L11.975 4.2L9.97501 5.375L15.8 8.75ZM12 10.95L14.05 9.775L8.12501 6.425L6.12501 7.575L12 10.95Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default DeliveryIcon;
