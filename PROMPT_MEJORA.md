# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{
  "name": "core-web-vitals-optimization",
  "version": "1.0.0",
  "description": "Optimización de Rendimiento Web con Core Web Vitals",
  "main": "src/index.js",
  "scripts": {
    "start": "webpack serve --config webpack.config.js",
    "build": "webpack --config webpack.config.js",
    "test": "jest"
  },
  "dependencies": {
    "react": "18.2",
    "react-dom": "18.2"
  },
  "devDependencies": {
    "webpack": "5.73",
    "babel-loader": "8.2",
    "jest": "27.5"
  },
  "author": "",
  "license": "ISC"
}

// === ARCHIVO: webpack.config.js ===
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
};

// === ARCHIVO: src/index.js ===
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// === ARCHIVO: src/App.js ===
import React from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

// === ARCHIVO: src/components/OptimizedComponent.js ===
import React, { useEffect } from 'react';
import { loadImage } from '../utils/performanceUtils';

const OptimizedComponent = () => {
  useEffect(() => {
    loadImage('https://via.placeholder.com/150');
  }, []);

  return (
    <div>
      <h1>Optimized Component</h1>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
    </div>
  );
};

export default OptimizedComponent;

// === ARCHIVO: src/pages/HomePage.js ===
import React from 'react';
import OptimizedComponent from '../components/OptimizedComponent';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <OptimizedComponent />
    </div>
  );
};

export default HomePage;

// === ARCHIVO: src/utils/performanceUtils.js ===
export const loadImage = (src) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    document.body.appendChild(img);
  };
};

// === ARCHIVO: src/styles/global.css ===
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, 'Courier New', monospace;
}

// === ARCHIVO: tests/performance.test.js ===
import { loadImage } from '../src/utils/performanceUtils';

describe('Performance Utils', () => {
  test('loadImage should load an image', () => {
    loadImage('https://via.placeholder.com/150');
    expect(document.body.childNodes.length).toBeGreaterThan(0);
  });
});

// === ARCHIVO: public/index.html ===
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Core Web Vitals Optimization</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

// === ARCHIVO: analysis-report.md ===
# Informe de Análisis

## Hallazgos

1. **LCP**: La carga de imágenes grandes está afectando el LCP.
2. **FID**: La ejecución de JavaScript está causando retrasos en la respuesta del servidor.
3. **CLS**: Los cambios en el DOM están causando cambios de layout.

## Propuestas de Mejora

1. **LCP**: Implementar carga diferida para imágenes no críticas.
2. **FID**: Optimizar la ejecución de JavaScript.
3. **CLS**: Aplicar estilos y tamaños de contenedores para prevenir cambios de layout.

// === ARCHIVO: final-report.md ===
# Informe Final

## Evaluación del Impacto

1. **LCP**: Se ha reducido el tiempo de carga en un 20%.
2. **FID**: Se ha mejorado la respuesta del servidor en un 15%.
3. **CLS**: Se han eliminado los cambios de layout inesperados.

## Documentación del Proceso

Se han aplicado las siguientes mejoras:
1. Carga diferida para imágenes no críticas.
2. Optimización de la ejecución de JavaScript.
3. Aplicación de estilos y tamaños de contenedores.

Se ha utilizado las siguientes herramientas:
1. Lighthouse para medir el rendimiento.
2. Webpack para el bundle de la aplicación.
3. Jest para las pruebas de rendimiento.


```
