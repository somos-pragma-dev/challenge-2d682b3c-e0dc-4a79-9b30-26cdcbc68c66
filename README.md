# Optimización de Rendimiento Web con Core Web Vitals

El equipo de desarrollo frontend ha identificado una brecha en la optimización de rendimiento de la aplicación web de una plataforma de finanzas personales. La aplicación, construida con React, debe mejorar sus Core Web Vitals para ofrecer una experiencia de usuario más rápida y eficiente. Los Core Web Vitals a considerar son: LCP (Largest Contentful Paint), FID (First Input Delay) y CLS (Cumulative Layout Shift). El objetivo es aplicar estos conceptos para tomar decisiones de código que mejoren el rendimiento en el contexto de negocio.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Core Web Vitals |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis de la Aplicación Actual

**Objetivo:** Identificar los puntos de mejora en la aplicación actual en términos de Core Web Vitals.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Realiza un análisis de la aplicación web existente para identificar los principales problemas relacionados con LCP, FID y CLS.
- Documenta los hallazgos y propone al menos dos mejoras potenciales para cada métrica.

**Entregable:** Informe de análisis con propuestas de mejora.

<details>
<summary>Pistas de conocimiento</summary>

- Considera el impacto de los recursos de la página en LCP.
- Evalúa la respuesta del servidor y la ejecución del JavaScript en FID.
- Analiza los cambios en el DOM que causan CLS.

</details>

### Fase 2: Implementación de Mejoras

**Objetivo:** Aplicar las mejoras propuestas en la fase anterior para optimizar los Core Web Vitals.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Implementa las mejoras identificadas en la fase de análisis para optimizar LCP, FID y CLS.
- Verifica que las mejoras aplicadas cumplan con los criterios de aceptación definidos.

**Entregable:** Aplicación web optimizada con mejoras aplicadas.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza técnicas de carga diferida para recursos no críticos.
- Optimiza la ejecución del JavaScript para reducir FID.
- Aplica estilos y tamaños de contenedores para prevenir CLS.

</details>

### Fase 3: Evaluación y Documentación

**Objetivo:** Evaluar el impacto de las mejoras y documentar el proceso.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Evalúa el impacto de las mejoras implementadas en los Core Web Vitals.
- Documenta el proceso de optimización y los resultados obtenidos.

**Entregable:** Informe final con evaluación del impacto y documentación del proceso.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas de medición de rendimiento para evaluar los resultados.
- Documenta las decisiones tomadas y los resultados obtenidos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los Core Web Vitals y por qué son importantes para la experiencia del usuario?
- **paraQueSirve**: ¿Cómo se utilizan los Core Web Vitals para identificar y solucionar problemas de rendimiento en una aplicación web?
- **comoSeUsa**: ¿Qué técnicas y estrategias se pueden aplicar para mejorar los Core Web Vitals en una aplicación construida con React?
- **erroresComunes**: ¿Cuáles son los errores comunes al intentar optimizar los Core Web Vitals y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones de diseño y trade-offs implica la optimización de los Core Web Vitals en el contexto de una aplicación web?

## Criterios de Evaluacion

- Identificación correcta de los puntos de mejora en los Core Web Vitals.
- Implementación efectiva de las mejoras propuestas.
- Evaluación precisa del impacto de las mejoras en los Core Web Vitals.
- Documentación clara y completa del proceso de optimización.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
