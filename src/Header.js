import { NavLink } from 'react-router-dom';

function Header(){
    return (
        <header>
            <h1><NavLink exact activestyle={{opacity: 1}} to="/">LOGO</NavLink></h1>
            <ul id="gnb">
                <li><NavLink exact activestyle={{opacity: 1}} to="Youtube">YOUTUBE</NavLink></li>
                <li><NavLink exact activestyle={{opacity: 1}} to="Flickr">FlICKR</NavLink></li>
                <li><NavLink exact activestyle={{opacity: 1}} to="Join">JOIN</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;