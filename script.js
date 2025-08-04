// Lista de materias con nombre y créditos
const materias = [
  { nombre: "Química General", creditos: 10 },
  { nombre: "Matemática I", creditos: 8 },
  { nombre: "Biología Celular", creditos: 7 },
  { nombre: "Física", creditos: 6 },
  { nombre: "Química Orgánica", creditos: 9 },
  // Agregá más materias según necesites
];

let creditosExonerados = 0;

// Cargar las materias en pantalla
const contenedor = document.querySelector('.malla');

materias.forEach((materia, index) => {
  const div = document.createElement('div');
  div.classList.add('materia');
  div.innerText = `${materia.nombre}\n(${materia.creditos} créditos)`;
  div.dataset.creditos = materia.creditos;
  div.dataset.estado = "ninguno";

  div.addEventListener('click', () => {
    const estadoActual = div.dataset.estado;

    // Quitar créditos anteriores
    if (estadoActual === "exonerado") creditosExonerados -= parseInt(div.dataset.creditos);

    // Cambiar estado
    if (estadoActual === "ninguno") {
      div.dataset.estado = "exonerado";
      div.classList.remove('aprobado');
      div.classList.add('exonerado');
      creditosExonerados += parseInt(div.dataset.creditos);
    } else if (estadoActual === "exonerado") {
      div.dataset.estado = "aprobado";
      div.classList.remove('exonerado');
      div.classList.add('aprobado');
    } else {
      div.dataset.estado = "ninguno";
      div.classList.remove('aprobado');
      div.classList.remove('exonerado');
    }

    document.getElementById("contador").innerText = creditosExonerados;
  });

  contenedor.appendChild(div);
});
