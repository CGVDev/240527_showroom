import styled from "styled-components";
import { MenuButton, MenuItem, MenuWrapper } from "../components/ButtonMenu";

export const ApartmentMenu = ()=>{
    return(
        <SearchContainer>
            <MenuWrapper $sizeW={"280px"}>
                <MenuButton $width={ "33%" } $maxWidth={'120px'} $tag={ "lista" }>
                    <span className="material-symbols-outlined">
                        lists
                    </span>
                </MenuButton>
                <MenuButton $width={ "33%" } $maxWidth={'120px'} $tag={"plano"}>
                    <span className="material-symbols-outlined">
                        Browse {/* dataset */}
                    </span>
                </MenuButton>
                <MenuButton $width={ "33%" } $maxWidth={'120px'} $tag={"modelo"}>
                    <span className="material-symbols-outlined">
                        villa
                    </span>
                </MenuButton>
            </MenuWrapper>
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    ${ ({ theme })=>theme.styles.container }
    background-color: #26323826;
    border: none;
    padding: 30px 30px 20px 30px;
`;