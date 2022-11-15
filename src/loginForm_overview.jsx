import React from "react";
import Form from "./Loginform";

function loginForm_overview() {
  return (
    <>
      <div className=" split left">
        <div class="centered">
          <h2 style={{ fontSize: "50px", margin: "-20px auto" }}>V-kart</h2>
          <p>billing app</p>
        </div>
      </div>
      <div className="split right">
        <div class="centeredright">
          <Form />
        </div>
      </div>
    </>
  );
}
export default loginForm_overview;
