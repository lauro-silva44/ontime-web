import TarrafalPng from "../assets/placesImages/tarrafal.png";
import BoaEntradaPng from "../assets/placesImages/boaEntrada.png";
import CalhetaPng from "../assets/placesImages/calheta.png";
import CidadeVelhaPng from "../assets/placesImages/cidadeVelha.png";
import SaoDomingosPng from "../assets/placesImages/gruta.png";
import PraiaBaixoPng from "../assets/placesImages/praiaBaixo.png";
import BarragemPng from "../assets/placesImages/baragem.png";
import RuiVazPng from "../assets/placesImages/ruiVaz.png";

const mostVisited = [
  {
    id: 1,
    name: "Mar di Riba",
    city: "Tarrafal",
    imagePath: TarrafalPng,
  },
  {
    id: 2,
    name: "Boa Entrada",
    city: "Santa Catarina",
    imagePath: BoaEntradaPng,
  },
  {
    id: 3,
    name: "Praça Calheta",
    city: "Calheta Sã Miguel",
    imagePath: CalhetaPng,
  },
  {
    id: 4,
    name: "Centro histórico",
    city: "Cidade Velha",
    imagePath: CidadeVelhaPng,
  },
];
const recomended = [
  {
    id: 1,
    name: "Barragem de Poilão",
    city: "São Domingos",
    imagePath: BarragemPng,
  },
  {
    id: 2,
    name: "Praia Baixo",
    city: "São Domingos",
    imagePath: PraiaBaixoPng,
  },
  {
    id: 3,
    name: "Pico d’ Antónia",
    city: "Rui Vaz",
    imagePath: RuiVazPng,
  },
  {
    id: 4,
    name: "Gruta de R. de Cal",
    city: "São Domingos",
    imagePath: SaoDomingosPng,
  },
];

export { mostVisited, recomended };
