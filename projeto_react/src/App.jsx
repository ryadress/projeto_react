
import React, { useState } from 'react';
import './App.css'; // Adicionando o arquivo CSS

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(imcCalculado);
      definirClassificacao(imcCalculado);
    }
  };

  const definirClassificacao = (imcCalculado) => {
    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Calculadora de IMC</h1>
      <form onSubmit={calcularIMC} className="form">
        <div className="input-group">
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="btn">Calcular IMC</button>
      </form>

      {imc && (
        <div className="result">
          <h2>Seu IMC é: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}

export default App;


