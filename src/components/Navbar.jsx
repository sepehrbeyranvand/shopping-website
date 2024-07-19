import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import Logo from "../Assets/firstLogo.png";
import Home from './Home'
import Shop from './Shop'
import Men from './Men'
import Women from './Women'
import Kids from './Kids';
export default function Navbar() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/men' element={<Men/>}/>
                <Route path='/women' element={<Women/>}/>
                <Route path='/kids' element={<Kids/>}/>
            </Routes>
        </Router>
    </div>
  );
}
