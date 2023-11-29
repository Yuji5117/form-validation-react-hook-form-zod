import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";
import styles from "./InputFiled.module.css";

type InputFiledProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "checkbox";
  registration: UseFormRegisterReturn;
  placeholder?: string;
};

export const InputFiled = ({
  type = "text",
  label,
  placeholder = "入力してください...",
  registration,
  error,
}: InputFiledProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  );
};
