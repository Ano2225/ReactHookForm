import React from "react"
import {useForm, SubmitHandler } from 'react-hook-form';

type FormFiels = {
  mail: string
  password: string
}

const App = () => {
   const { register , handleSubmit,formState: {errors}
  } = useForm<FormFiels>();

  const onSubmit: SubmitHandler<FormFiels> = (data) => {
    console.log(data);
  }

  return (
    <div className='form' >
     <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('mail', 
      {required:"Mail required"})}
      type="text"
       placeholder='Email' />
     {errors.mail  && <div> {errors.mail?.message}</div>}
      <input {...register('password',
       {required: 'Passord required'})}
       type="password"
        name="password" />
      {errors.password && <div>{errors.password?.message}</div>}
      <button type="submit">Envoyer</button>
     </form>
    </div>
  )
}

export default App
