import blog from 'lib/blog';
import { PostType } from 'lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next/types';
import Container from '../components/Container';
import Time from '../components/Time';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Blog - Mostafa Waleed"
      description="My blog is a site where I share ideas, tips, and other random and interesting things about web development."
    >
      <article className="[ wrapper ] [ margin-block-start-700 margin-block-end-800 ]">
        <h1>Blog</h1>
        <div className="margin-block-start-700">
          <ol className="auto-grid" role="list" data-layout="blog">
            {posts.map(
              ({
                slug,
                frontmatter: { banner, title, date, tags, description, alt }
              }) => {
                return (
                  <li
                    className="[ card ] [ focusable ]"
                    key={slug}
                    tabIndex={0}
                  >
                    <article className="flow" style={{ maxWidth: '561px' }}>
                      <Image
                        src={banner}
                        width={561}
                        height={300}
                        alt={`Illustration of ${alt} `}
                        className="card__image"
                      />
                      <h3 className="fs-600">{title}</h3>
                      <div className="[ card__data ] [ flex-wrap ] [ gap-200 ]">
                        <Time time={date} />
                        <div className="flex-row gap-100">
                          {tags.map((tag) => (
                            <div key={tag} className="pill">
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="fs-300 line-clamp">{description}</p>
                      <Link href={`/blog/${slug}`} className="button">
                        Read More
                      </Link>
                    </article>
                  </li>
                );
              }
            )}
          </ol>
        </div>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const posts: PostType[] = await blog();

  if (!posts) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      posts: posts
    }
  };
}
