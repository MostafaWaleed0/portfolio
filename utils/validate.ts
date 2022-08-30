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
  if (!name || name.trim() === '') {
    errors.name = 'Name is required';
  }
  if (!email || email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
  if (!job || job.trim() === '') {
    errors.job = 'Job is required';
  }
  if (!deadline || deadline.trim() === '') {
    errors.deadline = 'Deadline is required';
  }
  if (details.length > 1000) {
    errors.details = "Your details can't be more than 1000 characters";
  }
  return errors;
};
