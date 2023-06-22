# Grid

En CSS, grid layout (o simplemente grid) es una forma de crear diseños de cuadrícula complejos y responsivos en el diseño web de manera más fácil y consistente en diferentes navegadores. Es un sistema de diseño bidimensional que permite organizar elementos HTML en filas y columnas.

Con CSS grid, puedes definir una cuadrícula utilizando líneas horizontales y verticales llamadas "líneas de cuadrícula". Puedes especificar el tamaño y la ubicación de estos elementos en la cuadrícula utilizando propiedades CSS como "grid-template-columns" y "grid-template-rows".

También puedes posicionar elementos dentro de la cuadrícula utilizando propiedades como "grid-column" y "grid-row". Estas propiedades te permiten indicar en qué celdas de la cuadrícula deben colocarse los elementos.

CSS grid proporciona un mayor control sobre la disposición de los elementos en comparación con métodos anteriores como las tablas y los floats. Además, es especialmente útil para crear diseños responsivos, ya que puedes cambiar fácilmente la disposición de los elementos en diferentes tamaños de pantalla mediante el uso de consultas de medios.

## algunos de los comandos más comunes utilizados en CSS Grid:

1. display: grid; - Define un elemento como una cuadrícula.

2. grid-template-columns: valor; - Define el ancho de las columnas de la cuadrícula. Puedes usar unidades de medida como píxeles (px), porcentaje (%) o fracciones (fr).

3. grid-template-rows: valor; - Define la altura de las filas de la cuadrícula. Al igual que con las columnas, puedes utilizar unidades de medida como píxeles, porcentaje o fracciones.

4. grid-gap: valor; - Establece el espacio entre las celdas de la cuadrícula. Puedes definir un valor para el espacio horizontal y otro para el espacio vertical.

5. grid-column: inicio / fin; - Determina en qué columnas debe ubicarse un elemento. Puedes especificar la línea de inicio y la línea de finalización de la celda en la cuadrícula.

6. grid-row: inicio / fin; - Indica en qué filas debe colocarse un elemento. Al igual que con grid-column, puedes especificar la línea de inicio y la línea de finalización de la celda en la cuadrícula.

7. grid-area: nombre; - Asigna un nombre a un área específica de la cuadrícula. Puedes utilizar este nombre en lugar de especificar las líneas de inicio y finalización en las propiedades grid-column y grid-row.