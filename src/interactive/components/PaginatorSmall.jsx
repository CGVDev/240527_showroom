import { useTransition, animated as a } from "@react-spring/web";
import styled from "styled-components";

export const PaginatorSmall = ({ currentPage, pageList, action, minPage=0, maxPage })=>{

    const pageTransition = useTransition(pageList, {
        key: item=>item,
        from: {
            opacity: 0,
            width: "0%"
        },
        enter: {
            opacity: 1,
            width: "33%"
        }, 
        leave: {
            opacity: 0,
            width: "0%"
        },
        config:{
            duration: 100
        }
    })

    return(
        <PaginatorContainer>
            <ButtonPage className={ "control " +  ((currentPage === minPage) ? "inactive" : "") } onClick={ ()=>{ action(currentPage - 1) } }>
                <ButtonContainer>
                    <ButtonWrapper>
                        <ButtonText>
                            {"<"}
                        </ButtonText>
                    </ButtonWrapper>
                </ButtonContainer>
            </ButtonPage>
            <ButtonPage className={ "control " + ((currentPage === (maxPage - 1)) ? "inactive" : "") } onClick={ ()=>{ action(currentPage + 1) } }>
                <ButtonContainer>
                    <ButtonWrapper>
                        <ButtonText>
                            {">"}
                        </ButtonText>
                    </ButtonWrapper>
                </ButtonContainer>
            </ButtonPage>
        </PaginatorContainer>
    );
};

const PaginatorContainer = styled.ul`
    width: 100%;
    display: flex;
    background-color: #FFF4;
    border: 1px solid ${ ({ theme })=>theme.color.white };
    border-radius: 300px;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 10px;
    list-style: none;
`;

const ButtonPage = styled(a.li)`
    width: 40%;
    margin: 0 8px;
    max-width: 80px;
    cursor: pointer;
    transform: scale(1.0);
    transition: transform 0.25s ease-in;

    &:hover{
        transform: scale(1.05);
    }

    &:first-child{
        margin: 0 8px 0 0;
        width: 50%;
        max-width: 60px;
    }
    
    &:last-child{
        margin: 0 0 0 8px;
        width: 50%;
        max-width: 60px;
    }

    &.control{
        div div{
            border: 1px solid ${ ({ theme })=>theme.color.carbon_50 };
            background-color: ${ ({ theme })=>theme.color.carbon_50 };
            ${ ({ theme })=>theme.styles.shadow.thin  }
        }
    }

    &.inactive{
        cursor: auto;
        transform: scale(1.0);

        div div{
            box-shadow: none;
            background-color: #9b9b9b44;
            border: 1px solid ${ ({ theme })=>theme.color.white };

            span{
                color: ${ ({ theme })=>theme.color.white };
            }
        }
    }

    
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: ${ ({ theme })=>theme.color.white }; */
    /* border-radius: 50%; */
    background-color: ${ ({ theme })=>theme.color.green_100 };
    border: 1px solid ${ ({ theme })=>theme.color.green_50 };
    border-radius: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${({ theme })=>theme.styles.shadow.regular}
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.span`
    color: ${ ({ theme })=>theme.color.white };
    font-family: ${ ({ theme })=>theme.font.primary };
    font-size: 24px;
    font-weight: ${ ({ theme })=>theme.font.weight.bold };
    user-select: none;
`;