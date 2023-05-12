import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header-nav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png" alt="logo image" />
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to={'/'}>Discovery</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/similarity'}>Similarity</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <button>
                Raise Request
            </button>
        </header>
    )
}