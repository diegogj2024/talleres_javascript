document.getElementById('add-task-btn').addEventListener('click', () => {
  const tareaInput = document.getElementById('task-input');
  const textoTarea = tareaInput.value.trim();

  if (textoTarea === '') {
      alert('Por favor, ingresa una tarea.');
      return;
  }

  const listaTareas = document.getElementById('task-list');
  const elementoTarea = document.createElement('li');
  elementoTarea.className = 'elemento-tarea';

  const contenidoTarea = document.createElement('span');
  contenidoTarea.textContent = textoTarea;

  const botonesTarea = document.createElement('div');
  botonesTarea.className = 'botones-tarea';

  const botonCompletar = document.createElement('button');
  botonCompletar.className = 'boton-completar';
  botonCompletar.textContent = '✔️';
  botonCompletar.addEventListener('click', () => {
      elementoTarea.classList.toggle('completada');
  });

  const botonEliminar = document.createElement('button');
  botonEliminar.className = 'boton-eliminar';
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
