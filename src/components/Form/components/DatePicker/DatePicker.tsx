import { CSSProperties, FC } from "react";

import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { ErrorMessage, LabelText } from "../../styles";
import { DatePicker } from "./styles";

interface Props {
  name: string;
  label?: string;
  defaultValue?: Date;
  onChange?: (date: string) => void;
  validation?: RegisterOptions;
  style: CSSProperties;
}

const CustomDatePicker: FC<Props> = ({ name, label, style }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const filterPassedTime = (time: string) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div style={style}>
      <label htmlFor={name}>
        {!!label && <LabelText>{label}</LabelText>}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              showTimeSelect
              placeholderText="Click to select a start date"
              selected={field.value}
              onChange={field.onChange}
              filterTime={filterPassedTime}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          )}
        />
      </label>
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </div>
  );
};

export { CustomDatePicker };
