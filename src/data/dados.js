const bruxos = [
  {
    "id": 1,
    "nome": "Harry Potter",
    "casa": "Grifinória",
    "ano": 7,
    "varinha": "Azevinho e pena de fênix, 28cm",
    "mascote": "Coruja (Edwiges)",
    "patrono": "Cervo",
    "especialidade": "Sobreviver a Voldemort",
    "status": true,
  },
  {
    "id": 2,
    "nome": "Hermione Granger",
    "casa": "Grifinória",
    "ano": 7,
    "varinha": "Videira e fibra de coração de dragão, 27cm",
    "mascote": "Gato (Bichento)",
    "patrono": "Lontra",
    "especialidade": "Saber tudo de tudo",
    "status": true,
  },
  {
    "id": 3,
    "nome": "Ron Weasley",
    "casa": "Grifinória",
    "ano": 7,
    "varinha": "Salgueiro e crina de unicórnio, 35cm",
    "mascote": "Rato (Perebas)",
    "patrono": "Terrier Jack Russell",
    "especialidade": "Xadrez Bruxo",
    "status": true,
  },
  {
    "id": 4,
    "nome": "Draco Malfoy",
    "casa": "Sonserina",
    "ano": 7,
    "varinha": "Espinheiro e crina de unicórnio, 25cm",
    "mascote": "Coruja (não nomeada)",
    "patrono": "Desconhecido",
    "especialidade": "Ser irritante",
    "status": true,
  },
  {
    "id": 5,
    "nome": "Luna Lovegood",
    "casa": "Corvinal",
    "ano": 6,
    "varinha": "Madeira de cerejeira e núcleo desconhecido",
    "mascote": "Nenhum",
    "patrono": "Lebre",
    "especialidade": "Ver criaturas imaginárias (ou não)",
    "status": true,
  },
  {
    "id": 6,
    "nome": "Neville Longbottom",
    "casa": "Grifinória",
    "ano": 7,
    "varinha": "Cerejeira e pelo de unicórnio, 30cm",
    "mascote": "Sapo (Trevor)",
    "patrono": "Não conhecido",
    "especialidade": "Herbologia avançada",
    "status": true,
  },
  {
    "id": 7,
    "nome": "Cho Chang",
    "casa": "Corvinal",
    "ano": 7,
    "varinha": "Salgueiro e fibra de coração de dragão, 23cm",
    "mascote": "Coruja (não nomeada)",
    "patrono": "Cisne",
    "especialidade": "Quadribol (Apanhadora)",
    "status": true,
  },
  {
    "id": 8,
    "nome": "Cedrico Diggory",
    "casa": "Lufa-Lufa",
    "ano": 7,
    "varinha": "Freixo e pelo de unicórnio, 32cm",
    "mascote": "Nenhum",
    "patrono": "Não conhecido",
    "especialidade": "Cavalheirismo",
    "status": false,
  },
  {
    "id": 9,
    "nome": "Bellatrix Lestrange",
    "casa": "Sonserina",
    "ano": 6,
    "varinha": "Nogueira e fibra de coração de dragão, 32cm",
    "mascote": "Nenhum",
    "patrono": "Não conhecido",
    "especialidade": "Artes das Trevas",
    "status": false,
  },
  {
    "id": 10,
    "nome": "Neville Longbottom",
    "casa": "Grifinória",
    "ano": 9,
    "varinha": "Abeto e fibra de coração de dragão, 24cm",
    "mascote": "Gato",
    "patrono": "Gato",
    "especialidade": "Transfiguração",
    "status": true,
  },
  {
    "id": 11,
    "nome": "Minerva McGonagall",
    "casa": "Grifinória",
    "ano": 12,
    "varinha": "Pinheiro e fibra de coração de dragão, 24cm",
    "mascote": "Nenhum",
    "patrono": "Gato",
    "especialidade": "Transfiguração",
    "status": true,
  },
  {
    "id": 12,
    "nome": "Severo Snape",
    "casa": "Sonserina",
    "ano": 12,
    "varinha": "Ébano e pelo de unicórnio, 30cm",
    "mascote": "Nenhum",
    "patrono": "Corça",
    "especialidade": "Poções",
    "status": false,
  },
  {
    "id": 13,
    "nome": "Sirius Black",
    "casa": "Grifinória",
    "ano": 12,
    "varinha": "Nogal e fibra de coração de dragão, 28cm",
    "mascote": "Nenhum",
    "patrono": "Cão",
    "especialidade": "Animago",
    "status": false,
  },
  {
    "id": 14,
    "nome": "Remus Lupin",
    "casa": "Grifinória",
    "ano": 12,
    "varinha": "Cipreste e pelo de unicórnio, 27cm",
    "mascote": "Nenhum",
    "patrono": "Lobo",
    "especialidade": "Defesa Contra as Artes das Trevas",
    "status": false,
  },
  {
    "id": 15,
    "nome": "Ninfadora Tonks",
    "casa": "Lufa-Lufa",
    "ano": 10,
    "varinha": "Freixo e pelo de unicórnio, 25cm",
    "mascote": "Nenhum",
    "patrono": "Lobo",
    "especialidade": "Metamorfomaga",
    "status": false,
  }
];

const varinhas = [
    {
      "id": 1,
      "material": "Azevinho",
      "núcleo": "Pena de Fênix",
      "comprimento": "28cm"
    },
    {
      "id": 2,
      "material": "Videira",
      "núcleo": "Fibra de Coração de Dragão",
      "comprimento": "27cm"
    },
    {
      "id": 3,
      "material": "Salgueiro",
      "núcleo": "Pelo de Unicórnio",
      "comprimento": "35cm"
    },
    {
      "id": 4,
      "material": "Carvalho Inglês",
      "núcleo": "Pelo de Testrálio",
      "comprimento": "32cm"
    }
]

const animais = [
  {
    "id": 1,
    "nome": "Coruja",
    "tipo": "Correio/Companhia"
  },
  {
    "id": 2,
    "nome": "Gato",
    "tipo": "Companhia"
  },
  {
    "id": 3,
    "nome": "Sapo",
    "tipo": "Companhia"
  },
  {
    "id": 4,
    "nome": "Rato",
    "tipo": "Companhia"
  }
]

const pocoes = [
  {
    "id": 1,
    "nome": "Polissuco",
    "efeito": "Transforma na aparência de outra pessoa"
  },
  {
    "id": 2,
    "nome": "Felix Felicis",
    "efeito": "Sorte temporária"
  },
  {
    "id": 3,
    "nome": "Amortentia",
    "efeito": "Poção do amor"
  },
  {
    "id": 4,
    "nome": "Veritaserum",
    "efeito": "Força a dizer a verdade"
  }
]

const casas = [
  {
    "id": 1,
    "nome": "Grifinória",
    "animal": "🦁",
    "fundador": "Godrico Gryffindor"
  },
  {
    "id": 2,
    "nome": "Sonserina",
    "animal": "🐍",
    "fundador": "Salazar Slytherin"
  },
  {
    "id": 3,
    "nome": "Corvinal",
    "animal": "🦅",
    "fundador": "Rowena Ravenclaw"
  },
  {
    "id": 4,
    "nome": "Lufa-Lufa",
    "animal": "🦡",
    "fundador": "Helga Hufflepuff"
  }
];

export default {bruxos, varinhas, animais, pocoes, casas};