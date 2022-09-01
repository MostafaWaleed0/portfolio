import Link from 'next/link';
import { ClassAttributes, AnchorHTMLAttributes } from 'react';

const CustomLink = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLAnchorElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink
};

export default MDXComponents;
