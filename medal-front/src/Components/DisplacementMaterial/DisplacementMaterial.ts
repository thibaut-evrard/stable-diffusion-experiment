// @ts-ignore
import _extends from '@babel/runtime/helpers/esm/extends';
// @ts-check
import * as React from 'react';
import {MeshPhysicalMaterial, MeshPhysicalMaterialParameters} from 'three';
import {useFrame} from '@react-three/fiber';
import {vertexShader} from './shader/vertex';
import {fragmentShader} from './shader/fragment';

interface IUniform {
    value: any;
}

class CustomDisplacementMaterialBase extends MeshPhysicalMaterial {
    _time: IUniform = {value: 0.0};

    constructor(parameters = {}) {
        super(parameters);
        this.setValues(parameters);
        this._time = {value: 0.0};
    }

    onBeforeCompile(shader: any) {
        // SET SHADERS
        shader.fragmentShader = fragmentShader;
        shader.vertexShader = vertexShader;
    }

    get time() {
        return this._time.value;
    }

    set time(v) {
        this._time.value = v;
    }
}

const CustomDisplacementMaterial = /*#__PURE__*/ React.forwardRef<
    any,
    MeshPhysicalMaterialParameters
>(({...props}, ref) => {
    const [material] = React.useState(
        () => new CustomDisplacementMaterialBase()
    );

    useFrame(
        (state) => material && (material.time = state.clock.getElapsedTime())
    );
    return /*#__PURE__*/ React.createElement(
        'primitive',
        _extends(
            {
                object: material,
                ref: ref,
                attach: 'material',
            },
            props
        )
    );
});

CustomDisplacementMaterial.displayName = 'CustomDisplacementMaterial';

export {CustomDisplacementMaterial};
