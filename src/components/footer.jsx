import { Link } from "react-router-dom";
import Logo from '../Assets/firstLogo.png'
export default function Footer(){
    return(
        <footer>
            <div>
                <img src={Logo} alt="Footer Logo" />
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <Link><i></i></Link>
                <Link><i></i></Link>
                <Link><i></i></Link>
                <Link><i></i></Link>
            </div>
        </footer>
    )
}