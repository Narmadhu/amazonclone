import React from "react";
import { Link } from "react-router-dom";

export interface SignupLoginFormModal {
  user: { username: string; password: string };
  setUser: (value: string, prop: string) => void;
  onClickHandler: (e: React.MouseEvent) => Promise<void>;
  btnName: string;
  err?: { username: boolean; password: boolean };
}

export default function SignupLoginForm({
  user,
  setUser,
  onClickHandler,
  btnName,
  err,
}: SignupLoginFormModal) {
  console.log(err);

  return (
    <form className="form">
      <div className="row">
        <div className="control">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser(e.target.value, "username")}
          />
          {err?.username && (
            <p style={{ color: "red" }}>Please enter the username</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser(e.target.value, "password")}
          />
          {err?.password && (
            <p style={{ color: "red" }}>Please enter the password</p>
          )}
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
