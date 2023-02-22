import { FormEvent, useRef } from "react";
import Input from "../UI/Input";

const Register = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const submitRegisterFormHandler = (e: FormEvent) => {
    e.preventDefault();
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
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
          />
        </div>
        <div>
          <Input
            ref={emailInputRef}
            input={{ type: "text", placeholder: "email" }}
          />
        </div>
        <div>
          <Input
            ref={passwordRef}
            input={{ type: "password", placeholder: "Password" }}
          />
        </div>
        <div>
          <Input
            ref={confirmPasswordRef}
            input={{ type: "password", placeholder: "Confirm Password" }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
