import {useLoader} from '@react-three/fiber';
import {IMedalContent} from '../content/content';
import {TextureLoader} from 'three';

export const useMedalTexture = (medal: IMedalContent) => {
    const [depth, texture] = useLoader(TextureLoader, [
        medal.depthmap,
        medal.texture,
    ]);

    return {depth, texture};
};
