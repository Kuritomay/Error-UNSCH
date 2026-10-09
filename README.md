# UNSCH Studio

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

La interfaz utiliza un **bento oscuro**: tarjetas modulares, tipografía Inter, acentos verde suave y controles consistentes. La navegación es lateral en PC y una barra inferior en móvil. Muestra una vista a la vez y permite navegar entre cuatro apartados:

- **Inicio:** tarjeta de dado, cuenta regresiva, preguntas exploradas y repasos pendientes, campaña activa, métricas, siguiente acción y evidencia de dominio.
- **Microtemas:** catálogo oficial con filtros por tratamiento, curso y nivel K; tabla en PC y tarjetas con etiquetas en móvil.
- **Registro de fallos:** registro de intentos incorrectos, patrones reincidentes y bitácora de reparaciones.
- **Estrategia:** resumen de tratamientos y recomendaciones basadas en la evidencia registrada.

Cada apartado puede abrirse mediante su fragmento de URL: `#inicio`, `#microtemas`, `#errores` o `#estrategia`.

**Ajustes de estudio** permite cambiar el área académica y abrir la configuración de campaña desde cualquier tamaño de pantalla. El anillo de progreso muestra el porcentaje de preguntas mentales exploradas; no representa dominio de temas ni porcentaje de aciertos.

La cuenta regresiva principal presenta días, horas, minutos y segundos con el mismo tamaño; los segundos se resaltan en rojo. El sitio utiliza `favicon.svg`, un icono propio basado en el símbolo de UNSCH Control.

Una barra de cuenta regresiva permanece fija en la parte superior en todas las vistas, tanto en móvil como en escritorio. Los diálogos incluyen una copia sincronizada del reloj para mantenerlo visible también al registrar intentos o configurar la campaña. Todos los relojes usan la misma fecha del examen y se actualizan cada segundo; la barra fija no genera anuncios continuos a lectores de pantalla.

## Dado de estudio

En el centro de mando, **Lanzar dado** elige un curso con probabilidad ponderada. Cada lanzamiento es independiente y puede repetir resultado. Los pesos relativos propuestos son:

| Prioridad | Cursos | Peso por curso | Puntos por pregunta |
| --- | --- | --- | --- |
| Muy alta | RM, RV, Aritmética, Física | 6 | 18 |
| Alta | Álgebra, Geometría, Trigonometría, Cívica | 3 | Por verificar |
| Complementaria | Lenguaje, Literatura, Economía, Geografía, Historia del Perú, Historia Universal y Actualidad* | 1 | Por verificar |
| Selectiva | Química, Biología, Anatomía | 0,5 | Por verificar |

La probabilidad es `peso del curso / suma de pesos seleccionados`. Con los 18 cursos activos, cada curso de prioridad muy alta tiene un 13,5% de probabilidad, cada alta un 6,7%, cada complementaria un 2,2% y cada selectiva un 1,1% (valores redondeados). Los pesos no son puntajes oficiales ni dependen del área académica.

**Actualidad:** utiliza un peso complementario propuesto para incluir todos los cursos del catálogo.

En **Cursos disponibles y probabilidades** puedes excluir cursos manteniendo al menos uno seleccionado. La selección y el último resultado se guardan en el dispositivo. El resultado permite abrir los microtemas del curso o registrar un intento de examen, con un microtema preseleccionado según la fase de campaña. RM utiliza el curso `RLM` del catálogo existente.

## Bases mentales: entender y ganar velocidad

El dado está al inicio, con **Iniciar práctica** justo debajo. Cada lanzamiento abre una pregunta del curso elegido. Iniciar práctica permite seguir con el último curso disponible o sortear uno si todavía no hay selección.

La práctica abre **Modo enfoque**, una ventana nativa dentro de la misma web: modal amplio con disposición bento en PC y pantalla completa en móvil/tablet. La cuenta regresiva y el botón **Salir** permanecen arriba mientras se desplazan las preguntas y las explicaciones. Se puede salir antes de responder, terminar una sesión o cerrar con Escape en PC; se restaura el foco y los repasos valorados permanecen guardados. El panel de fondo queda bloqueado durante la práctica.

