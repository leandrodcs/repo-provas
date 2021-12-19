import { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../components/PageWrapper";
import SelectBox from "../components/SelectBox";
import SubjectSelection from "../components/SubjectSelection";
import TeacherSelection from "../components/TeacherSelection";
import { getCourses, getSubjects, getTeachers } from "../services/service";

export default function Consult() {
    const [courses, setCourses] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [courseId, setCourseId] = useState('');
    const [searchId, setSearchId] = useState('');
    const [filter, setFilter] = useState('');
    const filters = [{id: 'teacher', name: 'Buscar por Professor'}, {id: 'subject', name: 'Buscar por Matéria'}];

    useEffect(() => {
        getCourses()
        .then(res => {
            setCourses(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    function courseHandler(courseId) {
        setCourseId(courseId);
        setTeachers([]);
        setSubjects([]);
        setFilter('');
    }

    function filterHandler(filter) {
        setFilter(filter);
        console.log(filter);
        if (filter === 'teacher') {
            getTeachers(courseId)
            .then(res => {
                setTeachers(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        if (filter === 'subject') {
            getSubjects(courseId)
            .then(res => {
                setSubjects(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    function searchHandler(search) {
        setSearchId(search)
    }

    return (
        <Wrapper>
            <Section>
                <p>Primeiro, selecione um curso:</p>
                <SelectBox name="Curso" value={courseId} items={courses} handler={courseHandler}/>
            </Section>
            {courseId&&
            <Section>
                <p>Agora, escolha por que filtro que deseja buscar as provas:</p>
                <SelectBox name="Filtro" value={filter} items={filters} handler={filterHandler}/>
            </Section>
            }
            {
                filter === 'teacher' ? 
                <Section>
                    <p>Por fim, escolha o professor que deseja consultar:</p>
                    <TeacherSelection name="Professor" value={searchId} items={teachers} handler={searchHandler}/>
                </Section>
                : filter === 'subject' ?
                <Section>
                    <p>Por fim, escolha a matéria que deseja consultar:</p>
                    <SubjectSelection name="Matéria" value={searchId} items={subjects} handler={searchHandler}/>
                </Section>
                : ""
            }
        </Wrapper>
    )
}

const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`;