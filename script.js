// Materias organizadas por semestre
const semestres = {
  "Primer semestre": [
    { nombre: "Matemática I", creditos: 8 },
    { nombre: "Química General", creditos: 10 },
    { nombre: "Biología Celular", creditos: 7 }
  ],
  "Segundo semestre": [
    { nombre: "Física", creditos: 6 },
    { nombre: "Química Orgánica", creditos: 9 }
  ],
  // Agregá más semestres y materias acá
};

let creditosExonerados = 0;
const contenedor = document.querySelector('.malla');

for (const [semestre, materias] of Object.entries(semestres)) {
  const titulo = document.createElement('h2');
  titulo.innerText = semestre;
  contenedor.appendChild(titulo);

  const grupo = document.createElement('div');
  grupo.classList.add('grupo-semestre');

  materias.forEach((materia) => {
    const div = document.createElement('div');
    div.classList.add('materia');
    div.innerText = `${materia.nombre}\n(${materia.creditos} créditos)`;
    div.dataset.creditos = materia.creditos;
    div.dataset.estado = "ninguno";

    div.addEventListener('click', () => {
      const estadoActual = div.dataset.estado;

      if (estadoActual === "exonerado") creditosExonerados -= parseInt(div.dataset.creditos);

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

    grupo.appendChild(div);
  });

  contenedor.appendChild(grupo);
}
