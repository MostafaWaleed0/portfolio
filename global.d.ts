// Declarations for modules without types
declare module 'next-themes';

declare module '*.mp3' {
  const content: string;
  export default content;
}

declare global {
  type StaticImport = {
    src: string | StaticImport | boolean;
    height: number;
    width: number;
    blurDataURL?: string;
  };
}
