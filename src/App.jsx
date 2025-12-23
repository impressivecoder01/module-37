import './App.css'

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
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>newNumber(10)}>Click2n</button>
      
    </>
  )
}

export default App
