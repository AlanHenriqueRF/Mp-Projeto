import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import "../Styles/search.css"
import ApiProdutos from '../service/produtos'
import ApiRestaurantes from "../service/restaurantes"
import axios from "axios";

//página referente às historietas EU02, EU03, EU04

export function SearchPage() {
  const [value, setValue] = useState('all')
  const [produtos,setProdutos] = useState([])
  const [restaurantes,setRestaurantes] = useState([])
  const [distancia, setDistancia] = useState('0')
  const [preco, setPreco] = useState('all')
  const [searchText, setSearchText] = useState('')
  

  let nomeRestaurante = {}


  useEffect(() => {
    //Faz requisição de produtos
    ApiProdutos.pegaTodosProdutos()
    .then((produtos) =>{
      setProdutos(produtos.data)
    })

    //Faz requisição de Restaurantes
    ApiRestaurantes.pegaTodosRestaurantes()
    .then((restaurantes) =>{
      setRestaurantes(restaurantes.data)
    })



  }, [])

  useEffect(() => {
    // Ordena produtos quando o estado de produtos ou preço muda

    if (preco === 'maiorpreco') {
      setProdutos(produtos.slice().sort((a, b) => b.preco - a.preco))
    } else if (preco === 'menorpreco') {
      setProdutos(produtos.slice().sort((a, b) => a.preco - b.preco))
    } 
  }, [produtos, preco]);
  
  useEffect(() => {
    if(distancia === 'longe') {
      setRestaurantes(restaurantes.slice().sort((a, b) => b.distancia_totem - a.distancia_totem))
    } else if (distancia == 'perto') {
      setRestaurantes(restaurantes.slice().sort((a, b) => a.distancia_totem - b.distancia_totem));
    }
  })
  


  //Dicionario relacionando id com o nome do restaurante
  restaurantes.forEach(restaurantes => {
    nomeRestaurante[restaurantes.id_restaurante] = restaurantes.nome_restaurante
  })

  console.log(value)
  
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
                  <option value="Restaurantes">Restaurantes</option>
                </select>
              
            </div>
            {value == "Restaurantes" && (
              <>
                <div>
                  <h3>Distância</h3>
                  <select name="distancia" onChange={e => setDistancia(e.target.value)}> 
                      <option value='all'> Selecione a distancia</option>
                      <option value="perto">Proximo a mim</option>
                      <option value="longe">Vou ter que andar</option>

                    </select>
                </div>

              </>
            )}
            {value !== 'Restaurantes' && (
              <div>
                <h3>Preço</h3>
                <select name="preco" onChange={e => setPreco(e.target.value)}>
                  <option value="all">Qualquer Preço</option>
                  <option value="maiorpreco">Maior Preço</option>
                  <option value="menorpreco">Menor Preço</option>
                </select>
              </div>
            )}


          </div>
        </div>
      </section>
    
      <section className="products">
        {produtos.length > 0 && value !== 'Restaurantes' ? (
          <ul>
            {produtos
              //Filtro de pesquisa
              .filter(item => {
                const lowerCaseSearchText = searchText.toLowerCase()
                const lowerCaseNomeProduto = item.nome_produto.toLowerCase()
                return lowerCaseNomeProduto.includes(lowerCaseSearchText)
              })
              .filter(item => {
                // Se a opção for 'all', retorna true para todos os itens
                if (value === 'all') {
                  return true
                }
                // Caso contrário, filtra pelos itens que correspondem à categoria selecionada
                else {
                  if (value === 'Restaurantes') {
                    return true
                  }
                  return item.descricao === value;
                }
              })

              .map( (item) => (
                
                <>
                  {value !== 'Restaurantes' && (
                    <div className="card" key={item.id_produto}>
                      <div className="card-img">
                        <img src={item.url_imagem} alt="" />
                        <p>R$: {item.preco} </p>
                        <button>MAIS INFORMAÇÕES</button>
                      </div>

                      <div className="card-content">
                        <h2>{item.nome_produto}</h2>
                        <a href="">{nomeRestaurante[item.fk_id_restaurante]}</a>
                        <p>Descrição: {item.descricao}</p>
                      </div>
                  </div>
                  )}

                </>

              ))}
          </ul>
        ) : (
          <>
            {restaurantes
              .filter(item => {
                const lowerCaseSearchText = searchText.toLowerCase()
                const lowerCaseNomeRestaurante = item.nome_restaurante.toLowerCase()
                return lowerCaseNomeRestaurante.includes(lowerCaseSearchText)
              })
            
            
              .map((item) => (
                <div className="card">
                  <div className="card-img">
                    <img src={item.url_logo} alt="" />
                  </div>

                  <div className="card-content">
                    <h2>{item.nome_restaurante}</h2>
                    <a href="">Página do Restaurante</a>
                    <p>Distãncia: {item.distancia_totem}m</p>
                  </div>
              </div>
            ))}
          </>
        
        )}

      </section>
    </>
  );
}