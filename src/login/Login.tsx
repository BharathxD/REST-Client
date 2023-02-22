import classes from "./Login.module.css";
import { FormEvent, useRef } from "react";
import Input from "../UI/Input";

const Login = () => {
  const loginInputRef = useRef<HTMLInputElement>(null);
  const registerInputRef = useRef<HTMLInputElement>(null);
  const submitLoginFormHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(loginInputRef.current?.value);
    console.log(registerInputRef.current?.value);
    loginInputRef.current!.value = "";
    registerInputRef.current!.value = "";
  };
  return (
    <main className={classes["login-page"]}>
      <form onSubmit={submitLoginFormHandler}>
        <div className={classes["form-validation"]}>
          <Input
            ref={loginInputRef}
            input={{ type: "text", placeholder: "Username" }}
          />
        </div>
        <div className={classes["form-validation"]}>
          <Input
            ref={registerInputRef}
            input={{ type: "password", placeholder: "Password" }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
