import styled from "styled-components";
import { animated as a } from "@react-spring/web";
import { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";

export const DepartmentListItem = ({ style, department, onClick, onDoubleClick })=>{

    const { state } = useContext(AppContext);
    const timer = useRef(null);

    const listener = (e)=>{
        e.stopPropagation();
        if(timer.current == null){
            timer.current = setTimeout(()=>{
                onClick(department);
                timer.current = null;
            }, 200)
        }
        else{
            clearTimeout(timer.current);
            onDoubleClick(department);
            timer.current = null;
        }
    };

    return(
        <DepartmentItem style={ style } onClick={ (e)=>listener(e) } >
            <DepartmentContainer>
                <ListItemContainer>
                    <ListItemType>
                        <ListItemTitleType>{ department.type }</ListItemTitleType>
                    </ListItemType>
                    <ListItemFloor>
                        <ListItemTitleFloor>{ department.floor }</ListItemTitleFloor>
                    </ListItemFloor>
                    {
                        !state.listDeptIsCompressed
                        ? (
                            <ListItemAvaliability>
                                <ListItemContent>{ department.isSold ? "Disponible" : "Vendido" }</ListItemContent>
                            </ListItemAvaliability>
                        )
                        : null
                    }
                    
                </ListItemContainer>
            </DepartmentContainer>
        </DepartmentItem>
    );
}

const DepartmentItem = styled(a.li)`
    width: 100%;
    margin: 4px 0;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    border-top: 1px solid #fff0;
    border-bottom: 1px solid #fff0;
    border-right: 1px solid #fff0;
    border-radius: 0 16px 16px 0;
    background: linear-gradient(135deg, rgba(100%, 100%, 100%, 0.1) 40%, rgba(74, 192, 176, 0.5) 100%);
    ${ ({ theme })=>theme.styles.shadow.medium }
    overflow: hidden;
    transform: scale(1.0);
    transition: transform 0.25s ease-out;
    position: relative;

    &:hover{
        transform: scale(1.01);
        border-top: 1px solid ${ ({ theme })=>theme.color.white };
        border-right: 1px solid ${ ({ theme })=>theme.color.white };
        border-bottom: 1px solid ${ ({ theme })=>theme.color.white };
    }

    &::before{
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background-image: url("./img/bg-texture.png");
        background-size: 11px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        
    }
    
    &::after{
        display: block;
        content: "";
        width: 10px;
        height: 100%;
        background-color: ${ ({ theme })=>theme.color.green_100 };
        background-size: 11px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        
    }
`;

const DepartmentContainer = styled(a.div)`
    width: 100%;
    /* height: 100%; */
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding: 10px 10px 10px 25px;
    /* ${ ({ theme })=>theme.utils.centerAbs } */

    /* &:before{
        display: block;
        content: "";
        width: 20px;
        height: 100%;
        background-color: ${ ({ theme })=>theme.color.green_100 };
        
    } */
`;

const ListItemContainer = styled.div`
    width: 100%;
    /* height: 100%; */
    padding: 0px;
    /* background-color: #fff4; */
    border-radius: 0 12px 12px 0;
    
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
`;

const ListItemType = styled.div`
    width: 25%;
    height: 100%;
    min-width: 70px;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin-right: 5px;
    /* ${ ({ theme })=>theme.styles.shadowMedium } */
`;

const ListItemFloor = styled.div`
    width: 20%;
    height: 100%;
    min-width: 60px;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin-right: 5px;
    /* ${ ({ theme })=>theme.styles.shadowMedium } */
`;

const ListItemAvaliability = styled.div`
    width: calc(55% - 10px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ ({ theme })=>theme.color.white };
    border-radius: 0 12px 12px 0;
    padding: 10px;
    /* ${ ({ theme })=>theme.styles.shadowMedium } */
`;

const ListItemTitleType = styled.h2`
    ${({ theme })=>theme.fontStyle.h2 };
    color: ${ ({ theme })=>theme.color.white };
    font-weight: ${ ({ theme })=>theme.font.weight.black };
    user-select: none;
`;

const ListItemTitleFloor = styled.h2`
    ${({ theme })=>theme.fontStyle.h2 };
    color: ${ ({ theme })=>theme.color.white };
    font-weight: ${ ({ theme })=>theme.font.weight.regular };
    user-select: none;
`;

const ListItemContent = styled.p`
    font-family: ${ ({ theme })=>theme.font.primary };
    font-weight: ${ ({ theme })=>theme.font.weight.medium };
    font-size: ${ ({ theme })=>theme.utils.fluidType(18, 20) };
    line-height: 1;
    color: ${ ({ theme })=>theme.color.green_100 };
    margin: 0;
    user-select: none;
`;