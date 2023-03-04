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
      nodes: Array<{
        id: string;
        name: string;
        description: string;
        url: string;
        primaryLanguage: {
          name: string;
          color: string;
        };
        stargazers: {
          totalCount: string;
        };
        repositoryTopics: {
          nodes: Array<{
            topic: {
              name: string;
            };
          }>;
        };
      }>;
    };
  };
};
