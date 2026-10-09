// Microtema, pregunta, respuesta, idea clave y transferencia al examen.
const mentalSeeds = {
  "Literatura": [
    ["teoría y géneros", "¿Qué género expresa principalmente sentimientos y la subjetividad de una voz poética?", "Lírico", "La voz del poema se llama hablante o yo lírico.", "distingues lírica de narración y teatro."],
    ["teoría y géneros", "¿Qué género está concebido para la representación escénica?", "Dramático", "La acción se presenta mediante personajes, diálogos y acotaciones.", "reconoces una obra teatral."],
    ["figuras literarias", "«Tus ojos son estrellas»: ¿metáfora o comparación explícita?", "Metáfora", "Identifica ojos con estrellas sin usar como.", "interpretas lenguaje figurado."],
    ["figuras literarias", "«Corre como el viento»: ¿qué figura aparece?", "Símil o comparación", "Como hace explícita la comparación.", "distingues símil de metáfora."],
    ["figuras literarias", "«Te esperé mil años»: ¿qué figura aparece?", "Hipérbole", "Exagera la duración para intensificar el mensaje.", "no interpretas literalmente una exageración literaria."],
    ["figuras literarias", "«El viento susurra»: ¿qué figura aparece?", "Personificación o prosopopeya", "Atribuye una acción humana a un elemento no humano.", "reconoces recursos expresivos en un texto."]
  ],
  "Economía": [
    ["escasez y FPP", "¿Por qué la escasez obliga a elegir?", "Porque los recursos son limitados frente a las necesidades", "Elegir un uso impide destinar esos mismos recursos a otro.", "explicas el problema económico básico."],
    ["escasez y FPP", "¿Qué es el costo de oportunidad?", "El valor de la mejor alternativa a la que renuncias", "No es la suma de todas las opciones descartadas.", "comparas decisiones de tiempo, dinero o producción."],
    ["oferta y demanda", "Si sube el precio de un bien, con lo demás constante, ¿qué suele pasar con su cantidad demandada?", "Disminuye", "Es un movimiento a lo largo de la curva de demanda.", "distingues precio de otros factores de demanda."],
    ["oferta y demanda", "Si sube el precio de un bien, con lo demás constante, ¿qué suele pasar con su cantidad ofrecida?", "Aumenta", "Es un movimiento a lo largo de la curva de oferta.", "relacionas incentivos de productores y consumidores."],
    ["oferta y demanda", "¿Qué ocurre en el precio de equilibrio?", "Cantidad ofrecida = cantidad demandada", "No hay exceso de oferta ni de demanda en ese modelo.", "lees la intersección de dos curvas."],
    ["inflación", "¿Subir el precio de un solo producto basta para hablar de inflación?", "No", "Inflación es el aumento sostenido y generalizado del nivel de precios.", "distingues un cambio particular de uno general."],
    ["dinero e interés", "S/100 ganan 10% de interés simple en un año. ¿Cuánto interés generan?", "S/10", "Interés simple = capital × tasa × tiempo.", "separas el interés ganado del monto total, S/110."]
  ],
  "Geografía": [
    ["clima", "¿Tiempo atmosférico y clima significan lo mismo?", "No", "Tiempo: condiciones del momento. Clima: patrones de largo plazo.", "distingues una lluvia de hoy de las características de una región."],
    ["cuencas e hidrografía", "¿Qué es una cuenca hidrográfica?", "Territorio cuyas aguas drenan hacia una salida común", "Incluye el río principal y sus afluentes.", "relacionas relieve y recorrido del agua."],
    ["relieve", "En general, al aumentar la altitud en la troposfera, ¿qué ocurre con la temperatura?", "Disminuye", "Es una tendencia general; existen variaciones e inversiones térmicas.", "relacionas pisos altitudinales y clima."],
    ["población", "Si hay 100 habitantes en 5 km², ¿cuál es la densidad de población?", "20 habitantes/km²", "Densidad = población / superficie.", "comparas ocupación del territorio sin confundirla con población total."],
    ["riesgos", "¿Peligro y riesgo son lo mismo?", "No", "El peligro es la posibilidad de un fenómeno dañino; el riesgo considera también exposición y vulnerabilidad.", "analizas por qué el mismo fenómeno causa daños diferentes."],
    ["recursos naturales", "¿Por qué la energía solar se considera renovable?", "Su fuente se repone continuamente a escala humana", "No depende de consumir una reserva finita de combustible.", "clasificas fuentes de energía."]
  ],
  "Historia del Perú": [
    ["Tawantinsuyo", "¿Cuál fue la capital del Tawantinsuyo?", "Cusco", "Fue el centro político del Estado inca.", "ubicas el núcleo de la organización incaica."],
    ["Tawantinsuyo", "¿Qué era el ayni?", "Trabajo de ayuda recíproca", "Una persona o familia ayuda y recibe ayuda en otra ocasión.", "distingues reciprocidad de otras formas de trabajo andino."],
    ["virreinato", "¿Quién representaba al rey en el Virreinato del Perú?", "El virrey", "Era la máxima autoridad del gobierno virreinal.", "identificas instituciones del periodo colonial."],
    ["independencia", "¿Qué papel desempeñó San Martín en la independencia del Perú?", "Dirigió la corriente libertadora del Sur y proclamó la independencia", "La proclamación política no terminó por sí sola la guerra contra el poder realista.", "distingues proclamación política y consolidación militar."],
    ["Historia de Ayacucho y Huamanga", "¿Qué consecuencia decisiva tuvo la victoria patriota en la batalla de Ayacucho?", "Consolidó militarmente la independencia peruana", "La derrota del principal ejército realista llevó a la capitulación; algunos focos resistieron después.", "relacionas una batalla con sus consecuencias, no solo con una fecha."],
    ["Velasco y Reforma Agraria", "¿Qué gobierno impulsó la Reforma Agraria peruana de 1969?", "El de Juan Velasco Alvarado", "Transformó la estructura de propiedad agraria y afectó a las grandes haciendas.", "relacionas una reforma con su periodo y gobierno."]
  ],
  "Historia Universal": [
    ["Grecia", "¿En qué polis griega se desarrolló la democracia clásica más conocida?", "Atenas", "Era una democracia directa con ciudadanía restringida, distinta de la actual.", "ubicas instituciones en su contexto histórico."],
    ["Roma", "¿Qué etapa romana tuvo emperadores: República o Imperio?", "Imperio", "La República precedió al Imperio.", "ordenas las principales etapas de Roma."],
    ["feudalismo", "¿Qué era el vasallaje?", "Un vínculo de fidelidad y obligaciones entre señor y vasallo", "Podía incluir protección y concesión de un feudo a cambio de servicios.", "distingues vasallaje de servidumbre campesina."],
    ["Renacimiento", "¿Qué movimiento colocó al ser humano y la cultura clásica en el centro de su interés?", "El humanismo renacentista", "Revaloró textos y modelos de la Antigüedad clásica.", "reconoces ideas del Renacimiento."],
    ["Revolución francesa", "¿Qué desigualdad del Antiguo Régimen cuestionó la Revolución francesa?", "Los privilegios estamentales frente a la igualdad jurídica", "Nobleza y clero gozaban de privilegios que no tenía el tercer estado.", "explicas causas sociales y cambios políticos de una revolución."],
    ["Revolución industrial", "¿En qué país comenzó la primera Revolución Industrial?", "Gran Bretaña", "La mecanización y el sistema fabril se expandieron desde allí.", "relacionas industrialización y transformaciones económicas."],
    ["Guerra Fría", "¿Qué dos potencias encabezaron los bloques de la Guerra Fría?", "Estados Unidos y la Unión Soviética", "Compitieron política, económica y militarmente sin una guerra directa general entre ambas.", "interpretas el mundo bipolar del siglo XX."]
  ],
  "Cívica": [
    ["Constitución", "¿Cuál es la norma suprema del ordenamiento jurídico peruano?", "La Constitución", "Las demás normas deben respetarla.", "ordenas la jerarquía de las normas."],
    ["Poder Legislativo", "¿Qué poder del Estado tiene como función principal elaborar leyes?", "El Poder Legislativo", "En Perú lo ejerce el Congreso; también realiza control político.", "distingues legislar, gobernar y administrar justicia."],
    ["Poder Ejecutivo", "¿Qué poder dirige la política general del Gobierno?", "El Poder Ejecutivo", "El presidente dirige la política general; el Ejecutivo ejecuta las leyes.", "identificas funciones de los poderes estatales."],
    ["Poder Judicial", "¿Qué poder administra justicia mediante sus órganos jurisdiccionales?", "El Poder Judicial", "Resuelve controversias aplicando el derecho.", "distingues juzgar de crear o ejecutar leyes."],
    ["organismos autónomos", "¿Qué organismo controla la constitucionalidad de las normas dentro de sus competencias?", "El Tribunal Constitucional", "Es el órgano de control de la Constitución.", "una pregunta trata de defensa del orden constitucional."],
    ["democracia", "¿Qué significa que exista separación de poderes?", "Las funciones estatales se distribuyen y hay controles entre poderes", "Evita concentrar toda la autoridad en un solo órgano.", "evalúas mecanismos que limitan el abuso de poder."],
    ["derechos humanos", "¿Los derechos humanos dependen de la nacionalidad de una persona?", "No", "Son universales: corresponden a toda persona.", "distingues derechos humanos de derechos específicos de ciudadanía."],
    ["sistema electoral", "En Perú, ¿qué organismo organiza los procesos electorales?", "La ONPE", "ONPE organiza; JNE fiscaliza la legalidad y administra justicia electoral.", "distingues funciones de los organismos electorales."],
    ["sistema electoral", "¿Qué organismo peruano identifica a las personas y expide el DNI?", "El RENIEC", "Registra la identidad y los hechos del estado civil.", "separas identificación, organización y justicia electoral."],
    ["persona y familia", "¿Desde qué edad se ejerce la ciudadanía en Perú?", "Desde los 18 años", "La Constitución reconoce como ciudadanos a los peruanos mayores de 18; se requiere inscripción electoral para ejercerla.", "relacionas edad, ciudadanía y participación política."]
  ],
  "Química": [
    ["átomo", "¿Qué indica el número atómico Z?", "La cantidad de protones", "Z identifica al elemento. En un átomo neutro también es el número de electrones.", "identificas elementos y cuentas partículas."],
    ["átomo", "Un átomo tiene 6 protones y 8 neutrones. ¿Cuál es su número másico A?", "14", "A = protones + neutrones.", "calculas neutrones a partir de A y Z."],
    ["átomo", "Un átomo neutro pierde un electrón. ¿Queda positivo o negativo?", "Positivo: catión", "Ahora tiene más protones que electrones.", "distingues cationes de aniones."],
    ["isótopos y radiactividad", "¿Qué tienen igual dos isótopos del mismo elemento?", "El número de protones", "Tienen el mismo Z y distinto número de neutrones.", "distingues isótopos de elementos diferentes."],
    ["enlaces", "En un enlace covalente, ¿se comparten o se transfieren electrones?", "Se comparten", "El enlace covalente se forma por pares de electrones compartidos.", "reconoces el tipo de enlace entre no metales."],
    ["enlaces", "¿Qué caracteriza a un enlace iónico?", "La atracción entre iones de cargas opuestas", "La transferencia de electrones puede producir un catión y un anión.", "analizas compuestos como el cloruro de sodio."],
    ["balanceo", "Al balancear una reacción, ¿se cambian los subíndices de las fórmulas?", "No; se cambian los coeficientes", "Cambiar H₂O por H₂O₂ cambia la sustancia.", "conservas la cantidad de átomos sin alterar los compuestos."],
    ["soluciones", "¿Cuál es el solvente en una solución de sal en agua?", "El agua", "La sal es el soluto disuelto; el agua es el medio que la disuelve.", "distingues los componentes de una solución."],
    ["soluciones", "En una solución acuosa a 25 °C, ¿un pH de 3 es ácido o básico?", "Ácido", "A 25 °C: pH menor que 7 es ácido; 7, neutro; mayor que 7, básico.", "clasificas soluciones usando su pH."]
  ],
  "Biología": [
    ["célula", "¿Cuál es la unidad estructural y funcional básica de los seres vivos?", "La célula", "Los organismos están formados por una o más células.", "reconoces la base de la teoría celular."],
    ["célula", "¿Las bacterias tienen núcleo delimitado por membrana?", "No", "Son procariotas; su ADN se encuentra en una región llamada nucleoide.", "distingues células procariotas de eucariotas."],
    ["célula", "¿Qué estructura regula el intercambio de sustancias entre la célula y su entorno?", "La membrana plasmática", "Su permeabilidad es selectiva.", "comprendes difusión, ósmosis y transporte celular."],
    ["célula", "¿Qué organelo sintetiza proteínas?", "El ribosoma", "Traduce la información del ARN mensajero.", "relacionas información genética y producción de proteínas."],
    ["célula", "En células eucariotas, ¿qué organelo produce gran parte del ATP mediante respiración aerobia?", "La mitocondria", "ATP es una molécula utilizada para transferir energía en la célula.", "identificas funciones de los organelos."],
    ["mitosis y meiosis", "¿Qué división reduce a la mitad el número de cromosomas: mitosis o meiosis?", "Meiosis", "Una célula diploide origina células haploides; la mitosis conserva normalmente la dotación.", "distingues crecimiento celular y reproducción sexual."],
    ["mitosis y meiosis", "¿Cuántas células hijas produce una mitosis típica?", "Dos", "Normalmente conservan el número de cromosomas de la célula inicial.", "reconoces el proceso usado para crecimiento y reparación."],
    ["genética", "En ADN, ¿con qué base se aparea la adenina?", "Con timina", "A–T y C–G son los pares complementarios del ADN.", "completas una cadena complementaria."],
    ["genética", "Si A es dominante, ¿Aa es homocigoto o heterocigoto?", "Heterocigoto", "Tiene dos alelos distintos; AA y aa son homocigotos.", "lees cruces genéticos y cuadros de Punnett."],
    ["nutrición fotosíntesis y energía", "¿Qué gas se libera en la fotosíntesis oxigénica?", "Oxígeno", "Se libera al dividir moléculas de agua; el CO₂ se usa para formar compuestos orgánicos.", "distingues entradas y productos de la fotosíntesis."]
  ],
  "Anatomía": [
    ["sistema cardiovascular", "¿Las arterias llevan sangre hacia el corazón o se alejan de él?", "Se alejan del corazón", "Arteria y vena se definen por la dirección, no por tener más o menos oxígeno.", "evitas confundir los vasos pulmonares."],
    ["sistema cardiovascular", "¿Qué células de la sangre transportan principalmente el oxígeno?", "Los glóbulos rojos o eritrocitos", "Contienen hemoglobina, que se une al oxígeno.", "relacionas sangre, respiración y transporte."],
    ["sistema respiratorio", "¿Dónde ocurre el intercambio de gases en los pulmones?", "En los alvéolos", "Sus paredes delgadas permiten el intercambio con los capilares.", "distingues conducir aire de intercambiar gases."],
    ["sistema digestivo", "¿Dónde se absorbe la mayor parte de los nutrientes?", "En el intestino delgado", "Las vellosidades aumentan la superficie de absorción.", "distingues digestión de absorción."],
    ["sistema urinario", "¿Cuál es la unidad funcional del riñón?", "La nefrona", "Filtra y modifica el filtrado para formar orina.", "entiendes filtración, reabsorción y excreción."],
    ["sistema nervioso", "¿Qué forma el sistema nervioso central?", "Encéfalo y médula espinal", "Los nervios pertenecen al sistema nervioso periférico.", "ubicas centros de procesamiento y vías de comunicación."],
    ["sistema endocrino", "¿Qué hormona ayuda a disminuir la glucosa en sangre?", "La insulina", "Favorece el uso y almacenamiento de glucosa; se produce en el páncreas.", "relacionas hormonas con regulación del organismo."]
  ],
  "Razonamiento verbal": [
    ["etimología", "¿Qué significa bio- en biología?", "Vida", "Biología une bio- (vida) y -logía (estudio).", "deduces el significado de palabras científicas."],
    ["etimología", "¿Qué significa zoo- en zoología?", "Animal", "Zoología: estudio de los animales.", "reconoces vocabulario sobre animales."],
    ["etimología", "¿Qué significa soma en somático?", "Cuerpo", "Somático se refiere al cuerpo.", "distingues células somáticas de células reproductoras."],
    ["etimología", "¿Qué significa cardio- en cardiología?", "Corazón", "Cardio- señala al corazón; -logía indica estudio.", "relacionas términos médicos con su órgano."],
    ["etimología", "¿Qué significa neuro- en neurología?", "Nervio o sistema nervioso", "Neuro- aparece en neurona y neurología.", "interpretas vocabulario del sistema nervioso."],
    ["etimología", "¿Qué significa dermato- en dermatología?", "Piel", "Dermatología: estudio y especialidad médica de la piel.", "reconoces términos relativos a la piel."],
    ["etimología", "¿Qué significa hemo- en hemoglobina?", "Sangre", "Hemo- y hemato- se relacionan con la sangre.", "interpretas vocabulario de circulación."],
    ["prefijos griegos", "¿Qué indica el prefijo hiper- en hipertensión?", "Exceso o por encima de lo normal", "Hiper- contrasta con hipo-, que indica por debajo.", "distingues aumento y disminución en términos científicos."],
    ["prefijos griegos", "¿Qué significa a- en amoral?", "Ausencia o negación", "Amoral significa ajeno a la valoración moral; no es igual que inmoral.", "un prefijo modifica el sentido de una palabra."],
    ["analogías", "Completa: ojo es a ver como oído es a…", "Oír", "La relación es órgano → función.", "buscas la misma relación, no solo palabras del mismo tema."],
    ["analogías", "Completa: médico es a hospital como docente es a…", "Escuela o centro educativo", "La relación es profesión → lugar de trabajo habitual.", "identificas el vínculo antes de mirar alternativas."],
    ["inferencia", "«El suelo está mojado», sin más datos. ¿Se puede asegurar que llovió?", "No", "También pudieron regarlo. Algo posible no es una conclusión segura.", "evitas inferencias que añaden información no sustentada."],
    ["inferencia", "Todos los mamíferos son vertebrados. El perro es mamífero. ¿Qué concluyes?", "El perro es vertebrado", "Aplica la regla general al caso incluido.", "una conclusión se desprende de las premisas."],
    ["comprensión literal", "«Lucía salió antes que Pedro». ¿Quién salió primero?", "Lucía", "La respuesta está expresada directamente.", "separas información literal de interpretación."],
    ["tema", "¿Qué pregunta identifica el tema de un texto?", "¿De qué trata?", "El tema es el asunto general; no es todavía la afirmación central.", "distingues tema de idea principal."],
    ["idea principal y secundaria", "¿Qué pregunta ayuda a encontrar la idea principal?", "¿Qué afirma principalmente el texto sobre su tema?", "Busca la afirmación que organiza las demás ideas.", "eliges un resumen que no sea solo un detalle."],
    ["conectores", "En «Quería salir, pero llovía», ¿qué relación expresa pero?", "Contraste u oposición", "La segunda idea limita la expectativa creada por la primera.", "eliges un conector que conserve el sentido."],
    ["conectores", "En «Estudió; por eso aprobó», ¿qué introduce por eso?", "Consecuencia", "La segunda parte se presenta como resultado de la primera.", "reconoces causa y efecto en un argumento."],
    ["referentes", "«Ana vio a Rosa. Esta llevaba un libro». ¿A quién refiere esta en la lectura más natural?", "A Rosa", "El demostrativo suele recuperar el referente cercano; confirma con el contexto.", "sigues referentes sin perder de quién se habla."],
    ["hiperonimia", "En «rosa, tulipán y flor», ¿cuál es el término más general?", "Flor", "Flor incluye a rosa y tulipán: es el hiperónimo.", "reconoces categorías y términos incluidos."]
  ],
  "Lenguaje": [
    ["categorías variables", "En «Ella estudia», ¿qué clase de palabra es ella?", "Pronombre personal", "Reemplaza o señala a una persona sin nombrarla.", "identificas quién participa en la oración."],
    ["categorías variables", "En «Mis libros», ¿qué expresa mis?", "Posesión; es un determinante posesivo", "Acompaña al sustantivo libros; no lo reemplaza.", "distingues determinantes de pronombres."],
    ["sujeto", "En «Los alumnos de Ayacucho estudian», ¿cuál es el núcleo del sujeto?", "Alumnos", "El núcleo es el sustantivo principal, no el complemento de Ayacucho.", "analizas el sujeto sin confundir sus modificadores."],
    ["sujeto", "En «Me gustan las matemáticas», ¿cuál es el sujeto?", "Las matemáticas", "Concuerda con gustan. Me no es el sujeto.", "el sujeto aparece después del verbo."],
    ["predicado", "En «María lee un libro», ¿cuál es el núcleo del predicado verbal?", "Lee", "El verbo organiza el predicado y sus complementos.", "empiezas un análisis sintáctico por el verbo."],
    ["concordancia", "Elige: «La gente es amable» o «La gente son amables».", "La gente es amable", "Gente es un sustantivo colectivo singular.", "haces concordar sujeto y verbo."],
    ["signo lingüístico", "En un signo lingüístico, ¿cómo se llama el concepto: significado o significante?", "Significado", "Significado = concepto. Significante = forma sonora o gráfica.", "separas una palabra de la idea que representa."],
    ["comunicación", "En la comunicación, ¿quién produce el mensaje?", "El emisor", "El receptor lo recibe; el canal lo transmite.", "identificas los elementos de una situación comunicativa."],
    ["diptongo hiato y triptongo", "En país, ¿hay diptongo o hiato?", "Hiato: pa-ís", "La vocal cerrada tónica í se separa de la abierta.", "acentúas palabras con vocales juntas."],
    ["diptongo hiato y triptongo", "En cielo, ¿hay diptongo o hiato?", "Diptongo: cie-lo", "La i átona y la e se pronuncian en una misma sílaba.", "separas sílabas antes de aplicar reglas de acentuación."],
    ["acentuación general", "¿Por qué canción lleva tilde?", "Es aguda y termina en n", "Las agudas se tildan si terminan en vocal, n o s.", "aplicas la regla general y no memorizas palabra por palabra."],
    ["acentuación general", "¿Las palabras esdrújulas llevan tilde?", "Sí, siempre", "La sílaba tónica está en la antepenúltima posición.", "reconoces rápidamente palabras como música o química."],
    ["tilde diacrítica", "Completa: «___ eres mi amigo»: ¿tú o tu?", "Tú", "Tú es pronombre personal; tu sin tilde es posesivo.", "distingues función gramatical por la tilde diacrítica."],
    ["sujeto", "En «Estudiamos cada día», ¿hay sujeto aunque no esté escrito?", "Sí: nosotros o nosotras, sujeto tácito", "La terminación del verbo permite recuperarlo.", "no confundes sujeto omitido con oración impersonal."]
  ],
  "Trigonometría": [
    ["razones trigonométricas", "En un triángulo rectángulo, ¿cómo se calcula el seno de un ángulo agudo?", "Cateto opuesto / hipotenusa", "Ubica primero el ángulo; el cateto opuesto queda enfrente.", "descompones vectores o relacionas lados y ángulos."],
    ["razones trigonométricas", "¿Cómo se calcula el coseno de un ángulo agudo en un triángulo rectángulo?", "Cateto adyacente / hipotenusa", "El adyacente toca al ángulo y no es la hipotenusa.", "buscas una proyección sobre un eje."],
    ["razones trigonométricas", "¿Cómo se calcula la tangente de un ángulo agudo?", "Cateto opuesto / cateto adyacente", "También es seno / coseno cuando el coseno no es cero.", "relacionas una altura con una distancia horizontal."],
    ["triángulos notables", "¿Cuánto es sen 30°?", "1/2 (exacto)", "El lado opuesto a 30° es la mitad de la hipotenusa.", "proyectas una fuerza o velocidad con un ángulo de 30°."],
    ["triángulos notables", "¿Cuánto es cos 60°?", "1/2 (exacto)", "Cos 60° = sen 30°: son ángulos complementarios.", "reutilizas valores conocidos cambiando seno por coseno."],
    ["triángulos notables", "¿Cuánto es sen 60°?", "√3/2 (exacto)", "Los lados del triángulo 30°–60°–90° son 1, √3 y 2.", "calculas componentes sin usar aproximaciones decimales."],
    ["triángulos notables", "¿Cuánto es cos 30°?", "√3/2 (exacto)", "Cos 30° = sen 60°.", "resuelves triángulos con ángulos complementarios."],
    ["triángulos notables", "¿Cuánto valen sen 45° y cos 45°?", "Ambos: √2/2 (exacto)", "Los catetos son iguales: lados 1, 1 y √2.", "reconoces componentes iguales en una dirección de 45°."],
    ["triángulos notables", "¿Cuánto es tan 45°?", "1 (exacto)", "Cateto opuesto y adyacente tienen igual longitud.", "la altura y la distancia horizontal son iguales."],
    ["triángulos notables", "¿Cuánto es tan 30°?", "1/√3 = √3/3 (exacto)", "Divide los catetos 1 y √3.", "relacionas distancias en un triángulo 30°–60°–90°."],
    ["triángulos notables", "Con la aproximación escolar del triángulo 3–4–5, ¿cuánto es sen 37°?", "Aproximadamente 3/5", "El ángulo real es aproximadamente 36,87°. No es el valor exacto de sen 37°.", "el enunciado autoriza la aproximación de 37° y 53°."],
    ["triángulos notables", "Con la aproximación escolar 3–4–5, ¿cuánto es cos 37°?", "Aproximadamente 4/5", "El cateto adyacente corresponde a 4 y la hipotenusa a 5.", "usas la aproximación indicada para descomponer vectores."],
    ["triángulos notables", "Con la aproximación escolar 3–4–5, ¿cuánto es sen 53°?", "Aproximadamente 4/5", "53° se aproxima al complemento del ángulo de 36,87°.", "cambias de ángulo sin memorizar otra tabla."],
    ["identidades", "¿Cuánto vale sen² θ + cos² θ?", "1", "Es la identidad pitagórica fundamental.", "simplificas expresiones con cuadrados de seno y coseno."],
    ["sistemas angulares", "¿Cuántos radianes son 180°?", "π radianes", "Una vuelta completa es 360° = 2π radianes.", "una fórmula usa radianes en lugar de grados."]
  ],
  "Física": [
    ["leyes de Newton", "¿Qué fórmula relaciona fuerza neta, masa y aceleración?", "Fuerza neta = masa × aceleración", "ΣF = ma. Usa la suma de fuerzas, no una fuerza cualquiera.", "pasas de un diagrama de fuerzas a una ecuación."],
    ["leyes de Newton", "Dos fuerzas horizontales opuestas son 10 N y 6 N. ¿Cuál es la fuerza neta?", "4 N hacia la fuerza de 10 N", "En sentidos opuestos, resta las magnitudes.", "necesitas sumar fuerzas antes de aplicar ΣF = ma."],
    ["leyes de Newton", "Si la fuerza neta es cero, ¿el cuerpo necesariamente está quieto?", "No", "Puede estar quieto o moverse con velocidad constante: aceleración cero.", "distingues equilibrio de reposo."],
    ["leyes de Newton", "¿Actúan acción y reacción sobre el mismo cuerpo?", "No; sobre cuerpos distintos", "Tienen igual magnitud y sentidos opuestos, pero no se cancelan en el mismo diagrama.", "dibujas las fuerzas de un solo objeto."],
    ["MRU", "Un móvil avanza a 5 m/s constantes durante 4 s. ¿Qué distancia recorre?", "20 m", "Distancia = rapidez × tiempo.", "el movimiento mantiene rapidez constante."],
    ["MRUV", "Parte del reposo con aceleración constante de 2 m/s². ¿Qué velocidad tiene a los 3 s?", "6 m/s", "v = v₀ + at = 0 + 2 × 3.", "la aceleración es constante y buscas velocidad final."],
    ["MRUV", "Parte del reposo con aceleración constante de 2 m/s². ¿Qué distancia recorre en 3 s?", "9 m", "d = at²/2 = 2 × 9 ÷ 2.", "calculas distancia en movimiento rectilíneo uniformemente acelerado."],
    ["leyes de Newton", "Con g = 10 m/s², ¿cuál es el peso de una masa de 6 kg?", "60 N", "Peso = mg. La masa va en kg; el peso, en newtons.", "distingues masa de fuerza gravitatoria."],
    ["trabajo", "Una fuerza constante de 5 N mueve un objeto 4 m en su misma dirección. ¿Qué trabajo realiza?", "20 J", "W = Fd cos θ. Aquí θ = 0° y cos θ = 1.", "fuerza y desplazamiento son paralelos."],
    ["trabajo", "Una fuerza es perpendicular al desplazamiento. ¿Qué trabajo realiza?", "0 J", "Cos 90° = 0, así que W = Fd cos 90° = 0.", "decides qué fuerzas transfieren energía por trabajo."],
    ["energía", "¿Qué fórmula da la energía cinética de una masa m con rapidez v?", "Ec = mv²/2", "La rapidez está al cuadrado.", "si duplicas la rapidez, la energía cinética se cuadruplica."],
    ["energía", "Con m = 2 kg y v = 3 m/s, ¿cuál es la energía cinética?", "9 J", "Ec = 2 × 3² ÷ 2.", "aplicas energía en lugar de seguir todo el movimiento."],
    ["energía", "Si duplicas la altura, con masa y g constantes, ¿qué pasa con la energía potencial gravitatoria mgh?", "Se duplica", "La altura está a la primera potencia.", "comparas energías cerca de la superficie terrestre."],
    ["Ley de Ohm", "Con V = 12 V y R = 4 Ω, ¿cuál es la corriente según la ley de Ohm?", "3 A", "I = V/R = 12/4.", "relacionas voltaje, resistencia y corriente en un elemento óhmico."],
    ["potencia", "Se realizan 60 J de trabajo en 3 s. ¿Cuál es la potencia media?", "20 W", "Potencia media = trabajo / tiempo.", "comparan la rapidez con que se transfiere energía."]
  ],
  "RLM": [
    ["planteo de ecuaciones", "El doble de un número más 3 es 11. ¿Qué número es?", "4", "Deshaz las operaciones: (11 − 3) ÷ 2 = 4.", "traduces una frase a 2x + 3 = 11 y despejas."],
    ["planteo de ecuaciones", "Dos enteros consecutivos suman 15. ¿Cuáles son?", "7 y 8", "El menor es (15 − 1) ÷ 2. Consecutivos: x y x + 1.", "aparecen números o edades consecutivos."],
    ["edades", "Ana tiene 12 años y Luis 8. Dentro de 5 años, ¿cuál será su diferencia de edades?", "4 años", "Ambos aumentan la misma cantidad: la diferencia no cambia.", "un problema de edades mezcla pasado, presente y futuro."],
    ["edades", "Hoy tienes 15 años. ¿Cuántos tenías hace 4 años?", "11 años", "Pasado: resta. Futuro: suma.", "construyes una tabla de edades antes de plantear ecuaciones."],
    ["sucesiones", "Completa: 3, 7, 11, 15, …", "19", "La diferencia es constante: suma 4.", "reconoces una progresión aritmética."],
    ["sucesiones", "Completa: 2, 4, 8, 16, …", "32", "Cada término se multiplica por 2.", "reconoces crecimiento multiplicativo."],
    ["sucesiones", "Completa: 1, 4, 9, 16, …", "25", "Son cuadrados: 1², 2², 3², 4², 5².", "una sucesión esconde cuadrados perfectos."],
    ["operadores", "Si a ★ b = 2a + b, ¿cuánto es 3 ★ 4?", "10", "El símbolo tiene su propia regla: 2 × 3 + 4.", "aparece un operador inventado: sigue su definición."],
    ["operadores", "Si a ★ b = a − 2b, ¿3 ★ 4 y 4 ★ 3 son iguales?", "No: −5 y −2", "El orden importa. No supongas que ★ funciona como sumar.", "evalúas operadores que no son conmutativos."],
    ["tiempo", "Son las 10:45. ¿Qué hora será dentro de 30 minutos?", "11:15", "Faltan 15 minutos para las 11 y quedan otros 15.", "sumas tiempos pasando de una hora a otra."],
    ["relaciones de parentesco", "El hermano de tu madre es tu…", "Tío", "Traza primero el vínculo con tu madre y luego el de su hermano.", "ordenas relaciones familiares sin perder la referencia."],
    ["combinaciones", "De 3 personas, ¿cuántas parejas distintas puedes formar?", "3 parejas", "AB, AC y BC. AB y BA son la misma pareja.", "eliges grupos donde el orden no importa."],
    ["permutaciones", "¿De cuántas formas pueden ordenarse 3 libros distintos?", "6", "Hay 3 opciones, luego 2 y luego 1: 3 × 2 × 1.", "cuentas ordenamientos donde la posición importa."]
  ],
  "Aritmética": [
    ["MCD", "¿Cuál es el MCD de 12 y 18?", "6", "Es el mayor número que divide exactamente a ambos.", "repartes en grupos iguales lo más grandes posible."],
    ["MCM", "¿Cuál es el MCM de 6 y 8?", "24", "Múltiplos: 6, 12, 18, 24; 8, 16, 24.", "dos ciclos deben volver a coincidir."],
    ["MCM", "Una alarma suena cada 4 minutos y otra cada 6. Si suenan juntas, ¿cuándo coinciden otra vez?", "En 12 minutos", "Busca el MCM de 4 y 6.", "lees «cada…» y «coincidir de nuevo»."],
    ["divisibilidad", "¿Es 123 divisible entre 3?", "Sí", "1 + 2 + 3 = 6, y 6 es múltiplo de 3.", "compruebas divisibilidad sin hacer la división."],
    ["divisibilidad", "¿Es 234 divisible entre 9?", "Sí", "2 + 3 + 4 = 9. La suma de cifras es múltiplo de 9.", "reduces un número grande a la suma de sus cifras."],
    ["divisibilidad", "¿Cómo reconoces si un entero es divisible entre 5?", "Termina en 0 o en 5", "Solo necesitas mirar su última cifra.", "factorizas o simplificas rápidamente."],
    ["número de divisores", "¿Cuántos divisores positivos tiene 12?", "6", "12 = 2² × 3¹. Cuenta: (2 + 1)(1 + 1) = 6.", "te piden contar divisores sin listarlos todos."],
    ["números racionales y fracciones", "Simplifica 18/24.", "3/4", "Divide numerador y denominador entre su MCD, 6.", "reduces fracciones antes de operar."],
    ["números racionales y fracciones", "¿Cuánto es 1/2 + 1/4?", "3/4", "Convierte 1/2 en 2/4; después suma los numeradores.", "sumas fracciones con denominadores distintos."],
    ["razones", "En una razón 2:3 hay 10 partes en total. ¿Qué cantidades corresponden?", "4 y 6", "2 + 3 = 5 partes; cada parte vale 10 ÷ 5 = 2.", "haces repartos proporcionales."],
    ["proporciones", "Si 3 cuadernos cuestan S/12, ¿cuánto cuestan 5 al mismo precio unitario?", "S/20", "Uno cuesta 12 ÷ 3 = 4; cinco cuestan 5 × 4.", "resuelves proporcionalidad directa con valor unitario."],
    ["porcentajes", "Un precio sube 10% y después baja 10%. ¿Vuelve al precio inicial?", "No; queda en el 99% del precio inicial", "Piensa en 100: sube a 110 y baja 11; queda en 99.", "hay porcentajes sucesivos sobre bases distintas."],
    ["conjuntos", "A tiene 5 elementos, B tiene 4 y comparten 2. ¿Cuántos tiene A ∪ B?", "7", "Suma 5 + 4 y resta los 2 contados dos veces.", "cuentas dos grupos que se superponen."],
    ["probabilidad", "En un dado equilibrado, ¿cuál es la probabilidad de obtener un número par?", "1/2", "Hay 3 resultados pares entre 6 posibles: 3/6.", "los resultados son equiprobables: favorables entre posibles."],
    ["media", "¿Cuál es el promedio de 4, 6 y 8?", "6", "Suma 18 y divide entre 3 datos.", "una pregunta usa media aritmética o promedio."]
  ]
};

