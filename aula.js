const prompt = require("prompt-sync")();
const aula = [];
const professor = require("./professor.js");
const materia = require("./materia.js");
const sala = require("./sala.js");
let ultimoId = 1;

const modelo = (id = ultimoId++) => {
  console.log("ID do professor:  ");
  professor.show();
  const id_professor = prompt(": ");
  console.log("ID da matéria:  ");
  materia.show();
  const id_materia = prompt(": ");
  console.log("ID da sala: ");
  sala.show();
  const id_sala = prompt(": ");

  if (
    professor.show(id_professor) &&
    materia.show(id_materia) &&
    sala.show(id_sala)
  ) {
    return {
      id,
      id_professor,
      id_materia,
      id_sala,
    };
  }
  console.log("Dados inválidos.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    aula.push(novo);
    console.log("Registro adicionado com sucesso!");
  }
};

const index = () => {
  if (aula.length == 0) {
    console.log("Nenhum registro.");
    return false;
  }
  aula.forEach((el) => console.log(el));
  return true;
};
const show = (id) => aula.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = aula.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        aula[indice] = novo;
        console.log("Atualizado com sucesso!");
      }
    } else {
      console.log("Registro não encontrado.");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = prompt("ID: ");
    if (id != -1) {
      const indice = aula.findIndex((el) => el.id == id);
      aula.splice(indice, 1);
      console.log("Registro deletado com sucesso!");
    }
  } else {
    console.log("Registro não encontrado.");
  }
};

module.exports = {
  store,
  index,
  update,
  destroy,
  show,
};
