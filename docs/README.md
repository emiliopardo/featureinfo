# FeatureInfo

[![Build Tool](https://img.shields.io/badge/build-Webpack-green.svg)](https://github.com/sigcorporativo-ja/Mapea4-dev-webpack)

## Descripción

 Plugin de [Mapea](https://github.com/sigcorporativo-ja/Mapea4) que modifica la posición del control GetFeatureInfo y lo saca del panel de herramientas

EL constructor del plugin admite la posibilidad de pasarle un objeto en el que se le indica la posición del boton de información. 

En caso de proporcionar el construcctor sin parámetros. El control de getFeatureInfo se posicionará en la 'TL'

### Parámetros del plugin

```javascript
const configFeatureInfo = {
  options: {
    position: 'TL'
  }
}
```

- **position [string]:**  posicionamiento del plugin. Admite ['TL','TR','BL','BR']

## Recursos y configuración

- js: featureinfo.ol.min.js
- css: featureinfo.min.css

```javascript

const configFeatureInfo = {
  options: {
    position: 'TL'
  }
}

const mp = new Featureinfo(configFeatureInfo);
map.addPlugin(mp);
```

<!-- ## Video Demo

Para comprobar el funcionamiento de este plugin se puede descargar el [Video](https://github.com/emiliopardo/geocoderpelias/blob/main/docs/video/geocoderpelias.mp4?raw=true) el cual contempla la configuración y carga del plugin -->