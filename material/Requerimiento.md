

## Requerimiento

Se requiere desarrollar un sitio informativo para la empresa ficticia travel, el cual consta de 4 secciones

- Home
- Sobre nosotros
- Listado de Destinos
    - Detalle de Destino

El sitio debe estar desarrollado utilizando NUXT con SSR. El contenido del sitio se encuentra en diferentes Endpoints disponibilizados utilizando Wordpress con una estructura de API propietaria.

Los Endpoints de contenido son los siguientes:

Home
[https://test-desarrollador-front.cclh.io/home/](https://test-desarrollador-front.cclh.io/home/)

Sobre Nosotros
[https://test-desarrollador-front.cclh.io/sobre-nosotros/](https://test-desarrollador-front.cclh.io/sobre-nosotros/)

Lista de destinos
[https://test-desarrollador-front.cclh.io/destinos/](https://test-desarrollador-front.cclh.io/destinos/)

Detalle de Destinos
[https://test-desarrollador-front.cclh.io/rio-de-janeiro/](https://test-desarrollador-front.cclh.io/rio-de-janeiro/)
[https://test-desarrollador-front.cclh.io/punta-cana/](https://test-desarrollador-front.cclh.io/punta-cana/)
[https://test-desarrollador-front.cclh.io/riviera-maya/](https://test-desarrollador-front.cclh.io/riviera-maya/)
[https://test-desarrollador-front.cclh.io/buenos-aires/](https://test-desarrollador-front.cclh.io/buenos-aires/)
[https://test-desarrollador-front.cclh.io/san-andres/](https://test-desarrollador-front.cclh.io/san-andres/)

Opciones Generales del sitio (Datos de cabecera y footer)
[https://test-desarrollador-front.cclh.io/options/](https://test-desarrollador-front.cclh.io/options/)

El sitio ademas debe desplegar una página 404 (diseño incluido en el Material)

El diseño para el armado se encuentra en un archivo .xd (adjunto en el Material), además se proveen gráficas estáticas en SVG para la construcción del sitio.

El desarrollo debe ser construido desde 0 sin utilizar ningún framework de estilos CSS (material design, bulma, bootstrap, etc) ni frameworks de componentes VUE.


Se evaluará lo siguiente

- El correcto desarrollo del HTML semántico, que pueda ser indexado por motores de búsqueda de forma correcta. (Se revisará el resultado con herramientas de análisis de SEO tales como Lighthouse)
- La utilización de CSS compilado (less. sass), tanto en un archivo main dentro del proyecto, como extendiendo la funcionalidad de los estilos en los distintos componentes.
- Técnicas de CSS modernas
- El uso correcto del framework Nuxt, (async Data, routing, ssr en general).
- El desarrollo y aplicación de componentes reutilizables.

Versionar el desarrollo en GitHub en una rama feature/dev-front-travel

Por último desplegar lo desarrollado en alguna plataforma gratis ( se recomiendo Heroku ) para su visualización por parte del equipo de revisión de CCAF Los Heroes.
El despliegue no puede ser de tipo serverless, ya que no existe un Webhook entre el CMS que administra el sitio y la capa de Front.


**Suma muchísimos puntos**

Que el armado sea responsive, dejando al criterio del postulante la forma de reordenar la estructura del sitio propuesto para pantallas móviles, (este criterio será parte de lo evaluado).

**El desarrollo de este challenge es de carácter confidencial, por lo que no debe ser compartido este requerimiento ni ninguna pieza de software resultante (código fuente u URL pública ) en RRSS, canales de youtube, etc, el no cumplimiento de esta cláusula invalidará inmediatamente la postulación.**