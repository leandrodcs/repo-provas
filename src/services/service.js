import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL === 'prod' ? 'https://repo-provas-cloud.herokuapp.com' : 'http://localhost:4000';