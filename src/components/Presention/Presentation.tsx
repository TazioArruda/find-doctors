
import { Box } from "../Box/box"
import { DashboardImage } from "../DashboardImage"
import { Tab } from "../Tab/tab"

// trocar tudos os margin por pading  

export function Presentation (){
    return (                            

        <div className="flex bg-zinc-light w-full p-8 gap-6">
        

            <DashboardImage/>
             
            
          
             <div className=" flex flex-1 flex-col gap-4">

             <Box boxTitle={"Médicos"} nameAvailable={"Disponiveis"} nameUnAvailable={"Indisponiveis"}/>
             <Box boxTitle={"Contratantes"} nameAvailable={"Ativos"} nameUnAvailable={"Inativos"}/>
             
            
           
             </div>

            
             
           </div>
          
             


    )
}





