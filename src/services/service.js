import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL === 'prod' ? 'https://repo-provas-cloud.herokuapp.com' : 'http://localhost:4000';

function getCourses() {
    return axios.get(`${BASE_URL}/courses`);
}

function getSubjects(courseId) {
    return axios.get(`${BASE_URL}/subjects/${courseId}`);
}

export {
    getCourses,
    getSubjects,
}