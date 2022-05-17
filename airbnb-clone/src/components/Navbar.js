import logo from '../img/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar_logo" src={logo} alt="logo"></img>
        </nav>
    )
}