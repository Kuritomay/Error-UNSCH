# UNSCH Control Room

Panel de decisión para la preparación 20 → 10 → 20 antes del examen de admisión del 22 de noviembre de 2026.

## Principio operativo

El objetivo no es ocultar los errores: es producirlos temprano, clasificarlos y verificar que no se repitan bajo condiciones de examen.

- **Construir (20 días):** prioriza por `P0 = H × I × U`.
- **Romper (10 días):** preguntas nuevas, mezcladas y cronometradas.
- **Reparar (20 días):** prioriza por `R = F × I × D`.
- **Tramo final:** simulacros y riesgos críticos.

## Datos

El catálogo oficial está incluido en `app.js`. Los intentos, los errores y las fechas se guardan en `localStorage` del navegador. Por eso funciona sin servidor y se puede desplegar directamente en Vercel, pero los datos no se sincronizan entre dispositivos todavía.

## Interfaz y navegación

La barra lateral muestra una vista a la vez y permite navegar directamente entre los cuatro apartados:

- **Centro de mando:** campaña activa, métricas, siguiente acción y evidencia de dominio.
- **Microtemas:** catálogo oficial con filtros por tratamiento, curso y nivel K.
- **Registro de fallos:** registro de intentos incorrectos, patrones reincidentes y bitácora de reparaciones.
- **Estrategia:** resumen de tratamientos y recomendaciones basadas en la evidencia registrada.

Cada apartado puede abrirse mediante su fragmento de URL: `#inicio`, `#microtemas`, `#errores` o `#estrategia`.

La cuenta regresiva principal presenta días, horas, minutos y segundos con el mismo tamaño; los segundos se resaltan en rojo. El sitio utiliza `favicon.svg`, un icono propio basado en el símbolo de UNSCH Control.

## Dado de estudio

En el centro de mando, **Lanzar dado** elige un curso con probabilidad ponderada. Cada lanzamiento es independiente y puede repetir resultado. Los pesos relativos propuestos son:

| Prioridad | Cursos | Peso por curso | Puntos por pregunta |
| --- | --- | --- | --- |
| Muy alta | RM, RV, Aritmética, Física | 6 | 18 |
| Alta | Álgebra, Geometría, Trigonometría, Cívica | 3 | Por verificar |
| Complementaria | Lenguaje, Literatura, Economía, Geografía, Historia del Perú, Historia Universal | 1 | Por verificar |
| Selectiva | Química, Biología, Anatomía | 0,5 | Por verificar |

La probabilidad es `peso del curso / suma de pesos seleccionados`. Con los 17 cursos activos, cada curso de prioridad muy alta tiene un 13,8% de probabilidad, cada alta un 6,9%, cada complementaria un 2,3% y cada selectiva un 1,1% (valores redondeados). Los pesos no son puntajes oficiales ni dependen del área académica.

En **Cursos disponibles y probabilidades** puedes excluir cursos manteniendo al menos uno seleccionado. La selección y el último resultado se guardan en el dispositivo. El resultado permite abrir los microtemas del curso o registrar una práctica, con un microtema preseleccionado según la fase de campaña. RM utiliza el curso `RLM` del catálogo existente; Actualidad no participa al no tener una valoración indicada.

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Vercel detectará el sitio estático. No configures comando de compilación ni variables de entorno.
4. Pulsa **Deploy**.

También se puede desplegar con la CLI de Vercel desde esta carpeta: `vercel`.

## Siguiente capa

Para sincronizar la evidencia entre teléfono y computadora, el siguiente paso es conectar Supabase con autenticación. No se incluyó ninguna credencial ni dependencia externa en esta primera versión.
