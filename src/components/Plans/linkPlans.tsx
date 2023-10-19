import { Link } from "react-router-dom"

interface LinkPlansProps {
    url:string
    tittle:string
    count: string
}

export function LinkPlans (props:LinkPlansProps){
    return(
        <Link to={props.url} className="p-4 bg-gray-200 gap-5 text-xl flex items-center rounded-t-2xl">{props.tittle}
        <div className="bg-green-400 rounded-full w-8 h-8 flex justify-center items-center">{props.count}</div>
        
        </Link>
    )
}