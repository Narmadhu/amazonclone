import React from "react";
import { Link } from "react-router-dom";

export interface SignupLoginFormModal {
  setUser: (value: string, prop: string) => void;
  onClickHandler: (e: React.MouseEvent) => Promise<void>;
  btnName: string;
}

export default function SignupLoginForm({
  setUser,
  onClickHandler,
  btnName,
}: SignupLoginFormModal) {
  return (
    <form className="form">
      <div className="row">
        <div className="control">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUser(e.target.value, "username")}
          />
        </div>
      </div>
      <div className="row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setUser(e.target.value, "password")}
          />
        </div>
      </div>
      <button className="loginbtn" onClick={onClickHandler}>
        {btnName}
      </button>
      <p>
        Do not have an acount? Please click
        <Link to={btnName.toLowerCase() === "login" ? "/signup" : "/login"}>
          {btnName.toLowerCase() === "login" ? "Sign up" : "Login"}
        </Link>
      </p>
    </form>
  );
}
