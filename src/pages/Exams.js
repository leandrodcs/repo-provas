import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoadPage from "../components/LoadPage";
import { Wrapper } from "../components/PageWrapper";
import { getCategories, getExams } from "../services/service";

export default function Exams() {
    const [exams, setExams] = useState([]);
    const [categories, setCategories] = useState([]);
    const [majorLoad, setMajorLoad] = useState(true);
    const {
        filter,
        id,
    } = useParams();

    useEffect(() => {
        getExams(filter, id)
        .then(res => {
            setExams(res.data);
            getCategories()
            .then(res => {
                setCategories(res.data);
                setMajorLoad(false);
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            console.log(err);
        })

    }, [filter, id]);

    if(majorLoad) {
        return (
            <LoadPage />
        )
    }

    if(!exams.length) {
        return (
            <Wrapper>
                <Title empty={true} >Nenhuma prova encontrada :(</Title>
            </Wrapper>
        )
    }
    
    return (
        <Wrapper>
            <Title>Provas de {filter === 'teacher' ? exams[0].teacher.name : exams[0].subject.name}:</Title>
            {categories.map(category => 
            <Box key={category.id}>
                <Category>{category.name === '2ch' ? '2º chamada' : category.name}</Category>
                <List>
                    {exams.map(exam => exam.categoryId === category.id ?
                    <Item key={exam.id}>
                        <span>{exam.name} - {filter === 'teacher' ? exam.subject.name : exam.teacher.name}</span>
                        <Link onClick={() => window.open(exam.exam, "_blank")}>Ver</Link>
                    </Item>
                    :
                    ""
                    )}
                    {!exams.filter(exam => exam.categoryId === category.id).length ? <EmptyMsg>Nenhuma prova ;(</EmptyMsg> : ""}
                </List>
            </Box>
            )}
        </Wrapper>
    )
}

const EmptyMsg = styled.li`
    color: grey;
`;

const Link = styled.span`
    color: #1679e2;
    cursor: pointer;
`;

const Box = styled.section`
    width: 100%;
    max-width: 500px;
    padding: 12px 12px;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
`;

const List = styled.ul`
    width: 100%;
`;

const Category = styled.p`
    font-size: 22px;
    font-weight: 700;
    width: 100%;
    color: #333;
    border-bottom: 1px solid #EBEBEB;
    padding-bottom: 10px;
    margin-bottom: 15px;
`;

const Title = styled.h2`
    font-size: 25px;
    margin-top: ${props => props.empty ? '30vh' : '0'};
`;