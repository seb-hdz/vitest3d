import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Box = (props: ThreeElements["mesh"]) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const meshRef = useRef<Mesh>(null!);

  useFrame((_state, dt) => (meshRef.current.rotation.x += dt));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive((p) => !p)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
