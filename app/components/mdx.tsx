import Image from "next/image";
import Link from "next/link";

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function CustomImage(props) {
  return (
    <Image
      width={1280}
      height={720}
      {...props}
      alt={props.alt.length ? `Illustration of ${props.alt}` : props.alt}
    />
  );
}

function CustomPre(props) {
  const className = props.className;

  return (
    <pre className={className} data-lang={className.replace(/language-/i, "")}>
      {props.children}
    </pre>
  );
}

export const MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
  pre: CustomPre,
};
