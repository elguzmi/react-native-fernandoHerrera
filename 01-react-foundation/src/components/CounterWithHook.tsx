import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {
  const  {counter, increaseBy} = useCounter({initialValue: 5})

  return (
    <div>
      <h3>Counter: <small> {counter}  </small> </h3>
      <button onClick={()=>increaseBy(1)}>+1</button>
      <button onClick={()=>increaseBy(-1)}>-1</button>
    </div>
  )
}