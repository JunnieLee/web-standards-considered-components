import styles from "./formContainer.module.css";
import Link from "next/link";

export const FormNavigation = ({ step }: { step: number }) => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link
            href="/multi-step-form?step=1"
            aria-current={step === 1 ? "page" : undefined}
          >
            1단계 : 개인정보
          </Link>
        </li>
        <li>
          <Link
            href="/multi-step-form?step=2"
            aria-current={step === 2 ? "page" : undefined}
          >
            2단계 : 플랜 선택
          </Link>
        </li>
        <li>
          <Link
            href="/multi-step-form?step=3"
            aria-current={step === 3 ? "page" : undefined}
          >
            3단계 : 추가 옵션 선택
          </Link>
        </li>
        <li>
          <Link
            href="/multi-step-form?step=4"
            aria-current={step === 4 ? "page" : undefined}
          >
            4단계 : 요약
          </Link>
        </li>
      </ul>
    </nav>
  );
};
