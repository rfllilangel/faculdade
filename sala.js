const prompt = require("prompt-sync")();
let ultimoId = 1;
const salas = [];


const modelo = (id = ultimoId++) => {
  const sala = prompt("Sala: ");

  if (sala != "") {
    return {
      id, sala
    };
  }

  console.log("Dados inválidos.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    salas.push(novo);
    console.log("Registro adicionado com sucesso!");
  } 
};

const index = () => {
  if(salas.length == 0) {
    console.log("Nenhum registro.")
    return false
  }
  salas.forEach(el => console.log(el))
  return true
}
const show = id => salas.find(el => el.id == id)

const update = () => {
 if (index())
 {
   const id = parseInt(prompt("ID: "));

   const indice = salas.findIndex(el => el.id == id);

   if (indice != -1) {
     const novo = modelo(id);
     
     if (novo) {
      salas[indice] = novo;
      console.log("Atualizado com sucesso!")
     }
   } else { 
    console.log("Registro não encontrado.")
   }
 }
};
 
const destroy = () => {
  if(index()) {
    const id = prompt("ID: ");
   if(id != -1) {
     const indice = salas.findIndex(el => el.id == id);
     salas.splice(indice, 1);
     console.log("Registro deletado com sucesso!")
    }
  } else {
    console.log("Registro não encontrado.")
  }

};

module.exports = {
  store,
  index,
  update,
  destroy,
  show
};
