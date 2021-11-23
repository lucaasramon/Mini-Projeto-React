import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import UINumber from "./fotmat";

function App() {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    async function getProduto() {
      const produtos = [
        {
          idProduto: 1,
          descricao:
            "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          valor: 2000,
          favoriteSelected: false,
          produtoSelected: false,
        },
        {
          idProduto: 2,
          descricao:
            "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
          valor: 1500,
          favoriteSelected: false,
          produtoSelected: false,
        },
      ];

      setProduto(produtos);
    }

    getProduto();
  }, []);

  const [show, setShow] = useState();
  const [click, setFavoriteClicked] = useState();

  // Função para selecionar produto
  function showButton(e) {
    e.preventDefault();
    var idButton = e.target.getAttribute("idButton");

    produto.forEach((prod) => {
      if (prod.idProduto == idButton) {
        prod.produtoSelected = !prod.produtoSelected;
      }
    });

    setShow(!show);
  }

  // Função para favoritar produto
  async function selectFavorite(e) {
    e.preventDefault();
    var idButton = e.target.getAttribute("idButton");

    produto.forEach((prod) => {
      if (prod.idProduto == idButton) {
        prod.favoriteSelected = !prod.favoriteSelected;
      }
    });

    setFavoriteClicked(!click);
  }

  return (
    <div className="App container">
      {produto.map((data) => (
        <Card style={{ width: "22rem" }}>
          {data.favoriteSelected ? (
            <Card.Img
              onClick={selectFavorite}
              className="favorite"
              favoritado={data.favoriteSelected}
              idButton={data.idProduto}
              variant="top"
              src="./favoriteSelect.png"
            />
          ) : (
            <Card.Img
              onClick={selectFavorite}
              className="favorite"
              idButton={data.idProduto}
              favoritado={data.favoriteSelected}
              variant="top"
              src="./favorite.png"
            />
          )}
          <Card.Img variant="top" src="./produto.png" />
          <Card.Body>
            <Card.Text>{data.descricao}</Card.Text>
            <Card.Subtitle className="mb-2 line text-muted">
              R$ {data.valor + 200},00
            </Card.Subtitle>
            <Card.Title>
              R$<UINumber format="">{data.valor}</UINumber>,00
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              em até <span className="text-black"> 10x de R$ {data.valor / 10},00 </span> sem juros
            </Card.Subtitle>

            <div className="center">
              {data.produtoSelected ? (
                <Button
                  onClick={showButton}
                  selecionado={data.produtoSelected}
                  idButton={data.idProduto}
                  variant="success"
                >
                  Adicionar
                </Button>
              ) : (
                <Button
                  onClick={showButton}
                  selecionado={data.produtoSelected}
                  idButton={data.idProduto}
                  variant="success"
                >
                  Adicionado
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
