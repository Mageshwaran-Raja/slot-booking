import { createBrowserRouter } from "react-router-dom";
import BookRoom from "../../features/Rooms/bookroom/BookRoom";
import YourBookings from "../../features/Rooms/yourbookings/YourBookings";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'book-room', element: <BookRoom />},
            {path: 'your-bookings', element: <YourBookings />},
        ]
    }
])