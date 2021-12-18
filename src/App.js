import './assets/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<>{process.env.REACT_APP_API_URL === 'prod' ? 'https://repo-provas-cloud.herokuapp.com' : 'http://localhost:4000'}</>} />
                <Route exact path='/contribute' element={<></>} />
                <Route exact path='/consult' element={<></>} />
            </Routes>
        </Router>
    )
}