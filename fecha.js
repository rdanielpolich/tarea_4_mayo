// Crear un script que luego de 3 segundos muestre en el navegador la fecha del día.

const redireccionar = function () {
  setTimeout(function () {
    document.write(
      `hoy es ${fecha.getDate()} del ${fecha.getMonth()} del año ${fecha.getFullYear()}`
    );
  }, 3000);
};

// let fecha = new Date("05/04/2022 12:37:05");
// const redireccionar = function () {
//   setTimeout(function () {
//     document.write(fecha.toString());
//   }, 3000);
// };
