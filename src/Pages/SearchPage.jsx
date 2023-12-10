import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";

import ApiProdutos from '../service/produtos';

import ApiRestaurantes from "../service/restaurantes";

import "../Styles/search.css";




export function SearchPage() {

  const [selectedRestaurante, setSelectedRestaurante] = useState(null);

  const [restaurantes, setRestaurantes] = useState([]);

  const [produtos, setProdutos] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [categoria, setCategoria] = useState('all');

  const [precoFilter, setPrecoFilter] = useState('all');

  const [selectedRestauranteData, setSelectedRestauranteData] = useState(null);




  useEffect(() => {

    // Fazer requisição de Restaurantes 

    ApiRestaurantes.pegaTodosRestaurantes()

      .then((response) => {

        setRestaurantes(response.data);

      });




    // Faz requisição de produtos 

    ApiProdutos.pegaTodosProdutos()

      .then((response) => {

        setProdutos(response.data);

      });

  }, []);




  useEffect(() => {

    // Carregar dados do restaurante selecionado 

    if (selectedRestaurante) {

      const restauranteData = restaurantes.find(restaurante => restaurante.id_restaurante.toString() === selectedRestaurante);

      setSelectedRestauranteData(restauranteData);

    } else {

      setSelectedRestauranteData(null);

    }

  }, [selectedRestaurante, restaurantes]);




  const handleRestauranteChange = (restauranteId) => {

    // Setar o restaurante selecionado 

    setSelectedRestaurante(restauranteId);

  };




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

              <h3>Restaurantes</h3>

              <select

                name="restaurantes"

                onChange={(e) => handleRestauranteChange(e.target.value)}

              >

                <option value={null}>Selecionar restaurante</option>

                {restaurantes.map((item) => (

                  <option key={item.id_restaurante} value={item.id_restaurante}>

                    {item.nome_restaurante}

                  </option>

                ))}

              </select>

            </div>




            <div>

              <h3>Categoria</h3>

              <select name="categoria" onChange={(e) => setCategoria(e.target.value)}>

                <option value="all">Tudo</option>

                <option value="Entrada">Entrada</option>

                <option value="Sobremesa">Sobremesa</option>

                <option value="Prato Principal">Prato Principal</option>

              </select>

            </div>




            <div>

              <h3>Preço</h3>

              <select name="preco" onChange={(e) => setPrecoFilter(e.target.value)}>

                <option value="all">Qualquer Preço</option>

                <option value="maiorpreco">Maior Preço</option>

                <option value="menorpreco">Menor Preço</option>

              </select>

            </div>

          </div>

        </div>

      </section>




      {selectedRestauranteData && (

        <section className="restaurant-info">

          <div className="nome">

            <h2>{selectedRestauranteData.nome_restaurante}</h2>

          </div>

          <div className="logo">

            <img src={selectedRestauranteData.url_logo} alt={`Logo ${selectedRestauranteData.nome_restaurante}`} />

          </div>

        </section>

      )}




      <section className="products">

        {produtos

          .filter((item) => {

            // Filtrar por nome do produto 

            const lowerCaseSearchText = searchText.toLowerCase();

            const lowerCaseNomeProduto = item.nome_produto.toLowerCase();

            return lowerCaseNomeProduto.includes(lowerCaseSearchText);

          })

          .filter((item) => {

            // Filtrar por restaurante selecionado 

            return !selectedRestaurante || item.fk_id_restaurante.toString() === selectedRestaurante;

          })

          .filter((item) => {

            // Filtrar por categoria 

            return categoria === 'all' || item.descricao === categoria;

          })

          .filter((item) => {

            // Filtrar por preço 

            if (precoFilter === 'all') {

              return true;

            } else if (precoFilter === 'maiorpreco') {

              // Lógica para filtrar por maior preço 




              return item.preco >= 50; // Exemplo: considera produtos com preço igual ou superior a 50 

            } else if (precoFilter === 'menorpreco') {

              // Lógica para filtrar por menor preço 

              // Adapte conforme necessário 

              return item.preco < 50; // Exemplo: considera produtos com preço inferior a 50 

            }

            return true;

          })

          .map((item) => (

            <div className="card" key={item.id_produto}>

              <div className="card-img">

                <img src={item.url_imagem} alt="" />

                <p>R$: {item.preco} </p>

                <button>MAIS INFORMAÇÕES</button>

              </div>

              <div className="card-content">

                <h2>{item.nome_produto}</h2>

                <p>Descrição: {item.descricao}</p>

              </div>

            </div>

          ))}

      </section>

    </>

  );

}




