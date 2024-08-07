const prompt = require("prompt-sync")();
let ultimoId = 1;
const curso = [];
const turno = require("./turno.js");

const modelo = (id = ultimoId++) => {
  const nome = prompt("Nome: ");
  const horas_totais = prompt("Horas totais: ").replaceAll("," , ".");
  turno.index();
  const id_turno = parseInt(prompt("ID turno: "));
  if (nome != "" && horas_totais != "" && turno.show(id_turno)) {
    return {
      id,
      nome,
      horas_totais,
      id_turno
    };
  }

  console.log("Dados inválidos.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    curso.push(novo);
    console.log("Registro adicionado com sucesso!");
  }
};

const index = () => {
  if (curso.length == 0) {
    console.log("Nenhum registro.");
    return false;
  }
  curso.forEach((el) => console.log(el));
  return true;
};
const show = (id) => curso.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = curso.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        curso[indice] = novo;
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
      const indice = curso.findIndex((el) => el.id == id);
      curso.splice(indice, 1);
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
