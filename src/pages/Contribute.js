import { Wrapper } from "../components/PageWrapper";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCourses } from "../services/service";

export default function Contribute() {
    const [courses, setCourses] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [course, setCourse] = useState(null);
    const [subject, setCSubject] = useState(null);
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
    }
    console.log(course);

    return (
        <Wrapper>
            <Form>
                <input placeholder="Nomeie sua prova Ex: 2020.1"></input>
                <input placeholder="Link para a prova Ex: https://pdf..."></input>
                <select>
                    <option>Selecione um curso</option>
                    {courses.map(course => (
                        <option key={course.id} onClick={() => courseHandler(course.id)}>{course.name}</option>
                    ))}
                </select>
            </Form>
        </Wrapper>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;