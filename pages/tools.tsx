import Container from '../components/Container'
import { tools } from '../data/tools'

export default function Tools() {
  return (
    <Container title="Tools - MW">
      <article className="[ wrapper-md flow ] [ margin-block-start-700 margin-block-end-800 ]">
        <div className="[ headline ] [ flow ]">
          <h1>Tools</h1>
          <p className="flow-space-600 fs-600 weight-bold">
            The tools &amp; platform I use to run my general life and digital
          </p>
        </div>
        <div>
          <ul className="collection" role="list">
            {tools.map((tool: any, index: number) => {
              return (
                <>
                  <li className="collection-item" key={index}>
                    <div className="collection-item__focusable" tabIndex={0}>
                      <div className="collection-item__icon">{tool.icon}</div>
                      <div className="collection-item__title">{tool.title}</div>
                      <div className="cluster">
                        {tool.functions?.map(
                          (_function: string, index: number) => {
                            return (
                              <>
                                <div className="pill" key={index}>
                                  {_function}
                                </div>
                              </>
                            )
                          },
                        )}
                        <a href={tool.url}>{tool.url}</a>
                      </div>
                    </div>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </article>
    </Container>
  )
}
