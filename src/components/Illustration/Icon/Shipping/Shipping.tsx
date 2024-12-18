import React from 'react';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

const ShippingIcon = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="mask0_86_367"
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
    <G mask="url(#mask0_86_367)">
      <Path
        d="M6 20C5.16667 20 4.45833 19.7083 3.875 19.125C3.29167 18.5417 3 17.8333 3 17H1V6C1 5.45 1.19583 4.97917 1.5875 4.5875C1.97917 4.19583 2.45 4 3 4H17V8H20L23 12V17H21C21 17.8333 20.7083 18.5417 20.125 19.125C19.5417 19.7083 18.8333 20 18 20C17.1667 20 16.4583 19.7083 15.875 19.125C15.2917 18.5417 15 17.8333 15 17H9C9 17.8333 8.70833 18.5417 8.125 19.125C7.54167 19.7083 6.83333 20 6 20ZM6 18C6.28333 18 6.52083 17.9042 6.7125 17.7125C6.90417 17.5208 7 17.2833 7 17C7 16.7167 6.90417 16.4792 6.7125 16.2875C6.52083 16.0958 6.28333 16 6 16C5.71667 16 5.47917 16.0958 5.2875 16.2875C5.09583 16.4792 5 16.7167 5 17C5 17.2833 5.09583 17.5208 5.2875 17.7125C5.47917 17.9042 5.71667 18 6 18ZM3 15H3.8C4.08333 14.7 4.40833 14.4583 4.775 14.275C5.14167 14.0917 5.55 14 6 14C6.45 14 6.85833 14.0917 7.225 14.275C7.59167 14.4583 7.91667 14.7 8.2 15H15V6H3V15ZM18 18C18.2833 18 18.5208 17.9042 18.7125 17.7125C18.9042 17.5208 19 17.2833 19 17C19 16.7167 18.9042 16.4792 18.7125 16.2875C18.5208 16.0958 18.2833 16 18 16C17.7167 16 17.4792 16.0958 17.2875 16.2875C17.0958 16.4792 17 16.7167 17 17C17 17.2833 17.0958 17.5208 17.2875 17.7125C17.4792 17.9042 17.7167 18 18 18ZM17 13H21.25L19 10H17V13Z"
        fill={color || '#606060'}
      />
    </G>
  </Svg>
);

export default ShippingIcon;
