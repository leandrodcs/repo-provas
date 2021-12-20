import { Wrapper } from "../components/PageWrapper";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCategories, getCourses, getSubjects, getSubjectTeachers, postNewExam } from "../services/service";
import { sendAlert } from "../components/Alerts";
import { useNavigate } from "react-router-dom";
import SelectBox from "../components/SelectBox";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import LoadPage from "../components/LoadPage";

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
    const [majorLoad, setMajorLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getCourses()
        .then(res => {
            setCourses(res.data);
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
    }, []);

    function courseHandler(courseId) {
        setCourseId(courseId);
        setIsLoading(true);
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
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }

    function subjectHandler(subjectId) {
        setIsLoading(true);
        setSubjectId(subjectId);
        if (subjectId === "") {
            setTeachers([]);
            return;
        }
        getSubjectTeachers(subjectId)
        .then(res => {
            setTeachers(res.data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoading(true);
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
            setIsLoading(false);
            navigate("/");
        })
        .catch(err => {
            sendAlert('error', '', err.response.data);
            setIsLoading(false);
        });
    }

    if(majorLoad) {
        return (
            <LoadPage />
        )
    }

    return (
        <Wrapper>
            <Form onSubmit={(e) => submitHandler(e)}>
                <Input offline={isLoading} required value={name} onChange={e => setName(e.target.value)} placeholder="Nomeie sua prova Ex: 2020.1"></Input>
                <Input offline={isLoading} required value={exam} onChange={e => setExam(e.target.value)} placeholder="Link para a prova Ex: https://pdf..."></Input>
                <SelectBox offline={isLoading} name="Categoria" value={categoryId} items={categories} setItem={setCategoryId}/>
                <SelectBox offline={isLoading} name="Curso" value={courseId} items={courses} handler={courseHandler}/>
                <SelectBox offline={isLoading} name="Matéria" value={subjectId} items={subjects} handler={subjectHandler}/>
                <SelectBox offline={isLoading} name="Professor" value={teacherId} items={teachers} setItem={setTeacherId}/>
                <Button offline={isLoading} type="submit">Enviar</Button>
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