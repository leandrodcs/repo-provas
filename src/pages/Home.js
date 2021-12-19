import { useNavigate } from "react-router-dom";
import { Wrapper } from "../components/PageWrapper";
import { Button } from "../components/Button";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Button onClick={() => navigate('/contribute')}>Incluir prova</Button>
            <Button onClick={() => navigate('/consult')}>Buscar prova</Button>
        </Wrapper>
    )
}