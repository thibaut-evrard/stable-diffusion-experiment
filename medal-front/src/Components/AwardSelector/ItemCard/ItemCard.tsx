import {FC} from 'react';
import {Container} from './ItemCard.styles';
import {IItemCard} from './ItemCard.types';

const ItemCard: FC<IItemCard> = ({medal, isSelect, onSelect}) => {
    return (
        <Container className={isSelect ? 'active' : ''}>
            <img src={medal.thumbnail} alt='medal' onClick={onSelect} />
            <p>{medal.title}</p>
        </Container>
    );
};

export default ItemCard;
