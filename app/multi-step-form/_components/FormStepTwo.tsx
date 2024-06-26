import { FormEvent } from "react";
import styles from "./formContainer.module.css";
import Image from "next/image";
import IconArcade from "@assets/icons/icon-arcade.svg";
import IconAdvanced from "@assets/icons/icon-advanced.svg";
import IconPro from "@assets/icons/icon-pro.svg";

export const FormStepTwo = ({
  onClickGoBackButton,
}: {
  onClickGoBackButton: () => void;
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          marginTop: 20,
        }}
      >
        <label className={styles.card}>
          베이직
          <input
            type="radio"
            name="plan"
            value="basic"
            defaultChecked
            className={styles.hidden}
          />
          <Image
            src={IconArcade}
            alt="basic-plan-image"
            className={styles.planIcon}
          />
          <p>10,000원/(월)</p>
        </label>
        <label className={styles.card}>
          플러스
          <input
            type="radio"
            name="plan"
            value="plus"
            className={styles.hidden}
          />
          <Image
            src={IconAdvanced}
            alt="plus-plan-image"
            className={styles.planIcon}
          />
          <p>18,000원/(월)</p>
        </label>
        <label className={styles.card}>
          프로
          <input
            type="radio"
            name="plan"
            value="pro"
            className={styles.hidden}
          />
          <Image
            src={IconPro}
            alt="pro-plan-image"
            className={styles.planIcon}
          />
          <p>25,000원/(월)</p>
        </label>
      </div>
      <label className={styles.planToggleSection}>
        <span className={styles.pros}>Monthly</span>
        <input
          type="checkbox"
          name="payment-interval-monthly"
          defaultChecked
          className={styles.hidden}
        />
        <span className={styles.toggle}>
          <span className={styles.slider}></span>
        </span>
        <span className={styles.cons}>Yearly</span>
      </label>
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
    </>
  );
};
