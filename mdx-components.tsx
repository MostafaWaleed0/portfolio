import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href ?? '';
  if (href.startsWith('/')) {
    return <Link href={href}>{props.children}</Link>;
  }
  if (href.startsWith('#')) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomImage = (props: any) => (
  <Image
    width={1280}
    height={720}
    {...props}
    alt={props.alt ? `Illustration of ${props.alt}` : ''}
  />
);

const CustomPre = (props: React.HTMLAttributes<HTMLPreElement>) => (
  <pre
    className={props.className}
    data-lang={props.className?.replace(/language-/i, '')}
  >
    {props.children}
  </pre>
);

const components: MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
  pre: CustomPre
};

export function useMDXComponents(): MDXComponents {
  return components;
}
