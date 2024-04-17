"use client";

import { FormEvent, useState } from "react";
import styles from "./formContainer.module.css";

export const FormStepOne = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  return (
    <>
      <div className={styles.mainContent}>
        <label>
          이름
          <input name="username" placeholder="예) 홍길동" />
        </label>
        <label>
          이메일 주소
          <input
            name="email"
            placeholder="예) test@test.com"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            required
          />
        </label>
        <label>
          전화번호
          <input
            name="phoneNumber"
            placeholder="예) 010-1234-5678"
            required
            onInvalid={() => setShowErrorMessage(true)}
          />
          <span
            aria-current={showErrorMessage ? "true" : "false"}
            className={styles.errorMessage}
          >
            * 전화번호는 필수입력 구간입니다.
          </span>
        </label>
      </div>
      <button type="submit" className={styles.submitButton}>
        다음 단계
      </button>
    </>
  );
};
