import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function MultiStepFormPage() {
  return (
    <main style={{ flex: 1, height: "100vh", padding: 40 }}>
      <p style={{ fontSize: 40, paddingTop: 20, paddingBottom: 20 }}>
        Multi-Step-Form Page
      </p>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox:{" "}
        <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true}
          />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>
    </main>
  );
}
