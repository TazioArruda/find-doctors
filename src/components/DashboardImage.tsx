import woman from "../assets/welcome-woman-notebook.svg"
import calendar from "../assets/calendar.png"

export function DashboardImage (){
    return(
        <div className="bg-green-900 relative min-w-[26rem] h-[27rem] rounded-2xl shadow-md">
            <div className="absolute w-60 right-0 m-4">
                <img src={woman}/>
                
            </div>
            <div className="p-8 pt-56 w-72">
                    <div className="gap-4 flex items-center bg-green-300 p-1  ">
                    <img src={calendar} className=""/> <span className=" text-white">10 de Julho de 2023</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold text-white">Seja bem vinda!</h3>
                        <p className="w-80 text-white">Neste painel você poderá administrar seu site de forma simples e prática.</p>
                    </div>
                    
                </div>

        </div>
    )
}