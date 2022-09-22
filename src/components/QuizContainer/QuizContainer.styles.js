import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 60px 100px 60px 60px;
    z-index: 1;
    @media (max-width: 1366px) {
        padding: 40px 50px;
    }
    @media (max-width: 1024px) {
        padding: 30px;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;

export const Question = styled.h1`
    font-size: calc(1.4vw + 1.4vh);
    margin-bottom: 100px;
    cursor: context-menu;
    @media (max-width: 1366px) {
        margin-bottom: 50px;
    }
`;

export const Answers = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-row-gap: 15px;
    }
`;
