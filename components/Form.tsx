'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { validate } from '../utils/validate';
import Input from './Input';
import TextArea from './TextArea';

interface IValues {
  name: string;
  email: string;
  job: string;
  deadline: string;
  details: string;
}

interface IErrors extends Partial<IValues> {}

export default function Form() {
  const form = useRef<any>();
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState<IValues>({
    name: '',
    email: '',
    job: '',
    deadline: '',
    details: ''
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setValues({
          name: '',
          email: '',
          job: '',
          deadline: '',
          details: ''
        });
      });

    setLoading(false);
    setSuccess(true);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {success ? (
        <div className="flex-row">
          <div className="[ margin-auto ] [ flow ]">
            <h1>Thank you!</h1>
            <p>
              Thank you! I've got your details and will be in touch as soon 😊
            </p>
          </div>
        </div>
      ) : (
        <form
          className="flow"
          method="POST"
          name="Enquiry"
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="grid-template" data-col="50-50">
            <div>
              <Input
                value={values.name}
                type="text"
                id="name"
                onChange={handleChange}
                error={errors?.name}
              />
            </div>
            <div>
              <Input
                value={values.email}
                type="email"
                id="email"
                onChange={handleChange}
                error={errors?.email}
              />
            </div>
          </div>
          <div className="grid-template" data-col="50-50">
            <div>
              <Input
                value={values.job}
                type="text"
                id="job"
                onChange={handleChange}
                error={errors?.job}
              />
            </div>
            <div>
              <Input
                value={values.deadline}
                type="text"
                id="deadline"
                onChange={handleChange}
                error={errors?.deadline}
              />
            </div>
          </div>
          <div>
            <TextArea
              value={values.details}
              id="details"
              label="add any details or information"
              onChange={handleChange}
              error={errors?.details}
            ></TextArea>
          </div>
          <div>
            <button className="button" disabled={loading}>
              send
            </button>
          </div>
        </form>
      )}
    </>
  );
}
