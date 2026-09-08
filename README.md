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

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Vercel detectará el sitio estático. No configures comando de compilación ni variables de entorno.
4. Pulsa **Deploy**.

También se puede desplegar con la CLI de Vercel desde esta carpeta: `vercel`.

## Siguiente capa

Para sincronizar la evidencia entre teléfono y computadora, el siguiente paso es conectar Supabase con autenticación. No se incluyó ninguna credencial ni dependencia externa en esta primera versión.
