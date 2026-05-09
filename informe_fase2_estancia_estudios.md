# Informe de Transición a Fase 2: Trámite de Estancia por Estudios (España)

**Objetivo General Actual:** Sorany ya se encuentra en Madrid, habiendo completado exitosamente la "Fase 1" (Viaje y Frontera). El proyecto ha entrado oficialmente en la "Fase 2", cuyo objetivo principal y urgente es **tramitar su Autorización de Estancia por Estudios** antes de que venzan sus 90 días de turismo (con meta de presentación antes del día 60).

---

## 1. Modificaciones en la Aplicación (React - src/App.jsx)
Para reflejar esta nueva prioridad, la aplicación web (`Panel Logístico Sorany`) ha sido reestructurada:
- **Reorganización del Menú Lateral:** Las pestañas correspondientes a la Fase 1 (*Previos en Colombia* y *Vuelos y Maletas*) fueron movidas a una sección de "Pasos Ya Realizados" (Archivados). 
- **Nueva Prioridad #1:** La pestaña principal ahora es **"1. Tarea Actual: Legal y Finanzas"** (código `activeTab === 'transicion'`).
- **Limpieza de Información Obsoleta:** Se eliminó toda la información relacionada con la justificación de turismo en frontera (los 113€ diarios y el salvoconducto), ya que es irrelevante actualmente.

---

## 2. Definición de Requisitos para Extranjería (Aprobado y Documentado)
El contenido de la pestaña principal ahora muestra exclusivamente los **4 requisitos obligatorios** que debemos gestionar con la asesoría de la agencia **MigraEmpleo**:

1. **Matrícula en Centro Autorizado:** Inscripción en curso de +20 horas semanales. (ATENCIÓN: Validar que el centro esté oficialmente homologado por la Comunidad de Madrid o SEPE).
2. **Demostración de Medios Económicos:** Se barajan dos opciones. **Opción A:** Préstamo de manutención de MigraEmpleo. Dado que son una entidad validada, podría ser viable, PERO Sorany debe pedirles que le expliquen exactamente cómo lo estructuran legalmente para que no se considere "solvencia ficticia". **Opción B (Plan de Respaldo Legal 100% Seguro):** Acta notarial de compromiso de manutención por parte de Dani con sus nóminas españolas.
3. **Seguro Médico Privado:** Se ha investigado y decidido que se utilizará el producto **"Sanitas International Students"**, ya que cumple el 100% de las normativas de Extranjería (sin copagos, sin carencias, y con repatriación incluida).
4. **Antecedentes y Certificado Médico:** Antecedentes colombianos apostillados (en proceso por parte de Sorany) y certificado médico oficial español.

---

## 3. Próximos Pasos Inmediatos para la próxima IA / Sesión
La única acción inmediata bloqueante en este momento es ejecutar la **Tarea 13** (Guion de Contacto para Sorany):
Sorany debe contactar a **MigraEmpleo** y consultar los siguientes 4 puntos clave:
1. El proceso detallado para tramitar la **Estancia por Estudios** como turista.
2. Los **tiempos y plazos** exactos que tiene disponibles para aplicar.
3. La lista de **documentos** necesarios.
4. Validar que los centros de estudio que ofrezcan estén **oficialmente homologados por la Comunidad de Madrid o el SEPE**.

## 4. Notas Técnicas Adicionales
- Se realizó un `git commit` y `git push` a la rama `main` con todos estos cambios de UI y contenido.
- **Importante:** Había un archivo muy pesado llamado `Chat de WhatsApp con Sorany.zip` (>400MB) en el directorio. Se ha añadido al `.gitignore` para evitar bloqueos por parte de los límites de GitHub (100MB). No intentar subirlo a Git.

*Fin del informe de transición.*
