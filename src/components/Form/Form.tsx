import React from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";

import styles from "./Form.module.css";
import { Schema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  schema: Schema;
};

export const Form = <TFormValues extends FieldValues>({
  children,
  onSubmit,
  schema,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ resolver: zodResolver(schema) });
  return (
    <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
};
