import {IMedalContent} from '../../content/content';
import {Texture, TextureLoader} from 'three';
import {useEffect, useState} from 'react';
import {IMedalTextures} from './useMedalTexture.types';

export const useMedalTexture = (medal: IMedalContent) => {
    const [textures, setTextures] = useState<IMedalTextures | null>(null);

    const loadTexture = async (url: string): Promise<Texture> => {
        return new Promise((resolve) => {
            const loader = new TextureLoader();
            loader.load(url, (texture) => {
                texture.flipY = false;
                resolve(texture as Texture);
            });
        });
    };

    const loadTextures = async (urls: string[]) => {
        const [depth, texture] = await Promise.all(
            urls.map((url) => loadTexture(url))
        );
        setTextures({depth, texture});
    };

    useEffect(() => {
        loadTextures([medal.depthmap, medal.texture]);
    }, [medal]);

    return textures;
};
