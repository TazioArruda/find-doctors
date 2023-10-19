

interface ButtonNewProps{
    name:string
}

export function ButtonNew (props: ButtonNewProps){
return(
<button className=" flex gap-2 border border-gray-300 bg-green-400 rounded-2xl px-16 py-4  text-white">

          {props.name}

        </button>



)
}
