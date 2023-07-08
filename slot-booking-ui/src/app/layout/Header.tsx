import {useNavigate } from 'react-router-dom';
import './Header.css'
import { useEffect, useState } from 'react';
export default function Header() {

    // Responsive Style
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const scalingFactor = (screenWidth / 1920);

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const logoStyle = {
        width: `206px * ${scalingFactor}`,
        height: `27px * ${scalingFactor}`,
        position: "absolute",
        top: `30px * ${scalingFactor}`,
        left: "5.20833%"
    }

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
                    backgroundColor: "#EAE9EA"
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