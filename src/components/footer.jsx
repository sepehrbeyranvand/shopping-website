import { Link } from "react-router-dom";
import Logo from "../Assets/firstLogo.png";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 justify-center items-center">
      <div>
        <img src={Logo} alt="Footer Logo" />
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="font-light cursor-pointer hover:text-rose-600 transition-all .6s ease-in-out duration-300">Company</li>
          <li className="font-light cursor-pointer hover:text-rose-600 transition-all .6s ease-in-out duration-300">Products</li>
          <li className="font-light cursor-pointer hover:text-rose-600 transition-all .6s ease-in-out duration-300">Offices</li>
          <li className="font-light cursor-pointer hover:text-rose-600 transition-all .6s ease-in-out duration-300">About</li>
          <li className="font-light cursor-pointer hover:text-rose-600 transition-all .6s ease-in-out duration-300">Contact</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <Link className="text-2xl">
          <i className="fa fa-telegram"></i>
        </Link>
        <Link className="text-2xl">
          <i className="fa fa-instagram"></i>
        </Link>
        <Link className="text-2xl">
          <i className="fa fa-whatsapp"></i>
        </Link>
        <Link className="text-2xl">
          <i className="fa fa-github"></i>
        </Link>
      </div>
    </footer>
  );
}
