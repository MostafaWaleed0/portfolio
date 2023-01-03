import Container from '../components/Container';

export default function contactThankYou() {
  return (
    <Container title="Thank you! - Mostafa Waleed">
      <article
        className="[ wrapper flow ] [ flex-row ]"
        style={{ height: '67vh' }}
      >
        <div className="[ margin-auto ] [ flow ]">
          <h1>Thank you!</h1>
          <p className="measure-long">
            Thank you! I've got your details and will be in touch as soon 😊
          </p>
        </div>
      </article>
    </Container>
  );
}
