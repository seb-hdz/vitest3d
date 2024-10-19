import { useState } from "react";
import Button from "../ui/Button";
import { jn } from "@/utils/styles.utils";

export interface AlphabeticScrollProps {
  className?: string;
}

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
// HTML Mouse Events button value for left mouse button is 1
const LEFT_MOUSE_BUTTON = 1;

const AlphabeticScroll = (props: AlphabeticScrollProps) => {
  const { className } = props;
  const [selected, setSelected] = useState<string>();

  const selectLetter = (letter: string) => {
    if (letter !== selected) setSelected(letter);
  };

  return (
    <div
      className={jn(
        "AlphabeticScroll",
        "flex flex-col justify-center",
        className
      )}
    >
      {alphabet.map((letter) => (
        <Button
          key={letter}
          className={jn(
            "hover:text-typography text-center w-full",
            letter === selected ? "text-typography" : "text-typography/30"
          )}
          onMouseDown={() => selectLetter(letter)}
          onMouseEnter={(e) => {
            if (e.buttons === LEFT_MOUSE_BUTTON) selectLetter(letter);
          }}
          onWheel={(e) => {
            if (!selected) return;
            if (e.deltaY < 0) {
              const prev = alphabet.indexOf(selected) - 1;
              if (prev >= 0) selectLetter(alphabet[prev]);
            } else {
              const next = alphabet.indexOf(selected) + 1;
              if (next < alphabet.length) selectLetter(alphabet[next]);
            }
          }}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default AlphabeticScroll;
