import imgLogin from "../../assets/user.png"
import menuBar from "../../assets/menu-bar.png"
import seta from "../../assets/down-arrow.png"
import { useContext } from "react"
import {  CreateAppContext } from "../../contexts/AppController"

export function Header () {
    const {handleChange} = useContext(CreateAppContext)
    return(
        <div className="px-8 flex justify-between items-center w-full">
            <div>
                <button onClick={handleChange}>

                <img src={menuBar}/> 
                
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-14 py-9">
                    <img src={imgLogin}></img>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">Izabel</span>
                    <span>Izabel@gmail.com</span>
                </div>
                <div className="w-4">
                    <img src={seta}></img>
                </div>
            </div>

        </div>
    )
}