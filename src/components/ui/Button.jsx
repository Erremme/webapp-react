export default function Button({type ="primary", children}){
  const types ={
    "primary":"bg-red-600 py-2 px-4 hover:bg-red-400 rounded-xl  ",
    "secondary": "bg-orange-400 py-1 px-3 text-sm hover:bg-orange-300 rounded-lg"
  }

  return <button className={`  ${types[type]} text-white transition-all `}>{children}</button>
}