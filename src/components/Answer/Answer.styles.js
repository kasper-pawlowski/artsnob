import { BsCheckLg, BsXLg } from 'react-icons/bs';
import styled from 'styled-components';

export const Wrapper = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border: 1px solid #ffffff;
    border-radius: 100vw;
    font-size: calc(0.7vw + 0.7vh);
    /* font-size: 0.8em; */
    font-weight: 600;
    background: none;
    cursor: ${({ isSelected }) => (isSelected ? 'context-menu' : 'pointer')};
    ${({ selectedId, is_correct, id, isSelected }) => {
        if (isSelected) {
            if (selectedId === id) {
                if (is_correct) {
                    return `
                        background-color: #ffffff;
                        color: #1a1a1a;
                    `;
                } else if (!is_correct) {
                    return `
                    background-color: #ffffff;
                    color: #1a1a1a;
                `;
                }
            }
        }
    }};
    @media (max-width: 1024px) {
        padding: 10px 20px;
    }
`;

export const Checkbox = styled.div`
    border: 1px solid white;
    width: 40px;
    height: 25px;
    border-radius: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ selectedId, is_correct, id, isSelected }) => {
        if (isSelected) {
            if (selectedId === id) {
                if (is_correct) {
                    return `
                        background-color: #91c915;
                        border: 1px solid #91c915;
                        color: #ffffff;
                    `;
                } else if (!is_correct) {
                    return `
                    background-color: #ff5757;
                    border: 1px solid #ff5757;
                    color: #ffffff;
                `;
                }
            } else {
                if (is_correct) {
                    return `
                        background-color: #ffffff;
                        color: #1a1a1a;
                    `;
                }
            }
        }
    }};

    @media (max-width: 1024px) {
        width: 30px;
        height: 20px;
    }
`;

export const Check = styled(BsCheckLg)`
    font-size: 14px;
    @media (max-width: 1024px) {
        font-size: 10px;
    }
`;

export const X = styled(BsXLg)`
    font-size: 14px;
    @media (max-width: 1024px) {
        font-size: 10px;
    }
`;
