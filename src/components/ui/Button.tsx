import { jn } from "@/utils/styles.utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const skeumorphicClassName =
  "bg-gradient-to-r from-accent to-white border-accent/30 border-t border-b rounded-full px-4 py-2 text-typography-negative font-semibold hover:bg-accent/85 active:bg-accent transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 active:scale-100";

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const { className, children, ...rest } = props;
  const isSkeumorphic = false;

  return (
    <button
      className={jn(
        "block hover:brightness-110 active:brightness-90 transition-all",
        isSkeumorphic ? skeumorphicClassName : "",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
