import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupLoginForm from "../SignupLoginForm";
import "./Loginpage.css";
import { updateUser } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import SnackBar from "../materialui/SnackBar";

function Loginpage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState({
    username: false,
    password: false,
  });
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    severity: "error" | "info" | "success" | "warning" | undefined;
    msg: string;
  }>({
    open: false,
    severity: undefined,
    msg: "",
  });

  const loginHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(user.username.length);

    if (!user.username.length || !user.password.length) {
      setErr({
        ...err,
        username: Boolean(!user.username.length),
        password: Boolean(!user.password.length),
      });
    } else {
      try {
        const res = await fetch("http://localhost:8000/login", {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setUser({ username: "", password: "" });
        if (res.status === 200) {
          dispatch(updateUser(user.username));
          setSnackbar({ open: true, severity: "success", msg: data.message });
          setTimeout(() => {
            history.push("/");
          }, 2000);
        } else {
          setSnackbar({ open: true, severity: "error", msg: data.message });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const userCallback = (value: string, prop: string) => {
    setErr((prevErrData) => ({
      ...prevErrData,
      [prop]: Boolean(!value.length),
    }));
    setUser({ ...user, [prop]: value });
  };

  return (
    <>
      <SignupLoginForm
        user={user}
        setUser={userCallback}
        onClickHandler={loginHandler}
        btnName="Login"
        err={err}
      />
      <SnackBar
        openSnackbar={snackbar.open}
        handleClose={() => setSnackbar({ ...snackbar, open: false })}
        severity={snackbar.severity}
        message={snackbar.msg}
      />
    </>
  );
}

export default Loginpage;
