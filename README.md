# Nombre del grupo e integrantes.

Nosotros somos el grupo 3 Compuesto por:
- Jefrey Encarnacion Medina (100687695)
- Jomil José Mota (100617004)

# Enlace del proyecto en línea (Host)
- **GitHub Pages:** [https://medinajefrey532-cmyk.github.io/vocacion-dominicana/](https://medinajefrey532-cmyk.github.io/vocacion-dominicana/)

# Descripción breve del proyecto.

Guía a los usuarios que terminaron el bachillerato identificando sus intereses y habilidades mediante selección de áreas de interés, ofreciendo opciones profesionales personalizadas para ayudarles a tomar decisiones informadas sobre su carrera.

# Tecnologías usadas.

- **React + Vite** para la estructura y componentes interactivos de la interfaz.
- **CSS3 Moderno** con diseño responsivo, animaciones y soporte para modo oscuro.
- **JSON** para el almacenamiento y filtrado de las carreras dominicanas.
- **GitHub Actions & GitHub Pages** para el despliegue y hospedaje automático continuo.

# Puntos extras incorporados

1. **Hospedaje en GitHub Pages:**
   - Configurado con GitHub Actions (`.github/workflows/deploy.yml`) y `base: './'` en `vite.config.js` para compilar y publicar automáticamente cada vez que se actualiza el repositorio.
2. **Modo Oscuro (Dark Mode):**
   - Implementado mediante React (`useState`, `useEffect`) y `localStorage` para recordar el tema preferido del usuario incluso al recargar o cerrar la página.
   - Aplica la clase `.dark` sobre el documento con variables de color que adaptan el fondo, textos, tarjetas e inputs.
3. **Animaciones CSS:**
   - Animación de flotación suave infinita (`@keyframes flotar`) con desfase de tiempo en los iconos flotantes del encabezado hero.
   - Animación de entrada suave (`@keyframes aparecerTarjeta`) con deslizamiento vertical en las tarjetas de carreras al mostrar resultados.
   - Transiciones fluidas (`transition: 0.3s ease`) en todos los elementos clave al alternar el modo oscuro.
4. **Interacción avanzada:**
   - Desplazamiento automático suave (`scrollIntoView`) hacia la sección de resultados al pulsar *"Ver mis recomendaciones"*.
   - Botón interactivo para copiar el listado de carreras recomendadas al portapapeles con confirmación visual temporal (*"¡Copiado!"*).

# Qué aprendieron.

Aprendimos a crear componentes para tener bloques reutilizables e independientes, gestionar estados dinámicos en React, implementar temas visuales persistentes, añadir animaciones CSS fluidas y automatizar el despliegue de una aplicación web moderna a la nube.
