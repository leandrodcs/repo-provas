import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import LoadPage from "../components/LoadPage";
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
    const [majorLoad, setMajorLoad] = useState(true);
    const filters = [{id: 'teacher', name: 'Buscar por Professor'}, {id: 'subject', name: 'Buscar por Matéria'}];
    const navigate = useNavigate();

    useEffect(() => {
        getCourses()
        .then(res => {
            setCourses(res.data);
            setMajorLoad(false);
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
        setSearchId('');
    }

    function filterHandler(filter) {
        setFilter(filter);
        setSearchId('');
        if (filter === 'teacher') {
            getTeachers(courseId)
            .then(res => {
                setTeachers(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        if (filter === 'subject') {
            getSubjects(courseId)
            .then(res => {
                setSubjects(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    function searchHandler(search) {
        setSearchId(search)
    }

    function submitHandler(e) {
        e.preventDefault();
        navigate(`/${filter}/${searchId}/exams`);
    }

    if(majorLoad) {
        return (
            <LoadPage />
        )
    }

    return (
        <Wrapper>
            <Form onSubmit={(e) => submitHandler(e)}>
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
                {searchId&&<Button type="submit">Buscar</Button>}
            </Form>
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    align-items: center;
`;