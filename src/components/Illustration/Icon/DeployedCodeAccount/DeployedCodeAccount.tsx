import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

import { IIconProps } from './../Icon.controller';

const DEFAULT_SIZE = 24;

const DeployedCodeAccountIcon: React.FC<IIconProps> = ({
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
    xmlns="http://www.w3.org/2000/svg"
  >
    <Mask
      id="mask0_137_19987"
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
    <G mask="url(#mask0_137_19987)">
      <Path
        d="M17 21.025C16.8667 21.025 16.7333 21.0083 16.6 20.975C16.4667 20.9417 16.3417 20.8833 16.225 20.8L13.225 19.05C12.9917 18.9167 12.8125 18.7375 12.6875 18.5125C12.5625 18.2875 12.5 18.0417 12.5 17.775V14.25C12.5 13.9833 12.5625 13.7375 12.6875 13.5125C12.8125 13.2875 12.9917 13.1083 13.225 12.975L16.225 11.225C16.3417 11.1417 16.4667 11.0833 16.6 11.05C16.7333 11.0167 16.8667 11 17 11C17.1333 11 17.2625 11.0208 17.3875 11.0625C17.5125 11.1042 17.6333 11.1583 17.75 11.225L20.75 12.975C20.9833 13.1083 21.1667 13.2875 21.3 13.5125C21.4333 13.7375 21.5 13.9833 21.5 14.25V17.775C21.5 18.0417 21.4333 18.2875 21.3 18.5125C21.1667 18.7375 20.9833 18.9167 20.75 19.05L17.75 20.8C17.6333 20.8667 17.5125 20.9208 17.3875 20.9625C17.2625 21.0042 17.1333 21.025 17 21.025ZM10 12C8.9 12 7.95833 11.6083 7.175 10.825C6.39167 10.0417 6 9.1 6 8C6 6.9 6.39167 5.95833 7.175 5.175C7.95833 4.39167 8.9 4 10 4C11.1 4 12.0417 4.39167 12.825 5.175C13.6083 5.95833 14 6.9 14 8C14 9.1 13.6083 10.0417 12.825 10.825C12.0417 11.6083 11.1 12 10 12ZM2 20V17.2C2 16.65 2.14167 16.1333 2.425 15.65C2.70833 15.1667 3.1 14.8 3.6 14.55C4.45 14.1167 5.40833 13.75 6.475 13.45C7.54167 13.15 8.71667 13 10 13H10.35C10.45 13 10.55 13.0167 10.65 13.05C10.5167 13.35 10.4042 13.6625 10.3125 13.9875C10.2208 14.3125 10.15 14.65 10.1 15H10C8.81667 15 7.75417 15.15 6.8125 15.45C5.87083 15.75 5.1 16.05 4.5 16.35C4.35 16.4333 4.22917 16.55 4.1375 16.7C4.04583 16.85 4 17.0167 4 17.2V18H10.3C10.4 18.35 10.5333 18.6958 10.7 19.0375C10.8667 19.3792 11.05 19.7 11.25 20H2ZM10 10C10.55 10 11.0208 9.80417 11.4125 9.4125C11.8042 9.02083 12 8.55 12 8C12 7.45 11.8042 6.97917 11.4125 6.5875C11.0208 6.19583 10.55 6 10 6C9.45 6 8.97917 6.19583 8.5875 6.5875C8.19583 6.97917 8 7.45 8 8C8 8.55 8.19583 9.02083 8.5875 9.4125C8.97917 9.80417 9.45 10 10 10ZM14.65 13.85L17 15.225L19.35 13.85L17 12.5L14.65 13.85ZM17.75 19.05L20 17.75V15L17.75 16.325V19.05ZM14 17.75L16.25 19.075V16.35L14 15.025V17.75Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default DeployedCodeAccountIcon;
