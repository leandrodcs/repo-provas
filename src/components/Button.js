import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    max-width: 300px;
    height: 55px;
    background: #30962e;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    color: white;
    border: 1px solid #333;
    font-size: 25px;
    cursor: pointer;
    pointer-events: ${props => props.offline ? 'none' : 'initial'};
    opacity: ${props => props.offline ? '0.7' : '1'};
`;