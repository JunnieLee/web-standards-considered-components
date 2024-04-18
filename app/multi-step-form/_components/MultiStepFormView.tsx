"use client";

import Link from "next/link";
import React, { useId, useState } from "react";
import styles from "./formContainer.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { FormStepOne } from "./FormStepOne";
import { FormStepTwo } from "./FormStepTwo";
import { FormStepThree } from "./FormStepThree";
import { FormStepFour } from "./FormStepFour";
import { FormNavigation } from "./FormNavigation";
import { FormContainer } from "./FormContainer";

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

const headerText = [
  {
    title: "개인 정보",
    description: "고객님의 이름, 이메일 주소, 전화번호를 입력해주세요.",
  },
  {
    title: "플랜 선택",
    description: "연 단위, 달 단위의 플랜을 선택하실 수 있습니다.",
  },
  {
    title: "추가옵션 선택",
    description:
      "추가옵션 선택을 통해 보다 편리하게 서비스를 이용하실 수 있습니다.",
  },
  {
    title: "마무리",
    description: "선택하신 사항이 맞는지 결제 전에 다시한번 확인해주세요.",
  },
];

export const MultiStepFormView = () => {
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

    setFormState((old) => ({
      ...old,
      ...formDataToObject(formData),
    }));
    if (step < 4) {
      alert(JSON.stringify(formState)); // tmp
      router.push("/multi-step-form?step=" + (step + 1));
    } else {
      // TODO :
      // 데이터 모두 수합해서 실제 서버에 submit
    }
  };

  const goBackRouter = () => {
    router.back();
  };

  return (
    <main className={styles.main}>
      <FormNavigation step={step} />
      {[1, 2, 3, 4].map((stepIdx) => (
        <FormContainer
          key={stepIdx}
          title={headerText[stepIdx - 1].title}
          description={headerText[stepIdx - 1].description}
          isFocused={step === stepIdx}
          handleOnSubmit={handleOnSubmit}
        >
          {stepIdx === 1 && <FormStepOne />}
          {stepIdx === 2 && <FormStepTwo onClickGoBackButton={goBackRouter} />}
          {stepIdx === 3 && (
            <FormStepThree onClickGoBackButton={goBackRouter} />
          )}
          {stepIdx === 4 && (
            <FormStepFour
              formState={formState}
              onClickGoBackButton={goBackRouter}
            />
          )}
        </FormContainer>
      ))}
    </main>
  );
};

// sr-only
// visually-hidden
// label:has(input:checked)
