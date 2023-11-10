import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SignupLoginForm from "../SignupLoginForm";

function SignupPage() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const signupHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setMsg(data.message);
      if (res.status === 200) {
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userCallback = (value: string, prop: string) => {
    setUser({ ...user, [prop]: value });
  };

  return (
    <>
      {msg}
      <SignupLoginForm
        setUser={userCallback}
        onClickHandler={signupHandler}
        btnName="Signup"
      />
    </>
  );
}

export default SignupPage;
