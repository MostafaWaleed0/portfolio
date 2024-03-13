import { SVGProps } from "react";

const List = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    aria-hidden
    focusable={false}
    className="fill-default"
    {...props}
  >
    <g>
      <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
    </g>
  </svg>
);

export default List;
