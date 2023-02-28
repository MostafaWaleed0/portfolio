import From from 'components/Form';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Contact ',
  description:
    "If you want to know more about me or my work, I'll be happy to answer questions and share what I'm up to. You can contact me directly through the contact form on my website."
};

export default function Contact() {
  return (
    <>
      <section className="[ wrapper ] [ margin-block-start-700 margin-block-end-800 ]">
        <div className="[ headline ] [ flow ]">
          <h1>Contact</h1>
          <p>If you have any questions or want to work together? </p>
        </div>
      </section>
      <section className="[ region ] [ bg-inverse ]">
        <div className="wrapper">
          <h1 className="visually-hidden">for contact with me</h1>
          <From />
        </div>
      </section>
    </>
  );
}
