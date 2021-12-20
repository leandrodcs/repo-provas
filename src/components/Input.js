import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    max-width: 500px;
    height: 55px;
    background: white;
    border: none;
    border-radius: 5px;
    border: 1px solid #000000;
    font-size: 18px;
    padding: 0 12px;
    outline: none;
    pointer-events: ${props => props.offline ? 'none' : 'initial'};
    opacity: ${props => props.offline ? '0.7' : '1'};
`;