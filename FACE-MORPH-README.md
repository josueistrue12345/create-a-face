# Three.js Face Morph Targets Example

Este proyecto recrea el ejemplo de morph targets de Three.js para animación facial.

## Archivos creados

- `face-morph.html` - Versión con CDN (más fácil de ejecutar)
- `face-morph-modern.html` - Versión con módulos ES6

## Modelo requerido

Para que funcione completamente, necesitas el modelo `facecap.glb` en la carpeta `models/`.

### Cómo obtener el modelo:

1. Descarga desde: https://github.com/mrdoob/three.js/blob/dev/examples/models/gltf/facecap.glb
2. Colócalo en `models/facecap.glb`

O puedes usar cualquier modelo GLTF con morph targets faciales.

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Servir archivos (necesario para cargar modelos)
npm run serve

# Luego abrir en navegador:
# http://localhost:8080/face-morph.html
# o
# http://localhost:8080/face-morph-modern.html
```

## Características

- Controles de órbita para rotar la cámara
- GUI para controlar morph targets
- Animaciones automáticas si están disponibles
- Fallback a cara simple si no se encuentra el modelo
- Iluminación realista

## Morph Targets

Los morph targets permiten deformar la geometría para crear expresiones faciales como:
- Sonrisa
- Ceño fruncido
- Parpadeo
- Movimiento de cejas
- Y muchas más expresiones

El GUI permite controlar cada morph target individualmente con valores de 0 a 1.