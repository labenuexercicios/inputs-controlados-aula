import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mail, setMail] = useState('');
  
  function handleName(e){
    setName(e.target.value)
    console.log(e.target.value);
  }

  function handleAge(e){
    setAge(e.target.value)
    console.log(e.target.value)
  }

  function handleMail(e){
    setMail(e.target.value)
    console.log(e.target.value)
  }


  const clear = (e)=>{
    let data = {
      name: name,
      age: Number(age),
      email: mail
    }
    console.log(data);

    setName('');
    setAge('');
    setMail('')
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={handleName} value={name}/>
        </label>
        <label>
          Idade:
          <Input onChange={handleAge} value={age}/>
        </label>
        <label>
          E-mail:
          <Input onChange={handleMail} value={mail}/>
        </label>
      <button onClick={clear}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage