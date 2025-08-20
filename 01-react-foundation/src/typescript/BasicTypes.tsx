
export const BasicTypes = () => {

  const name: string = 'Santiago Guzman';
  const age: number = 20;
  const isStudent: boolean = true;
  //const nameArray: string[] = ['Santiago', 'Guzman', 'Perez'];

  // Puede contener diferentes tipos de datos
  const powers:string[] = ['fly', 'speed', 'strength'];

  return (
    <>
      <div>BasicTypes </div>
      {name }  {age} {isStudent}
      <br />
      {powers.join(', ')}
    </>
    
  )
}
