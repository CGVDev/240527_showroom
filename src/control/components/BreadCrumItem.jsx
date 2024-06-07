import styled from "styled-components";
import { BreadCrum } from "../../utils/BreadCrum";

export const BreadCrumItem = ({ label, icon, status=BreadCrum.ENABLED, ...props })=>{
    return(
        <BreadCrumItemContainer className={ BreadCrum.STATE[status] } {...props}>
            <IconItem>{ icon }</IconItem>
            <LabelItem>{ label }</LabelItem>
        </BreadCrumItemContainer>
    );
};

const BreadCrumItemContainer = styled.li`
    min-width: 170px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 10px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.gray_40};
    border-radius: 300px;
    ${({ theme }) => theme.fontStyle.breadcrumLabel};
    text-align: left;
    padding: 8px 14px 8px 8px;
    cursor: pointer;

    &.enabled{
        background-color: ${({ theme }) => theme.color.green_50};
        border: 1px solid ${({ theme }) => theme.color.green_50};;

        span:first-child{
            border: 1px solid ${({ theme }) => theme.color.white};
            color: ${({ theme }) => theme.color.white};

        }

        span:last-child{
            color: ${({ theme }) => theme.color.white};;
        }
    }

    &.selected{
        background-color: ${({ theme }) => theme.color.green_100};
        border: 1px solid ${({ theme }) => theme.color.green_100};;

        span:first-child{
            border: 1px solid ${({ theme }) => theme.color.white};
            color: ${({ theme }) => theme.color.white};

        }

        span:last-child{
            color: ${({ theme }) => theme.color.white};;
        }
    }

    &.disabled{
        background-color: ${({ theme }) => theme.color.gray_20};
        pointer-events: none;
        cursor: auto;

        span:first-child{
            border: 1px solid ${({ theme }) => theme.color.gray_40};
            color: ${({ theme }) => theme.color.carbon_50};
        }

        span:last-child{
            color: ${({ theme }) => theme.color.carbon_50};
        }
    }
`;

export const LabelItem = styled.span`
    flex-grow: 1;
    text-align: center;
    color: ${({ theme }) => theme.color.carbon_50};
    user-select: none;
`;

export const IconItem = styled.span`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    text-align: center;
    color: ${({ theme }) => theme.color.green_100};
    border: 1px solid ${({ theme }) => theme.color.green_100};
    border-radius: 300px;
    user-select: none;
`;