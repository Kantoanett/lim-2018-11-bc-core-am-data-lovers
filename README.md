# League of Legends para principiantes

## Índice

* [Definición de producto](#definición-del-producto)
* [Entrevistas a usuarios](#entrevistas-a-usuarios)
* [Definición del user persona](#definición-del-user-persona)
* [Historias de usuario](#historias-de-usuario)
* [Diseño de la interfaz de usuario](#diseño-de-la-interfaz-de-usuario)
* [Navegación por la interfaz](#navegación-por-la-intefaz)
* [Planificación del proyecto](#planificación-del-proyecto)
* [Futuras mejoras](#futuras-mejoras)

***

## Definición de producto

Interfaz que brinda información puntual y digerida para **_beginners_** que no tienen experiencia en el juego y requieren conocer lo indispensable para crecer rápidamente, mejorando su estrategia mientras suben de nivel. Podrá conocer el ámbito (zona) de juego, que es ser un invocador, los diferentes tipos de campeones y sus roles; además, de algunas estadísticas importantes para sus jugadas sean estratégicas.

## Entrevistas a usuarios

Definimos una lista de preguntas que nos ayudaron a conocer lo que deseaba el potencial usuario; durante la entrevista destacaron estos dos elementos: la empatía y la escucha haciendo que ese momento se dé de la forma más amena y fluida posible.

![imagen preguntas](https://i.ibb.co/zQb25m4/preguntas-entrevista-a-usuarios.png)

Adicionalmente, armamos un [Prototipo](https://docs.google.com/presentation/d/1g8l3rIljkTPcfwSOSdN6elA6VJfjY-1tONjJ-JRDlD4/edit#slide=id.p) de experiencia de usuario con la finalidad de que los _user stories_ sean aceptables, correctas y entendibles.

## Definición del user persona

### ¿Quiénes son los principales usuarios de producto?

<p align="center">
  <img src="https://i.ibb.co/gzJ6qjX/User-persona.png">
</p>

### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Desean contar con una interfaz que les permita entender de forma sencilla, agradable e intuitiva cómo funciona el juego.

### ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Al ser un juego de estrategia y en colaboración con demás jugadores, les interesaría conocer con cuál campeón empezar a jugar, sus roles y descubrir los campeones por rol con sus atributos específicos. 

### ¿Cuándo utilizan o utilizarían el producto?
En sus tiempos libres. Normalmente emplean en promedio 3 horas jugando y les agrada jugar en grupo porque los motiva interactuar para aprender más rápido.

## Historias de usuario

**_PRINT DE PANTALLA DE LA WEB_**

Diseñamos cinco historias útiles y necesarias para que el jugador inicie el juego de la forma más cómoda posible:

* **Primera historia**

_Presentar a los 5 campeones con los que el usuario podrá empezar el juego y un video breve a modo introductorio._

* **Segunda historia**

_Mostrar los roles por campeón y al mismo tiempo la cantidad total de campeones por rol._

* **Tercera historia**

_Visualizar a los todos los campeones por determinado rol: Foto y nombre. Además podrá ver que están ordenados de forma ascendente (de la A a la Z)._

* **Cuarta historia**

_El usuario podrá conocer a cada campeón en específico con sus respectivas características._

## Diseño de la interfaz de usuario

### **a) Prototipo de baja fidelidad**


<p align="center">
<a href="http://picasion.com/"><img src="http://i.picasion.com/pic88/929018848361389c91f31862d0f5356d.gif" width="300" height="465" border="0" alt="http://picasion.com/" /></a><br />
</p>


**_El por qué del diseño_**

El enfoque que trabajamos desde el inicio fue pensado en _beginners_ apuntando a que sea lo más visual y práctico posible empleando estadísticas, cards, videos e información puntual que permita brindarle al usuario un diseño centrado en  sus necesidades.
 
**_Testeos de usabilidad / Sugerencias de los usuarios_**

Al mostrarles el prototipo en borrador, entendieron lo que queríamos presentar en las pantallas, comentaron que estaba bien estructurado. Y como adicional, nos sugirieron que añadamos un video explicativo.

### **b) Prototipo de alta fidelidad**

**_PRINT DE LOS PROTOTIPOS (posible gif)_**

**_El por qué del diseño_**

* Con el prototipo de baja fidelidad aterrizado, procedimos a diseñarlo en Figma considerando las imágenes y gama de colores brindada; en cada pantalla se puede percibir que está bastante alineado al diseño del site oficial del juego; eso para impactar al usuario y se familiarice aún más. 

* Sobre el tipo de letra, tratamos que sea lo más cercano al usado en el site del juego.

* Mobile first: Decidimos empezar a diseñar para evitar problemas al momento de ajustar código de estilo en css. 

* Zeplin: Exportamos el prototipo de Figma a Zeplin para elegir el código que se ajuste a nuestro diseño y poder usarlo en la implementación de la interfaz.

**_Testeos de usabilidad / Sugerencias de los usuarios_**

## Navegación por la interfaz

**_POR COMPLETAR (posible gif)_**

## Planificación del proyecto

### Tablero
Realizamos la división de tareas en un tablero Kanban. Por cada historia desglozamos las actividades en tareas pequeñas para saber cuáles realizar y seguir un orden.

### Sprints tomados


### Trello
Manejamos los requerimientos en un checklist para ver qué puntos estaban/están terminados y cuáles quedan pendientes. Fue de gran utilidad para llevar un control del proceso de trabajo.

![imagen planificación Trello](https://i.ibb.co/zGHvTMH/Planificaci-n-Trello.png)

[Ver aquí](https://trello.com/b/7U57QDtI/2p-data-dashboard)

### Issues
A nivel básico empleamos los issues haciendo match de lo que estaba en el tablero Kanban y en Trello.

### Excel
Colocamos todos los recursos que estructuramos y de consulta que utilizamos durante el proyecto.

![imagen planificación excel](https://i.ibb.co/ng6cW5h/Planificaci-n-excel.png)

[Ver aquí](https://docs.google.com/spreadsheets/d/1-GJYxHFvcTtkLHjPnkJGCczXnFzk07L0O0qXCXyiwDs/edit#gid=635576074)

## Futuras mejoras

* Chatbox: Para atender las dudas/sugerencias de los usuarios.
* Responsive: Ajustar medidas para dekstop y tablet.
* Vídeo explicativo de la interfaz.
* Rotación de campeones: Implementar un método que permita la asignación aleatoria de campeones por semana.
* Visualizaciones gráficas: Google Charts.
