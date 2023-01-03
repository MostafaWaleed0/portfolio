import Container from '../components/Container';
import { frontend } from '../data/frontend';
import type { FrontendType } from 'lib/types';

export default function Frontend() {
  return (
    <Container
      title="Language and technologies - Mostafa Waleed"
      description="I use a lot of languages for my work as a front-end developer such as React, Next.js, and TypeScript. This is a list of development languages and technologies that I use."
    >
      <section className="[ wrapper-md flow ] [ margin-block-start-700 margin-block-end-800 ]">
        <div className="headline" data-headline-style="wide">
          <h1>Language and technologies</h1>
        </div>
        <div>
          <ul className="collection" role="list">
            {frontend.map(({ id, icon, title }: FrontendType) => {
              return (
                <li key={id} className="collection-item">
                  <div className="collection-item__focusable" tabIndex={0}>
                    <div className="collection-item__icon">{icon}</div>
                    <div className="collection-item__title">{title}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Container>
  );
}
