import './assets/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Contribute from './pages/Contribute';
import Consult from './pages/Consult';
import Exams from './pages/Exams';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/contribute' element={<Contribute />} />
                    <Route exact path='/consult' element={<Consult />} />
                    <Route exact path='/:filter/:id/exams' element={<Exams />} />
                </>
            </Routes>
        </Router>
    )
}