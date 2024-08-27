# Encriptador de Texto

## Descripción

El proyecto **Encriptador de Texto** es una página web desarrollada con HTML, CSS y JavaScript que permite a los usuarios encriptar y desencriptar textos. Utiliza un sistema de encriptación específico para transformar letras en cadenas de texto encriptadas y viceversa. La aplicación está diseñada para intercambiar mensajes secretos teniendo en cuenta las siguientes reglas:

- La letra `e` se convierte en `enter`
- La letra `i` se convierte en `imes`
- La letra `a` se convierte en `ai`
- La letra `o` se convierte en `ober`
- La letra `u` se convierte en `ufat`

La página web permite al usuario ingresar un texto, encriptarlo, desencriptarlo y copiar el resultado.

## Especificaciones

- El texto debe ser en minúsculas.
- No se deben usar letras con acentos ni caracteres especiales.
- La aplicación debe permitir tanto la encriptación como la desencriptación de textos.
- Los resultados deben mostrarse en la pantalla y debe haber una opción para copiar el texto.

## Requisitos

- **Encriptar**: Convierte el texto en una versión encriptada según las llaves proporcionadas.
- **Desencriptar**: Convierte el texto encriptado de vuelta a su forma original.

Ejemplos:
- `"gato"` se convierte en `"gaitober"`
- `"gaitober"` se convierte en `"gato"`

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/encriptador-de-texto.git
