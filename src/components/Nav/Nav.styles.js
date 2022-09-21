import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    @media (max-width: 1366px) {
        margin-bottom: 40px;
    }
    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const Logo = styled.p`
    font-weight: 800;
    font-size: calc(1vw + 1vh);
`;
