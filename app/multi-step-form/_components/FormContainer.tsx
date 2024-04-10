"use client";

import Link from "next/link";
import React, { useId, useState } from "react";
import styles from "./formContainer.module.css";
import Image from "next/image";
import SideBarBackgroundDesktop from "@assets/images/bg-sidebar-desktop.svg";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * 주문이나, 온보딩을 하는 폼
 * 정보가 유지되어야 한다? -> 잘못 입력해서 뒤로 돌아가고 싶을 수 있음
 * 이전으로 돌아가는 건 된다
 * 건너뛰는 건 안 되고
 */

/**
 * 총 스텝 중에 현재 어떤 스텝에 있는지 알 수 있다 (-> link 가 4개 있지만~ aria-current="step", 마지막은 disabled되어 있어야)
 * 현재 스텝의 제목과 설명을 볼 수 있다 (-> role heading + p)
 * 이름, 이메일, 전화번호를 입력하고, 다음 단계로 넘어갈 수 있다 (label + input)
 *
 * semantic은? 기계를 위한 것이다
 */

export const FormContainer = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get("step") ?? "1");
  const id = useId();

  const [formState, setFormState] = useState({});

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // formData.entries() -> ex. [["username","김태희"],["email","rabolution@gmail.com"],["phoneNumber","010-4827-1733"]]
    setFormState((old) => ({
      ...old,
      ...Object.fromEntries(formData), // ex. {"username":"김태희","email":"rabolution@gmail.com","phoneNumber":"010-4827-1733"}
    }));
    if (step < 4) {
      alert(JSON.stringify(formState)); // tmp
      router.push("/multi-step-form?step=" + (step + 1));
    } else {
      // TODO :
      // 데이터 모두 수합해서 실제 서버에 submit
      alert(JSON.stringify(formState)); // tmp
    }
  };

  const step1Content = (
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
        <section className={styles.mainContent}>
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
        </section>
        <button type="submit" className={styles.submitButton}>
          다음 단계
        </button>
      </form>
    </section>
  );

  const step2content = (
    <section
      className={styles.stepSection}
      aria-labelledby={id + "-title" + 2}
      aria-describedby={id + "-description" + 2}
      aria-current={step === 2 ? "step" : "false"}
    >
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <h3 id={id + "-title" + 2} className={styles.headerText}>
          플랜 선택
        </h3>
        <p id={id + "-description" + 2} className={styles.descriptionText}>
          연 단위, 달 단위의 플랜을 선택하실 수 있습니다.
        </p>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            marginTop: 20,
          }}
        >
          <label className={styles.card}>
            베이직
            <input type="radio" name="plan" value="basic" defaultChecked />
          </label>
          <label className={styles.card}>
            플러스
            <input type="radio" name="plan" value="plus" />
          </label>
          <label className={styles.card}>
            프로
            <input type="radio" name="plan" value="pro" />
          </label>
        </section>
        <button type="submit" className={styles.submitButton}>
          다음 단계
        </button>
      </form>
    </section>
  );

  const mainContent = (
    <>
      {step1Content}
      {step2content}
    </>
  );

  return (
    <main className={styles.main}>
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
        </ul>
      </nav>
      {mainContent}
    </main>
  );
};

// sr-only
// visually-hidden
// label:has(input:checked)
