import { FormEvent, SetStateAction, useRef, useState } from "react";
import Input from "../UI/Input";
import { IRegister } from "../types/Register.types";
import classes from "./Register.module.css";

const isEmpty = (value: string) =>
  value.trim() === "" && value.trim().length === 0;

const Register = () => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    email: true,
    password: true,
    confirmPassword: true,
  });
  const [data, setData] = useState<IRegister | null>(null);
  const submitRegisterFormHandler = (e: FormEvent) => {
    e.preventDefault();
    const name = nameInputRef.current!.value;
    const email = emailInputRef.current!.value;
    const password = passwordRef.current!.value;
    const confirmPassword = confirmPasswordRef.current!.value;
    const nameIsValid = !isEmpty(name);
    const emailIsValid = !isEmpty(email);
    const passwordIsValid = !isEmpty(password);
    const confirmPasswordIsValid = !isEmpty(confirmPassword);
    const formIsValid =
      nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid;
    setFormInputIsValid({
      name: nameIsValid,
      email: emailIsValid,
      password: passwordIsValid,
      confirmPassword: confirmPasswordIsValid,
    });
    if (formIsValid) {
      console.log("VALID");
      setData({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
    }
    nameInputRef.current!.value = "";
    emailInputRef.current!.value = "";
    passwordRef.current!.value = "";
    confirmPasswordRef.current!.value = "";
  };
  return (
    <section>
      <form onSubmit={submitRegisterFormHandler}>
        <div>
          <Input
            ref={nameInputRef}
            input={{ type: "text", placeholder: "email" }}
            className={!formInputIsValid.name ? classes.invalid : ""}
          />
          {!formInputIsValid.name && (
            <div className={classes["invalid-container"]}>
              <p>Name can't be empty</p>
            </div>
          )}
        </div>
        <div>
          <Input
            ref={emailInputRef}
            input={{ type: "text", placeholder: "email" }}
            className={!formInputIsValid.email ? classes.invalid : ""}
          />
          {!formInputIsValid.email && (
            <div className={classes["invalid-container"]}>
              <p>Email can't be empty</p>
            </div>
          )}
        </div>
        <div>
          <Input
            ref={passwordRef}
            input={{ type: "password", placeholder: "Password" }}
            className={!formInputIsValid.password ? classes.invalid : ""}
          />
          {!formInputIsValid.password && (
            <div className={classes["invalid-container"]}>
              <p>Password can't be empty</p>
            </div>
          )}
        </div>
        <div>
          <Input
            ref={confirmPasswordRef}
            input={{ type: "password", placeholder: "Confirm Password" }}
            className={!formInputIsValid.confirmPassword ? classes.invalid : ""}
          />
          {!formInputIsValid.confirmPassword && (
            <div className={classes["invalid-container"]}>
              <p>Confirm Password can't be empty</p>
            </div>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
