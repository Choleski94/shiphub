import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

const ArrowBackIcon = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_225_2381"
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
    <G mask="url(#mask0_225_2381)">
      <Path
        d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default ArrowBackIcon;
