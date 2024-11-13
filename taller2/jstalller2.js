let boton=document.getElementById('addbtn')/*aca primero obtengo el "DOM" del boton agregar para poder manipularlo*/
boton.addEventListener('click', () => {/*despues a ese boton le añado un evento el cual se activa cuando le dan click*/
  const tareaInput = document.getElementById('input');/*aqui estoy trayendo lo que escribi en el input*/
  const textoTarea = tareaInput.value.trim();/*aqui con la funcion .trim() lo que hago es quitar espacios en blanco al principio y al final del texto*/

  if (textoTarea === '') {/*aqui valida que el input si tenga texto*/
      alert('Por favor, ingresa una tarea.');
      return;
  }

  const listaTareas = document.getElementById('list');/*aca empiezo extrayendo el "DOM" de la etiqueta ul por medio del id list*/
  const elementoTarea = document.createElement('li');/*aca estoy creando una etiqueta li que es donde se guardaran los inputs*/
  elementoTarea.className = 'elementotarea';/*aca le estoy añadiendo a el "li" la clase "elemento tarea"*/

  const contenidoTarea = document.createElement('span');/*aca creo un span donde ingresare la cadenade texto del input*/
  contenidoTarea.textContent = textoTarea;/*aca mando el texto al span*/

  const botonesTarea = document.createElement('div');/*ahora aqui estoy creando un div el cual sera donde estaran los botones*/
  botonesTarea.className = 'botonestarea';/*aca le estoy añadiendo al div la clase botontarea*/

  const botonCompletar = document.createElement('button');/*aca creo un boton el cual seria el de completado*/
  botonCompletar.className = 'botoncompletar';/*aca le añado una clase a ese boton*/
  botonCompletar.textContent = '✔️';/*ahora le inyecto texto por medio del textcontent*/
  botonCompletar.addEventListener('click', () => {/*este es un evento del boton completado el cual cuando sea pulsado ejecutara el classlist.toggle el cual añadera la clase "completada" si no existe
    pero si ya existe la removera*/
      elementoTarea.classList.toggle('completada');
  });

  const botonEliminar = document.createElement('button');/*creo el boton para eliminar la tarea*/
  botonEliminar.className = 'botoneliminar';/*aca le añado la clase botoneliminar*/
  botonEliminar.textContent = '🗑️';/*aqui le inyecto texto a ese boton*/
  botonEliminar.addEventListener('click', () => {/*este es un evento del boton el cual cuando sea pulsado removera la tarea*/
      elementoTarea.remove();
  });

  botonesTarea.appendChild(botonCompletar);/*aca por medio del .appenchild añado el boton completar al div*/
  botonesTarea.appendChild(botonEliminar);/*aca por medio del .appenchild añado el boton remover al div*/
  elementoTarea.appendChild(contenidoTarea);/*aca lo que hago es añadir el texto del input a la etiqueta li*/
  elementoTarea.appendChild(botonesTarea);/*aca añado los botones al li*/
  listaTareas.appendChild(elementoTarea);/*aca para finalizar añado el li a la lista para que se vizualice*/


  tareaInput.value = '';
});
