import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import Post from './pages/post';

export default function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/post' element={<Post/>}/>
                </Routes>
            </Router>
        </>
    )
}


