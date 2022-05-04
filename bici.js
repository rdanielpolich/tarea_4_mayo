let repetir;

function calorias() {
  let calorias_seg = 192 / 1800;
  let calorias_totales = 0;
  repetir = setInterval(function () {
    console.log(
      `Calorías totales quemadas en este viaje: ${(calorias_totales =
        calorias_totales + calorias_seg)}`
    );
  }, 1000);
}

const detenerBici = function () {
  clearInterval(repetir);
};
