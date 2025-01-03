import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

import { IIconProps } from './../Icon.controller';

const DEFAULT_SIZE = 24;

const DeployedCodeHistoryIcon: React.FC<IIconProps> = ({
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
      id="mask0_137_3196"
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
    <G mask="url(#mask0_137_3196)">
      <Path
        d="M18.5 18.8V16H17.5V19.2L19.65 21.35L20.35 20.65L18.5 18.8ZM12 4L6.075 7.425L12 10.85L17.925 7.425L12 4ZM3 15.975V8.025C3 7.65833 3.0875 7.325 3.2625 7.025C3.4375 6.725 3.68333 6.48333 4 6.3L11 2.275C11.1667 2.19167 11.3292 2.125 11.4875 2.075C11.6458 2.025 11.8167 2 12 2C12.1833 2 12.3583 2.025 12.525 2.075C12.6917 2.125 12.85 2.19167 13 2.275L20 6.3C20.3167 6.48333 20.5625 6.725 20.7375 7.025C20.9125 7.325 21 7.65833 21 8.025V12H19V9.1L11.975 13.15L5 9.1V15.95L11 19.425V21.725L4 17.7C3.68333 17.5167 3.4375 17.275 3.2625 16.975C3.0875 16.675 3 16.3417 3 15.975ZM18 24C16.6167 24 15.4375 23.5125 14.4625 22.5375C13.4875 21.5625 13 20.3833 13 19C13 17.6167 13.4875 16.4375 14.4625 15.4625C15.4375 14.4875 16.6167 14 18 14C19.3833 14 20.5625 14.4875 21.5375 15.4625C22.5125 16.4375 23 17.6167 23 19C23 20.3833 22.5125 21.5625 21.5375 22.5375C20.5625 23.5125 19.3833 24 18 24Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default DeployedCodeHistoryIcon;
