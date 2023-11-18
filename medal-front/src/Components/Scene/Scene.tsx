import {Environment, OrbitControls, useGLTF} from '@react-three/drei';
import {MEDAL_PATH, METAL} from '../../constants/assets';
import {Mesh, TextureLoader} from 'three';
import {useLoader} from '@react-three/fiber';
import {FC, useEffect} from 'react';
import {CustomDisplacementMaterial} from '../DisplacementMaterial/DisplacementMaterial';
import {useMedalTexture} from '../../hooks/useMedalTexture';
import {medals} from '../../content/content';

interface IScene {
    medalIndex: number;
}

const Scene: FC<IScene> = ({medalIndex}) => {
    const [metal] = useLoader(TextureLoader, [METAL]);
    const {depth, texture} = useMedalTexture(medals[medalIndex]);

    useEffect(() => {
        if (depth) depth.flipY = false;
        if (texture) texture.flipY = false;
    }, [depth, texture]);

    const gltf = useGLTF(MEDAL_PATH);
    const medal = gltf.scene.children[0] as Mesh;

    if (!depth || !texture) return null;
    return (
        <>
            <Environment preset='sunset' />
            <OrbitControls />
            <group rotation={[1.6, 0, 0]} scale={3}>
                <mesh args={[medal.geometry, undefined]}>
                    <CustomDisplacementMaterial
                        roughness={0.4}
                        metalness={0.1}
                        displacementMap={depth}
                        displacementScale={0.1}
                        bumpMap={metal}
                        bumpScale={0.0}
                        map={texture}
                    />
                </mesh>
            </group>
        </>
    );
};

export default Scene;
