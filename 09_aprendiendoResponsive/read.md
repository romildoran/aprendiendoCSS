## En el código CSS que proporcionaste, se utilizan medidas en porcentaje para lograr un diseño responsivo. Aquí está la explicación:

1. El selector #container tiene un ancho del 70% y un margen horizontal automático (margin: 0px auto;). Esto significa que el contenedor ocupará el 70% del ancho de su contenedor padre y se centrará horizontalmente.

2. El selector aside tiene un ancho del 25%. Esto permite que el elemento ocupe el 25% del ancho de su contenedor padre, lo que facilita el diseño de columnas.

3. El selector #article tiene un ancho del 75%. Esto permite que el elemento ocupe el 75% del ancho de su contenedor padre, lo que también facilita el diseño de columnas.

4. En las reglas dentro de los media queries, se especifican cambios en los estilos en función del tamaño de la pantalla. Por ejemplo, en el primer media query (max-width: 888px), se cambia el ancho de los elementos #article article a 40px cuando el ancho de la pantalla es menor o igual a 888px. Esto es un ejemplo de diseño responsivo, donde los estilos se ajustan automáticamente para adaptarse a diferentes tamaños de pantalla.

## mediaquerys

Un media query es una característica de CSS que permite aplicar estilos diferentes a un documento HTML en función de ciertas condiciones, como el tamaño de la pantalla, la resolución, la orientación del dispositivo, etc. Con los media queries, puedes adaptar los estilos de tu sitio web o aplicación a diferentes dispositivos y tamaños de pantalla, lo que se conoce como diseño responsivo.

Un media query consta de una condición entre paréntesis, dentro de un bloque @media, que especifica cuándo se deben aplicar los estilos definidos dentro de ese bloque. La condición puede estar basada en diferentes características, como el ancho de la pantalla (width), la altura (height), la relación de aspecto (aspect-ratio), la orientación (orientation), entre otras.

## ------------

En el primer media query (max-width: 888px), se aplican estilos a los elementos #article article cuando el ancho de la pantalla es menor o igual a 888px. Se establece un ancho de 40px y un fondo rojo.

En el segundo media query (max-width: 632px), se aplican estilos cuando el ancho de la pantalla es menor o igual a 632px. El contenedor #container tiene la propiedad overflow establecida en hidden. Los elementos #article article tienen un ancho del 90% y un fondo azul. El elemento aside tiene un ancho del 91%, no flota (float: none), una altura mínima automática (min-height: auto), un line-height de 20px, un relleno (padding) de 19px.

En el tercer media query (max-width: 554px), se aplican estilos cuando el ancho de la pantalla es menor o igual a 554px. El fondo del body se establece en lightsalmon.

Estos media queries te permiten adaptar los estilos según el tamaño de la pantalla, lo que garantiza un diseño responsivo y una experiencia óptima para los usuarios en diferentes dispositivos.

## ------------

## que es viewport?

El viewport, en el contexto del desarrollo web, se refiere al área visible de una página web dentro de la ventana del navegador. En otras palabras, es la parte del navegador que muestra el contenido de una página web.
El viewport puede variar en tamaño dependiendo del dispositivo y las preferencias del usuario.




