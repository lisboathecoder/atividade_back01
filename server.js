import express from "express"
import dados from "./src/data/dados.js";

const serverPort = 3000;
const app = express().use(express.json());
app.get('/', (req, res) => {
  res.send(`
    <div style="
      background: linear-gradient(135deg, #1a237e, #3949ab);
      color: white;
      padding: 50px;
      text-align: center;
      font-family: 'Georgia', serif;
      min-height: 100vh;
      margin: 0;
    ">
      <h1 style="
        font-size: 3rem;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        margin-bottom: 20px;
      ">
        ⚡ Bem-vindo à Hogwarts! ⚡
      </h1>
      <p style="font-size: 1.5rem; margin: 20px 0;">
        🏰 Escola de Magia e Bruxaria
      </p>
      <p style="font-size: 1.2rem; opacity: 0.9;">
        "É preciso muito mais que coragem para enfrentar nossos inimigos, 
        mas muito mais ainda para enfrentar nossos amigos."
      </p>
      <div style="margin-top: 30px;">
        <span style="font-size: 1.1rem;">🦁 Grifinória | 🐍 Sonserina | 🦅 Corvinal | 🦡 Lufa-lufa</span>
      </div>
    </div>
  `);
});

const  {bruxos, casas, pocoes, varinhas, animais} = dados;

// Rota das casas
app.get("/bruxos/casa/:casa", (req, res) => {
  let casa = req.params.casa;
  const bruxosDaCasa = bruxos.filter(b => b.casa.toLowerCase() === casa.toLowerCase());
  if (bruxosDaCasa.length > 0) {
    res.status(200).json(bruxosDaCasa);
  } else {
    res.status(404).json({
      mensagem: "Nenhum bruxo encontrado nessa casa!"
    })
  }
});

app.get("/bruxos/vivos/", (req, res) => {
  const resultado = bruxos.filter(b => b.status)
  if(resultado) {
    res.status(200).json(resultado)
  } else {
    res.status(404) ({
      mensagem: "Nenhum bruxo vivo encontrado!"
    })
  }
})
app.get("/bruxos/mortos/", (req, res) => {
  const resultado = bruxos.filter(b => !b.status)
  if(resultado) {
    res.status(200).json(resultado)
  } else {
    res.status(404) ({
      mensagem: "Nenhum bruxo morto encontrado!"
    })
  }
})

app.get("/bruxos", (req, res) => {
  res.json(bruxos);
});
app.get("/bruxos/id/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const bruxo = bruxos.find(b => b.id === id);
  if (bruxo) {
    res.status(200).json(bruxo);
  } else {
    res.status(404).json({
      "error": "Bruxo não encontrado com esse id",
    });
  }
});
app.get("/bruxos/nome/:nome", (req, res) => {
  let nome = req.params.nome.toLowerCase();
  const bruxosEncontrados = bruxos.filter(b =>
    b.nome.toLowerCase().includes(nome)
  );
  if (bruxosEncontrados.length > 0) {
    res.status(200).json(bruxosEncontrados);
  } else {
    res.status(404).json({
      mensagem: "Bruxo(s) não encontrado(s) com esse nome!"
    });
  }
});
app.get("/casas/", (req,res) => {
  if(casas.length > 0) {
    res.status(200).json(casas);
  } else {
    res.status(404).json({
      mensagem: "Nenhuma casa encontrada!"
    });
  }
});
app.get("/casas/:id", (req,res) => {
  let id = req.params.id;
  id = parseInt(id);
  const casasId = casas.find(d => d.id === id);
  if(casas.length > 0) {
    res.status(200).json(casasId);
  } else {
    res.status(404).json({
      mensagem: "Nenhuma casa encontrada!"
    });
  }
});

app.get("/varinhas/", (req,res) => {
  if(varinhas.length > 0) {
    res.status(200).json(varinhas);
  } else {
    res.status(404).json({
      mensagem: "Essa varinha não é de ninguém!"
    });
  }
})
app.get("/varinhas/:id", (req,res) => {
  let id = req.params.id;
  id = parseInt(id);
  const varinhasId = varinhas.find(d => d.id === id);
  if(varinhas.length > 0) {
    res.status(200).json(varinhasId);
  } else {
    res.status(404).json({
      mensagem: "Essa varinha não é de ninguém!"
    });
  }
})
app.get("/pocoes", (req,res) => {
  if(pocoes.length > 0) {
    res.status(200).json(pocoes);
  } else {
    res.status(404).json({
      mensagem: "Essa poção não existe!"
    });
  }
});
app.get("/pocoes/:id", (req,res) => {
  let id = req.params.id;
  id = parseInt(id);
  const pocoesId = pocoes.find(d => d.id === id);
  if(pocoes.length > 0) {
    res.status(200).json(pocoesId);
  } else {
    res.status(404).json({
      mensagem: "Poção não encontrado!"
    });
  }
});

app.get("/animais", (req,res) => {
  if(animais.length > 0) {
    res.status(200).json(animais);
  } else {
    res.status(404).json({
      mensagem: "Animal não encontrado!"
    })
  }
});

app.get("/animais/:id", (req,res) => {
  let id = req.params.id;
  id = parseInt(id);
  const animaisId = animais.find(d => d.id === id);
  if(animais.length > 0) {
    res.status(200).json(animaisId);
  } else {
    res.status(404).json({
      mensagem: "Animal não encontrado!"
    })
  }
});
// Iniciar servidor
app.listen(serverPort, () => {
  console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
  console.log(`🏰 Pronto para receber novos bruxos!`);
});