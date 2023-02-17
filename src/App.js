import { useState } from 'react';
import {FileSearch, FiSearch} from 'react-icons/fi'
import './style.css'
import viaCep from './services/viaCep';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  async function handleSearch(){
    if(input ===''){
      alert("preencha algum cep")
      return;
    }
    try{
      const response = await viaCep.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    }catch{
      alert("Ops! erro ao buscar CEP")
      setInput('')
    }
  }
  return (
    <div className="container">
        <h1 className="Title">Buscar Endereço</h1>
        <div className = "container-input">
          <input type="text" placeholder="Digite seu CEP..." value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className='btnSearch' onClick={handleSearch}>
              <FiSearch size={25} color="#FFF"/>
          </button>
        </div>
        {Object.keys(cep).length > 0 && (
          <main className='main'>
          <h2>Cep: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade: {cep.localidade}</span>
          <span>Estado: {cep.uf}</span>
          <span>DDD: {cep.ddd}</span>
        </main>
        )}
    </div>
  );
}

export default App;
