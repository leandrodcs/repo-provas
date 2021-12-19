import { useNavigate } from "react-router-dom";
import { Wrapper } from "../components/PageWrapper";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <button onClick={() => navigate('/contribute')}>Incluir prova</button>
            <button onClick={() => navigate('/consult')}>Buscar prova</button>
        </Wrapper>
    )
}