
interface CardProps{
    icon: string
    name: string
    value: string
    color: string

}



export function Card (props: CardProps ){


    return(
        <div className="bg-zinc-100 rounded-2xl p-6 flex-1 flex items-center gap-2">
           <div className={` ${props.color} p-4 rounded-full`}>
                <img src={props.icon}/>
           </div>
           <div className="flex flex-col">
                <span className="text-sm">{props.name}</span>
                <span className="text-2xl font-bold">{props.value}</span>
           </div>
        </div>
    )

}