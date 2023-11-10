import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SignupLoginForm from "../SignupLoginForm";
import "./Loginpage.css";

function Loginpage() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const loginHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setMsg(data.message);
      console.log({ data });

      if (res.status === 200) {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userCallback = (value: string, prop: string) => {
    setUser({ ...user, [prop]: value });
  };

  return (
    // <div style={{ backgroundColor: "black", height: "100vh" }}>
    // <form className="form">
    //   <div className="row">
    //     <div className="control">
    //       <label htmlFor="username">User Name</label>
    //       <input
    //         type="text"
    //         id="username"
    //         onChange={(e) => setUser({ ...user, username: e.target.value })}
    //       />
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="control">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         onChange={(e) => setUser({ ...user, password: e.target.value })}
    //       />
    //     </div>
    //   </div>
    //   {/* {isInvalid && <p>Please enter a valid email address and comment!</p>} */}
    //   <button className="loginbtn" onClick={loginHandler}>
    //     Login
    //   </button>
    //   <p>
    //     Do not have an acount? Please click <Link to="/signup">Sign up</Link>
    //   </p>
    // </form>
    // </div>
    <>
      {msg}
      <SignupLoginForm
        setUser={userCallback}
        onClickHandler={loginHandler}
        btnName="Login"
      />
    </>
  );
}

export default Loginpage;
