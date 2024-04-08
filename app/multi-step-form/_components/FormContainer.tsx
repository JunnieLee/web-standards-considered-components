"use client";

import React, { useState } from "react";
import Image from "next/image";
import SideBarBackgroundDesktop from "@assets/images/bg-sidebar-desktop.svg";

const _FormContainer = () => {
  const [step, setStep] = useState<number>(1); // step 1~ step 4 까지 있음

  const tmpPlaceHolder = (
    <section style={{ display: "flex", flexDirection: "column", padding: 20 }}>
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
    </section>
  );

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
      <aside>
        <Image
          src={SideBarBackgroundDesktop}
          alt="sideBarBackground"
          style={{
            width: "100%",
            height: "auto",
            alignSelf: "center",
          }}
        />
      </aside>
      {tmpPlaceHolder}
    </main>
  );
};

export const FormContainer = React.memo(_FormContainer);
