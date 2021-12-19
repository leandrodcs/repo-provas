import { Wrapper } from "../components/PageWrapper";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCourses, getSubjects } from "../services/service";

export default function Contribute() {
    const [courses, setCourses] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [course, setCourse] = useState(null);
    const [subject, setSubject] = useState(null);
    const [teacher, setTeacher] = useState(null);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        getCourses()
        .then(res => {
            setCourses(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    function courseHandler(course) {
        setCourse(course);
        getSubjects(course)
        .then(res => {
            setSubjects(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    function subjectHandler(subject) {
        setSubject(subject);
        console.log(subject)
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log('ok')
    }

    return (
        <Wrapper>
            <Form onSubmit={(e) => submitHandler(e)}>
                <input required placeholder="Nomeie sua prova Ex: 2020.1"></input>
                <input required placeholder="Link para a prova Ex: https://pdf..."></input>
                <select required onChange={(e) => courseHandler(e.target.value)}>
                    <option>Selecione um curso</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
                <select required onChange={(e) => subjectHandler(e.target.value)}>
                <option>Selecione uma matéria</option>
                    {subjects.map(subject => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
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