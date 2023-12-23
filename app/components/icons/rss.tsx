import { SVGProps } from 'react';

const Rss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1.3em"
    width="1.3em"
    aria-hidden
    focusable={false}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 11a9 9 0 0 1 9 9"></path>
    <path d="M4 4a16 16 0 0 1 16 16"></path>
    <circle cx="5" cy="19" r="1"></circle>
  </svg>
);

export default Rss;
