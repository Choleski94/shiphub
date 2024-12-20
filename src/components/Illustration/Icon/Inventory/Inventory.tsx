import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

import { IIconProps } from './../Icon.controller';

const DEFAULT_SIZE = 24;

const InventoryIcon: React.FC<IIconProps> = ({
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
      id="mask0_86_366"
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
    <G mask="url(#mask0_86_366)">
      <Path
        d="M15.5 19.925L11.25 15.675L12.65 14.275L15.5 17.125L21.15 11.475L22.55 12.875L15.5 19.925ZM21 10H19V5H17V8H7V5H5V19H11V21H5C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H9.175C9.35833 2.41667 9.71667 1.9375 10.25 1.5625C10.7833 1.1875 11.3667 1 12 1C12.6667 1 13.2625 1.1875 13.7875 1.5625C14.3125 1.9375 14.6667 2.41667 14.85 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V10ZM12 5C12.2833 5 12.5208 4.90417 12.7125 4.7125C12.9042 4.52083 13 4.28333 13 4C13 3.71667 12.9042 3.47917 12.7125 3.2875C12.5208 3.09583 12.2833 3 12 3C11.7167 3 11.4792 3.09583 11.2875 3.2875C11.0958 3.47917 11 3.71667 11 4C11 4.28333 11.0958 4.52083 11.2875 4.7125C11.4792 4.90417 11.7167 5 12 5Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default InventoryIcon;
