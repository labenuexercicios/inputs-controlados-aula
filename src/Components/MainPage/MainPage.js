import React, {useState} from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const [civilState, setCivilState] = useState('')
  const [password, setPassord] = useState('')
  const [email, setEmail] = useState('')

    // const handleChange = (e) =>{
    //   setNameInput(e.target.value)
    // }

    // const handleChange2 = (e) =>{
    //   setAgeInput(e.target.value)
    // }

    const handleChange = (e, setState) =>{
      setState(e.target.value)
    }


    const inputClear = (e) =>{
      e.preventDefault()
      return [setAgeInput(''), setCivilState(''), setEmail(''), setPassord(''), setNameInput('')]
      // if(nameInput.length && ageInput.length && civilState.length){
      //   console.log(nameInput, ageInput, civilState);
      // } else {
      //   alert('Preencha os campos abaixo')
      // }
    }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit = {inputClear}>
        <label>
          Nome:
          <Input value={nameInput} onChange ={(e) => handleChange(e,setNameInput)}/>
        </label>
        <label>
          Idade:
          <Input value = {ageInput} onChange={(e) => handleChange(e, setAgeInput)} />
        </label>

        <label >
          Email
          <Input value={email} onChange={(e) => handleChange(e, setEmail)} type={'email'} />
        </label>

        <label>
          Senha 
          <Input value={password} onChange={(e) => handleChange(e,setPassord)} type={'password'} />
        </label>

        <select value={civilState} onChange={(e) => handleChange(e,setCivilState)}>

        <option value="vazio">Selecione as opções abaixo</option>
        <option value="Nenhum">Nenhum</option>
          <option value="Solteiro">Solteiro (a)</option>
          <option value="Casado">Casado (a)</option>
          <option value="Viuvo">Viuvo (a)</option>
          <option value="Divorciado">Divorciado (a)</option>
        </select>
        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
