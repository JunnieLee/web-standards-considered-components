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
  const handleToggle = () => {
    // (1) toggle 관련 radio input들 가지고 오기
    const monthlyPaymentRadio = document.getElementById(
      "payment-interval-monthly"
    ) as HTMLInputElement;
    const yearlyPaymentRadio = document.getElementById(
      "payment-interval-yearly"
    ) as HTMLInputElement;
    // (2) check 상태 바꾸어주기 (토글처리)
    if (monthlyPaymentRadio.checked) {
      yearlyPaymentRadio.checked = true;
    } else {
      monthlyPaymentRadio.checked = true;
    }
  };

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
            className={"accessible-hidden"}
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
            className={"accessible-hidden"}
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
            className={"accessible-hidden"}
          />
          <Image
            src={IconPro}
            alt="pro-plan-image"
            className={styles.planIcon}
          />
          <p>25,000원/(월)</p>
        </label>
      </div>
      <div className={styles.planToggleSection}>
        <label className={styles.paymentIntervalLabel}>
          Monthly
          <input
            id="payment-interval-monthly"
            type="radio"
            name="payment-interval"
            value="monthly"
            defaultChecked
            className={"accessible-hidden"}
          />
        </label>
        <button className={styles.toggle} type="button" onClick={handleToggle}>
          <span className={styles.slider}></span>
        </button>
        <label className={styles.paymentIntervalLabel}>
          Yearly
          <input
            id="payment-interval-yearly"
            type="radio"
            name="payment-interval"
            value="yearly"
            className={"accessible-hidden"}
          />
        </label>
      </div>

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
