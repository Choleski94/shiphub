import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarIcon = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 3H18V1H16V3H8V1H6V3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.11 21 21 20.11 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19V7Z"
      fill={color || '#606060'}
    />
  </Svg>
);

export default CalendarIcon;
