import React from 'react';
import { Wrapper, Progress } from './Loading.styles';

const Loading = () => {
    return (
        <Wrapper>
            <h1>ARTSNOB</h1>
            <Progress initial={{ width: 0 }} animate={{ width: 150 }} transition={{ default: { ease: 'linear' } }} />
        </Wrapper>
    );
};

export default Loading;
