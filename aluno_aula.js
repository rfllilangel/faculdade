const prompt = require("prompt-sync")();
const aluno_aula = [];
const aula = require("./aula.js")
const aluno = require("./aluno.js")
let ultimoId = 1;

const modelo = (id = ultimoId++) => {
  console.log("ID da aula:  ");
  aula.show();
  const id_aula = prompt(": ");
  console.log("ID do aluno:  ");
  aluno.show();
  const id_aluno = prompt(": ");

  if (
    aula.show(id_aula) &&
    aluno.show(id_aluno)
  ) {
    return {
      id,
      id_aula,
      id_aluno,
    };
  }
  console.log("Dados inválidos.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    aluno_aula.push(novo);
    console.log("Registro adicionado com sucesso!");
  }
};

const index = () => {
  if (aluno_aula.length == 0) {
    console.log("Nenhum registro.");
    return false;
  }
  aluno_aula.forEach((el) => console.log(el));
  return true;
};
const show = (id) => aluno_aula.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = aluno_aula.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        aluno_aula[indice] = novo;
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
      const indice = aluno_aula.findIndex((el) => el.id == id);
      aluno_aula.splice(indice, 1);
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
