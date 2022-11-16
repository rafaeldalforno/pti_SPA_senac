import "./styles.css";
import { CardPrato } from "./components/CardPrato/CardPrato";

export default function App() {
  const stewed = {
    foto:
      "https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2017/03/cabbage-stew-fg-410x401.jpg",
    nome: "Stewed carbbage",
    preco: "R$ 50,00"
  };

  const sorvete = {
    foto:
      "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia11042/slide/sorvetes1-cursos-cpt.jpg",
    nome: "Sorvete",
    preco: "R$ 29,00 /Kg"
  };

  return (
    <div className="App">
      <h1>Senac Restaurante</h1>
      <main>
        {/* <CardPrato prato={stewed} /> */}
        <CardPrato prato={sorvete} />
      </main>
    </div>
  );
}
