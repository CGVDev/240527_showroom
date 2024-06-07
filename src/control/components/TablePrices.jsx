import { useEffect, useState } from "react";
import styled from "styled-components";

export const TablePrices = ({content})=>{

    const schemes = Object.keys(content);
    const [ selection, setSelection ] = useState(schemes[0]);
    const [ table, setTable ] = useState(Object.keys(content[selection]));

    useEffect(()=>{
        
        setTable(Object.keys(content[selection]));

    }, [selection]);

    return(
        <>
            <SelectorContainer>
                <StyledSelect onChange={ (e)=>{ setSelection(e.target.value) } } value={selection}>
                    { schemes.map((scheme)=>{
                        return(
                            <option key={scheme} >{scheme}</option>
                        )
                    }) }
                </StyledSelect>
                <TableContainer>
                    {
                        table.map((key)=>{
                            let { percent, amount } = content[selection][key]

                            return(
                                <TableRow key={key}>
                                    <TableCell>{ key }</TableCell>
                                    <TableCell>{ percent }{percent ? "%" : ""}</TableCell>
                                    <TableCell>${ amount }</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableContainer>
            </SelectorContainer>
        </>
    );
}

const SelectorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

const StyledSelect = styled.select`
    width: 80%;
    max-width: 300px;
    font-size: 21px;
    padding: 12px 15px;
    border: ${({ theme }) => theme.color.green_100};
    background-color: ${({ theme }) => theme.color.green_50};
    color: ${({ theme }) => theme.color.white};
    border-radius: 12px;
    text-align: center;
`;

const TableContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const TableRow = styled.p`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    border-bottom: 1px solid ${({ theme }) => theme.color.green_50};
    margin: 0;
`;

const TableCell = styled.span`
    width: 10%;
    display: flex;
    justify-content: flex-end;
    padding: 8px 6px;
    flex-grow: 1;
    white-space: nowrap;
    user-select: none;

    &:first-child{
        width: 40%;
        justify-content: flex-start;
        align-items: center;
        color: ${({ theme }) => theme.color.green_100};;

    }
    
    &:last-child{
        width: 30%;
        justify-content: flex-end;
        align-items: center;

    }
`;
