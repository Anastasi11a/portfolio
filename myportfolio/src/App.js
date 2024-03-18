import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/portfolio/" element={<Home />} />
                <Route path="/portfolio/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;