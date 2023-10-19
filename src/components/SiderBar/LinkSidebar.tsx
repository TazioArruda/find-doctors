import { Link } from "react-router-dom";


interface linkSidebarProps {
    url:string
    icon:string
    name?:string
    size:number
    justify?: string
}

export function LinkSidebar (props: linkSidebarProps) {
    return(
        <div className="w-full">
        <Link to={props.url}>
            <button className={`bg-green-800 hover:bg-green-300 hover:text-green-800 text-white font-bold py-2 px-4 rounded w-full flex ${props.justify} items-center gap-2`}>

            
                <img src={props.icon} className="hover:text-green-800" width={props.size} height={props.size}/>
            
            
            <span className="">{props.name}</span> 
            
            </button>
        </Link>
        </div>  
    )
}