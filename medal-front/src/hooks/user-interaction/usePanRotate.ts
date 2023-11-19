import {useFrame} from '@react-three/fiber';
import {RefObject, useEffect, useRef} from 'react';
import {Group} from 'three';
import {mapLinear} from 'three/src/math/MathUtils';

export const usePanRotate = (ref: RefObject<Group<any>>) => {
    const isPan = useRef(false);
    const rotationForce = useRef(0);

    const handleOnMouseDown = (e: MouseEvent) => {
        isPan.current = true;
    };

    const handleOnMouseUp = (e: MouseEvent) => {
        isPan.current = false;
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isPan.current) return;
        const absForce = Math.abs(rotationForce.current);
        const forceScale = mapLinear(absForce, 0, 200, 1, 0);
        rotationForce.current += e.movementX * forceScale;
    };

    useFrame(() => {
        if (!ref.current) return;

        const force = -rotationForce.current / 100;
        ref.current.rotation.z = force;

        if (!isPan.current) {
            rotationForce.current *= 0.9;
        }
    });

    useEffect(() => {
        if (!window) return;

        window.onmousedown = handleOnMouseDown;
        window.onmouseup = handleOnMouseUp;
        window.onmousemove = onMouseMove;
    }, []);

    return rotationForce;
};
