import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 50px;

    background: rgb(198, 198, 198);
    background: radial-gradient(
        circle,
        rgba(198, 198, 198, 1) 0%,
        rgba(255, 253, 248, 1) 61%
    );
`;

export const Title = styled.h1`
    margin: 0;
    text-align: center;
    color: #001994;
`;

export const CanvasContainer = styled.div`
    position: relative;
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: end;

    canvas: {
        height: 100%;
        width: 100%;
    }
`;

export const Headline = styled.mark`
    background-color: #c9382d;
    color: #ffffff;
    padding: 10px;
    text-transform: uppercase;

    font-weight: bold;

    position: absolute;
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;
`;
