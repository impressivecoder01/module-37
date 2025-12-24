import { useState } from "react"

export default function Batsman(){
    const [score, setScore]= useState(0)
    const [six, countSix] = useState(0)
    const [four, countFour] = useState(0)
    // const countSixes = ()=>{
    //     let sixes = six + 0
    //     countSix(sixes)

    // }
    const handleSingle = ()=>{
        const update = score + 1
        setScore(update)
    }
    const handleFour = ()=>{
        let updated = score +4
        let updatedFour = four + 1;
        countFour(updatedFour)
        setScore(updated)
    }
    const handleSix = ()=>{
        let update = score + 6;
        let updateSixes = six + 1
        countSix(updateSixes)
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
            <p>Six: {six}</p>
            <p>Four: {four}</p>
            <h1>Score:{score}</h1>
            <button onClick={()=>handleSingle()}>Singles</button>
            <button onClick={()=>handleFour()}>Four</button>
            <button onClick={()=>handleSix()}>Six</button>
        </div>
    )
}