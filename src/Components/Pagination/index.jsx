import React from 'react';
import { Wrapper, WrapperBtn, Button } from './styles';


const Pagination = ({
    disableNext,
    disablePrev,
    from,
    onNextClick,
    onPrevClick,
    to,
    total
}) => {
    return(
        <Wrapper>
            <span>Exibindo de {from} a {to} (total: {total || "?"})</span>
            <WrapperBtn>
                <Button onClick={onPrevClick} disabled={disablePrev}>{"<"}</Button>
                <Button onClick={onNextClick} disabled={disableNext}>{">"}</Button>
            </WrapperBtn>
        </Wrapper>
    )
};

export default Pagination;