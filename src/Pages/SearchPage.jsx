import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar"
import "../Styles/search.css"
import ApiProdutos from '../service/produtos'
import ApiRestaurantes from "../service/restaurantes"

export function SearchPage() {
  const [value, setValue] = useState('all')
  const [produtos,setProdutos] = useState([])
  const [restaurantes,setRestaurantes] = useState([])
  const [nome, setNome] = useState('')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    //Faz requisição de produtos
    ApiProdutos.pegaTodosProdutos()
    .then((produtos) =>{
      setProdutos(produtos.data)
    })

    //Fazer requisição de Restaurantes
    ApiRestaurantes.pegaTodosRestaurantes()
    .then((restaurantes) =>{
      setRestaurantes(restaurantes.data)
    })

  }, [])


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

            <div>
              <h3>Restaurantes</h3>
              <select name="restaurantes">
                {restaurantes.map(item => (
                  <option value={item.nome_restaurante}>{item.nome_restaurante}</option>
                    
                ))}
                </select>
            </div>

            <div>
              <h3>Preço</h3>
              <select name="preco">
                <option value="maiorpreco">Maior Preço</option>
                <option value="menorpreco">Menor Preço</option>
              </select>
            </div>

          </div>
        </div>
      </section>
    
      <section className="products">
        {produtos.length > 0 ? (
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

