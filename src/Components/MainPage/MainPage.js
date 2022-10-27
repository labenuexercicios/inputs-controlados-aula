import React, {useState} from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

const [nome, setNome] = useState("")
const [idade, setIdade] = useState("")
const [email, setEmail] = useState("")

  const onChangeName = (event) => {
    console.log("mudei o input nome")
    console.log(event.target.value)
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    console.log("mudei o input idade")
    console.log(event.target.value)
    setIdade(event.target.value)
  }
  const onChangeEmail = (event) => {
    console.log("mudei o input email")
    console.log(event.target.value)
    setEmail(event.target.value)
  }

const inputData = () => {
  console.log(`
  Nome: ${nome}
  Idade: ${idade}
  E-mail: ${email}`)
  setNome("")
  setIdade("")
  setEmail("")
}

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input type="text" onChange={onChangeName} value={nome} />
        </label>
        <label>
          Idade:
          <Input onChange={onChangeIdade} value={idade}/>
        </label>
        <label>
          E-mail:
          <Input type="text" onChange={onChangeEmail} value={email}/>
        </label>
      <button onClick={inputData}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage