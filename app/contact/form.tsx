"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { validate } from "./validate";

interface IValues {
  name: string;
  email: string;
  job: string;
  deadline: string;
  details: string;
}

interface IErrors extends Partial<IValues> {}

export function Form() {
  const form = useRef<any>();
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState<IValues>({
    name: "",
    email: "",
    job: "",
    deadline: "",
    details: "",
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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )
      .then(() => {
        setValues({
          name: "",
          email: "",
          job: "",
          deadline: "",
          details: "",
        });
      });

    setLoading(false);
    setSuccess(true);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
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

function Input({
  type,
  id,
  error,
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}: {
  [x: string]: any;
  type: string;
  id: string;
  error?: string;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}) {
  const variableAttribute = { [variablePropName]: variablePropValue };
  const booleanError = Boolean(error);

  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        {...props}
        type={type}
        name={id}
        id={id}
        autoComplete="off"
        spellCheck="false"
        aria-required="true"
        {...(booleanError ? variableAttribute : "")}
        {...props}
      />
      {booleanError && <p id={`${id}_error`}>*{error ? error : ""}</p>}
    </>
  );
}

function TextArea({
  id,
  label,
  error,
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}: {
  [x: string]: any;
  id: string;
  label: string;
  error?: string;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}) {
  const variableAttribute = { [variablePropName]: variablePropValue };
  const booleanError = Boolean(error);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        {...props}
        name={id}
        id={id}
        rows={10}
        spellCheck="false"
        autoComplete="off"
        {...(booleanError ? variableAttribute : "")}
      ></textarea>
      {booleanError && <p id={`${id}_error`}>*{error ? error : ""}</p>}
    </>
  );
}
