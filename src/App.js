import './assets/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Contribute from './pages/Contribute';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/contribute' element={<Contribute />} />
                    <Route exact path='/consult' element={<></>} />
                </>
            </Routes>
        </Router>
    )
}