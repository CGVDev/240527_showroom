import { useContext } from "react";
import styled from "styled-components";
import { TagContext } from "../context/TagContext";
import { useTransition, animated as a } from "@react-spring/web";

export const TagView = ()=>{

    const { tagState } = useContext(TagContext);

    const tagTransition = useTransition(
        tagState.tags,
        // ()=>(
            {
                from:{
                    opacity: 0,
                    x: tagState.tags.length > 0 ? tagState.tags[0].posX : 0,
                    y: tagState.tags.length > 0 ? tagState.tags[0].posY : 0,
                },
                enter:{
                    opacity: 1,
                    x: tagState.tags.length > 0 ? tagState.tags[0].posX : 0,
                    y: tagState.tags.length > 0 ? tagState.tags[0].posY : 0,
                },
                leave: {
                    opacity: 0,
                }
            }
        // )
    );

    return(
        tagTransition((styles, item)=>{
            return(
                <TagContainer style={ styles } >
                    {item.label}
                </TagContainer>
            )
        })
    );
};

const TagContainer = styled(a.div)`
    color: ${({ theme }) => theme.color.white};
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.gray_dull};
    border: 2px solid ${({ theme }) => theme.color.green_100};
    border-radius: 8px;
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
`;