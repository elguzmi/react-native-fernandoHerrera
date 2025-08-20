import { useState } from "react"

export const Counter = () => {

  // useState<number> esto es un generico que se puede usar para definir el tipo de dato que se va a usar en el estado
  const [counter, setCounter] = useState<number>(0)

  const increaseBy = (value:number):void=>{
    console.log('1')
    setCounter(counter + value)
  }
  return (
    <div>
      <h3>Counter: <small> {counter}  </small> </h3>
      <button onClick={()=>increaseBy(1)}>+1</button>
      <button onClick={()=>increaseBy(-1)}>-1</button>
    </div>
  )
}