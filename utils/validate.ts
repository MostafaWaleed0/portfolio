const checkInput = (validate: string) => !validate || validate.trim() === '';

const testInput = (reg: RegExp, validate: string) => !reg.test(validate);

const checkLength = (validate: string, num: number = 1000) =>
  validate.length > num;

export const validate = ({
  name,
  email,
  job,
  deadline,
  details
}: {
  name: string;
  email: string;
  job: string;
  deadline: string;
  details: string;
}) => {
  const errors: {
    name?: string;
    email?: string;
    job?: string;
    deadline?: string;
    details?: string;
  } = {};
  if (checkInput(name)) {
    errors.name = 'Name is required';
  }
  if (checkInput(email)) {
    errors.email = 'Email is required';
  } else if (testInput(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, email)) {
    errors.email = 'Invalid email address';
  }
  if (checkInput(job)) {
    errors.job = 'Job is required';
  }
  if (checkInput(deadline)) {
    errors.deadline = 'Deadline is required';
  }
  if (checkLength(details)) {
    errors.details = "Your details can't be more than 1000 characters";
  }
  return errors;
};
