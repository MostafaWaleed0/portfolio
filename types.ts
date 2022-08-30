import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
export interface PostPageType {
  slug: string;
  frontmatter: {
    title: string | number;
    description: string | boolean;
    banner: string;
    tag: string | number | boolean;
    date: {
      day: number;
      month: number;
      year: number;
    };
    card: boolean;
  };
  content: any;
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
