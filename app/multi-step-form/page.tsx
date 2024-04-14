import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { MultiStepFormView } from "./_components/MultiStepFormView";

export default function multiStepFormPage() {
  const pageTitle = (
    <header
      style={{
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: "bold",
      }}
    >
      Multi-Step-Form Page
    </header>
  );

  const guideSection = (
    <section
      style={{
        display: "flex",
        width: 550,
        flexDirection: "column",
        padding: 30,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 8,
      }}
    >
      <h2 style={{ paddingBottom: 20 }}>웹 표준을 위한 구현 고려사항</h2>
      <p>1. 라벨을 클릭하면 input이 선택되야 합니다.</p>
      <p>2. 모든 input에는 라벨이 있어야 합니다.</p>
      <p>3. 키보드 만으로 폼을 모두 제출할 수 있어야 합니다.</p>
      <p>
        4. 폼에 한 글자를 입력할 때마다 폼 전체가 리렌더링되어서는 안 됩니다.
      </p>
    </section>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: 40,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {pageTitle}
      {guideSection}
      <MultiStepFormView />
    </div>
  );
}
