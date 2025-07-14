import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import ClairDeSquelette from './pages/product/ClairDeSquelette';
import PapaverTranslucite from './pages/product/PapaverTranslucite';
import RosaRugosaRobusta from './pages/product/RosaRugosaRobusta';



export const main = () => {
    const root = createRoot(document.getElementById('root')!);

    root.render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/product/clairDeSquelette' element={<ClairDeSquelette/>}/>
                    <Route path='/product/papaverTranslucite' element={<PapaverTranslucite/>}/>
                    <Route path='/product/rosaRugosaRobusta' element={<RosaRugosaRobusta/>}/>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );

}

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
