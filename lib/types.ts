import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
export interface PostType {
  slug: string;
  readingTime: string;
  frontmatter: {
    title: string;
    description: string;
    banner: string;
    tags: Array<string>;
    date: string;
    card: boolean;
    alt: string;
  };
  content: MDXRemoteSerializeResult;
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

export type FooterProps = {
  type?: string;
};

export type FrontendType = {
  id: number;
  icon: JSX.Element;
  title: string;
};

export type ToolsType = {
  id: number;
  icon: JSX.Element;
  functions?: string[];
  title: string;
  url: string;
};

export type PinnedReposType = {
  repos: {
    id: string;
    name: string;
    stargazers: { __typename: string; totalCount: number };
    url: string;
    __typename: string;
  }[];
};

export type GithubReposType = {
  node_id: string;
  name: string;
  html_url: string;
  homepage: string;
  description: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}[];
