import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IIconProps } from './../Icon.controller';

const NotificationIcon: React.FC<IIconProps> = ({ color, ...props }) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      d="M4.19997 19V17H6.19997V10C6.19997 8.61667 6.61664 7.39167 7.44997 6.325C8.28331 5.24167 9.36664 4.53333 10.7 4.2V3.5C10.7 3.08333 10.8416 2.73333 11.125 2.45C11.425 2.15 11.7833 2 12.2 2C12.6166 2 12.9666 2.15 13.25 2.45C13.55 2.73333 13.7 3.08333 13.7 3.5V4.2C15.0333 4.53333 16.1166 5.24167 16.95 6.325C17.7833 7.39167 18.2 8.61667 18.2 10V17H20.2V19H4.19997ZM12.2 22C11.65 22 11.175 21.8083 10.775 21.425C10.3916 21.025 10.2 20.55 10.2 20H14.2C14.2 20.55 14 21.025 13.6 21.425C13.2166 21.8083 12.75 22 12.2 22ZM8.19997 17H16.2V10C16.2 8.9 15.8083 7.95833 15.025 7.175C14.2416 6.39167 13.3 6 12.2 6C11.1 6 10.1583 6.39167 9.37497 7.175C8.59164 7.95833 8.19997 8.9 8.19997 10V17Z"
      fill={color || '#606060'}
    />
  </Svg>
);

export default NotificationIcon;
