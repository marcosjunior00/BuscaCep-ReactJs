import { useState } from 'react';
import api from './services/api';
import { FaSistrix } from 'react-icons/fa';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');

  async function Search() {
    
    if (input == '') {
      alert('Coloque um CEP válido!');
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      console.log(cep);
      setInput('');
    } catch {
      alert('Erro ao buscar seu CEP, digite um CEP válido!');
      setInput('');
    }

  }
  
  return (
    <div className="container">
      <h1>Busca CEP</h1>
      
      <div className='containerInput'>
        <input 
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button 
          className='btnSearch'
          onClick={Search}
        > 
          <FaSistrix className='btnSearch' />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade: {cep.localidade}</span>
        <span>Estado: {cep.uf}</span>
      </main>

    </div>
  );
}

export default App;