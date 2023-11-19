import {Canvas} from '@react-three/fiber';
import {CanvasContainer, Container, Headline, Title} from './Manager.styles';
import AwardSelector from '../AwardSelector/AwardSelector';
import {useState} from 'react';
import {medals} from '../../content/content';
import Scene from '../Scene/Scene';

const Manager = () => {
    const [medalIndex, setMedalIndex] = useState<number>(0);

    return (
        <Container>
            <Title>Awards of the Tube</Title>
            <CanvasContainer>
                <Canvas>
                    <Scene medalIndex={medalIndex} />
                </Canvas>
                <Headline>{medals[medalIndex].title}</Headline>
            </CanvasContainer>
            <AwardSelector
                medalIndex={medalIndex}
                setMedalIndex={setMedalIndex}
            />
        </Container>
    );
};

export default Manager;
