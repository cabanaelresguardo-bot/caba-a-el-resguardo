# Cabaña El Resguardo - Sitio web (React + Tailwind)

Este paquete contiene un **sitio monopágina** (single page) listo para desplegar en **Vercel**.
Las imágenes ya están incluidas y optimizadas para web (reducción de tamaño sin perder calidad perceptible).

## Estructura del proyecto
```
/public/images - imágenes (image1.jpg, image2.jpg, image3.jpeg, image4.jpeg (logo))
/src - componentes y estilos
index.html
package.json
README.md
```

## Cómo desplegar en Vercel (paso a paso)
1. Si no tienes cuenta, crea una en https://vercel.com (recomendado iniciar sesión con GitHub).
2. Crea un repositorio nuevo en GitHub y sube **todo** el contenido de este proyecto, o hazlo desde tu máquina usando `git`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: cabana-el-resguardo"
   git branch -M main
   git remote add origin <TU_REPO_URL>
   git push -u origin main
   ```
3. En Vercel, haz clic en **"Add New" → "Project"** y selecciona tu repositorio.
4. Vercel detectará automáticamente que es un proyecto con `vite`. Pulsa **Deploy**.
5. Cuando termine, tendrás una URL como `https://<tu-proyecto>.vercel.app`.

## Notas importantes
- Este proyecto usa **Vite + React + Tailwind**. Si prefieres no usar Tailwind build, puedes convertir `src/styles.css` a CSS estático.
- Si deseas ver o probar el proyecto localmente antes de subirlo a GitHub / Vercel, instala dependencias y ejecuta:
  ```bash
  npm install
  npm run dev
  ```

## Reemplazar imágenes o textos
- Imágenes: reemplaza archivos en `/public/images/` conservando nombres.
- Textos: edita `src/App.jsx` y modifica títulos, descripciones y enlaces.

## Conectar feed de Instagram (opcional)
Opciones recomendadas:
1. Usar un widget de terceros (ej: LightWidget, Elfsight) y copiar el código del embed en la sección `Galería`.
2. Usar la API Graph de Instagram (requiere token y configuración de Facebook Developer).

## SEO básico
- Agrega meta tags en `index.html` (description, og:image, og:title).
- Usa titles y descripciones únicas para cada página (aunque sea monopágina).
- Registra el sitio en Google Search Console después de desplegar.

## Soporte
Si deseas, puedo:
- Subir yo mismo el repositorio a GitHub y desplegar en Vercel (si me compartes acceso temporal a un token o me permites guiarte).
- Crear la versión HTML estática lista para hostear (sin Node/Tailwind build).
