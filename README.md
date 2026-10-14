# Mini Aplicación en React - Lista de Tareas y Perfil

Este proyecto es una aplicación web interactiva desarrollada con **React y Vite**, diseñada para comprender y aplicar los conceptos fundamentales del desarrollo frontend moderno, tales como componentes funcionales, paso de propiedades (`props`), manejo de estados (`useState`) y renderizado dinámico de listas mediante el método `.map()`.

---

## Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?
* **Props (Propiedades):** Son datos de solo lectura que se transmiten de un componente padre a un componente hijo. Funcionan de manera similar a los parámetros de una función y permiten que los componentes sean reutilizables. Un componente no puede modificar sus propias props.
* **State (Estado):** Es un almacenamiento interno y privado del componente que es mutable. A diferencia de las props, el estado puede cambiar a lo largo del tiempo (por ejemplo, debido a acciones del usuario como clics o entradas en formularios). Cuando el estado cambia, React vuelve a renderizar automáticamente el componente para actualizar la interfaz.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
La propiedad `key` es un identificador único y estable que React necesita cuando renderiza listas de elementos (por ejemplo, usando `.map()`). Ayuda a React a identificar qué elementos han cambiado, cuáles han sido agregados o cuáles se han eliminado de forma eficiente. Esto optimiza el rendimiento del Virtual DOM, evitando que se vuelva a renderizar toda la lista completa innecesariamente cada vez que ocurre un cambio.

### c) Explicación de qué hace la función useState y dónde se usó.
`useState` es una función de React que permite guardar información dentro de un componente. Tiene un valor inicial y una función que sirve para cambiarlo. Cuando ese valor cambia, React actualiza automáticamente lo que se muestra en pantalla.
* **Uso en la aplicación:** Lo utilicé en el componente `TodoList.jsx` para gestionar el arreglo de tareas pendientes (`const [tareas, setTareas] = useState([...])`). Gracias a esto, cuando el usuario escribe una nueva tarea y presiona el botón "Agregar", se invoca la función de actualización y la lista en pantalla se actualiza en tiempo real de manera instantánea.

### Estructura y Componentes del Proyecto

El proyecto está modularizado en dos componentes principales integrados dentro del componente raíz (`App.jsx`):

1. **`UserCard.jsx` (Componente con Props):**  
   * **Propósito:** Se encarga exclusivamente de recibir y mostrar la información del perfil del estudiante (nombre, carrera y semestre) enviada desde el componente padre mediante el flujo de datos unidireccional de las `props`.

2. **`TodoList.jsx` (Componente con Estado y Lista Dinámica):**  
   * **Propósito:** Es el componente interactivo de la aplicación. Utiliza el Hook **`useState`** tanto para administrar el arreglo de tareas pendientes como para capturar en tiempo real el valor de los nuevos elementos mediante formularios.
   * **Renderizado Dinámico:** Utiliza el método `.map()` para recorrer el estado de las tareas y renderizar cada elemento en pantalla de forma dinámica, asignándole una propiedad `key={tarea.id}` única y estable para optimizar el rendimiento del Virtual DOM.

### d) Enlace del Repositorio de GitHub
[https://github.com/felix-olivera9/t3_act4_react.git](https://github.com/felix-olivera9/t3_act4_react.git)

### e) Enlace del Proyecto Desplegado en GitHub Pages
[https://felix-olivera9.github.io/t3_act4_react/](https://felix-olivera9.github.io/t3_act4_react//)