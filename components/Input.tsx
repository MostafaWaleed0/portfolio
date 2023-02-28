import { InputType } from 'lib/types';

export default function Input({
  type,
  id,
  error,
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}: InputType) {
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
        {...(booleanError ? variableAttribute : '')}
        {...props}
      />
      {booleanError && <p id={`${id}_error`}>*{error ? error : ''}</p>}
    </>
  );
}
