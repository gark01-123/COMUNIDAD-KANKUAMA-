# Entrega final del proyecto

## 1. Nombre del proyecto

**Mujeres Kankuamas: Territorio, Memoria y Resistencia**

## 2. Objetivo general

Crear una pieza comunicativa digital de carácter académico, comunitario y periodístico que visibilice la memoria histórica, la defensa territorial, los liderazgos y las prácticas de resistencia de las mujeres Kankuamas.

El proyecto fue desarrollado como material pedagógico para el Diplomado Escuela Policarpas: Proceso de Formación para Mujeres Populares del Cambio.

## 3. Descripción breve del sitio

El sitio es una revista digital interactiva y responsiva que presenta un recorrido narrativo por la historia del pueblo Kankuamo, su relación espiritual y política con el territorio, los impactos del conflicto armado y el desplazamiento, las problemáticas de las mujeres en contexto urbano, y su papel en la transmisión de saberes, la organización comunitaria y la construcción de paz.

La experiencia combina textos editoriales, imágenes, cartografía ilustrada, líneas de tiempo, visualizaciones de actores, relatos multimedia, infografías y una hoja de ruta con propuestas para el cambio.

Los relatos incluidos son composiciones pedagógicas inspiradas en experiencias documentadas y no identifican personas reales.

## 4. Tecnologías utilizadas

- HTML5.
- CSS3.
- JavaScript puro.
- SVG local para cartografía e ilustraciones.
- Imágenes almacenadas localmente.
- API nativa `IntersectionObserver` para animaciones de desplazamiento.
- Elementos HTML nativos como `dialog`, `details`, `figure`, `article` y `section`.
- Sin frameworks.
- Sin backend.
- Sin proceso de compilación.

## 5. Estructura de carpetas

```text
/
├── index.html
├── styles.css
├── script.js
├── README.md
├── ENTREGA_PROYECTO.md
└── assets/
    ├── hero-kankuama.png
    ├── mapa-sierra.svg
    ├── mujer-kankuama-ciudad.svg
    └── tejido-referencia-unsplash.jpg
```

## 6. Funcionalidades implementadas

- Portada inmersiva de pantalla completa.
- Menú fijo con navegación suave entre secciones.
- Menú adaptable para dispositivos móviles.
- Indicador de progreso de lectura.
- Animaciones suaves activadas durante el desplazamiento.
- Línea de tiempo histórica interactiva.
- Mapa ilustrado de la Sierra Nevada de Santa Marta.
- Infografías sobre propiedad colectiva, autonomía, consulta previa y protección cultural.
- Mapa interactivo de actores y relaciones de poder.
- Filtros por tipo de actor.
- Panel informativo sobre nivel de influencia, tipo de poder y relación territorial.
- Acordeones sobre liderazgo femenino, saberes, defensa territorial y feminismo comunitario.
- Visualización simbólica del desplazamiento entre la Sierra Nevada y Bogotá.
- Tarjetas sobre impactos sociales, culturales, económicos y emocionales.
- Reportaje multimedia sobre las mujeres Kankuamas en contexto urbano.
- Ocho tarjetas animadas sobre problemáticas urbanas visibles.
- Infografía conceptual interactiva sobre territorio, identidad, memoria, desplazamiento, resistencia y liderazgo femenino.
- Recursos visuales con autoría, fuente, licencia y textos alternativos.
- Tres relatos editoriales interactivos.
- Comparación entre avances institucionales y análisis crítico.
- Hoja de ruta con propuestas comunitarias.
- Galería multimedia con visor ampliado.
- Apartado académico de fuentes, referencias y créditos multimedia.
- Sistema global de citas enlazadas `R1–R23` con notas documentales en todas las secciones.
- Archivo académico desplegable por bibliografía, instituciones, informes, normativa y recursos visuales.
- Apertura automática y foco accesible sobre la referencia citada.
- Diseño adaptable para escritorio, tableta y teléfono móvil.
- Funcionamiento local sin backend ni dependencias externas.

## 7. Criterios de accesibilidad

