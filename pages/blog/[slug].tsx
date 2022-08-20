import { readdirSync, readFileSync } from 'fs'
import { join }  from 'path'
import matter from 'gray-matter'
import Container from '../../components/Container'
import Time from '../../components/Time'
import hljs from 'highlight.js';
import { marked } from 'marked'

interface Props {
  slug: any;
  frontmatter:{
    card: boolean;
    title: string | number | boolean;
    tag: string | number | boolean;
    description: string | number | boolean;
    date: {
      day: number,
      month: number,
      year: number
    };
  },
  content: any;
}


export default function PostPage({
  frontmatter: { title, date: {day, month, year} },
  content,
}: Props) {

  return (
    <Container>
      <article className="[ wrapper ] [ region ] [ margin-block-start-300 ]">
        <div className="[ post ] [ flow ]">
          <header>
            <h1>{title}</h1>
              <div className="cluster" data-align="start">
                <Time day={day} month={month} year={year} separator={undefined}/>
              </div>
          </header>
          <hr />
          <div className="flow" dangerouslySetInnerHTML={{__html: marked(content)}}/>
        </div>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = readdirSync(join('data/posts'));
  const paths = files.map((filename) => ({
    params: {slug: filename.replace('.md', '')},
  }))
  return {paths, fallback: false};
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = readFileSync(join('data/posts', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {frontmatter, slug, content},
  }
}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },

  langPrefix: 'language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
