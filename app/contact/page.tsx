import type { Metadata } from 'next/types';
import { Form } from './form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "If you want to know more about me or my work, I'll be happy to answer questions and share what I'm up to. You can contact me directly through the contact form."
};

export default function ContactPage() {
  return (
    <>
      <section className="[ wrapper ] [ margin-block-start-700 margin-block-end-800 ]">
        <div className="[ headline ] [ flow ]" data-headline-style="wide">
          <h1>{String(metadata.title)}</h1>
          <p>{metadata.description}</p>
        </div>
      </section>
      <section className="[ region ] [ bg-inverse ]">
        <div className="wrapper">
          <h1 className="visually-hidden">for contact with me</h1>
          <Form />
        </div>
      </section>
    </>
  );
}
