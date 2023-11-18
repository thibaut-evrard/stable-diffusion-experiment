import {FC} from 'react';
import {IMedalContent} from '../../../content/content';
import {Container} from './ItemCard.styles';

interface IItemCard {
    medal: IMedalContent;
    isSelect: boolean;
    onSelect: () => void;
}

const ItemCard: FC<IItemCard> = ({medal, isSelect, onSelect}) => {
    return (
        <Container className={isSelect ? 'active' : ''}>
            <img src={medal.thumbnail} alt='medal' onClick={onSelect} />
            <p>{medal.title}</p>
        </Container>
    );
};

export default ItemCard;
