import create from "zustand"
import { nanoid } from "nanoid"

export const useStore = create(set => ({
    texture:'dirt' ,
    cubes: [
        {
            id:nanoid() ,
            pos:[1,1,1] ,
            texture:'dirtTexture'
        } ,
        {
            id:nanoid() ,
            pos:[1,3,1] ,
            texture:'logTexture'
        }
    ] ,
    addCube: (x,y,z) => {
        set(state => ({
            cubes: [...state.cubes, {
                id: nanoid() ,
                texture: 'dirtTexture' ,
                pos:[x,y,z]
            }]
        }))
    } ,
    removeCube: (x, y, z) => {
        set(state => ({
            cubes: state.cubes.filter(cube => {
                const [X, Y, Z] = cube.pos
                return X === x || Y === y || Z === z
            })
        }))
    } ,
    setTexture: () => {} ,
    saveWorld: () => {} ,
    resetWorld: () => {} ,
}))