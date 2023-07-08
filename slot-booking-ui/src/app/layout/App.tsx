import { Outlet } from "react-router-dom";
import Header from "./Header";
function App() {

  
  return (
    <>
    <Header />
    <div style={{padding: `1.5625% 5.20833%`}}>
      <Outlet />
    </div>
    </>
  );
}

export default App;
