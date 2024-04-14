"use client";

import Link from "next/link";
import React, { useId, useState } from "react";
import styles from "./formContainer.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { FormStepOne } from "./FormStepOne";
import { FormStepTwo } from "./FormStepTwo";
import { FormStepThree } from "./FormStepThree";

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

  const formDataToObject = (formData: FormData) => {
    const obj: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      if (key.endsWith("[]")) {
        const fieldName = key.slice(0, -2);
        if (obj[fieldName] === undefined) {
          obj[fieldName] = [];
        }
        obj[fieldName].push(value);
      } else {
        obj[key] = value;
      }
    }
    return obj;
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    //formDataToObject(formData)
    //console.log(Array.from(formData.entries()));
    // formData.entries() -> ex. [["username","김태희"],["email","rabolution@gmail.com"],["phoneNumber","010-4827-1733"]]
    setFormState((old) => ({
      ...old,
      ...formDataToObject(formData), // ex. {"username":"김태희","email":"rabolution@gmail.com","phoneNumber":"010-4827-1733"}
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

  const mainContent = (
    <>
      <FormStepOne id={id} step={step} handleOnSubmit={handleOnSubmit} />
      <FormStepTwo
        id={id}
        step={step}
        handleOnSubmit={handleOnSubmit}
        onClickGoBackButton={() => {
          router.push("/multi-step-form?step=1");
        }}
      />
      <FormStepThree
        id={id}
        step={step}
        handleOnSubmit={handleOnSubmit}
        onClickGoBackButton={() => {
          router.push("/multi-step-form?step=2");
        }}
      />
      {/*JSON.stringify(formState)*/}
    </>
  );

  const leftNavigation = (
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

  return (
    <main className={styles.main}>
      {leftNavigation}
      {mainContent}
    </main>
  );
};

// sr-only
// visually-hidden
// label:has(input:checked)
