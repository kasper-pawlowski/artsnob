import React from 'react';
import { Check, Checkbox, Wrapper, X } from './Answer.styles';

const Answer = ({ data, selectedId, setSelectedId, isSelected, setIsSelected, setPoints }) => {
    const { title, is_correct, id } = data;

    const handleClick = () => {
        setSelectedId(id);
        setIsSelected(true);
        if (is_correct) {
            setPoints((points) => points + 25);
        }
    };

    const showCheckStatus = () => {
        if (isSelected) {
            if (selectedId === id) {
                if (is_correct) {
                    return <Check />;
                } else if (!is_correct) {
                    return <X />;
                }
            } else {
                if (is_correct) {
                    return <Check />;
                }
            }
        }
    };

    return (
        <Wrapper onClick={handleClick} is_correct={is_correct} selectedId={selectedId} id={id} isSelected={isSelected} disabled={isSelected}>
            <Checkbox is_correct={is_correct} selectedId={selectedId} id={id} isSelected={isSelected}>
                {isSelected && showCheckStatus()}
            </Checkbox>
            <p>{title}</p>
        </Wrapper>
    );
};

export default Answer;
