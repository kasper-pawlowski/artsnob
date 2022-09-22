import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: auto;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    z-index: 3;

    p {
        cursor: context-menu;
        @media (max-width: 768px) {
            font-size: 12px;
        }
    }

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

export const ProgressWrapper = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 100vw;
    border: 1px solid #ffffff;
`;

export const Progress = styled.div`
    background-color: #ffffff;
    height: 100%;
    border-radius: 100vw;
    transition: width 1s linear;
`;
