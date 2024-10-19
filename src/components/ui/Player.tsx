import { FiFastForward, FiPlay, FiRewind } from "react-icons/fi";
import Button from "@/components/ui/Button";

const Player = () => {
  return (
    <div className="flex bg-gradient-to-t from-surface-2 to-background rounded-t-2xl p-4 gap-4 justify-center border-t-black/10 border-t items-center">
      <Button className="py-3.5">
        <FiRewind />
      </Button>
      <Button className="py-3.5">
        <FiPlay />
      </Button>
      <Button className="py-3.5">
        <FiFastForward />
      </Button>
    </div>
  );
};

export default Player;
