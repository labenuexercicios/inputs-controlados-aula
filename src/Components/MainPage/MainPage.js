import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [emailInput, setEmail] = useState("");
  const [senhaInput, setPassword] = useState("");

  const handleChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleChange2 = (event) => {
    setAgeInput(event.target.value);
  };

  const handleChange3 = (event) => {
    setMaritalStatus(event.target.value);
  };

  const handleChange4 = (event) => {
    setEmail(event.target.value);
  };

  const handleChange5 = (event) => {
    setPassword(event.target.value);
  };

  const cleanInputValues = (event) => {
    event.preventDefault();

    setEmail(""); setAgeInput(""); setPassword(""); setNameInput(""); 
     


    if (
      nameInput.length &&
      ageInput.length &&
      maritalStatus.length &&
      emailInput.length &&
      senhaInput.length
    ) {
      console.log(nameInput, ageInput, maritalStatus, emailInput, senhaInput);
    } else {
      alert("Preencha os campos abaixo");
    }
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={cleanInputValues}>
        <label>
          Nome:
          <Input onChange={handleChange} value={nameInput} />
        </label>
        <label>
          Idade:
          <Input type={"number"} onChange={handleChange2} value={ageInput} />
        </label>
        <select onChange={handleChange3}>
          <option disabled value="">
            Selecione
          </option>
          <option value="Solteiro">Solteiro (a)</option>
          <option value="Casado">Casado (a)</option>
          <option value="Viuvo">Viuvo (a)</option>
          <option value="Divorciado">Divorciado (a)</option>
        </select>
        <label>
          Email: <Input onChange={handleChange4} value={emailInput} />
        </label>
        <label>
          Senha:
          <Input type={"password"} onChange={handleChange5} value={senhaInput} />
        </label>
        <button disabled={!nameInput || !ageInput || !maritalStatus || !emailInput || !senhaInput}>
          Enviar dados
        </button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
