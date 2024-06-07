import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { MenuDaytime } from "./MenuDaytime";
import { animated as a } from "@react-spring/web";
import { useHover } from "@use-gesture/react";

export const MenuBuilding = ({ style, setUserActivity })=>{

    const { state, setState } = useContext(AppContext);
    const [ isActive, setIsActive ] = useState(false);
    const target = useRef(null);

    useHover(
        ({ hovering })=>{
            setIsActive(hovering);
        }, 
        {
            target
        }
    );

    const activateMenu = ()=>{
        setState(prev=>prev.updateActiveMenu(MenuDaytime));
    }

    const activateMenuDepartment3D = ()=>{
        setState(state.toggleMenuDepartment3D());
    }

    const toggleDeptList = ()=>{
        setState(state.toggleDeptList())
    }

    const toggleXray = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setState(state.toggleXray());
    }

    const toggleCutter = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setState(state.toggleCutter());
    }

    useEffect(()=>{
        setUserActivity(isActive);
    }, [ isActive ])

    return(
        <MenuApartmentsContainer style={ style } ref={ target }>
            <MenuApartmentItem onClick={ (e)=>toggleXray(e) }>
                <MenuApartmentItemContainer>
                    <span className="material-symbols-outlined">
                        deployed_code
                    </span>
                    <p>xRay</p>
                </MenuApartmentItemContainer>
            </MenuApartmentItem>
            <MenuApartmentItem onClick={ (e)=>toggleCutter(e) }>
                <MenuApartmentItemContainer>
                    <span className="material-symbols-outlined">
                        Browse
                    </span>
                    <p>plano</p>
                </MenuApartmentItemContainer>
            </MenuApartmentItem>
            <MenuApartmentItem onClick={ ()=>activateMenuDepartment3D() }>
                <MenuApartmentItemContainer>
                    <span className="material-symbols-outlined">
                        villa
                    </span>
                    <p>departamentos</p>
                </MenuApartmentItemContainer>
            </MenuApartmentItem>
            <MenuApartmentItem onClick={ ()=>activateMenu() }>
                <MenuApartmentItemContainer>
                    <span className="material-symbols-outlined">
                        routine
                    </span>
                    <p>asoleamiento</p>
                </MenuApartmentItemContainer>
            </MenuApartmentItem>
            
        </MenuApartmentsContainer>
    );
}

const MenuApartmentsContainer = styled(a.ul)`
    width: 70%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    /* border: 1px solid ${ ({ theme })=>theme.color.green_100 }; */
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    ${ ({ theme })=>theme.utils.shadow }
    background: radial-gradient(circle, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 85%, rgba(255,255,255,0) 100%);

    &::after, &::before{
        display: block;
        content: "";
        width: 90%;
        height: 1px;
        background-color: ${ ({ theme })=>theme.color.green_100 };
        position: absolute;
        top: 50%;
        left: 50%;
    }

    &::after{
        transform: translate(-50%, -50%);
    }

    &::before{
        transform: translate(-50%, -50%) rotate(90deg);
    }
`;

const MenuApartmentItem = styled.li`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-radius: 100%;
    position: relative;
    font-size: 36px;
    font-family: ${ ({ theme })=>theme.font.primary };
    cursor: pointer;
    /* overflow: hidden; */

    &::after{
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        /* background-color: ${ ({ theme })=>theme.color.carbon_dull }; */
        /* background: linear-gradient(45deg, rgba(74,192,177,1) 0%, rgba(74,192,177,0) 46%);; */
        background: linear-gradient(225deg, rgba(74,192,177,0) 30%, rgba(74,192,177,0) 70%);
        opacity: 0;
        transition: background 0.2s ease-in, opacity 0.2s ease-in;
        z-index: -1;
        box-sizing: border-box;
    }

    &:hover::after{
        opacity: 0.8;
    }

    &:nth-child(1){
        border-radius: 100% 0 0 0;
        /* padding-right: 3%;
        padding-bottom: 4%; */
        justify-content: flex-end;
        align-items: flex-end;

        &::after{
            border-top: 5px solid ${({ theme })=>theme.color.green_100};
            border-left: 5px solid ${({ theme })=>theme.color.green_100};
            border-radius: 100% 0 0 0;
        }

        &:hover::after{
            background: linear-gradient(135deg, rgba(74,192,177,0.5) 30%, rgba(74,192,177,0) 70%);
            
        }

        div{
            justify-content: flex-end;
        }
    }
    &:nth-child(2){
        border-radius: 0 100% 0 0;
        /* padding-left: 3%;
        padding-bottom: 4%; */
        justify-content: flex-start;
        align-items: flex-end;

        &::after{
            border-top: 5px solid ${({ theme })=>theme.color.green_100};
            border-right: 5px solid ${({ theme })=>theme.color.green_100};
            border-radius: 0 100% 0 0;
        }

        &:hover::after{
            background: linear-gradient(225deg, rgba(74,192,177,0.5) 30%, rgba(74,192,177,0) 70%);
        }

        div{
            justify-content: flex-end;
        }
    }
    &:nth-child(3){
        border-radius: 0 0 0 100%;
        /* padding-right: 3%;
        padding-top: 4%; */
        justify-content: flex-end;
        align-items: flex-start;

        &::after{
            border-bottom: 5px solid ${({ theme })=>theme.color.green_100};
            border-left: 5px solid ${({ theme })=>theme.color.green_100};
            border-radius: 0 0 0 100%;
        }

        &:hover::after{
            background: linear-gradient(45deg, rgba(74,192,177,0.5) 30%, rgba(74,192,177,0) 70%);
        }

        div{
            justify-content: flex-end;
            flex-direction: column-reverse;
        }
    }
    &:nth-child(4){
        border-radius: 0 0 100% 0;
        /* padding-left: 3%;
        padding-top: 4%; */
        justify-content: flex-start;
        align-items: flex-start;

        &::after{
            border-bottom: 5px solid ${({ theme })=>theme.color.green_100};
            border-right: 5px solid ${({ theme })=>theme.color.green_100};
            border-radius: 0 0 100% 0;
        }

        &:hover::after{
            background: linear-gradient(315deg, rgba(74,192,177,0.5) 30%, rgba(74,192,177,0) 70%);
        }

        div{
            justify-content: flex-end;
            flex-direction: column-reverse;
        }
    }
`;

const MenuApartmentItemContainer = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: absolute;


    span{
        color: ${ ({ theme })=>theme.color.green_100 };
        font-size: 2em;
        text-shadow: 1px 1px 8px #424242 ;
        user-select: none;
    }

    p{
        font-size: 0.5em;
        font-weight: 300;
        color: ${ ({ theme })=>theme.color.carbon_dull };
        text-shadow: 1px 1px 8px #2a2a2a ;
        user-select: none;
    }
`;