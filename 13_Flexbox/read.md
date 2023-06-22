# Anotaciones - Clase de Flexbox

En esta clase del curso de Master en CSS, aprendimos sobre Flexbox y cómo utilizarlo para crear diseños flexibles en nuestras páginas web.

## ¿Qué es y para qué sirve Flexbox?

Flex box es un método de diseño de página unidimensional que nos permite organizar elementos en filas o columnas. Con Flexbox, los elementos de contenido pueden ensancharse para ocupar espacio adicional o encogerse para adaptarse a espacios más pequeños, lo que hace que el diseño sea más flexible y adaptable a diferentes dispositivos y tamaños de pantalla.

## Conceptos de Flexbox

Durante la clase, se cubrieron los siguientes conceptos de Flexbox:

### Estilos a las cajas

- `display: flex` y `display: inline-flex`: Estas propiedades se aplican al contenedor y habilitan Flexbox para organizar los elementos hijos. `display: flex` establece el contenedor como un bloque, mientras que `display: inline-flex` lo establece como un elemento en línea.

### Direcciones

- `flex-direction`: Define la dirección principal en la que se colocarán los elementos dentro del contenedor. Puede ser `row` (horizontal), `column` (vertical), `row-reverse` (horizontal en orden inverso) o `column-reverse` (vertical en orden inverso).

### Envoltorio en flex

- `flex-wrap`: Especifica si los elementos deben envolverse en varias líneas si no caben en una sola línea dentro del contenedor. Los valores posibles son `nowrap` (sin envoltura) y `wrap` (con envoltura).

### Orden

- `order`: Permite cambiar el orden de los elementos dentro del contenedor. Por defecto, todos los elementos tienen un valor de orden de 0, y se pueden asignar valores positivos o negativos para modificar su posición.

### Grow

- `flex-grow`: Determina la capacidad de los elementos para crecer en tamaño en relación con los demás. Se puede asignar un valor numérico para indicar la proporción de crecimiento.

### Shrink

- `flex-shrink`: Controla la capacidad de los elementos para encogerse en tamaño en relación con los demás. Al igual que `flex-grow`, se puede asignar un valor numérico para indicar la proporción de encogimiento.

### Flex basis, grow, calc y variables CSS

- `flex-basis`: Establece el tamaño inicial de un elemento antes de que el espacio adicional se distribuya. Se puede especificar un valor en píxeles, porcentaje u otras unidades de medida.

- `calc()`: Función en CSS que permite realizar cálculos matemáticos. Puede ser útil al definir el tamaño inicial de un elemento en combinación con `flex-basis`.

- Variables CSS: Se pueden utilizar variables para definir valores que se repetirán en varias propiedades CSS, lo que facilita su mantenimiento y modificación.

### Alineación horizontal

- `justify-content`: Controla la alineación horizontal de los elementos dentro del contenedor. Puede tomar valores como `flex-start`, `flex-end`, `center`, `space-between` y `space-around`.

### Alineación vertical

- `align-items`: Alinea los elementos verticalmente dentro del contenedor. Puede tomar valores como `flex-start`, `flex-end`, `center`, `baseline` y `stretch`.

