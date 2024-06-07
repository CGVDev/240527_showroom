import { animated as a } from "@react-spring/web";
import styled from "styled-components";

export const AmenityItem = ({item, ...props})=>{
    return(
        <ListItem {...props}>
            <ItemLabel>{item.label}</ItemLabel>
        </ListItem>
    );
};

const ListItem = styled(a.li)`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    border: 1px solid ${({ theme }) => theme.color.carbon_50_a_50};
    background-color: ${({ theme }) => theme.color.carbon_50_a_50};
    margin: 5px 0;
    padding: 10px 10px;
    transform: translate(0, 0);
    transition: transform 0.25s ease-out;

    &.selected{
        border: 1px solid ${({ theme }) => theme.color.green_100};
        background-color: ${({ theme }) => theme.color.green_100_a_50};;
        transform: translate(20px, 0);

        span{
            font-weight: ${({ theme }) => theme.font.weight.bold};
        }
    }

    &.empty{
        opacity: 0;
        border: none;
        background-color: transparent;
        height: 10%;
        user-select: none;
        touch-action: none;
        pointer-events: none;
    }
`;

const ItemLabel = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.utils.fluidType(12, 17)};
    color: ${({ theme }) => theme.color.green_100};
    padding: 10px 20px;
    white-space: nowrap;
`;