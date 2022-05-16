import Logo from './img/logo.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar_logo" src={Logo} alt="logo"></img>
        </div>
    )
}