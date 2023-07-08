import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
export default function Header() {
    const midLinks = [
        { title: 'Home', path: '/' },
        { title: 'Book space', path: '/book-room' },
        { title: 'Your Bookings', path: '/your-bookings' },
        { title: 'Events', path: '/events' },
        { title: 'Calendar', path: '/calendar' },
    ]
    const navigate = useNavigate();
    return (
        <>
            <div className="nav-bar">
                <img className='logo' src='/images/Kanini-Workspace.svg' />
                <ul className='nav-bar-items'>
                    {midLinks.map(({ title, path }) => (
                        <li className='nav-bar-item' onClick={() => navigate(path)} key={path}>
                                {title}
                        </li>
                    ))}
                </ul>
                <div className='profile'>
                    <img id='notification' src='images/Notification-Bell.svg' />
                    <i className="fa-solid fa-user"></i>
                    <span id="profile-name">Patrick Bateman</span>
                </div>
            </div>
        </>
    )
}