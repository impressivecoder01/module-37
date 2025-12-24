import { useState } from "react"

export default function Batsman(){
    let [score, setScore]= useState(0)
    const handleSingle = ()=>{
        const update = score + 1
        setScore(update)
    }
    const handleFour = ()=>{
        let updated = score +4
        setScore(updated)
    }
    const handleSix = ()=>{
        let update = score + 6;
        setScore(update)
    }
    return(
        <div>
            <h1>player:BD</h1>
            {
                score > 50 && <p>Your score 50 runs</p>
            
            }
            {
                <p>Now your score is {score}</p>
            }
            <h1>Score:{score}</h1>
            <button onClick={()=>handleSingle()}>Singles</button>
            <button onClick={()=>handleFour()}>Four</button>
            <button onClick={()=>handleSix()}>Six</button>
        </div>
    )
}