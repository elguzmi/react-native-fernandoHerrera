import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {

  const  authStatus = useAuthStore((state)=> state.status);
  const  login = useAuthStore((state)=> state.login);
  const  logout = useAuthStore((state)=> state.logout);
  const  user = useAuthStore((state)=> state.user);
  
  useEffect(()=>{
    setTimeout(()=>{logout()},1500)
  },[])

  if(authStatus === 'checking'){
    return <h3>Loading ... </h3>
  }
  
  return (
    <>
      <h3>Login Page</h3>
      {authStatus === 'authenticated' ? <div>Authenticated como :  {JSON.stringify(user)}</div> : <div>Not Authenticated</div>}

      {authStatus === 'authenticated' ? 
        <button onClick={()=>logout()}> LogOut</button> 
        :(<button onClick={()=>login('john.doe@example.com','1234567890')}>Login</button>)}
    
    </>
  )
}