Object.assign(mentalSeeds, {
  "Álgebra": [
    ["ecuaciones", "Si 3x + 2 = 14, ¿cuánto vale x?", "4", "Resta 2 a ambos lados y divide entre 3.", "despejas deshaciendo operaciones."],
    ["ecuaciones", "Si x/4 = 3, ¿cuánto vale x?", "12", "Multiplica ambos lados por 4.", "la incógnita está dividida entre una constante."],
    ["sistemas de ecuaciones", "Si x + y = 10 y x − y = 2, ¿cuánto valen x e y?", "x = 6; y = 4", "Suma las ecuaciones: 2x = 12. Luego sustituye.", "sumar elimina una incógnita."],
    ["inecuaciones", "Si −2x < 6, ¿x es mayor o menor que −3?", "Mayor: x > −3", "Al dividir por un número negativo, invierte la desigualdad.", "despejas inecuaciones con factores negativos."],
    ["funciones", "Si f(x) = 2x + 1, ¿cuánto es f(3)?", "7", "Reemplaza x por 3: 2 × 3 + 1.", "evalúas una función sustituyendo su entrada."],
    ["función lineal", "En y = 2x + 3, ¿dónde corta la recta al eje y?", "En (0, 3)", "Sobre el eje y, x = 0. Queda y = 3.", "imaginas una recta a partir de su ecuación."],
    ["función lineal", "En y = −2x + 1, ¿la recta sube o baja hacia la derecha?", "Baja", "La pendiente −2 es negativa.", "reconoces una función decreciente."],
    ["función cuadrática", "¿Hacia dónde abre la gráfica de y = x²?", "Hacia arriba", "El coeficiente de x² es positivo; el vértice es (0, 0).", "identificas la forma básica de una parábola."],
    ["función cuadrática", "¿Dónde está el vértice de y = (x − 2)² + 1?", "En (2, 1)", "El cuadrado es cero cuando x = 2; el mínimo es 1.", "lees desplazamientos sin hacer una tabla de valores."],
    ["valor absoluto", "¿Cuánto vale |−7|?", "7", "El valor absoluto es la distancia al cero: nunca es negativo.", "aparecen distancias o ecuaciones con valor absoluto."],
    ["productos notables", "Desarrolla (x + 3)².", "x² + 6x + 9", "Cuadrado del primero, doble producto y cuadrado del segundo.", "expandes binomios sin olvidar el término del medio."],
    ["factorización", "Factoriza x² − 9.", "(x − 3)(x + 3)", "Es una diferencia de cuadrados: a² − b² = (a − b)(a + b).", "simplificas expresiones y encuentras raíces."],
    ["dominio y rango", "En f(x) = 1/(x − 2), ¿qué valor no puede tomar x?", "2", "El denominador no puede ser cero.", "determinas restricciones del dominio."],
    ["logaritmos", "¿Cuánto es log₁₀(100)?", "2", "Un logaritmo pregunta el exponente: 10² = 100.", "conviertes un logaritmo en una potencia."]
  ],
  "Geometría": [
    ["triángulos", "Un triángulo tiene ángulos de 50° y 60°. ¿Cuánto mide el tercero?", "70°", "Los tres ángulos interiores suman 180°.", "completas ángulos antes de usar otras relaciones."],
    ["triángulos", "¿Cuánto mide cada ángulo de un triángulo equilátero?", "60°", "Tres ángulos iguales reparten 180°.", "reconoces simetría en un triángulo equilátero."],
    ["triángulos", "En un triángulo isósceles el ángulo del vértice es 40°. ¿Cuánto mide cada ángulo de la base?", "70°", "Los dos de la base son iguales: (180 − 40) ÷ 2.", "aprovechas lados iguales para deducir ángulos."],
    ["rectas y ángulos", "Dos ángulos adyacentes forman una línea recta. Uno mide 125°. ¿El otro?", "55°", "Los ángulos suplementarios suman 180°.", "aparece una recta y necesitas completar un ángulo."],
    ["rectas y ángulos", "¿Cómo son los ángulos opuestos por el vértice?", "Iguales", "Al cruzarse dos rectas, los ángulos enfrentados tienen igual medida.", "trasladas ángulos en figuras con rectas que se cruzan."],
    ["relaciones métricas", "Un triángulo rectángulo tiene catetos 3 y 4. ¿Cuánto mide su hipotenusa?", "5", "3² + 4² = 25 = 5².", "reconoces el triángulo 3–4–5 y sus múltiplos."],
    ["áreas", "Un triángulo tiene base 8 y altura 3. ¿Cuál es su área?", "12 unidades cuadradas", "Área = base × altura ÷ 2.", "la altura es perpendicular a la base, no un lado cualquiera."],
    ["áreas", "Si duplicas el lado de un cuadrado, ¿por cuánto se multiplica su área?", "Por 4", "El área depende del lado al cuadrado: 2² = 4.", "distingues cambios de longitud y de superficie."],
    ["circunferencia", "Un círculo tiene radio 3. ¿Cuánto mide su diámetro?", "6", "El diámetro es dos veces el radio.", "un problema da diámetro pero una fórmula pide radio."],
    ["regiones circulares", "¿Cuál es el área de un círculo de radio 2?", "4π unidades cuadradas", "Área = πr²; 2² = 4.", "calculas áreas circulares dejando π exacto."],
    ["semejanza", "Dos triángulos semejantes tienen razón de lados 2. ¿Cuál es la razón de sus áreas?", "4", "Las áreas cambian con el cuadrado de la razón de semejanza.", "una figura es una ampliación de otra."]
  ]
});

