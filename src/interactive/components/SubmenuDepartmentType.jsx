import styled from "styled-components";
import { ListContainer } from "../containers/ListContainer";
import { animated as a, useTransition } from "@react-spring/web";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export const SubmenuDepartmentType = ()=>{

    const { state, setState } = useContext(AppContext);

    const transitions = useTransition(state.types, {
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        leave: {
            opacity: 0
        },
        config: {
            duration: 250
        }

    });

    const setType = (type)=>{
        setState( prev=>prev.setFilterType(type) );
    }

    useEffect(()=>{

        let request = async()=>{
            let data = await state.api.apartmentType();
            setState(prev=>prev.setType(data));
        }

        request();

    }, []);

    return(
        <ListContainer $justify="center" $align="flex-start" $wrap="wrap" $direction="row">
            {
                transitions((style, item)=>{
                    return(
                        <DepartmentTypeItem  style={ style } onClick={ ()=>setType(item) }>
                            <DepartmentTypeWrapper>
                                <DepartmentTypeLabel>
                                    { item }
                                </DepartmentTypeLabel>
                            </DepartmentTypeWrapper>
                        </DepartmentTypeItem>
                    );
                })
            }
            
            
        </ListContainer>
    );
};

const DepartmentTypeItem = styled(a.li)`
    width: calc(50% - 10px);
    max-width: 350px;
    padding: 10px;
    margin: 5px;
    border: 1px solid ${ ({ theme })=>theme.color.white };
    border-radius: 10px;
    background-color: #fff4;
    cursor: pointer;
    transform: scale(1.0);
    transition: transform 0.35s ease-out; 

    &:hover{
        transform: scale(1.05);
    }
`;

const DepartmentTypeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    background-color: ${ ({ theme })=>theme.color.carbon_50 };
    border-radius: 8px;
    ${ ({ theme })=>theme.styles.shadow.medium }
`;

const DepartmentTypeLabel = styled.span`
    color: ${ ({ theme })=>theme.color.white };
    font-family: ${ ({ theme })=>theme.font.primary };
    font-size: ${ ({ theme })=>theme.utils.fluidType(14, 16) };
    font-weight: ${ ({ theme })=>theme.font.weight.medium };
    user-select: none;
`;