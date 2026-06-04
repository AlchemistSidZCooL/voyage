# 📄 INFORME DE ANÁLISIS TIPOGRÁFICO - CERTIFICADO DE ANTECEDENTES PENALES

> [!NOTE]
> Este documento contiene la estructura tipográfica extraída del archivo PDF `certificado de antecedentes penales Flórez cardona .pdf`. Está formateado de manera algorítmica para servir como "Prompt de Contexto" para motores de renderizado de documentos u otros LLMs.

---

## 1. METADATOS Y FUENTES BASE DEL DOCUMENTO

El documento base utiliza exclusivamente la familia tipográfica **Roboto** para el texto. No utiliza Arial, ni Helvetica, ni Times New Roman. Todo el texto en negrita corresponde a la variante `Roboto Bold` y todo el texto normal a `Roboto Regular`.

```json
{
  "document_metadata": {
    "document_type": "Certificado de Antecedentes Penales - Policía Nacional de Colombia",
    "base_font_family": "Roboto",
    "special_icons_font": "FontAwesome"
  },
  "fuentes_extraidas_del_pdf": {
    "fuente_principal_negrita": {
      "nombre_comercial": "Roboto Bold",
      "nombre_interno_pdf": "AAAAAA+Roboto",
      "tipo_fuente": "Type 3 / Custom",
      "uso": "Para todo el texto en negrita (Títulos, Nombres, Veredicto)."
    },
    "fuente_principal_regular": {
      "nombre_comercial": "Roboto Regular",
      "nombre_interno_pdf": "BAAAAA+Roboto",
      "tipo_fuente": "Type 3 / Custom",
      "uso": "Para todo el texto normal (Párrafos legales y descriptivos)."
    },
    "fuente_iconos": {
      "nombre_comercial": "FontAwesome",
      "nombre_interno_pdf": "DAAAAA+FontAwesome",
      "tipo_fuente": "CID TrueType / Identity-H",
      "uso": "Para renderizar iconos visuales dentro del certificado."
    },
    "fuente_sistema_caracteres_especiales": {
      "nombre_comercial": "Desconocida (Símbolos del Sistema)",
      "nombre_interno_pdf": "CAAAAA+彿",
      "tipo_fuente": "CID TrueType / Identity-H",
      "uso": "Utilizada por el sistema generador del gobierno para marcas de agua o espaciadores."
    }
  }
}
```

---

## 2. REGLAS DE SEGMENTACIÓN DE TEXTO

Utiliza el siguiente JSON como una hoja de estilos estricta (CSS/Style Guide) para la recreación o análisis del documento:

```json
{
  "text_segmentation_rules": {
    "TEXTO_MAYUSCULAS_NEGRITA": {
      "font": "Roboto Bold",
      "case": "UPPERCASE",
      "weight": "Bold",
      "exact_strings_in_document": [
        "FLOREZ CARDONA SORANI",
        "NO TIENE ASUNTOS PENDIENTES CON LAS AUTORIDADES JUDICIALES"
      ],
      "purpose": "Datos de identidad del consultado y el veredicto principal del certificado."
    },
    "TEXTO_MIXTO_NEGRITA": {
      "font": "Roboto Bold",
      "case": "Mixed Case (Mayúsculas iniciales y minúsculas)",
      "weight": "Bold",
      "exact_strings_in_document": [
        "Consulta en línea de Antecedentes Penales y Requerimientos Judiciales",
        "La Policía Nacional de Colombia informa:",
        "1055835949"
      ],
      "purpose": "Títulos principales, encabezados de sección y número de identificación."
    },
    "TEXTO_MAYUSCULAS_REGULAR": {
      "font": "Roboto Regular",
      "case": "UPPERCASE",
      "weight": "Normal",
      "exact_strings_in_document": [
        "NO TIENE ASUNTOS PENDIENTES CON LAS AUTORIDADES JUDICIALES"
      ],
      "purpose": "Se usa exclusivamente cuando se cita el veredicto dentro del párrafo legal final (Leyenda de la Sentencia SU-458)."
    },
    "TEXTO_MIXTO_REGULAR": {
      "font": "Roboto Regular",
      "case": "Sentence case / Mixed Case",
      "weight": "Normal",
      "exact_strings_in_document": [
        "Que siendo las 11:23:05 AM horas del 17/05/2026, el ciudadano identificado con:",
        "Cédula de Ciudadanía Nº",
        "Apellidos y Nombres:",
        "de conformidad con lo establecido en el artículo 248 de la Constitución Política de Colombia.",
        "En cumplimiento de la Sentencia SU-458 del 21 de junio de 2012, proferida por la Honorable Corte Constitucional, la leyenda",
        "aplica para todas aquellas personas que no registran antecedentes y para quienes la autoridad judicial competente haya decretado la extinción de la condena o la prescripción"
      ],
      "purpose": "Párrafos descriptivos, etiquetas de campos de datos y texto legal."
    },
    "TEXTOS_NO_NORMALES": {
      "font": "FontAwesome / CID TrueType",
      "case": "N/A (Symbols)",
      "weight": "Normal",
      "elements": [
        "Iconos visuales (checkmarks, escudos, etc.)",
        "Marcas de agua de seguridad incrustadas en el PDF"
      ],
      "purpose": "Elementos gráficos de validación y seguridad del documento."
    }
  }
}
```

---
> *Informe generado automáticamente tras el análisis XML del PDF.*
