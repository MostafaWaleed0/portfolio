import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
export interface PostPageType {
  slug: string;
  readingTime: string;
  frontmatter: {
    title: string;
    description: string;
    banner: string;
    tag: string;
    date: {
      day: number;
      month: number;
      year: number;
    };
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
  day: string | number;
  month: number;
  separator?: string | undefined;
  year: number | string;
}
