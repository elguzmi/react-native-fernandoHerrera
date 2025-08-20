
export const BasicFunctions = () => {
  const addTwoNumbers = (a:number , b:number):number=>{
    return a + b;
  }
  
  return (
    <>
      <h3>BasicFunctions</h3>
      <span>El resultado de sumar : { addTwoNumbers(1,5) }</span>
    </>
  )
}