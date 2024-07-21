import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Link,
} from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
// import ShoppingBasket from "../Assets/shoppingbasket.png";

import Logo from "../Assets/firstLogo.png";
import Home from "./Home";
import Shop from "./Shop";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import { useState } from "react";
export default function Navbar() {
  const [swtichLight, setSwitchLight] = useState(false);
  return (
    <div>
      <Router>
        <nav className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img width={115} height={115} src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <NavLink
              className="p-2 hover:text-rose-600 transition-all .4s ease-in-out duration-200"
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className="p-2 hover:text-rose-600 transition-all .4s ease-in-out duration-200"
              to="/men"
            >
              Men
            </NavLink>
            <NavLink
              className="p-2 hover:text-rose-600 transition-all .4s ease-in-out duration-200"
              to="/women"
            >
              Women
            </NavLink>
            <NavLink
              className="p-2 hover:text-rose-600 transition-all .4s ease-in-out duration-200"
              to="/kids"
            >
              Kids
            </NavLink>
          </div>
          <div className="flex item-center justify-center p-2">
            <button className="me-8 hover:bg-rose-50 hover:border-white transition-all .4s ease-in-out duration-200 p-2 w-[7vw] border border-1 border-zinc-900 rounded-3xl">
              Login
            </button>
            <div className="flex justify-center items-center">
              {swtichLight && <i onClick={()=>setSwitchLight(!swtichLight)} style={{fontSize:'1.2rem'}} className="fa fa-moon-o"></i>}
              {!swtichLight && <i onClick={()=>setSwitchLight(!swtichLight)} style={{fontSize:'1.2rem'}} className="fa fa-sun-o"></i>}
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      </Router>
    </div>
  );
}
