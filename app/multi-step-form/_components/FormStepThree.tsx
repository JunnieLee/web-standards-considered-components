import { FormEvent } from "react";
import styles from "./formContainer.module.css";
import Image from "next/image";
import IconArcade from "@assets/icons/icon-arcade.svg";
import IconAdvanced from "@assets/icons/icon-advanced.svg";
import IconPro from "@assets/icons/icon-pro.svg";

export const FormStepThree = ({
  id,
  step,
  handleOnSubmit,
  onClickGoBackButton,
}: {
  id: string;
  step: number;
  handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClickGoBackButton: () => void;
}) => {
  return (
    <section
      className={styles.stepSection}
      aria-labelledby={id + "-title" + 3}
      aria-describedby={id + "-description" + 3}
      aria-current={step === 3 ? "step" : "false"}
    >
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <h3 id={id + "-title" + 3} className={styles.headerText}>
          추가옵션 선택
        </h3>
        <p id={id + "-description" + 3} className={styles.descriptionText}>
          추가옵션 선택을 통해 보다 편리하게 서비스를 이용하실 수 있습니다.
        </p>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            marginTop: 20,
          }}
        >
          <label className={styles.optionSection}>
            <input type="checkbox" name="add-ons" value="online-service" />
            <section className={styles.column}>
              <h4>온라인 서비스</h4>
              <p>다중 사용자 접속 허용</p>
            </section>
            <p className={styles.right}>10,000원/(월)</p>
          </label>

          <label className={styles.optionSection}>
            <input type="checkbox" name="add-ons" value="larger-storage" />
            <section className={styles.column}>
              <h4>더 넓은 저장공간</h4>
              <p>클라우드 저장용량 1TB 추가</p>
            </section>
            <p className={styles.right}>20,000원/(월)</p>
          </label>

          <label className={styles.optionSection}>
            <input
              type="checkbox"
              name="add-ons"
              value="customizable-profile"
            />
            <section className={styles.column}>
              <h4>커스터마이징 가능한 프로필</h4>
              <p>프로필 테마 커스터마이징 가능</p>
            </section>
            <p className={styles.right}>30,000원/(월)</p>
          </label>
        </section>
        <button
          type="button"
          onClick={onClickGoBackButton}
          className={styles.goBackButton}
        >
          이전 단계
        </button>
        <button type="submit" className={styles.submitButton}>
          다음 단계
        </button>
      </form>
    </section>
  );
};
