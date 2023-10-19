import { LinkSidebar } from "./LinkSidebar";
import Img from "../../assets/LogoMed.png"
import img1 from "../../assets/dashboard.png"
import img2 from "../../assets/register-users.png"
import img3 from "../../assets/plans.png"

import img5 from "../../assets/specialities.png"
import img6 from "../../assets/notifications.png"
import img7 from "../../assets/faq.png"

export function SideBarFull(){
    return (
        <div className="w-72 h-full bg-green-800 flex justify-center">
          <div className="w-full h-full flex flex-col gap-6 pt-4 px-2">
          <div className="w-full flex items-center justify-center"><img src={Img} /></div>
            <div className=" flex flex-col gap-2">
              

                <LinkSidebar url={"/dashboard"} icon={img1} name={"Dashboard"} size={20} justify={"justify-start"}/>
                <LinkSidebar url={"/users"} icon={img2} name={"Usuários"} size={20} justify={"justify-start"}/>
                <LinkSidebar url={"/plans"} icon={img3} name={"Planos"} size={20} justify={"justify-start"}/>
                <LinkSidebar url={"/specialties"} icon={img5} name={"Especialidades"} size={20} justify={"justify-start"}/>
                <LinkSidebar url={"/notification"} icon={img6} name={"Notificações"} size={20} justify={"justify-start"}/>
                <LinkSidebar url={"/faq"} icon={img7} name={"FAQ"} size={20} justify={"justify-start"}/>
    
    
            </div>
          </div>
        </div>
    )  
}