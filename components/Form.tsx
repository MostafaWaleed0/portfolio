import emailjs from '@emailjs/browser'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { validate } from '../utils/validate'
import Input from './Input'
import TextArea from './TextArea'

interface IValues {
  name: string
  email: string
  job: string
  deadline: string
  details: string
}

interface IErrors extends Partial<IValues> {}

export default function Form() {
  const form = useRef<any>()

  const [values, setValues] = useState<IValues>({
    name: '',
    email: '',
    job: '',
    deadline: '',
    details: '',
  })
  const [errors, setErrors] = useState<IErrors>({})
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = validate(values)
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors)
    }
    setErrors({})
    setLoading(true)

    emailjs
      .sendForm(
        'mostafawaleed206',
        'template_83o9y8m',
        form.current,
        '0-QLZgcFoOF2mnD8g',
      )
      .then((result) => {
        console.log(result.text)
        setValues({
          name: '',
          email: '',
          job: '',
          deadline: '',
          details: '',
        })
      })

    setLoading(false)
    router.push('/contact-thank-you')
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }))
  }

  return (
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
            error={!!errors.name}
            errorMessage={errors.name ? errors.name : ''}
          />
        </div>
        <div>
          <Input
            value={values.email}
            type="email"
            id="email"
            onChange={handleChange}
            error={!!errors.email}
            errorMessage={errors.email ? errors.email : ''}
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
            error={!!errors.job}
            errorMessage={errors.job ? errors.job : ''}
          />
        </div>
        <div>
          <Input
            value={values.deadline}
            type="text"
            id="deadline"
            onChange={handleChange}
            error={!!errors.deadline}
            errorMessage={errors.deadline ? errors.deadline : ''}
          />
        </div>
      </div>
      <div>
        <TextArea
          value={values.details}
          id="details"
          label="add any details or information"
          onChange={handleChange}
          error={!!errors.details}
          errorMessage={errors.details ? errors.details : ''}
        ></TextArea>
      </div>
      <div>
        <button className="button" disabled={loading}>
          send
        </button>
      </div>
    </form>
  )
}
