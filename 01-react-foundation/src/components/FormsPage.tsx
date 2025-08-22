import type { JSX } from "react"
import { useForm } from "react-hook-form"

type FormInputs = {
  email:string;
  password:string;
}

export const FormsPage = ():JSX.Element => {

  
  const { register, handleSubmit , watch } = useForm<FormInputs>({

    defaultValues:{
      email:'santiago@hotmail.com',
      password:'ABC123'
    }
  })

  const emailWatch = watch('email')

  

  const onSubmit = (data: FormInputs)=>{
    console.log(data)
  }

  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <h3>Formularios</h3>
        <div style={{display:'flex', flexDirection:'column', gap:10}}>
          <input type="text" placeholder="Email" {...register('email' , {required:true})} />
          <input type="text" placeholder="Password" {...register('password')} />
          <button type="submit">Ingresar</button>

          {emailWatch}
        </div>
      </form>
    </>
  )
}