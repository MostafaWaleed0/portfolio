import { readdirSync, readFileSync } from 'fs'
import { join }  from 'path'
import matter from 'gray-matter'
import Container from '../components/Container'
import { BlogPostType  } from "../types";
import Link from "next/link";
// import Image from "next/image";
import Time from '../components/Time'

interface Props {
  posts: BlogPostType;
}

export default function Blog({ posts }: Props) {
  console.log(posts);

  return (
    <Container title="Blogs - MW">
      <article className="[ wrapper ] [ margin-block-start-700 margin-block-end-800 ]">
        <h1>Blogs</h1>
        <div className="margin-block-start-700">
          <ol role="list">
            {posts.map((post, index) => {
              // console.log(post.frontmatter.card);
              return post.frontmatter.card == undefined &&
                <li className="[ card ] [ flow ]" key={index + 1}>
                  {/* <Image src={post.frontmatter.image} width={200} height={250} alt={post.frontmatter.image_alt}/> */}
                  <header className="card__head">
                    <h3 className="fs-600">{post.frontmatter.title}</h3>
                    <div className="pill">{post.frontmatter.tag === undefined ? "Programming" : post.frontmatter.tag}</div>
                  </header>
                  <Time day={post.frontmatter.date.day} month={post.frontmatter.date.month} year={post.frontmatter.date.year} separator={undefined}/>
                  <p>{post.frontmatter.description}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <a className="button">Read More</a>
                  </Link>
                </li>
            })}
          </ol>
        </div>
      </article>
    </Container>
  )
}

export async function getStaticProps() {
  const files = readdirSync(join('data/posts'))
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');
    const markdownWithMeta = readFileSync(join('data/posts', filename),'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return {slug, frontmatter};
  })
  return {
    props: {
      posts: posts,
    },
  }
}
