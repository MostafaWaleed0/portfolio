// Declarations for modules without types
declare module 'next-themes';

declare global {
  type StaticImport = {
    src: string | StaticImport | boolean;
    height: number;
    width: number;
    blurDataURL?: string;
  };
}
