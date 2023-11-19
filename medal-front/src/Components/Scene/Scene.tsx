import {Environment, useGLTF} from '@react-three/drei';
import {MEDAL_PATH} from '../../constants/assets';
import {Group, Mesh} from 'three';
import {FC, useEffect, useRef, useState} from 'react';
import {useMedalTexture} from '../../hooks/medal/useMedalTexture';
import {medals} from '../../content/content';
import {usePanRotate} from '../../hooks/user-interaction/usePanRotate';
import {motion} from 'framer-motion-3d';
import {rotate, rest} from './Scene.animations';
import {IScene} from './Scene.types';
import {IMedalTextures} from '../../hooks/medal/useMedalTexture.types';
import {CustomDisplacementMaterial} from '../DisplacementMaterial/DisplacementMaterial';

const Scene: FC<IScene> = ({medalIndex}) => {
    const [animation, setAnimation] = useState({});
    const [textures, setTextures] = useState<IMedalTextures | null>(null);

    const {scene} = useGLTF(MEDAL_PATH);
    const medalMesh = scene.children[0] as Mesh;
    const medalRef = useRef<Group<any>>(null);

    const loadedTextures = useMedalTexture(medals[medalIndex]);
    usePanRotate(medalRef);

    // animated transition between textures
    useEffect(() => {
        setAnimation(rotate);
        setTimeout(() => setTextures(loadedTextures), 1000);
    }, [loadedTextures]);

    if (!textures) return null;
    return (
        <>
            <Environment preset='sunset' />
            <group rotation={[1.6, 0, 0]} scale={2.5} ref={medalRef}>
                <motion.mesh
                    args={[medalMesh.geometry, undefined]}
                    animate={animation}
                    onAnimationComplete={() => setAnimation(rest)}
                >
                    <CustomDisplacementMaterial
                        roughness={0.4}
                        metalness={0.1}
                        displacementMap={textures.depth}
                        displacementScale={0.2}
                        map={textures.texture}
                    />
                </motion.mesh>
            </group>
        </>
    );
};

export default Scene;
