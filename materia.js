const prompt = require("prompt-sync")();
let ultimoId = 1;
const materia = [];
const curso = require("./curso.js");

const modelo = (id = ultimoId++) => {
  const nome = prompt("Nome: ");
  const horas_totais = prompt("Horas totais: ").replaceAll(",", ".");
  curso.index();
  const id_curso = prompt("ID do curso: ");

  if (nome != "" && horas_totais != "" && curso.show(id_curso)) {
    return {
      id,
      nome,
      horas_totais,
      id_curso,
    };
  }

  console.log("Nome inválido.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    materia.push(novo);
    console.log("Registro adicionado com sucesso!");
  }
};

const index = () => {
  if (materia.length == 0) {
    console.log("Nenhum registro.");
    return false;
  }
  materia.forEach((el) => console.log(el));
  return true;
};
const show = (id) => materia.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = materia.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        materia[indice] = novo;
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
      const indice = materia.findIndex((el) => el.id == id);
      materia.splice(indice, 1);
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
