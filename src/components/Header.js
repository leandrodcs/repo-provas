import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Header() {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Logo onClick={() => navigate('/')}>
                Repo Provas
            </Logo>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #ffffff;
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.h1`
    color: #79869c;
    font-family: 'Lobster', cursive;
    font-size: 55px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
`;