**Probar otro curso** sortea entre los cursos disponibles distintos al actual, manteniendo sus pesos relativos; si solo hay un curso disponible, continúa en él. La pregunta y la selección del panel quedan sincronizadas.

El banco local de `mental-questions.js` y `mental-questions-extra.js` contiene **623 preguntas para los 18 cursos**, incluidas **117 de RV**: tablas del 6 al 9, porcentajes, MCD/MCM, ecuaciones, gráficas sencillas, geometría, razones trigonométricas, fuerzas y energía, etimología, lectura, gramática, cívica y bases de los otros cursos. Cada pregunta incluye respuesta, una explicación y **“Te sirve cuando…”**. La selección favorece las bases de temas profundos y herramientas reutilizables. “El 20%” es un criterio de utilidad, no un porcentaje demostrado de cobertura del examen.

Se consultó el temario oficial UNSCH 2027-I y referencias conceptuales de RAE/ASALE, OpenStax y Britannica; véase [FUENTES.md](FUENTES.md). Las preguntas son originales de práctica, no ítems oficiales de examen. Todos los **42 microtemas profundos** del plan tienen al menos tres preguntas, y los **36 microtemas de RV** al menos dos. En Historia se trabajan hechos, causas, consecuencias y contexto en lugar de preguntar fechas directas.

El catálogo muestra **Practicar · cantidad** en cada microtema con preguntas. Dentro de Modo enfoque, **Qué quieres repasar** permite elegir todos los temas del curso, solo los profundos o un microtema concreto. Se conserva ese filtro al continuar con otra pregunta del mismo curso.

La interacción es de recuerdo activo: responde mentalmente, pulsa **Ver respuesta** y valora **No sabía**, **Difícil** o **Lo sabía rápido**. El botón para descubrir la respuesta y los tres botones de valoración están en una **barra fija inferior, como en Anki**; solo se desplaza el panel de la pregunta y su explicación. Tras valorar, esa barra permite continuar o terminar. En PC, Espacio descubre la respuesta cuando el foco no está en un control, y 1/2/3 valoran el recuerdo. No hace falta escribir ni usar calculadora. Los valores trigonométricos exactos se distinguen de las aproximaciones escolares para 37° y 53°.

Las preguntas se presentan en tarjetas con icono y acento de color por familia de cursos, enunciado destacado y una guía visual de tres pasos: **Piensa → Descubre → Refuerza**. La solución separa la respuesta, la idea clave y su uso en el examen; los botones de recuerdo se distinguen por etiquetas, colores y atajos de teclado.

`mental-practice.js` prioriza repasos vencidos y preguntas nuevas, evitando repetir inmediatamente una pregunta. Las olvidadas se repasan tras otras preguntas de la sesión o al vencer 2 minutos; las lentas, tras 10 minutos. Las recordadas con soltura progresan por intervalos de 1, 3, 7, 14 y 30 días. Los repasos se seleccionan dentro del curso elegido. El tiempo mostrado mide desde la presentación hasta descubrir la respuesta, incluido cualquier tiempo de pausa.

La autoevaluación se guarda en `mentalProgress`, dentro del mismo almacenamiento local. Tiene progreso independiente de los intentos de examen y de la escala K. **Registrar intento de examen** conserva el formulario original para evidencias completas.

### Comprobación del banco

Sin dependencias adicionales, ejecuta `node --test tests/mental-questions.test.cjs`. Comprueba cobertura por curso y por tema profundo/RV, enlaces al catálogo, identificadores únicos, variantes numéricas, ausencia de preguntas de fechas directas y señalización de aproximaciones trigonométricas.

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Vercel detectará el sitio estático. No configures comando de compilación ni variables de entorno.
4. Pulsa **Deploy**.

También se puede desplegar con la CLI de Vercel desde esta carpeta: `vercel`.

## Siguiente capa

Para sincronizar la evidencia entre teléfono y computadora, el siguiente paso es conectar Supabase con autenticación. No se incluyó ninguna credencial ni dependencia externa en esta primera versión.
