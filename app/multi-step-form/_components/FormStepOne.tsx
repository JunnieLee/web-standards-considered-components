import { FormEvent } from "react";
import styles from "./formContainer.module.css";

export const FormStepOne = ({
  id,
  step,
  handleOnSubmit,
}: {
  id: string;
  step: number;
  handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <section
      className={styles.stepSection}
      aria-labelledby={id + "-title" + 1}
      aria-describedby={id + "-description" + 1}
      aria-current={step === 1 ? "step" : "false"}
    >
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <h3 id={id + "-title" + 1} className={styles.headerText}>
          개인 정보
        </h3>
        <p id={id + "-description" + 1} className={styles.descriptionText}>
          고객님의 이름, 이메일 주소, 전화번호를 입력해주세요.
        </p>
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
      </form>
    </section>
  );
};