// Variantes pequeñas y verificables: las mismas herramientas, otros números.
for (const a of [6, 7, 8, 9]) {
  for (const b of [2, 3, 4, 5, 6, 7, 8, 9]) {
    const anchor = a === 6 ? `5 × ${b} + ${b}` : a === 7 ? `5 × ${b} + 2 × ${b}` : a === 8 ? `dobla 4 × ${b}` : `10 × ${b} − ${b}`;
    mentalSeeds.Aritmética.push(["números naturales", `¿Cuánto es ${a} × ${b}?`, String(a * b), `Si no sale de memoria: ${anchor} = ${a * b}.`, "simplificas fracciones, resuelves proporciones o sustituyes datos en fórmulas.", true]);
  }
}
for (const value of [40, 80, 120, 200]) {
  for (const rate of [10, 25, 50]) {
    const shortcut = rate === 10 ? "Divide entre 10" : rate === 25 ? "Divide entre 4" : "Divide entre 2";
    mentalSeeds.Aritmética.push(["porcentajes", `¿Cuánto es el ${rate}% de ${value}?`, String(value * rate / 100), `${shortcut}: ${value * rate / 100}.`, "calculas descuentos, aumentos y proporciones de cabeza."]);
  }
}
for (const coefficient of [2, 3, 4]) {
  for (const x of [2, 3, 4, 5]) {
    const result = coefficient * x + 1;
    mentalSeeds["Álgebra"].push(["ecuaciones", `Si ${coefficient}x + 1 = ${result}, ¿cuánto vale x?`, String(x), `Resta 1 y divide entre ${coefficient}: (${result} − 1) ÷ ${coefficient} = ${x}.`, "despejas una incógnita en una ecuación lineal."]);
  }
}
for (const mass of [2, 3, 4]) {
  for (const acceleration of [2, 3, 4]) {
    mentalSeeds["Física"].push(["leyes de Newton", `Una masa de ${mass} kg acelera a ${acceleration} m/s². ¿Cuál es la magnitud de la fuerza neta?`, `${mass * acceleration} N`, `ΣF = ma = ${mass} × ${acceleration}.`, "pasas de masa y aceleración a fuerza neta."]);
  }
}

