const prompt = require("prompt-sync")();
let ultimoId = 1;
const turno = [];

const modelo = (id = ultimoId++) => {
  const nome = prompt("Turno: ");
  const inicio = prompt("Início: ");
  const termino = prompt("Término: ");
  if (nome != "" && inicio != "" && termino != "") {
    return {
      id,
      nome,
      inicio,
      termino
    };
  }

  console.log("Nome inválido.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    turno.push(novo);
    console.log("Registro adicionado com sucesso!");
  }
};

const index = () => {
  if (turno.length == 0) {
    console.log("Nenhum registro.");
    return false;
  }
  turno.forEach((el) => console.log(el));
  return true;
};
const show = (id) => turno.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = turno.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        turno[indice] = novo;
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
      const indice = turno.findIndex((el) => el.id == id);
      turno.splice(indice, 1);
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
