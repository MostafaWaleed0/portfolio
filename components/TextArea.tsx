import { TextAreaType } from '../types';

export default function TextArea({
  id,
  label,
  error = false,
  errorMessage = '',
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}: TextAreaType) {
  const variableAttribute = { [variablePropName]: variablePropValue };

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
        {...(error ? variableAttribute : '')}
      ></textarea>
      {error && <p id={`${id}_helper`}>*{errorMessage}</p>}
    </>
  );
}
