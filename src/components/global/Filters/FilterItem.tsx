import Button from "@/components/ui/Button";
import { jn } from "@/utils/styles.utils";
import { useRef, useState } from "react";

interface FilterItemProps {
  name: string;
  value: string;
  onRemove: () => void;
}

const FilterItem = (props: FilterItemProps) => {
  const { name, value, onRemove } = props;

  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(false);
  const showTimerRef = useRef<NodeJS.Timeout>();
  const hideTimerRef = useRef<NodeJS.Timeout>();

  const delay = 250;

  const renderPopOver = () => {
    if (!show) return null;

    return (
      <Button
        onClick={onRemove}
        onMouseEnter={() => {
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        }}
        onMouseLeave={() => {
          hideTimerRef.current = setTimeout(() => setShow(false), delay);
        }}
        className={jn(
          "absolute bg-surface-2 border-surface-3 border px-2 rounded-lg shadow-md z-[2] -top-7 right-0 animate-slide-up text-red-400"
        )}
      >
        &times;
      </Button>
    );
  };

  return (
    <div className="relative">
      {renderPopOver()}
      <Button
        key={`${name}-${value}`}
        className={jn(
          "rounded-lg px-3 border border-accent",
          toggle ? "text-typography bg-accent" : "text-accent"
        )}
        onClick={() => {
          if (showTimerRef.current) clearTimeout(showTimerRef.current);
          setShow(false);
          setToggle((p) => !p);
        }}
        onMouseEnter={() => {
          showTimerRef.current = setTimeout(() => setShow(true), delay);
        }}
        onMouseLeave={() => {
          if (showTimerRef.current) clearTimeout(showTimerRef.current);
          hideTimerRef.current = setTimeout(() => setShow(false), delay);
        }}
      >
        {name}
      </Button>
    </div>
  );
};

export default FilterItem;
