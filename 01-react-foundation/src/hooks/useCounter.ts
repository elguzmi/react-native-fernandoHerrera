import { useState } from "react"

interface Options {
  initialValue?:number;
  maxValue?:number;
  minValue?:number;
}

export const useCounter = ({initialValue = 10, maxValue = 100, minValue = 0}:Options = {}) => {
  
   // useState<number> esto es un generico que se puede usar para definir el tipo de dato que se va a usar en el estado
   const [counter, setCounter] = useState<number>(initialValue)

   const increaseBy = (value:number):void=>{
     if(counter <= minValue && value < 0) return;
     setCounter(counter + value)
   }

  return {
    // Properties
    counter,

    // Methods
     increaseBy
  }
}