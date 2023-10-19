// import { Container, ContainerHeader, ListHeader } from "./styledDash"
// import imgLogin from "../assets/user.png"
// import menuBar from "../assets/menu-bar.png"
// import seta from "../assets/down-arrow.png"
// import fram from "../assets/Frame 8805.png"
// import imgl from "../assets/register-users.png"
// import imglh from "../assets/hirer.png"

import { LastRegistered } from "../components/LastRegisteredUsers/LastRegistered"
import { Presentation } from "../components/Presention/Presentation"
import { Tab } from "../components/Tab/tab"


//import { LastRegistered } from "../components/LastRegisteredUsers/LastRegistered"

function Dashboard() {
  return (
    <div className="bg-zinc-light h-full w-full"> 
     <Presentation/>

     <div className="pt-0">
                     <Tab/>

             </div>
       
      
    </div>
  )
 
}

export default Dashboard
