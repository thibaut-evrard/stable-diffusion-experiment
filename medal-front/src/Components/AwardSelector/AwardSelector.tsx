import {FC} from 'react';
import {Container, ItemsWrapper} from './AwardSelector.styles';
import {medals} from '../../content/content';
import ItemCard from './ItemCard/ItemCard';

interface IAwardsSelector {
    medalIndex: number;
    setMedalIndex: (index: number) => void;
}

const AwardSelector: FC<IAwardsSelector> = ({medalIndex, setMedalIndex}) => {
    return (
        <Container>
            <ItemsWrapper>
                {medals.map((medal, index) => (
                    <ItemCard
                        medal={medal}
                        key={index}
                        isSelect={medalIndex === index}
                        onSelect={() => setMedalIndex(index)}
                    />
                ))}
            </ItemsWrapper>
        </Container>
    );
};

export default AwardSelector;
