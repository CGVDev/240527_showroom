import styled from "styled-components";

export const Stage_5 = ()=>{
    return(
        <StageContainer>
            <TextCongrats>¡Felicidades!</TextCongrats>
            <TextSub>has adquirido tu nuevo departamento</TextSub>
        </StageContainer>
    );
}

const StageContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const TextCongrats = styled.h1`
    ${({ theme }) => theme.fontStyle.listCongrats};
    font-weight: bolder;
    text-shadow: 2px 2px 32px #FFFFFF;
    `;

const TextSub = styled.p`
${({ theme }) => theme.fontStyle.listHeader};
color: ${({ theme }) => theme.color.carbon_dull};;

`;

