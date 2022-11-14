import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // x,y,z
    position: [0, -0.5, 0],
  }));

  groundTexture.repeat.set(1000, 1000);

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}

export default Ground;
