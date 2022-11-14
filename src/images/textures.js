import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images.js";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";


const dirtTexture = new TextureLoader().load(dirtImg);
const groundTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);

dirtTexture.wrapS = RepeatWrapping;
dirtTexture.wrapT = RepeatWrapping;
dirtTexture.magFilter = NearestFilter;

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

glassTexture.wrapS = RepeatWrapping;
glassTexture.wrapT = RepeatWrapping;
glassTexture.magFilter = NearestFilter;

woodTexture.wrapS = RepeatWrapping;
woodTexture.wrapT = RepeatWrapping;
woodTexture.magFilter = NearestFilter;

logTexture.wrapS = RepeatWrapping;
logTexture.wrapT = RepeatWrapping;
logTexture.magFilter = NearestFilter;

export { dirtTexture,groundTexture,glassTexture,woodTexture,logTexture };
