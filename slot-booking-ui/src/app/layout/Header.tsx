import {useNavigate } from 'react-router-dom';
import './Header.css'
import { useEffect, useState } from 'react';
import { getScalingFactor } from '../util/util';
export default function Header() {

    // Responsive Style
    const [scalingFactor, setscalingFactor] = useState<number | null>(getScalingFactor(window.innerWidth));

    useEffect(() => {
        setscalingFactor(getScalingFactor(window.innerWidth));
      }, [window.innerWidth]);    

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
            <div 
                style={{
                    height: `calc(84px * ${scalingFactor})`, 
                    backgroundColor: "#fff",
                    borderBottom: "0.8px solid #EAE9EA"
                }} 
                className="nav-bar"
            >
                <img className='logo' style={{
                    width: `calc(206px * ${scalingFactor})`,
                    height: `calc(27px * ${scalingFactor})`,
                    position: "absolute",
                    top: `calc(30px * ${scalingFactor})`,
                    left: "5.20833%"
                }} alt='kaninilogo' src='/images/Kanini-Workspace.svg' />
                <ul className='nav-bar-items'>
                    {midLinks.map(({ title, path }) => (
                        <li className='nav-bar-item' onClick={() => navigate(path)} key={path}>
                                {title}
                        </li>
                    ))}
                </ul>
                <div className='profile'>
                    <img id='notification' alt='notification-bell' src='images/Notification-Bell.svg' />
                    <i className="fa-solid fa-user"></i>
                    <span id="profile-name">Patrick Bateman</span>
                </div>
            </div>
        </>
    )
}