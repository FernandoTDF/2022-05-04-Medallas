rotulo.innerHTML = "Ingrese la posición de llegada del competidor: ";
let btnEnv = document.getElementById("send");

btnEnv?.addEventListener("click", () => {
  let posicionLlegada: number = Number(dato.value);
  console.log("posicionLlegada es valor " + posicionLlegada);
  console.log("el tipo de posicionLlegada es valor " + typeof posicionLlegada);
  switch (posicionLlegada) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("Entregar medalla de plata");
      break;
    case 3:
      console.log("Entregar medalla de bronce");
      break;
    default:
      console.log("Entregar mención de participación");
  }
});
