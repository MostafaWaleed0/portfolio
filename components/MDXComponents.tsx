import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function CustomImage(props) {
  return (
    <Image
      width={400}
      height={400}
      className="object-cover"
      {...props}
      alt={props.alt.length !== 0 ? `Illustration of ${props.alt}` : props.alt}
    />
  );
}

const MDXComponents = {
  a: CustomLink,
  Image: CustomImage
};

export default MDXComponents;
