import navLinks from "../constants/index";
import Image from "next/image";
export default function Navbar() {

    return (
        <nav >
            <a href="#home" className="flex item-center gap-2">
                <img src="./images/logo.png" alt="logo" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

