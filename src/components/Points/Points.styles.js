import styled from 'styled-components';

export const Wrapper = styled.div`
    border-radius: 100vw;
    padding: 15px;
    border: 1px solid #ffffff;
    font-size: calc(0.7vw + 0.7vh);
    font-weight: 600;
    display: flex;
    gap: 10px;
    align-items: center;
    z-index: 1;
    ${({ isResults }) => isResults && `position: absolute; top: 40px;`}
    cursor: context-menu;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;
