import axios from "axios"
import { useEffect, useState, type JSX } from "react"
import type{ ReqRespUserListResponse , User} from "../interfaces"


const loadUser = async ():Promise<User[]>=>{
  
  try {
    const { data } =  await axios.get<ReqRespUserListResponse>('https://reqres.in/api/users?page=2',{headers:{'x-api-key':'reqres-free-v1'}});
    console.log(data.data)
    return data.data
    
  } catch (error) {
    console.log(error)
    return []
  }
}

export const UsersPage = () => {

  const [users, setUsers] = useState<User[]>([])
  
  useEffect(()=>{
    loadUser()
    .then(setUsers)
    
  },[])

  return (
    <>
       <h3>Usuario: </h3>
       <table border={0}>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
          {
            users.map(user=>(
              <UserRow key={user.id} user={user}/> 
            ))
          }

        </tbody>
       </table>

       <div>
        <button onClick={()=>{}}>Prev</button>
        <button onClick={()=>{}}>Next</button>
       </div>

    </>
  )
}

interface Props{
  user:User
}

const UserRow =({user}:Props):JSX.Element=>{
  const { avatar, first_name, last_name, email} = user
  return (
    <tr >
      <td>
        <img src={avatar} alt={first_name} width={50} height={50} />
      </td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
    </tr>
  )
}