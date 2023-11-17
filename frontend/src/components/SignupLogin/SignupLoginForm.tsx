import React from "react";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

export interface SignupLoginFormModal {
  user: { username: string; password: string };
  setUser: (value: string, prop: string) => void;
  onClickHandler: (e: React.MouseEvent) => Promise<void>;
  btnName: string;
  loading: boolean;
  err?: { username: boolean; password: boolean };
}

const useStyles = makeStyles(() => ({
  form: {
    margin: "2rem auto",
    width: "270px",
    height: "70vh",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 6,
    backgroundColor: "#f4f4f4",
    padding: "1rem",
  },
  title: {
    margin: "10px 0px 20px",
  },
  row: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  control: {
    marginBottom: "0.5rem",
    flex: 1,
    minWidth: "10rem",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: "0.5rem",
    color: "#131921",
    textAlign: "left",
  },
  input: {
    font: "inherit",
    padding: "0.25rem",
    borderRadius: 4,
    border: "1px solid #ccc",
    width: "100%",
  },
  btn: {
    backgroundColor: "#cd9042 !important",
    color: "black !important",
    border: "none",
    marginTop: "10px !important",
    width: "100%",
  },
}));

export default function SignupLoginForm({
  user,
  setUser,
  onClickHandler,
  btnName,
  err,
  loading,
}: SignupLoginFormModal) {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <h2 className={classes.title}>
        {btnName.toLowerCase() === "login" ? "Login" : "Sign up"}
      </h2>
      <div className={classes.row}>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="username">
            User Name
          </label>
          <input
            type="text"
            id="username"
            className={classes.input}
            value={user.username}
            onChange={(e) => setUser(e.target.value, "username")}
          />
          {err?.username && (
            <p style={{ color: "red" }}>Please enter the username</p>
          )}
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={classes.input}
            value={user.password}
            onChange={(e) => setUser(e.target.value, "password")}
          />
          {err?.password && (
            <p style={{ color: "red" }}>Please enter the password</p>
          )}
        </div>
      </div>
      <LoadingButton
        className={classes.btn}
        onClick={onClickHandler}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        {btnName}
      </LoadingButton>
      <p style={{ paddingTop: 10 }}>
        New User? Please create an Account{" "}
        <Link to={btnName.toLowerCase() === "login" ? "/signup" : "/login"}>
          {btnName.toLowerCase() === "login" ? "Sign up" : "Login"}
        </Link>
      </p>
    </form>
  );
}
