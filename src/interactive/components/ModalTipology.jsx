import styled from "styled-components";
import { Modal } from "./Modal";

export const ModalTipology = ({ title, avaliability, features=[], size })=>{
    return(
        <Modal title={ "Tipología" } btnLabel={"Virtual Tour"}>
            <TipologyContainer>
                <ColLeft>
                    <TipologyTitle>{ title }</TipologyTitle>
                    <TipologySQM>{ size }m<sup>2</sup></TipologySQM>
                    <TipologyFeatures>
                        { 
                            features.map((feature, i)=>(
                                <TipologyFeatureItem key={i}>{ feature }</TipologyFeatureItem>
                            ))
                        }
                    </TipologyFeatures>
                </ColLeft>
                <ColRight>
                    <Disponibility>{ avaliability ? "Disponible" : "Sold" }</Disponibility>
                    <PreviewContainer>
                        <PreviewFrame>
                            <img src="./img/t1.jpg" alt="preview" />
                        </PreviewFrame>
                    </PreviewContainer>
                </ColRight>
            </TipologyContainer>
        </Modal>
    )
};

const TipologyContainer = styled.div`
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
`;

const ColLeft = styled.div`
    width: 33%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 20px;
`;

const TipologyTitle = styled.h5`
    ${ ({ theme })=>theme.fontStyle.h5() }
    line-height: 1;
`;

const TipologySQM = styled.h4`
    ${ ({ theme })=>theme.fontStyle.sqr }
`;

const TipologyFeatures = styled.ul`
    width: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
`;

const TipologyFeatureItem = styled.li`
    width: 100%;
    padding: 0;
    margin: 0;
    ${ ({ theme })=>theme.fontStyle.list() }
`;

const ColRight = styled.div`
    width: 60%;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
`;

const Disponibility = styled.h6`
    ${ ({ theme })=>theme.fontStyle.h5() }
    line-height: 1;
    font-weight: 300;
    margin-bottom: 10px;
`;

const PreviewContainer = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 40%;
    position: relative;
    overflow: hidden;
`;

const PreviewFrame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;

    img{
        width: 100%;
        object-fit: contain;
    }
`;