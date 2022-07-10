import dynamic from 'next/dynamic'
import Container from '../components/Container'
const DynamicFrom = dynamic(() => import('../components/Form'))

export default function Contact() {
  return (
    <Container
      title="Contact - MW"
      description="If you have any questions or want to work together?"
    >
      <section className="[ wrapper ] [ margin-block-start-700 margin-block-end-800 ]">
        <div className="[ headline ] [ flow ]">
          <h1>Contact</h1>
          <p>If you have any questions or want to work together? </p>
        </div>
      </section>
      <section className="[ region ] [ bg-inverse ]">
        <div className="wrapper">
          <h1 className="visually-hidden">for contact with me</h1>
          <DynamicFrom />
        </div>
      </section>
    </Container>
  )
}
