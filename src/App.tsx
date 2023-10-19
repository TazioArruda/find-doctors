import { Header } from "./components/Header/Header";

import SideBar from "./components/SiderBar/sideBar";
import { AppContext } from "./contexts/AppController";
import "./index.css";

import { Outlet } from "react-router-dom";



function App() {
  return (
    <AppContext>
    <div className="w-full h-screen flex">
        <SideBar/>

        <div className="w-full h-full flex flex-col">
        <Header/>
          <Outlet />
          
           
        

        </div>
    </div>
        </AppContext> 

  );
}

export default App;
