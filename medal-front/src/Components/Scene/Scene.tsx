import {Environment, OrbitControls, useGLTF} from '@react-three/drei';
import {JUMP_FENCE, MEDAL_PATH} from '../../constants/assets';
import {Mesh, TextureLoader} from 'three';
import {useLoader} from '@react-three/fiber';
import {useEffect} from 'react';

const Scene = () => {
    const [depth, texture] = useLoader(TextureLoader, [
        JUMP_FENCE.DEPTH,
        JUMP_FENCE.COLOUR,
    ]);

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
            <group rotation={[1.6, 0, 0]}>
                <mesh args={[medal.geometry, undefined]}>
                    <meshStandardMaterial
                        roughness={0.1}
                        metalnessMap={depth}
                        metalness={0.3}
                        displacementMap={depth}
                        displacementScale={0.1}
                        bumpMap={depth}
                        bumpScale={10}
                        map={texture}
                    />
                </mesh>
            </group>
        </>
    );
};

export default Scene;
