import { FieldError } from "react-hook-form";
import styles from "./FieldWrapper.module.css";

type FieldWrapperProps = {
  children: React.ReactNode;
  label: string;
  error: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, "children">;

export const FieldWrapper = ({ children, label, error }: FieldWrapperProps) => {
  return (
    <div>
      <label>
        {label}
        <div>{children}</div>
      </label>
      {error?.message && (
        <div className={styles.error_message}>{error.message}</div>
      )}
    </div>
  );
};
