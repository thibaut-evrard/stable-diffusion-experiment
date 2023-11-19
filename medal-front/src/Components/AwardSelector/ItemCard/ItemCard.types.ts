import {IMedalContent} from '../../../content/content';

export interface IItemCard {
    medal: IMedalContent;
    isSelect: boolean;
    onSelect: () => void;
}
