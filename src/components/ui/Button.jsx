export default function Button({variant ="primary", children}){
  const variants ={
    "primary":"bg-red-600 py-2 px-3 hover:bg-red-400 rounded-lg text-sm w-full text-xl ",
    "secondary": "bg-orange-400 py-1 px-2 text-sm hover:bg-orange-300 rounded-lg"
  }

  return <button className={`  cursor-pointer ${variants[variant]} text-white transition-all `}>{children}</button>
}