import { NavLink } from 'react-router-dom';

function Header(){
    return (
        <header>
            <div className='inner'>
                <h1><NavLink exact activeStyle={{opacity: 1}} to="/">LOGO</NavLink></h1>
                <ul id="gnb">
                    <li><NavLink exact activeStyle={{opacity: 1}} to="Youtube">YOUTUBE</NavLink></li>
                    <li><NavLink exact activeStyle={{opacity: 1}} to="Flickr">FlICKR</NavLink></li>
                    <li><NavLink exact activeStyle={{opacity: 1}} to="Join">JOIN</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;