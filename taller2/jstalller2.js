document.getElementById('addbtn').addEventListener('click', () => {
  const tareaInput = document.getElementById('input');
  const textoTarea = tareaInput.value.trim();

  if (textoTarea === '') {
      alert('Por favor, ingresa una tarea.');
      return;
  }

  const listaTareas = document.getElementById('list');
  const elementoTarea = document.createElement('li');
  elementoTarea.className = 'elementotarea';

  const contenidoTarea = document.createElement('span');
  contenidoTarea.textContent = textoTarea;

  const botonesTarea = document.createElement('div');
  botonesTarea.className = 'botonestarea';

  const botonCompletar = document.createElement('button');
  botonCompletar.className = 'botoncompletar';
  botonCompletar.textContent = '✔️';
  botonCompletar.addEventListener('click', () => {
      elementoTarea.classList.toggle('completada');
  });

  const botonEliminar = document.createElement('button');
  botonEliminar.className = 'botoneliminar';
  botonEliminar.textContent = '🗑️';
  botonEliminar.addEventListener('click', () => {
      elementoTarea.remove();
  });

  botonesTarea.appendChild(botonCompletar);
  botonesTarea.appendChild(botonEliminar);
  elementoTarea.appendChild(contenidoTarea);
  elementoTarea.appendChild(botonesTarea);
  listaTareas.appendChild(elementoTarea);


  tareaInput.value = '';
});
