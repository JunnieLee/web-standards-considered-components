"use client";

import Link from "next/link";
import React, { useId, useState } from "react";
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

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    phoneNumber: "",
  });

  const tmpPlaceHolder = (
    <>
      {step === 1 && (
        <section
          style={{ display: "flex", flexDirection: "column", padding: 20 }}
          aria-labelledby={id + "-title"}
          aria-describedby={id + "-description"}
          aria-current={step === 1 ? "step" : "false"}
        >
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              // formData.entries()
              // [["username","김태희"],["email","rabolution@gmail.com"],["phoneNumber","010-4827-1733"]]
              setFormState((old) => ({
                ...old,
                ...Object.fromEntries(formData),
              }));
              // {"username":"김태희","email":"rabolution@gmail.com","phoneNumber":"010-4827-1733"}
              router.push("/multi-step-form?step=2");
            }}
          >
            <h3 id={id + "-title"}>개인 정보</h3>
            <p id={id + "-description"}>
              고객님의 이름, 이메일 주소, 전화번호를 입력해주세요.
            </p>
            <label>
              이름
              <input
                name="username"
                placeholder="예) 홍길동"
                defaultValue={formState.username}
              />
            </label>

            <label>
              이메일 주소
              <input
                name="email"
                placeholder="예) test@test.com"
                defaultValue={formState.email}
              />
            </label>

            <label>
              전화번호
              <input
                name="phoneNumber"
                placeholder="예) 010-1234-5678"
                defaultValue={formState.phoneNumber}
              />
            </label>
            <button type="submit">Next Step</button>
          </form>
        </section>
      )}
      {step === 2 && (
        <section
          style={{ display: "flex", flexDirection: "column", padding: 20 }}
          aria-labelledby={id + "-title"}
          aria-describedby={id + "-description"}
          aria-current={step === 2 ? "step" : "false"}
        >
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              // formData.entries()
              // [["username","김태희"],["email","rabolution@gmail.com"],["phoneNumber","010-4827-1733"]]
              Object.fromEntries(formData);
              // {"username":"김태희","email":"rabolution@gmail.com","phoneNumber":"010-4827-1733"}
              router.push("/multi-step-form?step=3");
            }}
          >
            <h3 id={id + "-title"}>플랜 선택</h3>

            <button type="submit">Next Step</button>
          </form>
        </section>
      )}
    </>
  );

  // http://localhost:3000/multi-step-form?username=%EA%B9%80%ED%83%9C%ED%9D%AC&email=rabolution-gmail.com&phoneNumber=010-4827-1733

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        width: "65vw",
        borderRadius: 11,
        padding: 15,
        marginTop: 20,
        marginBottom: 50,
        boxShadow: "2px 2px 2px 2px gray",
      }}
    >
      <nav>
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
      {tmpPlaceHolder}
      {JSON.stringify(formState)}
    </main>
  );
};

// sr-only
// visually-hidden
// label:has(input:checked)
