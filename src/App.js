import {FiSearch} from 'react-icons/fi';
import './style.css'
import {useState} from 'react';
import api from './services/api'
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
  </style>



function App() {
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
  </style>




  const [input,setInput] = useState('')
  const [cep,setCep] = useState({});

 async function search(){
    if(input == ''){
      alert('Por favor prencha com um cep')
    }
    else if(input.length < 8){
      alert('O cep deve haver 8 digitos')
    }
    else if(input.length > 8){
      alert('O cep deve haver 8 digitos')
    }

    try{
      const res = await api.get(`${input}/json`);
      setCep(res.data)
      setInput('')
    }catch(err){
      setInput('')
    }
  }


  return (
  <div className="container">
    <h1 className="tittle">Busca cep</h1>
    <div className="container-input">
      <input type="text" placeholder ="Digite o cep" value={input} onChange={(e) => setInput(e.target.value)}/>
      
      <button className="button-search" onClick={search}>
        <FiSearch size="20" color="white"/>
      </button>
    </div>
    {Object.keys(cep).length > 0 &&(

      <main>
      <h2>Cep:{cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>
    </main>

    )}
   

  </div>
  );
}

export default App;
