import Container from '../components/Container';
import { tools } from '../data/tools';
import type { ToolsType } from 'lib/types';

export default function Tools() {
  return (
    <Container
      title="Tools - MW"
      description="I use a lot of tools for my work as a front-end developer such as Obsidian, Figma, and GitHub. This is a list of all the tools I use."
    >
      <article className="[ wrapper-md flow ] [ margin-block-start-700 margin-block-end-800 ]">
        <div className="[ headline ] [ flow ]">
          <h1>Tools</h1>
          <p className="flow-space-600 fs-600 weight-bold">
            The tools &amp; platform I use to run my general life and digital
          </p>
        </div>
        <div>
          <ul className="collection" role="list">
            {tools.map(({ id, icon, functions, title, url }: ToolsType) => {
              return (
                <li className="collection-item" key={id}>
                  <div className="collection-item__focusable" tabIndex={0}>
                    <div className="collection-item__icon">{icon}</div>
                    <div className="collection-item__title">{title}</div>
                    <div className="cluster">
                      {functions?.map((_function) => {
                        return (
                          <div className="pill" key={_function}>
                            {_function}
                          </div>
                        );
                      })}
                      <a href={url}>{url}</a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </Container>
  );
}
