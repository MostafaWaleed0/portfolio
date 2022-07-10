import Image from 'next/image'
import Container from '../components/Container'
import { frontend } from '../data/frontend'

export default function Frontend() {
  return (
    <Container title="Language and technologies - MW">
      <section className="[ wrapper-md flow ] [ margin-block-start-700 margin-block-end-800 ]">
        <div className="headline" data-headline-style="wide">
          <h1>Language and technologies</h1>
        </div>
        <div>
          <ul className="collection" role="list">
            {frontend.map(
              (lang: { id: number; icon: any; title: string }, index) => {
                return (
                  <li key={index} className="collection-item">
                    <div className="collection-item__focusable" tabIndex={0}>
                      <div className="collection-item__icon">
                        <Image src={lang.icon} width={28} height={28} alt="" />
                      </div>
                      <div className="collection-item__title">{lang.title}</div>
                    </div>
                  </li>
                )
              },
            )}
          </ul>
        </div>
      </section>
    </Container>
  )
}
