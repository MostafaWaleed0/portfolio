import { TextAreaType } from 'lib/types';

export default function TextArea({
  id,
  label,
  error,
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}: TextAreaType) {
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
        {...(booleanError ? variableAttribute : '')}
      ></textarea>
      {booleanError && <p id={`${id}_error`}>*{error ? error : ''}</p>}
    </>
  );
}
