import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { useStore } from "../hooks/useStore"
function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // x,y,z
    position: [0, -0.5, 0],
  }))

  const [addCube] = useStore(state => [state.addCube])

  const handleClickGround = event => {
    event.stopPropagation()
    const [x,y,z] = Object.values(event.point).map(n => Math.ceil(n))
    addCube(x,y,z)
  }

  groundTexture.repeat.set(1000, 1000);

  return (
    <mesh 
      onClick={handleClickGround}
      ref={ref}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}

export default Ground;
