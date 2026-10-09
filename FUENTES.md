# Temario y referencias del banco mental

Consulta realizada el **8 de octubre de 2026**. Las preguntas son ejercicios originales de práctica breve; no son preguntas oficiales ni una predicción del examen.

## Referencia curricular principal

- [UNSCH: temario de admisión 2027-I](https://admision.unsch.edu.pe/informacion/temario).
- [PDF oficial, páginas del prospecto 27–33](https://admision.unsch.edu.pe/documentos/pdf/TEMARIO.pdf).

Se revisó el PDF publicado por la Dirección de Admisión y se contrastaron sus áreas con el catálogo existente de la aplicación. Sus 19 bloques de RV incluyen etimología, relaciones léxicas, analogías, estructura textual, cohesión, referentes, conectores, oración eliminada, redacción, comprensión, inferencias y herramientas de lectura. La aplicación los desglosa en 36 microtemas.

**Profundo** es una etiqueta de prioridad del plan de esta web, no una clasificación oficial de la UNSCH. El banco cubre los 42 microtemas con esa etiqueta y todos los microtemas de RV. Otros contenidos del catálogo reciben preguntas de bases y ejemplos seleccionados; el banco no sustituye el desarrollo completo del prospecto.

## Referencias conceptuales consultadas

| Fuente | Uso de la consulta |
| --- | --- |
| [RAE/ASALE: inferencia](https://dle.rae.es/inferencia) | Terminología del razonamiento verbal. |
| [RAE/ASALE: polisemia](https://dle.rae.es/polisemia) | Pluralidad de sentidos y ejemplos contextualizados. |
| [RAE/ASALE: hiperonimia](https://dle.rae.es/hiperonimia) | Relaciones de inclusión entre términos. |
| [RAE/ASALE: tilde, DPD](https://www.rae.es/dpd/tilde) | Acentuación, diptongos/hiatos, tilde diacrítica y formas complejas. |
| [OpenStax: segunda ley de Newton](https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/5-3-segunda-ley-de-newton) | Relación entre fuerza neta, masa y aceleración; cambios proporcionales. |
| [OpenStax: meiosis y comparación con mitosis](https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis) | Reducción cromosómica, separación de homólogos y variación genética. |
| [OpenStax: oferta, demanda y equilibrio](https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services) | Diferencia entre curva y cantidad; excedentes y escasez a un precio. |
| [Britannica: batalla de Ayacucho](https://www.britannica.com/event/Battle-of-Ayacucho) | Escenario, protagonistas, capitulación y consecuencias de la victoria. |
| [Britannica: Juan Velasco Alvarado](https://www.britannica.com/biography/Juan-Velasco-Alvarado) | Contexto del gobierno militar, reforma de la propiedad y cooperativas. |
| [Britannica: Revolución francesa](https://www.britannica.com/event/French-Revolution) | Desigualdad estamental, causas sociales y transformación política. |

OpenStax pertenece a Rice University. Se emplearon sus páginas como referencias de consulta de conceptos, sin copiar sus actividades, evaluaciones o ilustraciones. Los enunciados, ejemplos numéricos y explicaciones del banco se redactaron para esta aplicación.

## Criterios de las preguntas

- Un concepto, relación o cálculo mental por tarjeta, con explicación y transferencia.
- En Historia se preguntan acontecimientos, causas, consecuencias y contexto; no se pide recordar un año como respuesta.
- Las aproximaciones trigonométricas de 37° y 53° se identifican como aproximaciones.
- RV incluye ejercicios aplicados, además de recordar definiciones: textos cortos, conectores, inferencias, analogías, eliminación y ordenación de oraciones.
- Actualidad ofrece bases para interpretar noticias y procesos regionales, nacionales e internacionales; no es un boletín actualizado diariamente. Su peso complementario de 1 en el dado es una propuesta explícita.
- Cada tarjeta enlaza una referencia de consulta. Cuando no se asigna una página conceptual específica, el enlace apunta al temario oficial que encuadra el tema.

## Comprobación

`node --test tests/mental-questions.test.cjs` verifica la cobertura del catálogo, los identificadores únicos, al menos tres preguntas por microtema profundo, al menos dos por microtema de RV, las variantes numéricas y la ausencia de preguntas de fechas directas en Historia.
