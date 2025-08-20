
interface Person{
  firstName: string;
  lastName : string;
  age : number;
  address: Address
}

interface Address {
  country:string;
  houseNumber:number;
}

export const ObjectLiteral = () => {

  const person:Person = {
    age: 20,
    firstName: "Santiago",
    lastName: "Guzman",
    address:{
      country: "Colombia",
      houseNumber: 123
    }
  }


  return (
    <>
      <h3>ObjectLiteral</h3>
      <pre>
        {JSON.stringify(person, null , 2)}
      </pre>
    </>
  )
}
