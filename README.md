# Mujeres Kankuamas: Territorio, Memoria y Resistencia

Revista digital interactiva desarrollada para la **Escuela Policarpas: Proceso de Formación para Mujeres Populares del Cambio**.

La pieza aborda territorio, memoria histórica, liderazgo de las mujeres Kankuamas, desplazamiento, vida en contexto urbano, relaciones de poder y propuestas comunitarias para la garantía de derechos.

## Tecnologías

- HTML5
- CSS3
- JavaScript puro
- SVG e imágenes locales
- Sin frameworks y sin backend

## Estructura

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

## Ampliación sobre contexto urbano

El sitio incluye una sección titulada **Las Mujeres Kankuamas en Contexto Urbano**, con:

- Ocho tarjetas temáticas sobre identidad, desarraigo, violencias, economía, derechos, memoria, saberes y liderazgo.
- Una infografía interactiva sobre la relación territorio, identidad, memoria, desplazamiento, resistencia y liderazgo femenino.
- Navegación mediante teclado y estados ARIA.
- Una ilustración editorial propia y una fotografía regional de referencia con créditos y licencia.
- Un sistema global de citas `R1–R24` conectado con notas documentales en cada sección.
- Un archivo final desplegable de bibliografía, instituciones, informes, normativa y créditos multimedia.

## Sistema académico y editorial

- Cada bloque temático identifica su base documental mediante badges o notas discretas.
- Las citas abren automáticamente la categoría correspondiente en **Fuentes, Referencias y Créditos**.
- La línea de tiempo, el mapa de actores y la infografía urbana se declaran como recursos interpretativos cuando no representan una medición estadística.
- Los relatos se identifican como composiciones pedagógicas inspiradas en experiencias documentadas, sin nombres reales ni citas testimoniales literales.
- Fotografías, mapas, ilustraciones y módulos multimedia incluyen autoría, procedencia, licencia o nota metodológica.
- Los enlaces y las fuentes fueron revisados el 11 de junio de 2026.

## Abrir localmente

La página no requiere instalación ni compilación.

1. Descarga o clona el proyecto.
2. Abre `index.html` en un navegador moderno.

También puede servirse desde un servidor local:

```bash
npx serve .
```

## Desplegar en GitHub Pages

1. Crea un repositorio en GitHub y sube todos los archivos conservando la estructura.
2. En el repositorio, abre **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda los cambios y espera a que GitHub publique la URL.

Todas las rutas son relativas, por lo que el sitio funciona en una página de proyecto.

## Desplegar en Netlify

### Despliegue manual

1. Ingresa a Netlify.
2. Selecciona **Add new site > Deploy manually**.
3. Arrastra la carpeta completa del proyecto.

### Desde un repositorio

1. Selecciona **Add new site > Import an existing project**.
2. Conecta el repositorio.
3. Deja vacío el comando de construcción.
4. Usa `.` como directorio de publicación.

## Personalización

- La imagen principal está en `assets/hero-kankuama.png`.
- El mapa ilustrado está en `assets/mapa-sierra.svg`.
- El módulo audiovisual es un marcador editorial sin reproducción automática. Para incorporar un video autorizado, agrega el archivo a `assets/` y reemplaza el contenido del diálogo en `index.html` por un elemento `<video controls>`.
- No se incluye audio. El anterior control ilustrativo fue retirado porque no reproducía un recurso narrativo real.
- Los colores, tamaños y tipografías se administran desde las variables de `:root` en `styles.css`.

## Créditos visuales

- `hero-kankuama.png`: imagen editorial generada para el proyecto mediante OpenAI; no representa una persona real.
- `mapa-sierra.svg`: cartografía ilustrada propia y referencial.
- `mujer-kankuama-ciudad.svg`: ilustración vectorial propia.
- `tejido-referencia-unsplash.jpg`: fotografía de Anyela Málaga Lazarte, publicada en Unsplash bajo la Licencia Unsplash. Es una referencia regional sobre tejido tradicional en Cusco, Perú, y no una representación del pueblo Kankuamo.

## Accesibilidad

El sitio incluye navegación por teclado, enlace para saltar al contenido, foco visible, controles con atributos ARIA, textos alternativos, modales nativos y compatibilidad con la preferencia de movimiento reducido. Las citas también son navegables por teclado, despliegan su grupo documental y trasladan el foco a la referencia seleccionada.

## Nota editorial

Los relatos son composiciones pedagógicas inspiradas en experiencias documentadas de mujeres indígenas afectadas por el conflicto armado y el desplazamiento. No identifican personas reales. La cartografía y el mapa de actores son representaciones ilustrativas y no sustituyen fuentes oficiales o procesos de consulta comunitaria.
