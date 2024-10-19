import { Canvas } from "@react-three/fiber";
import Box from "@/components/3d/Box";

const Demo = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default Demo;
