import { animated as a, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react"
import styled from "styled-components";

export const PriceCounter = ({ price })=>{

    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    // const { counter } = useSpring({
    //     counter: active ? count : 0
    // });

    const spring = useSpring({
        opacity: active ? 1 : 1
    });

    useEffect(()=>{
        setActive(true);
    }, []);

    return(
        <CounterContainer style={ spring } >
            <CounterWrapper>
                <Sign>$</Sign><Counter>{ price }</Counter>
            </CounterWrapper>
        </CounterContainer>
    )
};

const CounterContainer = styled(a.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position: relative;
`;

const CounterWrapper = styled.h2`
    ${({ theme }) => theme.fontStyle.listPrice};
    user-select: none;

`;

const Counter = styled(a.span)`
`;

const Sign = styled.span`
    font-weight: ${({ theme }) => theme.font.weight.light};
    font-size: 0.95em;
    padding-right: 5px;
`;