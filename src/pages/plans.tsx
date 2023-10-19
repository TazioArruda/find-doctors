import { Link, Outlet } from "react-router-dom"
import { LinkPlans } from "../components/Plans/linkPlans"


const Plans = () => {
  return (
    <div className="p-8">
      <h1 className="text-3x1 font-semibold">Planos</h1>
      <div>
        
        
    
          <div className="p-8 flex">
        
          <div className="flex gap-4">
            <LinkPlans url={"/plans/doctors"} tittle={"Médicos"} count={"3"}/>
            
            </div>
            
           <div className="flex gap-4">
            <LinkPlans url={"/plans/contractors"} tittle={"Contratantes"} count={"2"}/>
            
            </div> 

          </div>
          <div className="bg-whit p-6 rounded-b-2xl">
          <Outlet/>

          </div>

      </div>
    </div>
  )
}

export default Plans
