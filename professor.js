const prompt = require("prompt-sync")();
let ultimoId = 1;
const professor = [];


const modelo = (id = ultimoId++) => {
  const nome = prompt("Nome: ");

  if (nome != "") {
    return {
      id, nome
    };
  }

  console.log("Dados inválidos.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    professor.push(novo);
    console.log("Registro adicionado com sucesso!");
  } 
};

const index = () => {
  if(professor.length == 0) {
    console.log("Nenhum registro.")
    return false
  }
  professor.forEach(el => console.log(el))
  return true
}
const show = id => professor.find(el => el.id == id)

const update = () => {
 if (index())
 {
   const id = parseInt(prompt("ID: "));

   const indice = professor.findIndex(el => el.id == id);

   if (indice != -1) {
     const novo = modelo(id);
     
     if (novo) {
      professor[indice] = novo;
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
     const indice = professor.findIndex(el => el.id == id);
     professor.splice(indice, 1);
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
