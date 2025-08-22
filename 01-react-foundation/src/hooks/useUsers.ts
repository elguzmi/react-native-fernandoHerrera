import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { ReqRespUserListResponse, User } from "../interfaces";


const loadUser = async (page:number):Promise<User[]>=>{
  
  try {
    const { data } =  await axios.get<ReqRespUserListResponse>(`https://reqres.in/api/users?page=${page}`,{headers:{'x-api-key':'reqres-free-v1'}});
    console.log(data.data)
    return data.data
    
  } catch (error) {
    console.log(error)
    return []
  }
}

export const useUsers = ()=>{

  const [users, setUsers] = useState<User[]>([])
  const currentPageRef = useRef<number>(1);

  useEffect(()=>{
    loadUser(currentPageRef.current)
    .then(setUsers)
    
  },[])

  const nextPage = async ()=>{
    currentPageRef.current++
    const users = await loadUser(currentPageRef.current)
    if(users.length > 0) {
      setUsers(users)
    }else{
      currentPageRef.current--
    }
  }

  const previousPage = async()=>{

    if(currentPageRef.current < 1) return
    currentPageRef.current -= 1
    const users = await loadUser(currentPageRef.current)
    setUsers(users)
  }

  return {
    //Properties
    users,

    //Methods
    nextPage,
    previousPage
  }
}