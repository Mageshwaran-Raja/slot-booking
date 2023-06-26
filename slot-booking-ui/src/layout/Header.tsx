import './Header.css'
export default function Header() {
    return(
        <>
        <div className="nav-bar">
            <img className='logo' src='/images/Kanini-Workspace.svg' />
            <ul className='nav-bar-items'>
                <li className='nav-bar-item'>Home</li>
                <li className='nav-bar-item'>Book space</li>
                <li className='nav-bar-item'>Your Bookings</li>
                <li className='nav-bar-item'>Events</li>
                <li className='nav-bar-item'>Calendar</li>
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