- Estructura semántica mediante encabezados, secciones, artículos, figuras y navegación.
- Enlace para saltar directamente al contenido principal.
- Textos alternativos en todas las imágenes.
- Etiquetas `aria-label` en controles que requieren contexto adicional.
- Estados `aria-expanded`, `aria-selected` y `aria-pressed`.
- Relaciones entre pestañas y paneles mediante `aria-controls` y `aria-labelledby`.
- Navegación de pestañas con flechas, Inicio y Fin.
- Cierre del menú móvil mediante la tecla Escape.
- Foco visible con contraste reforzado.
- Objetivos táctiles ampliados en botones y filtros.
- Modales construidos con el elemento nativo `dialog`.
- Regiones dinámicas anunciadas mediante `aria-live`.
- Infografía navegable con flechas, Inicio y Fin.
- Compatibilidad con la preferencia `prefers-reduced-motion`.
- El contenido permanece visible si JavaScript está desactivado.
- Contraste reforzado en secciones oscuras y textos secundarios.
- Citas navegables por teclado con foco trasladado al registro documental correspondiente.

## 8. Criterios SEO

- Título descriptivo y específico.
- Meta descripción orientada al contenido del proyecto.
- Palabras clave relacionadas con mujeres Kankuamas, territorio y memoria histórica.
- Definición de autor y directiva para indexación.
- Etiqueta de idioma español.
- Jerarquía semántica de títulos.
- Etiquetas Open Graph para título, descripción, imagen, tipo, sitio y configuración regional.
- Metadatos para tarjetas de Twitter.
- Texto alternativo para la imagen social.
- Uso de contenido textual indexable.
- Metadatos académicos `citation_*`, términos Dublin Core y datos estructurados `DigitalDocument`.
- Rutas relativas compatibles con GitHub Pages y Netlify.
- Carga diferida y decodificación asíncrona en imágenes no críticas.

## 9. Instrucciones de apertura local

El proyecto no requiere instalación, servidor ni compilación.

1. Descarga o abre la carpeta completa del proyecto.
2. Conserva la estructura de archivos y la carpeta `assets`.
3. Abre el archivo `index.html` en un navegador moderno.

Opcionalmente, puede utilizarse un servidor local:

```bash
npx serve .
```

## 10. Instrucciones de publicación

### GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube todos los archivos y carpetas del proyecto a la rama `main`.
3. Abre **Settings > Pages** en el repositorio.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`.
6. Guarda la configuración.
7. Espera a que GitHub genere la dirección pública.

### Netlify

#### Publicación manual

1. Ingresa a Netlify.
2. Selecciona **Add new site > Deploy manually**.
3. Arrastra la carpeta completa del proyecto al área de publicación.
4. Espera a que Netlify genere la dirección pública.

#### Publicación desde Git

1. Selecciona **Add new site > Import an existing project**.
2. Conecta el repositorio del proyecto.
3. Deja vacío el comando de construcción.
4. Usa `.` como directorio de publicación.
5. Confirma la configuración y publica el sitio.

## 11. Créditos académicos

**Proyecto desarrollado para:**

Escuela Policarpas: Proceso de Formación para Mujeres Populares del Cambio.

**Enfoque del proyecto:**

Comunicación comunitaria, memoria histórica, derechos territoriales, liderazgo de las mujeres, educación popular y construcción de paz.

La cartografía, las ilustraciones, el mapa de actores y los relatos son representaciones editoriales y pedagógicas. No sustituyen fuentes oficiales, procesos de investigación participativa ni ejercicios de consulta con las comunidades. El sitio incorpora créditos visibles, notas documentales por sección y un archivo de referencias institucionales, normativas, comunitarias y académicas revisado el 11 de junio de 2026.

## 12. Estado final

**LISTO PARA ENTREGA ACADÉMICA.**

El proyecto se encuentra ampliado, documentado, funcional en local, preparado para publicación estática y verificado en aspectos de estructura, rutas, accesibilidad, experiencia responsiva, recursos visuales acreditados y sintaxis JavaScript. El audio ilustrativo fue retirado al no aportar contenido narrativo real; el sitio no utiliza reproducción automática.
