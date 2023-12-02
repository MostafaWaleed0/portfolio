import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */

const computedFields: import('contentlayer/source-files').ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath
  },
  structuredData: {
    type: 'mdx',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.date,
      dateModified: doc.publishedAt,
      description: doc.description,
      tags: doc.tags,
      image: `https://mostafawaleed.me${doc.banner}`,
      url: `https://mostafawaleed.me/blog/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        name: 'Mostafa Waleed'
      }
    })
  }
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    date: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    },
    banner: {
      type: 'string',
      required: true
    }
  },
  computedFields
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});
