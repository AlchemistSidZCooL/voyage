# Changelog - SoranyProyect (Ruta Migratoria)

## [06-05-2026] - Día de Check-in, Horas Duales y Carpeta de Impresos (v2.6)

### ✅ Completado hoy
- **Reloj Dual Sincronizado (COL/ESP) 🕒:** Añadidas las dos zonas horarias en todos los hitos y eventos de la web (transporte terrestre, despegue en Pereira, escala en Bogotá, despegue a Madrid, hora de embarque máximo, aterrizaje en Barajas y vuelo de retorno) para que Dani y Sorany se sincronicen perfectamente.
- **Nueva Tarjeta de Carpeta Física 📋:** Diseñada la sección dedicada a los documentos que Sorany debe llevar impresos obligatoriamente en su bolso de mano para total tranquilidad ante migración (Pasabordos, Seguro Schengen y Reserva de Hotel).
- **Control de Fricción y Ansiedad 🛡️:** Se eliminó el requerimiento de Prueba de Medios Económicos de la lista de impresos de la web para evitar agobios con el cupo de crédito, manteniendo la lista limpia, fácil y enfocada.
- **Check-in AV9443 (PEI→BOG):** Realizado en Avianca. Silla **17K**, Grupo **E**, sala 05:35 COL / 12:35 MAD. Equipaje 1×23kg incluido.
- **Check-in UX194 (BOG→MAD):** Realizado en Air Europa. Silla **29A**, Zona 4, embarque 19:15 COL / 02:15 MAD (Vie 8). Sello **SKYCLEARED** ✅ — puede ir directo a la puerta.
- **EMD Silla 29A:** Pagado COP 79,849 con Visa ····4799. Documento `996 4566003616`. No reembolsable.
- **Reserva de hotel:** PDF de confirmación recibido y guardado en el proyecto.
- **Datos pasaporte completados:** Nº **BE310574**, expedición 11-jun-2024, vencimiento 11-jun-2034, Autoridad: G. Caldas.
- **Teléfono Sorany guardado:** +57 320 6549254.
- **Web actualizada (v2.6):** Sillas, SKYCLEARED, reloj dual en todos los tramos, carpeta física optimizada y subida de producción.

### ⚠️ Pendiente crítico
- **Corrección fecha IATI:** La póliza tiene noviembre en lugar de **8 de octubre de 1994**. Llamar al +57 601 770 2946 a las 7:00 AM (COL) del 7 de mayo **antes del vuelo**.

---

## [05-05-2026] - Compra de Seguro y Guía de Acción Directa (v2.4)

### Añadido
- **Guía de Acción Rápida (Web):** Integración de un módulo paso a paso en `App.jsx` para que Sorany realice la compra del seguro y la reserva de hotel directamente.
- **Instrucciones de Compra:** Creación de `instrucciones_compra_sorany.md` con los pasos detallados y enlaces.
- **Registro de Datos Reales:** Centralización de datos del voucher de seguro (`130359095120`) y pasaporte (`1055835949`) en los informes.

### Modificado
- **`App.jsx`:** Rediseño del componente de Seguro Schengen para incluir la guía "Zero Friction" y actualización del checklist a "Acción Sorany".
- **`informe_vuelos_sorany.md`:** Incorporación de los correos electrónicos de contacto y datos identificativos extraídos del voucher.

### Incidencias
- **Error en Fecha de Nacimiento:** Se detectó un error en la póliza (Noviembre vs Octubre). Se ha redactado el correo de corrección y se ha proporcionado el contacto de soporte telefónico de Bogotá para gestión inmediata.


### Añadido
- **Nueva tarjeta "Seguro Schengen" (Paso 1):** Módulo completo con los requisitos legales mínimos (30.000€ de cobertura, repatriación, sin franquicia) y comparativa de las 3 mejores opciones para viajeros colombianos: IATI Seguros (recomendado), AXA Schengen (plan Basic/Essential) y Allianz Assistance.
- **Guion de Migración actualizado (Paso 2):** Se añadió la pregunta de "¿Tiene seguro?" con la respuesta exacta para Sorany. Se añadió el banner de estado "Documentos listos que Dani enviará antes del vuelo".
- **Estrategia de Reserva de Hotel Cancelable:** Documentado el proceso de reserva en Booking.com con filtro "Cancelación Gratis" para obtener confirmación oficial de hotel (del 8 al 15 de mayo) sin desembolso real. Este documento sirve como prueba de alojamiento ante migración.
- **Contexto Whatsapp (30-Abr):** Se actualizó `analisis_contexto_audhd_abril25.md` con el estado emocional de Sorany (angustia, dificultad para sentirse tranquila) y las urgencias logísticas detectadas.

### Modificado
- **`informe_tareas_pendientes.md`:** Añadidas tareas 8 (Registro de Nacimiento - ✅ completado), 9 (Apostilla - en proceso), 10, 11 y 12 relativas al seguro y la reserva de hotel.

