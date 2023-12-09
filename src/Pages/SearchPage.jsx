import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/search.css";
import axios from 'axios';
import ApiProdutos from '../service/produtos'

export function SearchPage() {
  const [value, setValue] = useState('all')
  const [dados,setDados] = useState([])
  const [searchText, setSearchText] = useState('');


  //Fazer requisição de produtos
  useEffect(() => {
    ApiProdutos.pegaTodosProdutos()
    .then((data) =>{
      setDados(data)
    })
      

  }, [])

  console.log(dados)
  return (
    <>
      <Navbar />

      <section className="box">
        <div className="box-content">
          <h2>Qual sua fome hoje?</h2>
          <input 
            type="search" 
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />

          <div className="botao">
            <div>            
              <h3>Categoria</h3>
                <select name="categoria" onChange={e => setValue(e.target.value)}>
                  <option value="all">Tudo</option>
                  <option value="Entrada">Entrada</option>
                  <option value="Sobremesa">Sobremesa</option>
                  <option value="Prato Principal">Prato Principal</option>
                </select>
              
            </div>

          </div>
        </div>
      </section>
    
      <section className="products">
        {dados.length > 0 ? (
          <ul>
            {dados
              //Filtro de pesquisa
              .filter(item => {
                const lowerCaseSearchText = searchText.toLowerCase()
                const lowerCaseNomeProduto = item.nome_produto.toLowerCase()
                return lowerCaseNomeProduto.includes(lowerCaseSearchText)
              })
              .filter(item => {
                // Se a opção for 'all', retorna true para todos os itens
                if (value === 'all') {
                  return true;
                }
                // Caso contrário, filtra pelos itens que correspondem à categoria selecionada
                return item.descricao === value;
              })
              .map((item) => (
                <div className="card" key={item.id_produto}>
                  <div className="card-img">
                    <img src={item.image} alt="" />
                    <p>R$: {item.preco} </p>
                    <button>MAIS INFORMAÇÕES</button>
                  </div>
                  <div className="card-content">
                    <h2>{item.nome_produto}</h2>
                    <a href="">{item.fk_id_restaurante}</a>
                    <p>Descrição: {item.descricao}</p>
                  </div>
                </div>
              ))}
          </ul>
        ) : (
          <p>carregando...</p>
        )}

      </section>
    </>
  );
}

