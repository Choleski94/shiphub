import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

import { IIconProps } from './../Icon.controller';

const DEFAULT_SIZE = 24;

const CsvIcon: React.FC<IIconProps> = ({
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
      id="mask0_316_10853"
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
    <G mask="url(#mask0_316_10853)">
      <Path
        d="M5.75 15H8.75V13.5H6.25V10.5H8.75V9H5.75C5.46667 9 5.22917 9.09583 5.0375 9.2875C4.84583 9.47917 4.75 9.71667 4.75 10V14C4.75 14.2833 4.84583 14.5208 5.0375 14.7125C5.22917 14.9042 5.46667 15 5.75 15ZM9.65 15H12.65C12.9333 15 13.1708 14.9042 13.3625 14.7125C13.5542 14.5208 13.65 14.2833 13.65 14V12.5C13.65 12.2167 13.5542 11.9542 13.3625 11.7125C13.1708 11.4708 12.9333 11.35 12.65 11.35H11.15V10.5H13.65V9H10.65C10.3667 9 10.1292 9.09583 9.9375 9.2875C9.74583 9.47917 9.65 9.71667 9.65 10V11.5C9.65 11.7833 9.74583 12.0375 9.9375 12.2625C10.1292 12.4875 10.3667 12.6 10.65 12.6H12.15V13.5H9.65V15ZM16.25 15H17.75L19.5 9H18L17 12.45L16 9H14.5L16.25 15ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V6H4V18Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default CsvIcon;
