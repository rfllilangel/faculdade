const prompt = require("prompt-sync")();
let ultimoId = 1;
const aluno = [];
const curso = require("./curso.js");

const modelo = (id = ultimoId++) => {
  const nome = prompt("Nome: ");
  curso.index();
  const id_curso = parseInt(prompt("ID do curso: "));
  if (nome != "" && curso.show(id_curso)) {
    return {
      id,
      nome,
      id_curso,
    };
  }

  console.log("Dados inválidos.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    aluno.push(novo);
    console.log("Registro adicionado com sucesso!");
  }
};

const index = () => {
  if (aluno.length == 0) {
    console.log("Nenhum registro.");
    return false;
  }
  aluno.forEach((el) => console.log(el));
  return true;
};
const show = (id) => aluno.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = aluno.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        aluno[indice] = novo;
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
      const indice = aluno.findIndex((el) => el.id == id);
      aluno.splice(indice, 1);
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
