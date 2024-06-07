import styled from "styled-components";
import { animated as a, useSpring } from "@react-spring/web";
import { SubmenuDepartmentList } from "./SubmenuDepartmentList";
import { SubmenuDepartmentType } from "./SubmenuDepartmentType";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Paginator } from "./Paginator";
import { PaginatorSmall } from "./PaginatorSmall";

export const MenuDepartments = ({style, toggle})=>{

    const { state, setState } = useContext(AppContext);
    const itemsPerPage = 10;
    const maxPages = (state.departments.length < 10) ? 1 : Math.ceil(state.departments.length/itemsPerPage);
    const _pageList = Array(maxPages).fill("").map((item, i)=>i);

    const [ page, setPage ] = useState(0);
    const [ viewPages, setViewPages ] = useState([1,2]);
    const [ listDepartments, setListDepartments ] = useState([]);

    const { maxWidth } = useSpring({
        maxWidth: state.listDeptIsCompressed ? "220px" : "600px"
    });

    const changePage = (num)=>{
        // console.log(num);
        setPage(num);
    };

    useEffect(()=>{
        let _viewPages = _pageList.slice( Math.max(Math.min(page - 1, (maxPages - 3)), 0) , Math.max(Math.min(page + 2, maxPages), 3) );
        let _departmentList = state.departments.slice((itemsPerPage * page), (itemsPerPage * (page + 1)));

        setViewPages(_viewPages);
        setListDepartments(_departmentList);

    }, [page]);

    return(
        <MenuDepartmentsContainer style={ {...style, maxWidth } }>
            <MenuDepartmentsHeader onClick={ toggle }>
                <MenuDepartmentHeaderWrapper>
                    
                    <MenuDepartmentsTitle>
                                <span className="material-symbols-outlined">
                                    holiday_village
                                </span>
                        {
                            !state.listDeptIsCompressed
                                ? (
                                        "Departamentos"
                                )
                                : null
                        }
                    </MenuDepartmentsTitle>
                    

                </MenuDepartmentHeaderWrapper>
            </MenuDepartmentsHeader>
            <MenuDepartmentsBody >
                <MenuDepartmentsBodyWrapper>

                    <DepartmentsNav>
                        <DepartmentNavContainer>
                            <DepartmentNavItem>
                                Tipo
                            </DepartmentNavItem>
                            <DepartmentNavItem>
                                Piso
                            </DepartmentNavItem>
                            {
                                !state.listDeptIsCompressed
                                ? (
                                    <DepartmentNavItem>
                                        Info
                                    </DepartmentNavItem>
                                )
                                : null
                            }
                            
                        </DepartmentNavContainer>
                    </DepartmentsNav>
                    <SubmenuDepartmentList listDepartments={ listDepartments } />
                </MenuDepartmentsBodyWrapper>
               {/* <SubmenuDepartmentType /> */}
            </MenuDepartmentsBody>
            <MenuDepartmentFooter>
                { !state.listDeptIsCompressed
                    ? (
                        <Paginator 
                            currentPage={ page }
                            pageList={ viewPages }  action={ changePage }
                            minPage={ 0 } maxPage={ maxPages }
                        />
                    )
                    : (
                        <PaginatorSmall
                            currentPage={ page }
                            minPage={ 0 } maxPage={ maxPages }
                            action={ changePage }
                        />
                    )
                 }
                
            </MenuDepartmentFooter>
        </MenuDepartmentsContainer>
    );
};

const MenuDepartmentsContainer = styled(a.section)`
    width: 80%;
    height: calc(100% - 250px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    max-width: 600px;
    max-height: 1200px;
    position: absolute;
    top: 200px;
    left: 0;
    /* transform: translate(0, -50%); */
    /* background-color: #FFF4; */
    border-radius: 0 16px 16px 0;
    overflow: hidden;

    @media (orientation: portrait){
        width: calc(85% - 15px);
        height: calc(100% - 150px);
        top: 120px;
        max-width: 500px;
    }
`;

const MenuDepartmentsHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 10px 10px 0;
    /* background-color: ${ ({ theme })=>theme.color.green_100 }; */
    cursor: pointer;
    user-select: none;

    span{
        color: ${ ({ theme })=>theme.color.white };
        font-size: 30px;
        padding: 0 10px 0 0;
        user-select: none;
    }
`;

const MenuDepartmentHeaderWrapper = styled.div`
    width: 100%;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    border: 1px solid ${ ({ theme })=>theme.color.green_50 };
    border-radius: 0 30px 30px 0;
    padding: 8px 20px;

`;

const MenuDepartmentsTitle = styled.h2`
    ${ ({ theme })=>theme.fontStyle.h2 };
    color: ${ ({ theme })=>theme.color.white };
    white-space: nowrap;

`;

const MenuDepartmentsBody = styled(a.div)`
    width: 100%;
    padding: 10px;
    /* margin: 10px; */
    
    flex-grow: 1;
`;

const MenuDepartmentsBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFF4;
    border: 1px solid ${ ({ theme })=>theme.color.white };
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 30px;
`;

const DepartmentsNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
`;

const DepartmentNavContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 10px 0;
`;

const DepartmentNavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: ${ ({ theme })=>theme.font.primary };
    font-weight: ${ ({ theme })=>theme.font.weight.bold };
    color: ${ ({ theme })=>theme.color.carbon_100 };
    margin: 0;
    padding: 0;

    &:nth-child(1){
        width: 25%;
    }
    &:nth-child(2){
        width: 20%;
    }
    &:nth-child(3){
        width: 55%;
    }
`;

const MenuDepartmentFooter = styled.section`
    width: 100%;
    /* background-color: #FFF4; */
    border-radius: 300px;
    padding: 10px;
`;