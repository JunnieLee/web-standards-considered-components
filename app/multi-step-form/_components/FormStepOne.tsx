import { FormEvent } from "react";
import styles from "./formContainer.module.css";

export const FormStepOne = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <label>
          이름
          <input name="username" placeholder="예) 홍길동" />
        </label>
        <label>
          이메일 주소
          <input name="email" placeholder="예) test@test.com" />
        </label>
        <label>
          전화번호
          <input name="phoneNumber" placeholder="예) 010-1234-5678" />
        </label>
      </div>
      <button type="submit" className={styles.submitButton}>
        다음 단계
      </button>
    </>
  );
};
