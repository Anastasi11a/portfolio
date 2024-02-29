import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/projects' />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;