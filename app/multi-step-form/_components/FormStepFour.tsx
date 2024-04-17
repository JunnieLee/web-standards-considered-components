import { FormEvent } from "react";
import styles from "./formContainer.module.css";
import Link from "next/link";

export const FormStepFour = ({
  formState,
  onClickGoBackButton,
}: {
  formState: Record<string, any>;
  onClickGoBackButton: () => void;
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          marginTop: 25,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            background: "#dfeef5",
            padding: 20,
            borderRadius: 11,
            marginBottom: 25,
          }}
        >
          <li className={styles.spaceBetweenRow}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className={styles.selectedPlan}>
                {formState["plan"]} ({formState["payment-interval"]})
              </span>
              <Link
                href="/multi-step-form?step=2"
                style={{ textDecoration: "underline", color: "gray" }}
              >
                Change
              </Link>
            </div>
            <span className={styles.selectedPlan}>+ 8달러/month</span>
          </li>
          <li>
            <div
              style={{
                height: 2,
                width: "100%",
                backgroundColor: "#c6cbcf",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </li>
          {formState["add-ons"]?.map((name: string) => (
            <li className={styles.spaceBetweenRow} key={name}>
              {name}
              <span>+ 2달러/month</span>
            </li>
          ))}
        </ul>
        <section
          className={`${styles.spaceBetweenRow} ${styles.paddingHorizontal}`}
        >
          <h4>Total(per month)</h4>
          <span>+ 12달러/month</span>
        </section>
      </div>
      <button
        type="button"
        onClick={onClickGoBackButton}
        className={styles.goBackButton}
      >
        이전 단계
      </button>
      <button type="submit" className={styles.submitButton}>
        확인
      </button>
    </>
  );
};