### Estado Pendiente (Acción Dani)
- [ ] Contratar Seguro Schengen (IATI o AXA) y enviar PDF a Sorany.
- [ ] Realizar reserva cancelable de hotel en Madrid (Booking.com, 8-15 Mayo) y enviar confirmación a Sorany.

## [25-04-2026] - Integración de Contexto Neurodivergente (AuDHD) y Estado Emocional

### Añadido
- **Análisis de Contexto (AuDHD):** Se creó el documento `analisis_contexto_audhd_abril25.md` que documenta el estado emocional pre-migratorio de Sorany (ansiedad, miedos sobre su potencialidad) y la introducción del perfil neurodivergente (AuDHD).
- **Estrategia "Zero Friction":** Se estableció la directriz de mantener la aplicación web con una carga cognitiva mínima para mitigar la ansiedad y el posible burnout pre-viaje.
- **Registro de Video:** Se documentó la existencia del nuevo video `WhatsApp Video 2026-04-22 at 00.05.38.mp4` para su futura reinterpretación bajo la lente del nuevo contexto.

### Modificado
- **README.md:** Se actualizó la sección "Caja Fuerte del Proyecto" (Backstage) para incluir la referencia al nuevo análisis de contexto psicológico.

## [11-04-2026] - Estrategia Migratoria de 8 Días y Logística Origen (v2.2)

### Añadido
- **Logística Terrestre (Aguadas ➔ Pereira):** Se añadió el módulo de transporte interno alertando sobre el riesgo del viaje de madrugada y recomendando descanso en hotel económico la noche previa en Nacederos/Matecaña.
- **Itinerario de Migración (8 Días):** Módulo tipo "Guion Oficial" en la pestaña de Frontera que detalla actividades turísticas diarias verosímiles en Madrid y alrededores (Toledo, Segovia, Museos) como argumento definitivo para el control fronterizo.
- **Táctica Presupuestaria:** Se ajustó la exigencia de demostración de capital de "3500€" a "~1,000€", alineándolo estrechamente al mandato de Policía de Fronteras (113€/día) para 8 días de turismo comprobable.

### Modificado
- **Regla Minimalista de Equipaje:** En base a la fecha real de retorno, se redujo drásticamente el equipaje sugerido en la pestaña 1 a prendas para una sola semana.
- **Limpieza de Documentación:** Refactorización del `README.md` limitándolo estrictamente a la funcionalidad lógica e infraestructura, removiendo menciones irrelevantes a iteraciones de UI.
- **Sistema de Diseño (Extraído):** Creación del documento `design_system_premium.md` (Design System) para permitir la portabilidad del estilo "Premium Dark Mode" a otros proyectos, garantizando consistencia visual y técnica.

## [11-04-2026] - Rediseño Interfaz y Husos Horarios (v2.1)

### Añadido
- **Control de Husos Horarios:** Incorporadas tarjetas detalladas ("Paso 2") sobre la diferencia horaria entre Madrid (+7 horas) y Colombia para gestionar comunicaciones familiares.
- **Micro-logística de Equipaje:** Nueva subsección en "Paso 1" describiendo taxativamente las reglas para 1 Maleta de Cabina (10KG) y 1 Mochila Personal, más listas de contenido para cada una.
- **Timers para Tareas Previas:** En "Paso 1" se listan los requisitos críticos escalonados a "30 días" y "15 días" del vuelo.

### Modificado
- **Rediseño UI (Premium Dark Mode):** Cambio completo desde la paleta pastel a un diseño oscuro de alto contraste (`slate-950`) con destellos en Cian y Púrpura (Cyberpunk Corporativo).
- **Escala de Fuentes:** Gran aumento del tamaño general (`text-base`, `text-lg`, `leading-loose`) solucionando el problema inicial de 'letra muy pequeña'.
- **Enfoque de Contenido:** Repriorización del viaje y aeropuerto; detalles de vinculación como estudiante (Paso 3) pasan a segundo plano.

## [10-04-2026] - Sesión de Configuración Inicial y Git

### Añadido
- Inicialización del repositorio Git local en `/home/sidzcool/Documentos/SoranyProyect`.
- Configuración de la identidad de Git local a `garciadanielsid@gmail.com` (Daniel Sid).
- Vinculación con el repositorio remoto `git@github.com:AlchemistSidZCooL/voyage.git` mediante SSH.
- Subida inicial de los 24 archivos del proyecto (React + Vite + Tailwind).

### Corregido
- **Error de Acceso Denegado en Git:** Se solucionó invitando a la identidad SSH local (`DSidCode`) como colaborador en el repositorio de la cuenta principal (`AlchemistSidZCooL`).
- **Cambio de HTTPS a SSH:** Se actualizó la URL del remoto para permitir `push` sin solicitud de contraseña.

### Estado Actual
- El proyecto está sincronizado con GitHub.
- El entorno de desarrollo (Vite) está listo para continuar con la implementación de las vistas de la "Hoja de Ruta".
