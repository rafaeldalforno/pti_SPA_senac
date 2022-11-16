import "./CardPrato.css";

export function CardPrato({ prato }) {
  return (
    <div className="cardPrato">
      <img src={prato.foto} />

      <span className="nomePrato">{prato.nome}</span>

      <span className="precoPrato">{prato.preco}</span>

      <a className="button" href="#">
        detalhes
      </a>
    </div>
  );
}
