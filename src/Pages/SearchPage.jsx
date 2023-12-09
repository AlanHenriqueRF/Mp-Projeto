import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/search.css";

export function SearchPage() {
  const [button, setButton] = useState([]);
  const [filteredButton, setFilteredButton] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [price,setPrice] = useState(0)
  const [distance,setDistance] = useState(0)

  useEffect(() => {
    const fazerRequisicao = () => {
      fetch("https://raw.githubusercontent.com/rodrigo1835/DadosParaUmRequest/main/buscar.json")
        .then(res => res.json()) 
        .then(resultado => {
          setButton(resultado);
          handleSearch(); // Chama a função de filtro imediatamente após a busca
        })
        .catch(erro => console.error("Erro ao buscar dados:", erro));
    };

    fazerRequisicao();
  }, []); // Adicione um array vazio como dependência para garantir que a requisição seja feita apenas uma vez ao montar o componente

  const handleSearch = () => {
    const filteredResults = button.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredButton(filteredResults);
  };

  useEffect(() => {
    handleSearch();
  }, [searchText, button]);

  return (
    <>
      <Navbar />

      <section className="box">
        <div className="box-content">
          <h2>Qual sua fome hoje?</h2>
          <input 
            type="search" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
          />

          <div className="botao">
            <div>            
              <h3>Preço</h3>
              <input type="range" onChange={(e) => setPrice(e.target.value)} />
              {console.log(price)}
            </div>

            <div>
              <h3>Distancia</h3>
              <input type="range" onChange={(e) => setDistance(e.target.value)} />
              {console.log(distance)}
            </div>

          </div>
        </div>
      </section>

      <section className="products">
        {filteredButton.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-img">
              <img src={item.image} alt="" />
              <p>R$: {item.price} </p>
              <button>MAIS INFORMAÇÕES</button>
            </div>
            <div className="card-content">
              <h2>{item.name}</h2>
              <a href="">{item.restaurant}</a>
              <p>Descrição: {item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
