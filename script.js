const semestres = {
  "Primer semestre": [
    { nombre: "Matemática I", creditos: 8 },
    { nombre: "Química General", creditos: 10 },
    { nombre: "Biología Celular", creditos: 7 }
  ],
  "Segundo semestre": [
    { nombre: "Física", creditos: 6 },
    { nombre: "Química Orgánica", creditos: 9 },
    { nombre: "Química Analítica I", creditos: 8 },
    { nombre: "Bioquímica I", creditos: 8 }
  ],
  "Tercer semestre": [
    { nombre: "Matemática II", creditos: 8 },
    { nombre: "Química Orgánica II", creditos: 9 },
    { nombre: "Química Analítica II", creditos: 8 },
    { nombre: "Bioquímica II", creditos: 8 }
  ],
  "Cuarto semestre": [
    { nombre: "Fisicoquímica I", creditos: 7 },
    { nombre: "Microbiología", creditos: 7 },
    { nombre: "Farmacognosia", creditos: 8 },
    { nombre: "Tecnología Farmacéutica I", creditos: 8 }
  ],
  "Quinto semestre": [
    { nombre: "Fisicoquímica II", creditos: 7 },
    { nombre: "Inmunología", creditos: 7 },
    { nombre: "Toxicología", creditos: 7 },
    { nombre: "Tecnología Farmacéutica II", creditos: 8 },
    { nombre: "Legislación y Deontología", creditos: 4 }
  ],
  "Sexto semestre": [
    { nombre: "Farmacología", creditos: 8 },
    { nombre: "Parasitología", creditos: 5 },
    { nombre: "Tecnología Farmacéutica III", creditos: 8 },
    { nombre: "Química Medicinal I", creditos: 8 },
    { nombre: "Gestión de Calidad", creditos: 4 }
  ],
  "Séptimo semestre": [
    { nombre: "Tecnología Farmacéutica IV", creditos: 8 },
    { nombre: "Química Medicinal II", creditos: 8 },
    { nombre: "Farmacia Clínica", creditos: 6 },
    { nombre: "Biofarmacia y Farmacocinética", creditos: 6 }
  ]
};

// El resto del código sigue igual ↓↓↓

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

      if (estadoActual === "exonerado")
        creditosExonerados -= parseInt(div.dataset.creditos);

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
