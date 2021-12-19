import { Wrapper } from "../components/PageWrapper";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCategories, getCourses, getSubjects, getSubjectTeachers, postNewExam } from "../services/service";
import { sendAlert } from "../components/Alerts";
import { useNavigate } from "react-router-dom";

export default function Contribute() {
    const [courses, setCourses] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [exam, setExam] = useState("");
    const [subjectId, setSubjectId] = useState(null);
    const [teacherId, setTeacherId] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
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
    }, [])

    function courseHandler(courseId) {
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
        getSubjectTeachers(subjectId)
        .then(res => {
            setTeachers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    function submitHandler(e) {
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
            console.log(err);
        })
        e.preventDefault();
    }

    return (
        <Wrapper>
            <Form onSubmit={(e) => submitHandler(e)}>
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Nomeie sua prova Ex: 2020.1"></input>
                <input required value={exam} onChange={e => setExam(e.target.value)} placeholder="Link para a prova Ex: https://pdf..."></input>
                <select required onChange={(e) => setCategoryId(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <select required onChange={(e) => courseHandler(e.target.value)}>
                    <option value="">Selecione um curso</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
                <select required onChange={(e) => subjectHandler(e.target.value)}>
                <option value="">Selecione uma matéria</option>
                    {subjects.map(subject => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
                    ))}
                </select>
                <select required onChange={(e) => setTeacherId(e.target.value)}>
                <option value="">Selecione um professor</option>
                    {teachers.map(teacher => (
                        <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                    ))}
                </select>
                <button type="submit">Enviar</button>
            </Form>
        </Wrapper>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;