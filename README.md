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

- **Centro de mando:** dado y práctica mental al inicio, campaña activa, métricas, siguiente acción y evidencia de dominio.
- **Microtemas:** catálogo oficial con filtros por tratamiento, curso y nivel K.
- **Registro de fallos:** registro de intentos incorrectos, patrones reincidentes y bitácora de reparaciones.
- **Estrategia:** resumen de tratamientos y recomendaciones basadas en la evidencia registrada.

Cada apartado puede abrirse mediante su fragmento de URL: `#inicio`, `#microtemas`, `#errores` o `#estrategia`.

La cuenta regresiva principal presenta días, horas, minutos y segundos con el mismo tamaño; los segundos se resaltan en rojo. El sitio utiliza `favicon.svg`, un icono propio basado en el símbolo de UNSCH Control.

Una barra de cuenta regresiva permanece fija en la parte superior en todas las vistas, tanto en móvil como en escritorio. Los diálogos incluyen una copia sincronizada del reloj para mantenerlo visible también al registrar intentos o configurar la campaña. Todos los relojes usan la misma fecha del examen y se actualizan cada segundo; la barra fija no genera anuncios continuos a lectores de pantalla.

## Dado de estudio

En el centro de mando, **Lanzar dado** elige un curso con probabilidad ponderada. Cada lanzamiento es independiente y puede repetir resultado. Los pesos relativos propuestos son:

| Prioridad | Cursos | Peso por curso | Puntos por pregunta |
| --- | --- | --- | --- |
| Muy alta | RM, RV, Aritmética, Física | 6 | 18 |
| Alta | Álgebra, Geometría, Trigonometría, Cívica | 3 | Por verificar |
| Complementaria | Lenguaje, Literatura, Economía, Geografía, Historia del Perú, Historia Universal | 1 | Por verificar |
| Selectiva | Química, Biología, Anatomía | 0,5 | Por verificar |

La probabilidad es `peso del curso / suma de pesos seleccionados`. Con los 17 cursos activos, cada curso de prioridad muy alta tiene un 13,8% de probabilidad, cada alta un 6,9%, cada complementaria un 2,3% y cada selectiva un 1,1% (valores redondeados). Los pesos no son puntajes oficiales ni dependen del área académica.

En **Cursos disponibles y probabilidades** puedes excluir cursos manteniendo al menos uno seleccionado. La selección y el último resultado se guardan en el dispositivo. El resultado permite abrir los microtemas del curso o registrar un intento de examen, con un microtema preseleccionado según la fase de campaña. RM utiliza el curso `RLM` del catálogo existente; Actualidad no participa al no tener una valoración indicada.

## Bases mentales: entender y ganar velocidad

El dado está al inicio, con **Iniciar práctica** justo debajo. Cada lanzamiento abre una pregunta del curso elegido. Iniciar práctica permite seguir con el último curso disponible o sortear uno si todavía no hay selección.

El banco local de `mental-questions.js` contiene **250 preguntas** para los 17 cursos: tablas del 6 al 9, porcentajes, MCD/MCM, ecuaciones, gráficas sencillas, geometría, razones trigonométricas, fuerzas y energía, etimología, gramática, cívica y bases de los otros cursos. Cada pregunta incluye respuesta, una explicación y **“Te sirve cuando…”**. Sus microtemas enlazan con el catálogo; la selección favorece las bases de temas profundos y herramientas como tablas, ángulos notables, raíces de palabras y gráficas elementales. “El 20%” es un criterio de utilidad, no un porcentaje demostrado de cobertura del examen.

La interacción es de recuerdo activo: responde mentalmente, pulsa **Ver respuesta** y valora **No lo sabía**, **Me costó** o **Lo sabía rápido**. Puedes hacer otra del mismo curso o terminar. No hace falta escribir ni usar calculadora. Los valores trigonométricos exactos se distinguen de las aproximaciones escolares para 37° y 53°.

Las preguntas se presentan en tarjetas con icono y acento de color por familia de cursos, enunciado destacado y una guía visual de tres pasos: **Piensa → Descubre → Refuerza**. La solución separa la respuesta, la idea clave y su uso en el examen; los botones de recuerdo incluyen iconos y etiquetas de texto.

`mental-practice.js` prioriza repasos vencidos y preguntas nuevas, evitando repetir inmediatamente una pregunta. Las olvidadas se repasan tras otras preguntas de la sesión o al vencer 2 minutos; las lentas, tras 10 minutos. Las recordadas con soltura progresan por intervalos de 1, 3, 7, 14 y 30 días. Los repasos se seleccionan dentro del curso elegido. El tiempo mostrado mide desde la presentación hasta descubrir la respuesta, incluido cualquier tiempo de pausa.

La autoevaluación se guarda en `mentalProgress`, dentro del mismo almacenamiento local. Tiene progreso independiente de los intentos de examen y de la escala K. **Registrar intento de examen** conserva el formulario original para evidencias completas.

### Comprobación del banco

Sin dependencias adicionales, ejecuta `node --test tests/mental-questions.test.cjs`. Comprueba cobertura por curso, enlaces al catálogo, identificadores únicos, variantes numéricas y señalización de aproximaciones trigonométricas.

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Vercel detectará el sitio estático. No configures comando de compilación ni variables de entorno.
4. Pulsa **Deploy**.

También se puede desplegar con la CLI de Vercel desde esta carpeta: `vercel`.

## Siguiente capa

Para sincronizar la evidencia entre teléfono y computadora, el siguiente paso es conectar Supabase con autenticación. No se incluyó ninguna credencial ni dependencia externa en esta primera versión.
