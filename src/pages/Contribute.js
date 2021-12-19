import { Wrapper } from "../components/PageWrapper";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCategories, getCourses, getSubjects, getSubjectTeachers, postNewExam } from "../services/service";
import { sendAlert } from "../components/Alerts";
import { useNavigate } from "react-router-dom";
import SelectBox from "../components/SelectBox";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function Contribute() {
    const [courses, setCourses] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [exam, setExam] = useState("");
    const [courseId, setCourseId] = useState('');
    const [subjectId, setSubjectId] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getCourses()
        .then(res => {
            setCourses(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        getCategories()
        .then(res => {
            setCategories(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    function courseHandler(courseId) {
        setCourseId(courseId);
        if (courseId === "") {
            setSubjects([]);
            setTeachers([]);
            setSubjectId("");
            setTeacherId("");
            return;
        }
        getSubjects(courseId)
        .then(res => {
            setSubjects(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    function subjectHandler(subjectId) {
        setSubjectId(subjectId);
        if (subjectId === "") {
            setTeachers([]);
            return;
        }
        getSubjectTeachers(subjectId)
        .then(res => {
            setTeachers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        const body = {
            name,
            exam,
            teacherId,
            categoryId,
            subjectId,
        }
        postNewExam(body)
        .then(res => {
            sendAlert('success', '', 'Sua prova foi enviada com sucesso, você agora pode fazer uma consulta para encontra-lá :)');
            navigate("/");
        })
        .catch(err => {
            sendAlert('error', '', err.response.data)
            console.log(err);
        })
    }

    return (
        <Wrapper>
            <Form onSubmit={(e) => submitHandler(e)}>
                <Input required value={name} onChange={e => setName(e.target.value)} placeholder="Nomeie sua prova Ex: 2020.1"></Input>
                <Input required value={exam} onChange={e => setExam(e.target.value)} placeholder="Link para a prova Ex: https://pdf..."></Input>
                <SelectBox name="Categoria" value={categoryId} items={categories} setItem={setCategoryId}/>
                <SelectBox name="Curso" value={courseId} items={courses} handler={courseHandler}/>
                <SelectBox name="Matéria" value={subjectId} items={subjects} handler={subjectHandler}/>
                <SelectBox name="Professor" value={teacherId} items={teachers} setItem={setTeacherId}/>
                <Button type="submit">Enviar</Button>
            </Form>
        </Wrapper>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
`;