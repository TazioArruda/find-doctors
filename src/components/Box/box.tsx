import { Card } from "./card"
import everyUser from "../../assets/every-user.svg"
import peopleSearch from "../../assets/people-search-one.svg"

interface BoxProps{
    boxTitle:string
    nameAvailable:string
    nameUnAvailable: string

}


export function Box (props:BoxProps) {

const changeIcon = ()=>{
    if(props.boxTitle == "Médicos"){

        return everyUser

    }else{
        return peopleSearch
    }
}



    return(
        <div className="bg-white flex-1 flex flex-col rounded-2xl p-6">
            <div className="pb-4">
                <span className="font-semibold">{props.boxTitle}</span>
            </div>
            <div className="flex w-full gap-8">
            <Card icon={changeIcon()} name={"Total"} value={"1000"} color={props.boxTitle == "Médicos"?"bg-blue-500":"bg-yellow-500"}/>
            <Card icon={changeIcon()} name={props.nameAvailable} value={"900"} color={"bg-green-700"}/>
            <Card icon={changeIcon()} name={props.nameUnAvailable} value={"100"} color={"bg-red-700"}/>
            </div>
        </div>
    )

}