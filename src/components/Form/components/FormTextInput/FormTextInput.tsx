import { FC, InputHTMLAttributes } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { ErrorMessage, Input, LabelText } from "../../styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  validation?: RegisterOptions;
  value?: string | number;
  wrapperClasses?: string;
  readOnly?: boolean;
}

const FormTextInput: FC<InputProps> = ({
  label,
  name,
  validation,
  value,
  wrapperClasses,
  readOnly,
  type,
  placeholder,
  style,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div style={style}>
      <label htmlFor={name}>
        {label && <LabelText>{label}:</LabelText>}
        <Input
          id={name}
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          title={name}
          aria-label={name}
          {...register(name, validation)}
          {...rest}
        />

        {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
      </label>
    </div>
  );
};

export { FormTextInput };
