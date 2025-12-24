import { Suspense } from 'react'
import './App.css'
import Batsman from './Bastman'
import Counter from './counter'
import Users from './Users'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

function App() {
  function handleClick(){
      alert('clicked')
    }
    const handleClick2= ()=>{
      alert('clicked again')
    }
    const newNumber = (n)=>{
      let num = 5;
      alert(n+num)
    }
  return (
    
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Users fetchUsers = {fetchUsers}>

      </Users>
    </Suspense>
    <Counter></Counter>
    <Batsman></Batsman>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>newNumber(10)}>Click2n</button>
      
    </>
  )
}

export default App
