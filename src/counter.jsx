import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const handleAdd = () => {
        // console.log('test')
        const newCount = count +1;
        setCount(newCount)
    }
    const counterStyle= {
        border: '2px solid blue'
    }
    return(
        <div style={counterStyle}>
        <h1>Counter:{count}</h1>
        <button onClick={()=>handleAdd()}>Add</button>
        </div>
    )
}