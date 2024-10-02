import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Button from "./components/ui/Button";

import { FiFastForward, FiPlay, FiRewind } from "react-icons/fi";

const App = () => {
  return (
    <div className="bg-surface-2 flex flex-col h-screen justify-between">
      <div>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </div>
      <div className="flex bg-gradient-to-t from-surface-2 to-background rounded-t-xl p-4 gap-4 justify-center border-t-black/10 border-t">
        <Button>
          <FiRewind />
        </Button>
        <Button>
          <FiPlay />
        </Button>
        <Button>
          <FiFastForward />
        </Button>
      </div>
    </div>
  );
};

export default App;