function mentalQuestionId(course, prompt) {
  return `${course}-${prompt}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
const mentalFoundations = new Set(["triángulos notables", "etimología", "categorías variables", "función lineal", "función cuadrática"]);
function mentalQuestionFromRow(course, [topic, prompt, answer, explanation, use, foundation = false]) {
  return { id: mentalQuestionId(course, prompt), course, topic, prompt, answer, explanation, use, foundation: foundation || mentalFoundations.has(topic) };
}
const mentalQuestionBank = Object.entries(mentalSeeds).flatMap(([course, rows]) => rows.map((row) => mentalQuestionFromRow(course, row)));

const mentalReferences = {
  official: { label: "Temario oficial UNSCH 2027-I", url: "https://admision.unsch.edu.pe/informacion/temario" },
  dictionary: { label: "RAE · Diccionario de la lengua española", url: "https://dle.rae.es/" },
  spelling: { label: "RAE · Acentuación y tilde", url: "https://www.rae.es/dpd/tilde" },
  polysemy: { label: "RAE · Polisemia", url: "https://dle.rae.es/polisemia" },
  hypernym: { label: "RAE · Hiperonimia", url: "https://dle.rae.es/hiperonimia" },
  newton: { label: "OpenStax · Segunda ley de Newton", url: "https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/5-3-segunda-ley-de-newton" },
  meiosis: { label: "OpenStax · Meiosis y mitosis", url: "https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis" },
  market: { label: "OpenStax · Oferta, demanda y equilibrio", url: "https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services" },
  ayacucho: { label: "Britannica · Batalla de Ayacucho", url: "https://www.britannica.com/event/Battle-of-Ayacucho" },
  velasco: { label: "Britannica · Velasco y sus reformas", url: "https://www.britannica.com/biography/Juan-Velasco-Alvarado" },
  french: { label: "Britannica · Revolución francesa", url: "https://www.britannica.com/event/French-Revolution" }
};
function mentalReferenceFor(question) {
  if (question.course === "Razonamiento verbal") return question.topic === "polisemia" ? mentalReferences.polysemy : ["hiperonimia", "hiponimia", "cohiponimia"].includes(question.topic) ? mentalReferences.hypernym : mentalReferences.dictionary;
  if (question.course === "Lenguaje" && /acentuación|tilde|diptongo|enclíticos/.test(question.topic)) return mentalReferences.spelling;
  if (question.course === "Física" && question.topic === "leyes de Newton") return mentalReferences.newton;
  if (question.course === "Biología" && question.topic === "mitosis y meiosis") return mentalReferences.meiosis;
  if (question.course === "Economía" && question.topic === "oferta y demanda") return mentalReferences.market;
  if (question.topic === "Historia de Ayacucho y Huamanga") return mentalReferences.ayacucho;
  if (question.topic === "Velasco y Reforma Agraria") return mentalReferences.velasco;
  if (question.topic === "Revolución francesa") return mentalReferences.french;
  return mentalReferences.official;
}
