export default function Stars({vote}) {

    const starIcons =[]

    for(let i = 1; i <= 5; i++){
        if(i <= vote){
            starIcons.push(<i key={i} className="fa-solid fa-star "></i>)
        }else{
            starIcons.push(<i key={i} className="fa-regular fa-star"></i>)
        }
    }

    return <div className="text-amber-500" >{starIcons}</div>
}