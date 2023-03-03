import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  [x: string]: any;
  type: string;
  id: string;
  error?: string;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

export interface TextAreaType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  [x: string]: any;
  id: string;
  label: string;
  error?: string;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

export interface TimeType {
  time: string;
}

export type PinnedReposType = {
  user: {
    pinnedItems: {
      nodes: Array<{ name: string }>;
    };
  };
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
