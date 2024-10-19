import { useState } from "react";
import Button from "../../ui/Button";
import { genWord } from "@/mocks/files";
import FilterItem from "./FilterItem";
import { jn } from "@/utils/styles.utils";

export interface FiltersProps {
  className?: string;
}

const words = genWord(4).split(" ");

const Filters = (props: FiltersProps) => {
  const { className } = props;

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const renderPopOver = () => {
    if (!show) return null;
    if (!words.length) return null;

    return (
      <div className="absolute mt-[1.58rem] bg-surface border-surface-2 border rounded-lg shadow-lg z-[3]">
        {words.map((word, i) => (
          <Button
            key={i}
            className={jn(
              "text-typography hover:bg-surface-2 w-full px-2 text-left",
              i !== 0 ? "border-t border-t-surface-2" : ""
            )}
            onClick={() => {
              setSelectedWords([...selectedWords, word]);
              setShow(false);
            }}
          >
            {word}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className={jn("Filters", "flex flex-row flex-wrap gap-1", className)}>
      <Button
        className="border-surface-2 border rounded-lg px-3 text-typography bg-surface hover:bg-surface-2"
        onClick={() => setShow((p) => !p)}
      >
        filtrar...
      </Button>
      {selectedWords.map((word, i) => (
        <FilterItem
          key={i}
          name={word}
          value={word}
          onRemove={() => {
            setSelectedWords(selectedWords.filter((w) => w !== word));
          }}
        />
      ))}
      {renderPopOver()}
    </div>
  );
};

export default Filters;
