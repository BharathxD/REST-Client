import { ForwardedRef, RefObject, forwardRef } from "react";

interface Props {
  input: {
    type: string;
    placeholder: string;
    id?: string;
  };
  ref: ForwardedRef<HTMLInputElement>;
}

const Input: React.FC<Props> = forwardRef(({ input }, ref) => {
  return <input {...input} ref={ref} />;
});

export default Input;
