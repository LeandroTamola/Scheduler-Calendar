import React, { Children, createElement, FormEvent } from "react";
import { useForm, FormProvider, UseFormProps } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export interface Props extends UseFormProps {
  onSubmit?: any;
  validationSchema?: any;
}

interface ChildPropName extends React.ReactPropTypes {
  name: string;
}

type ChildProps = {
  type: string;
  props: ChildPropName;
};

const Form: React.FC<Props> = ({
  defaultValues,
  children,
  onSubmit,
  mode,
  validationSchema,
}) => {
  const methods = useForm({
    defaultValues,
    mode,
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = methods;

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    return handleSubmit(onSubmit)(event);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleFormSubmit} arial-label="form" role="form">
        {Children.map(children, (child: ChildProps) => {
          return child && child.props?.name
            ? createElement(child.type, {
                ...{
                  ...child.props,
                  key: child.props.name,
                },
              })
            : child;
        })}
      </form>
    </FormProvider>
  );
};

export { Form };
