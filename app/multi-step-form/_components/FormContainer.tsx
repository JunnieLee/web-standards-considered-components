"use client";

import { FormEvent, useId } from "react";
import styles from "./formContainer.module.css";

export const FormContainer = ({
  title,
  description,
  isFocused,
  handleOnSubmit,
  children,
}: {
  title: string;
  description: string;
  isFocused: boolean;
  handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) => {
  const id = useId();

  const isRequiredFilled = (): boolean => {
    let valid: boolean = true;
    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll<HTMLInputElement>("input[required]"); // 이렇게 해서 못찾는것같음.... ㅠ
    for (const input of inputs) {
      if (input.value.trim() === "") {
        valid = false;
        break;
      }
    }
    return valid;
  };

  return (
    <section
      className={styles.stepSection}
      aria-labelledby={id + "-title"}
      aria-describedby={id + "-description"}
      aria-current={isFocused ? "step" : "false"}
    >
      <form
        onSubmit={(event) => {
          if (isRequiredFilled()) handleOnSubmit(event);
        }}
      >
        <h3 id={id + "-title"} className={styles.headerText}>
          {title}
        </h3>
        <p id={id + "-description"} className={styles.descriptionText}>
          {description}
        </p>
        {children}
      </form>
    </section>
  );
};
