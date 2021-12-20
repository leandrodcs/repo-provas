import Loader from "react-loader-spinner";
import styled from "styled-components";
import { Wrapper } from "./PageWrapper";

export default function LoadPage() {
    return (
        <Wrapper>
            <Margin>
                <Loader />
            </Margin>
        </Wrapper>
    )
}

const Margin = styled.div`
    height: 100%;
    margin-top: 30vh;
`;