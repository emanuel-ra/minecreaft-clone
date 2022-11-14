import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon"
import { Vector3 } from "three";
import { useEffect,useRef } from "react";

import { useKeyboard } from '../hooks/useKeyboard'

export const Player = () =>{

    const {
        moveBackward , 
        moveForward ,
        moveLeft ,
        moveRight ,
        jump
    } = useKeyboard();

    const {camera} = useThree()
    const [ref,api] = useSphere( () => ({
        mass:1 ,
        type: 'Dynamic' ,
        position: [0,1,0]
    }) )

    const pos = useRef([0,0,0]);
    useEffect( () =>{
        api.position.subscribe(p => {
            pos.current = p
        }, [api.position])
    })

    const vel = useRef([0,0,0]);
    useEffect( () =>{
        api.velocity.subscribe(p => {
            vel.current = p
        }, [api.velocity])
    })

    useFrame( () => {
        camera.position.copy(
            new Vector3(
                pos.current[0],
                pos.current[1],
                pos.current[2],
            )
        )

        const direction = new Vector3();
            
        const frontVector = new Vector( 0, 0, (moveBackward) ? 1 : 0 );
        //api.velocity.set(0,0,-1);
    })    
    
    return (
        <mesh ref={ref} />
    )
}