import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
export interface PostPageType {
  slug: string;
  readingTime: string;
  frontmatter: {
    title: string;
    description: string;
    banner: string;
    tags?: Array<string>;
    date?: string;
    card: boolean;
  };
  content: MDXRemoteSerializeResult;
}

export interface BlogPostType {
  [key: string]: Array<PostPageType>;
}

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  [x: string]: any;
  type: string;
  id: string;
  error?: boolean;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

export interface TextAreaType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  [x: string]: any;
  id: string;
  label: string;
  error?: boolean;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

export interface TimeType {
  time: string;
}
