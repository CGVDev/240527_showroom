import styled from "styled-components";

export const FilterSection  = ({ label, children, ...props })=>{
    return(
        <FilterSectionContainer {...props}>
            <FilterHeadContianer>
                <FilterLabel>{ label }</FilterLabel>
            </FilterHeadContianer>
            <FilterBodyContainer>
                { children }
            </FilterBodyContainer>
        </FilterSectionContainer>
    );
};

const FilterSectionContainer = styled.section`
    width: 100%;
    margin: 0;
    padding: 20px 0 0;
    /* border-bottom: 1px solid ${({ theme }) => theme.color.green_100};

    &:last-child{
        border-bottom: none;
    } */
`;

const FilterHeadContianer = styled.div`
    padding: 5px 0;
`;

const FilterLabel = styled.h3`
    ${({ theme }) => theme.fontStyle.listSectionLabel};
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    user-select: none;
`;

const FilterBodyContainer = styled.ul`
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    margin: 0;
    padding: 10px 0;
`;
