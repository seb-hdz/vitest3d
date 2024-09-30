import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <button
      className="bg-accent rounded-full px-4 py-2 text-typography-negative font-semibold hover:bg-accent/85 active:bg-accent transition-all duration-300"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;