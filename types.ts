import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

export type PostType = {
  content: string;
  date: string;
  description: string;
  imagePath: string;
  slug: string;
  title: string;
};

export type BlogPostType = {
  [key: string]: any;
};

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  [x: string]: any;
  type: string;
  id: string;
  error?: boolean;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

export interface TextAreaType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
