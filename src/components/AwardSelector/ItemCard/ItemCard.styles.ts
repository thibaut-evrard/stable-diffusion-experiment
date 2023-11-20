import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &.active {
        img {
            opacity: 1;
            box-shadow: -1px -6px 23px -11px rgba(0, 0, 0, 0.75);
            transform: scale(1);
        }

        p {
            opacity: 1;
        }
    }

    &:hover {
        img {
            opacity: 1;
        }
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;

        transform: scale(0.8);
        opacity: 0.8;
        transition: all 0.2s ease-in-out;
    }

    p {
        margin-bottom: 0;
        opacity: 0.5;

        transition: all 0.2s ease-in-out;
    }
`;
