import { animated as a } from "@react-spring/web";
import styled from "styled-components";

export const ApartmentItem = ({item, ...props})=>{
    return(
        <ListItem {...props}>
            <ItemId>{item.uuid}</ItemId>
            <ItemFloor>{item.floor}</ItemFloor>
            <ItemArea>{ item.area } m<sup>2</sup></ItemArea>
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
    transform-origin: top center;

    &.selected{
        border: 1px solid ${({ theme }) => theme.color.green_100};
        background-color: ${({ theme }) => theme.color.green_100_a_50};;
        transform: translate(20px, 0) !important;

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

const ItemId = styled.span`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.utils.fluidType(12, 17)};
    color: ${({ theme }) => theme.color.green_100};
    padding: 10px 20px;
    border-right: 1px solid ${({ theme }) => theme.color.green_100};
    white-space: nowrap;
    user-select: none;
`;

const ItemFloor = styled.span`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.utils.fluidType(12, 17)};
    color: ${({ theme }) => theme.color.green_100};
    padding: 10px 20px;
    border-right: 1px solid ${({ theme }) => theme.color.green_100};
    user-select: none;
`;

const ItemArea = styled.span`
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.utils.fluidType(12, 17)};
    color: ${({ theme }) => theme.color.green_100};
    padding: 10px 20px;
    white-space: nowrap;
    user-select: none;

    sup{
        font-size: 14px;
        line-height: 1.5;
    }
`;