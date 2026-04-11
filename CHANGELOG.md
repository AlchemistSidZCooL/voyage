# Changelog - SoranyProyect (Ruta Migratoria)

## [11-04-2026] - Estrategia Migratoria de 8 Días y Logística Origen (v2.2)

### Añadido
- **Logística Terrestre (Aguadas ➔ Pereira):** Se añadió el módulo de transporte interno alertando sobre el riesgo del viaje de madrugada y recomendando descanso en hotel económico la noche previa en Nacederos/Matecaña.
- **Itinerario de Migración (8 Días):** Módulo tipo "Guion Oficial" en la pestaña de Frontera que detalla actividades turísticas diarias verosímiles en Madrid y alrededores (Toledo, Segovia, Museos) como argumento definitivo para el control fronterizo.
- **Táctica Presupuestaria:** Se ajustó la exigencia de demostración de capital de "3500€" a "~1,000€", alineándolo estrechamente al mandato de Policía de Fronteras (113€/día) para 8 días de turismo comprobable.

### Modificado
- **Regla Minimalista de Equipaje:** En base a la fecha real de retorno, se redujo drásticamente el equipaje sugerido en la pestaña 1 a prendas para una sola semana.
- **Limpieza de Documentación:** Refactorización del `README.md` limitándolo estrictamente a la funcionalidad lógica e infraestructura, removiendo menciones irrelevantes a iteraciones de UI.

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
