import { LinkSidebar } from "./LinkSidebar";

import Logo from "../../assets/logoSmall.svg"

import img1 from "../../assets/dashboard.png"
import img2 from "../../assets/register-users.png"
import img3 from "../../assets/plans.png"

import img5 from "../../assets/specialities.png"
import img6 from "../../assets/notifications.png"
import img7 from "../../assets/faq.png"

export function SideBarSmall(){
    return (
        <div className="w-20 h-full bg-green-800 flex justify-center">
          <div className="w-full h-full flex flex-col gap-6 pt-4 px-2">
          <div className="w-full flex items-center justify-center ">
            <img src={Logo} height={36} width={36}/>
          </div>
            <div className=" flex flex-col gap-2">
                <LinkSidebar url={"/dashboard"} icon={img1} size={20}/>
                <LinkSidebar url={"/users"} icon={img2} size={20}/>
                <LinkSidebar url={"/plans"} icon={img3} size={20}/>
                <LinkSidebar url={"/specialties"} icon={img5} size={20}/>
                <LinkSidebar url={"/notification"} icon={img6} size={20}/>
                <LinkSidebar url={"/faq"} icon={img7} size={20}/>
            </div>
          </div>
        </div>
    )  
}