import styled from "styled-components";

export const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    margin-top: ${props => props.isHome ? '30vh' : '90px'};
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;
`;