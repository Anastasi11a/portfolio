import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/home' />
                <Route path='/projects' />
            </Routes>

        </div>
    )
}

export default App;