import { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="223"
    height="223"
    viewBox="0 0 223 223"
    fill="none"
    aria-hidden
    focusable={false}
    {...props}
  >
    <rect width="223" height="223" rx="111.5" fill="#f6f6f6" />
    <path
      d="M64.6531 149V146.473L73.3006 145.912V71.959L64.6531 71.3975V68.8706H88.6863L112.102 128.617H112.214L134.226 68.8706H157.248V71.3975L148.601 71.959V145.912L157.248 146.473V149H125.578V146.473L134.226 145.912L134.338 77.2373H134.226L107.554 150.123H105.476L75.8275 74.5981H75.7152L76.5574 145.912L85.0364 146.473V149H64.6531Z"
      fill="#FC1FD7"
    />
  </svg>
);

export default Logo;
