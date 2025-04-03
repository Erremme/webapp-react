export default function Heading({level, children  }){
if(level === 1){
    return <h1 className="text-4xl font-bold">{children}</h1>
}

if(level === 2){
    return <h2 className="text-3xl font-semibold">{children}</h2>
}
if(level === 3){
    return <h3 className="text-xl font-semibold">{children}</h3>
}

if(level === 4){
    return <h4 className="text-lg ">{children}</h4>
}
}