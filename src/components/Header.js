import styled from "styled-components"

export default function Header() {
    return (
        <Wrapper>
            <Logo>
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
    font-size: 60px;
`;