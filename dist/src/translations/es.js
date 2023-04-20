"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _locales = require("../locales");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  property: {
    weight: 'peso',
    label: 'etiqueta',
    fillColor: 'color de relleno',
    color: 'color',
    coverage: 'cobertura',
    strokeColor: 'color de trazo',
    radius: 'radio',
    outline: 'contorno',
    stroke: 'trazo',
    density: 'densidad',
    height: 'altura',
    sum: 'suma',
    pointCount: 'Recuento de puntos'
  },
  placeholder: {
    search: 'Busqueda',
    selectField: 'Selecciona un campo',
    yAxis: 'Eje Y',
    selectType: 'Selecciona un Tipo',
    selectValue: 'Selecciona un Valor',
    enterValue: 'Entra un valor',
    empty: 'vacio'
  },
  misc: {
    by: '',
    valuesIn: 'Valores en',
    valueEquals: 'Valor igual a',
    dataSource: 'Fuente de datos',
    brushRadius: 'Radio del pincel (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Capas del mapa',
    label: 'Etiqueta',
    road: 'Carretera',
    border: 'Frontera',
    building: 'Edificio',
    water: 'Agua',
    land: 'Tierra',
    '3dBuilding': 'Edificio 3D',
    background: 'Fondo'
  },
  panel: {
    text: {
      label: 'etiqueta',
      labelWithId: 'Etiqueta {labelId}',
      fontSize: 'Tamaño de fuente',
      fontColor: 'Color de fuente',
      textAnchor: 'Anclaje del texto',
      alignment: 'Alineación',
      addMoreLabel: 'Añadir más etiquetas'
    }
  },
  sidebar: {
    panels: {
      layer: 'Capas',
      filter: 'Filtros',
      interaction: 'Interacciones',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Requerido*',
    radius: 'Radio',
    color: 'Color',
    fillColor: 'Color de relleno',
    outline: 'Contorno',
    weight: 'Grueso',
    propertyBasedOn: '{property} basado en',
    coverage: 'Cobertura',
    stroke: 'Trazo',
    strokeWidth: 'Grosor de trazo',
    strokeColor: 'Color de trazo',
    basic: 'Básico',
    trailLength: 'Longitud de pista',
    trailLengthDescription: 'Numero de segundos hasta que desaparezca el camino',
    newLayer: 'nueva capa',
    elevationByDescription: 'Si desactivado, la altura se basa en el recuento de puntos',
    colorByDescription: 'Si desactivado, el color se basa en el recuento de puntos',
    aggregateBy: '{field} agregado por',
    '3DModel': 'Modelo 3D',
    '3DModelOptions': 'Opciones del modelo 3D',
    type: {
      point: 'punto',
      arc: 'arco',
      line: 'línea',
      grid: 'malla',
      hexbin: 'hexbin',
      polygon: 'polígono',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icono',
      heatmap: 'concentración',
      hexagon: 'hexágono',
      hexagonid: 'H3',
      trip: 'viaje',
      s2: 'S2',
      '3d': '3D'
    },
    layerUpdateError: 'Se produjo un error durante la actualización de la capa: {errorMessage}. Asegúrese de que el formato de los datos de entrada sea válido.'
  },
  layerVisConfigs: {
    angle: 'Ángulo',
    strokeWidth: 'Ancho del trazo',
    strokeWidthRange: 'Rango del ancho del trazo',
    radius: 'Radio',
    fixedRadius: 'Radio fijo a medir',
    fixedRadiusDescription: 'Ajustar el radio al radio absoluto en metros, p.e. 5 a 5 metros',
    radiusRange: 'Rango de radio',
    clusterRadius: 'Radio del cluster en píxeles',
    radiusRangePixels: 'Rango del radio en píxeles',
    opacity: 'Opacidad',
    coverage: 'Cobertura',
    outline: 'Contorno',
    colorRange: 'Rango de color',
    stroke: 'Trazo',
    strokeColor: 'Color de trazo',
    strokeColorRange: 'Rango de color de trazo',
    targetColor: 'Color destino',
    colorAggregation: 'Agregación de color',
    heightAggregation: 'Agregación de la altura',
    resolutionRange: 'Rango de resolución',
    sizeScale: 'Medida de escala',
    worldUnitSize: 'Medida de la unidad mundial',
    elevationScale: 'Escala de elevación',
    enableElevationZoomFactor: 'Usar factor de zoom de elevación',
    enableElevationZoomFactorDescription: 'Ajuste la altura / elevación según el factor de zoom actual',
    enableHeightZoomFactor: 'Usar factor de zoom de altura',
    heightScale: 'Escala de altura',
    coverageRange: 'Rango de cobertura',
    highPrecisionRendering: 'Representación de alta precisión',
    highPrecisionRenderingDescription: 'La precisión alta tendrá un rendimiento más bajo',
    height: 'Altura',
    heightDescription: 'Haz clic en el botón de arriba a la derecha del mapa per cambiar a vista 3D',
    fill: 'Rellenar',
    enablePolygonHeight: 'Activar la altura del polígono',
    showWireframe: 'Muestra esquemàtico',
    weightIntensity: 'Intensidad de peso',
    zoomScale: 'Escala de zoom',
    heightRange: 'Rango de alturas',
    heightMultiplier: 'Multiplicador de altura'
  },
  layerManager: {
    addData: 'Añadir datos',
    addLayer: 'Añadir capa',
    layerBlending: 'Combinar capas'
  },
  mapManager: {
    mapStyle: 'Estilo de mapa',
    addMapStyle: 'Añadir estilo de mapa',
    '3dBuildingColor': 'Color edificios 3D',
    backgroundColor: 'Color de fondo'
  },
  layerConfiguration: {
    defaultDescription: 'Calcular {property} según el campo seleccionado',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Añadir filtro'
  },
  datasetTitle: {
    showDataTable: 'Mostar la tabla de datos',
    removeDataset: 'Eliminar conjunto de datos'
  },
  datasetInfo: {
    rowCount: '{rowCount} files'
  },
  tooltip: {
    hideLayer: 'Ocultar la capa',
    showLayer: 'Mostrar la capa',
    hideFeature: 'Ocultar el objeto',
    showFeature: 'Mostrar el objeto',
    hide: 'Ocultar',
    show: 'Mostrar',
    removeLayer: 'Eliminar capa',
    resetAfterError: 'Intente habilitar la capa después de un error',
    layerSettings: 'Configuración de capa',
    closePanel: 'Cerrar el panel actual',
    switchToDualView: 'Cambiar a la vista de mapa dual',
    showLegend: 'Mostrar leyenda',
    disable3DMap: 'Desactivar mapa 3D',
    DrawOnMap: 'Dibujar en el mapa',
    selectLocale: 'Seleccionar configuración regional',
    hideLayerPanel: 'Ocultar la tabla de capas',
    showLayerPanel: 'Mostrar la tabla  de capas',
    moveToTop: 'Desplazar arriba de las capas de datos',
    selectBaseMapStyle: 'Seleccionar estilo de mapa base',
    "delete": 'Borrar',
    timePlayback: 'Reproducción de tiempo',
    cloudStorage: 'Almacenaje en la nube',
    '3DMap': 'Mapa 3D',
    animationByWindow: 'Ventana Temporal Móvil',
    animationByIncremental: 'Ventana Temporal Incremental',
    speed: 'velocidad',
    play: 'iniciar',
    pause: 'pausar',
    reset: 'reiniciar'
  },
  toolbar: _objectSpread({
    exportImage: 'Exportar imagen',
    exportData: 'Exportar datos',
    exportMap: 'Exportar mapa',
    shareMapURL: 'Compartir el enlace del mapa',
    saveMap: 'Guardar mapa',
    select: 'selecciona',
    polygon: 'polígono',
    rectangle: 'rectángulo',
    hide: 'esconder',
    show: 'mostrar'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Borrar conjunto de datos',
      addDataToMap: 'Añadir datos al mapa',
      exportImage: 'Exportar imagen',
      exportData: 'Exportar datos',
      exportMap: 'Exportar mapa',
      addCustomMapboxStyle: 'Añadir estilo de Mapbox propio',
      saveMap: 'Guardar mapa',
      shareURL: 'Compartir enlace'
    },
    button: {
      "delete": 'Borrar',
      download: 'Descargar',
      "export": 'Exportar',
      addStyle: 'Añadir estilo',
      save: 'Guardar',
      defaultCancel: 'Cancelar',
      defaultConfirm: 'Confirmar'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Esoger ratio por diversos usos.',
      ratioOriginalScreen: 'Pantalla original',
      ratioCustom: 'Personalizado',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolución',
      resolutionDescription: 'Una alta resolución es mejor para las impresiones.',
      mapLegendTitle: 'Leyenda del mapa',
      mapLegendAdd: 'Añadir leyenda al mapa'
    },
    exportData: {
      datasetTitle: 'Conjunto de datos',
      datasetSubtitle: 'Escoger los conjuntos de datos a exportar',
      allDatasets: 'Todos',
      dataTypeTitle: 'Tipo de datos',
      dataTypeSubtitle: 'Escoger el tipo de datos a exportar',
      filterDataTitle: 'Filtrar datos',
      filterDataSubtitle: 'Se puede escoger exportar los datos originales o filtrados',
      filteredData: 'Datos filtrados',
      unfilteredData: 'Datos sin filtrar',
      fileCount: '{fileCount} Archivos',
      rowCount: '{rowCount} Files'
    },
    deleteData: {
      warning: 'estás a punto de borrar este conjunto de datos. Afectará a {length} capas'
    },
    addStyle: {
      publishTitle: '1. Publicar tu estilo en Mapbox o proporcionar el token de acceso',
      publishSubtitle1: 'Puedes crear el tu propio estilo de mapa en',
      publishSubtitle2: 'y',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'lo.',
      publishSubtitle5: 'Para utilizar un estilo privado, engancha tu',
      publishSubtitle6: 'token de acceso',
      publishSubtitle7: 'aquí. *kepler.gl es una aplicación cliente, los datos quedan en tu navegador..',
      exampleToken: 'p.e. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Engancha el enlace del estilo',
      pasteSubtitle1: 'Qué es un',
      pasteSubtitle2: 'enlace del estilo',
      namingTitle: '3. Poner nombre a tu estilo'
    },
    shareMap: {
      shareUriTitle: 'Compartir el enlace del mapa',
      shareUriSubtitle: 'Generar un enlace del mapa para compartir con otros',
      cloudTitle: 'Almacenage en la nube',
      cloudSubtitle: 'Acceder y cargar datos del mapa a tu almacenage a la nube personal',
      shareDisclaimer: 'kepler.gl guardará los datos del mapa en el almacenage de tu nube personal, sólo quien tenga el enlace podra acceder al mapa y a los datos . ' + 'Puedes editar/borrar el archivo de datos en tu cuenta en la nube en cualquier momento.',
      gotoPage: 'Ves a la página de {currentProvider} de Kepler.gl'
    },
    statusPanel: {
      mapUploading: 'Cargar un mapa',
      error: 'Error'
    },
    saveMap: {
      title: 'Almacentage en la nube',
      subtitle: 'Acceder para guardar el mapa en teu almacenage en la nube'
    },
    exportMap: {
      formatTitle: 'Formato de mapa',
      formatSubtitle: 'Escoger el formato al que se desea exportar el mapa',
      html: {
        selection: 'Exportar tu mapa como un archivo HTML interactivo.',
        tokenTitle: 'Token de acceso de Mapbox',
        tokenSubtitle: 'Utilizar tu token de acceso a Mapbox al archivo HTML (opcional)',
        tokenPlaceholder: 'Enganchar tu token de acceso a Mapbox',
        tokenMisuseWarning: '* Si no proporcionas tu propio token, el mapa podría fallar en cualquier momento cuando reemplacemos nuestro token para evitar abusos. ',
        tokenDisclaimer: 'Puedes cambiar el token de Mapbox posteriormente utilizando estas instrucciones: ',
        tokenUpdate: 'Como actualitzar un token preexistente.',
        modeTitle: 'Modo mapa',
        modeSubtitle1: 'Seleccionar modo app. Más ',
        modeSubtitle2: 'información',
        modeDescription: 'Permmite a los usuarios {modo} el mapa',
        read: 'leer',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configuración del mapa',
        configDisclaimer: 'La configuración del mapa será incluida en el archivo Json. Si utilitzas kepler.gl en tu propia app puedes copiar esta configuración y pasarla a  ',
        selection: 'Exportar los datos del mapa y la configuración en un solo archivo Json. Posteriormente puedes abrir este mismo mapa cargando este mismo archivo a kepler.gl.',
        disclaimer: '* La configuración del mapa se combina con los conjuntos de datos cargados. ‘dataId’ se utiliza para vincular capas, filtros y sugerencias a un conjunto de datos específico. ' + 'Cuando pases esta configuración a addDataToMap, asegura que el identificador del conjunto de datos coincida con los ‘dataId’ de esta configuración.'
      }
    },
    loadingDialog: {
      loading: 'Cargando...'
    },
    loadData: {
      upload: 'Cargar archivos',
      storage: 'Cargar desde almacenage'
    },
    tripInfo: {
      title: 'Como habilitar la animación de viaje',
      description1: 'Para animar la ruta, los datos geoJSON han de contener `LineString` en su geometría y las coordenadas de LineString deben tener 4 elementos en los formats de ',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'y el último elemento debe ser la marca del tiempo. Los formatos válidos para la marca de tiempo incluyen Unix en segundos como `1564184363` o en milisegundos como `1564184363000`.',
      example: 'Ejemplo:'
    },
    iconInfo: {
      title: 'Como dibujar íconos',
      description1: 'En tu CSV crea una columna y pon el nombre del ícono que quieres dibujar. Puedes dejar la celda vacía cuando no quieras que se muestre para ciertos puntos. Cuando la columna se llama',
      code: 'ícono',
      description2: ' kepler.gl automáticamente creará una capa de ícono.',
      example: 'Ejemplo:',
      icons: 'Iconos'
    },
    storageMapViewer: {
      lastModified: 'Última modificación hace {lastUpdated}',
      back: 'Atrás'
    },
    overwriteMap: {
      title: 'Guardando el mapa...',
      alreadyExists: 'ja existe en {mapSaved}. Lo quieres sobreescrivir?'
    },
    loadStorageMap: {
      back: 'Atrás',
      goToPage: 'Ves a la página {displayName} de Kepler.gl',
      storageMaps: 'Almancenage / Mapas',
      noSavedMaps: 'No hay ningún mapa guardado todavía'
    }
  },
  header: {
    visibleLayers: 'Capas visibles',
    layerLegend: 'Capa de leyenda'
  },
  interactions: {
    tooltip: 'Sugerencias',
    brush: 'Pincel',
    coordinate: 'Coordenadas',
    geocoder: 'Geocodificador'
  },
  layerBlending: {
    title: 'Combinación de capas',
    additive: 'aditiva',
    normal: 'normal',
    subtractive: 'substractiva'
  },
  columns: {
    title: 'Columnas',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altura',
    icon: 'ícono',
    geojson: 'geojson',
    arc: {
      lat0: 'lat origen',
      lng0: 'lng origen ',
      lat1: 'lat destino',
      lng1: 'lng destino'
    },
    line: {
      alt0: 'altura origen',
      alt1: 'altura destino'
    },
    grid: {
      worldUnitSize: 'Tamaño de la malla (km)'
    },
    hexagon: {
      worldUnitSize: 'Radio de hexágono (km)'
    },
    hex_id: 'id hex'
  },
  color: {
    customPalette: 'Paleta personalizada',
    steps: 'pasos',
    type: 'tipo',
    reversed: 'invertida'
  },
  scale: {
    colorScale: 'Escala de color',
    sizeScale: 'Escala de medidas',
    strokeScale: 'Escala de trazo',
    scale: 'Escala'
  },
  fileUploader: {
    message: 'Arrastra y suelta el archivo aquí',
    chromeMessage: '*usuario de Chrome: la medida máxima son 250mb, si debes cargar un archivo más grande utiliza Safari',
    disclaimer: '*kepler.gl es una aplicación al lado cliente que no utiliza ningún servidor. Los datos sólo existen en tu máquina/navegador. ' + 'No se envian datos ni mapas a ningún servidor.',
    configUploadMessage: 'Cargar {fileFormatNames} o un mapa guardado en **Json**. Más información sobre [**supported file formats**]',
    browseFiles: 'navega por tus archivos',
    uploading: 'Cargando',
    fileNotSupported: 'El archivo {errorFiles} no es compatible.',
    or: 'o'
  },
  geocoder: {
    title: 'Introduce una dirección'
  },
  fieldSelector: {
    clearAll: 'Quitar todos',
    formatting: 'Formato'
  },
  compare: {
    modeLabel: 'Modo Comparación',
    typeLabel: 'Tipo de Comparación',
    types: {
      absolute: 'Absoluta',
      relative: 'Relativa'
    }
  },
  mapPopover: {
    primary: 'Principal'
  },
  density: 'densidad',
  'Bug Report': 'Informe de errores',
  'User Guide': 'Guía de usuario',
  Save: 'Guadar',
  Share: 'Compartir'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sb2NhbGl6YXRpb24vc3JjL3RyYW5zbGF0aW9ucy9lcy50cyJdLCJuYW1lcyI6WyJwcm9wZXJ0eSIsIndlaWdodCIsImxhYmVsIiwiZmlsbENvbG9yIiwiY29sb3IiLCJjb3ZlcmFnZSIsInN0cm9rZUNvbG9yIiwicmFkaXVzIiwib3V0bGluZSIsInN0cm9rZSIsImRlbnNpdHkiLCJoZWlnaHQiLCJzdW0iLCJwb2ludENvdW50IiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzZWxlY3RGaWVsZCIsInlBeGlzIiwic2VsZWN0VHlwZSIsInNlbGVjdFZhbHVlIiwiZW50ZXJWYWx1ZSIsImVtcHR5IiwibWlzYyIsImJ5IiwidmFsdWVzSW4iLCJ2YWx1ZUVxdWFscyIsImRhdGFTb3VyY2UiLCJicnVzaFJhZGl1cyIsIm1hcExheWVycyIsInRpdGxlIiwicm9hZCIsImJvcmRlciIsImJ1aWxkaW5nIiwid2F0ZXIiLCJsYW5kIiwiYmFja2dyb3VuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVXBkYXRlRXJyb3IiLCJsYXllclZpc0NvbmZpZ3MiLCJhbmdsZSIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvciIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbiIsImVuYWJsZUhlaWdodFpvb21GYWN0b3IiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImhlaWdodE11bHRpcGxpZXIiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJyZXNldEFmdGVyRXJyb3IiLCJsYXllclNldHRpbmdzIiwiY2xvc2VQYW5lbCIsInN3aXRjaFRvRHVhbFZpZXciLCJzaG93TGVnZW5kIiwiZGlzYWJsZTNETWFwIiwiRHJhd09uTWFwIiwic2VsZWN0TG9jYWxlIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsImFuaW1hdGlvbkJ5V2luZG93IiwiYW5pbWF0aW9uQnlJbmNyZW1lbnRhbCIsInNwZWVkIiwicGxheSIsInBhdXNlIiwicmVzZXQiLCJ0b29sYmFyIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwic2hhcmVNYXBVUkwiLCJzYXZlTWFwIiwic2VsZWN0IiwicmVjdGFuZ2xlIiwiTE9DQUxFUyIsIm1vZGFsIiwiZGVsZXRlRGF0YXNldCIsImFkZERhdGFUb01hcCIsImFkZEN1c3RvbU1hcGJveFN0eWxlIiwic2hhcmVVUkwiLCJidXR0b24iLCJkb3dubG9hZCIsImFkZFN0eWxlIiwic2F2ZSIsImRlZmF1bHRDYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInJhdGlvVGl0bGUiLCJyYXRpb0Rlc2NyaXB0aW9uIiwicmF0aW9PcmlnaW5hbFNjcmVlbiIsInJhdGlvQ3VzdG9tIiwicmF0aW80XzMiLCJyYXRpbzE2XzkiLCJyZXNvbHV0aW9uVGl0bGUiLCJyZXNvbHV0aW9uRGVzY3JpcHRpb24iLCJtYXBMZWdlbmRUaXRsZSIsIm1hcExlZ2VuZEFkZCIsImRhdGFzZXRTdWJ0aXRsZSIsImFsbERhdGFzZXRzIiwiZGF0YVR5cGVUaXRsZSIsImRhdGFUeXBlU3VidGl0bGUiLCJmaWx0ZXJEYXRhVGl0bGUiLCJmaWx0ZXJEYXRhU3VidGl0bGUiLCJmaWx0ZXJlZERhdGEiLCJ1bmZpbHRlcmVkRGF0YSIsImZpbGVDb3VudCIsImRlbGV0ZURhdGEiLCJ3YXJuaW5nIiwicHVibGlzaFRpdGxlIiwicHVibGlzaFN1YnRpdGxlMSIsInB1Ymxpc2hTdWJ0aXRsZTIiLCJwdWJsaXNoU3VidGl0bGUzIiwicHVibGlzaFN1YnRpdGxlNCIsInB1Ymxpc2hTdWJ0aXRsZTUiLCJwdWJsaXNoU3VidGl0bGU2IiwicHVibGlzaFN1YnRpdGxlNyIsImV4YW1wbGVUb2tlbiIsInBhc3RlVGl0bGUiLCJwYXN0ZVN1YnRpdGxlMSIsInBhc3RlU3VidGl0bGUyIiwibmFtaW5nVGl0bGUiLCJzaGFyZU1hcCIsInNoYXJlVXJpVGl0bGUiLCJzaGFyZVVyaVN1YnRpdGxlIiwiY2xvdWRUaXRsZSIsImNsb3VkU3VidGl0bGUiLCJzaGFyZURpc2NsYWltZXIiLCJnb3RvUGFnZSIsInN0YXR1c1BhbmVsIiwibWFwVXBsb2FkaW5nIiwiZXJyb3IiLCJzdWJ0aXRsZSIsImZvcm1hdFRpdGxlIiwiZm9ybWF0U3VidGl0bGUiLCJodG1sIiwic2VsZWN0aW9uIiwidG9rZW5UaXRsZSIsInRva2VuU3VidGl0bGUiLCJ0b2tlblBsYWNlaG9sZGVyIiwidG9rZW5NaXN1c2VXYXJuaW5nIiwidG9rZW5EaXNjbGFpbWVyIiwidG9rZW5VcGRhdGUiLCJtb2RlVGl0bGUiLCJtb2RlU3VidGl0bGUxIiwibW9kZVN1YnRpdGxlMiIsIm1vZGVEZXNjcmlwdGlvbiIsInJlYWQiLCJlZGl0IiwianNvbiIsImNvbmZpZ1RpdGxlIiwiY29uZmlnRGlzY2xhaW1lciIsImRpc2NsYWltZXIiLCJsb2FkaW5nRGlhbG9nIiwibG9hZGluZyIsImxvYWREYXRhIiwidXBsb2FkIiwic3RvcmFnZSIsInRyaXBJbmZvIiwiZGVzY3JpcHRpb24xIiwiY29kZSIsImRlc2NyaXB0aW9uMiIsImV4YW1wbGUiLCJpY29uSW5mbyIsImljb25zIiwic3RvcmFnZU1hcFZpZXdlciIsImxhc3RNb2RpZmllZCIsImJhY2siLCJvdmVyd3JpdGVNYXAiLCJhbHJlYWR5RXhpc3RzIiwibG9hZFN0b3JhZ2VNYXAiLCJnb1RvUGFnZSIsInN0b3JhZ2VNYXBzIiwibm9TYXZlZE1hcHMiLCJoZWFkZXIiLCJ2aXNpYmxlTGF5ZXJzIiwibGF5ZXJMZWdlbmQiLCJpbnRlcmFjdGlvbnMiLCJicnVzaCIsImNvb3JkaW5hdGUiLCJnZW9jb2RlciIsImFkZGl0aXZlIiwibm9ybWFsIiwic3VidHJhY3RpdmUiLCJjb2x1bW5zIiwibGF0IiwibG5nIiwiYWx0aXR1ZGUiLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiYWx0MCIsImFsdDEiLCJoZXhfaWQiLCJjdXN0b21QYWxldHRlIiwic3RlcHMiLCJyZXZlcnNlZCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxNQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxVQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxrQkFISDtBQUlSQyxJQUFBQSxLQUFLLEVBQUUsT0FKQztBQUtSQyxJQUFBQSxRQUFRLEVBQUUsV0FMRjtBQU1SQyxJQUFBQSxXQUFXLEVBQUUsZ0JBTkw7QUFPUkMsSUFBQUEsTUFBTSxFQUFFLE9BUEE7QUFRUkMsSUFBQUEsT0FBTyxFQUFFLFVBUkQ7QUFTUkMsSUFBQUEsTUFBTSxFQUFFLE9BVEE7QUFV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VyxFQUFFLHlCQVREO0FBVVpDLElBQUFBLFNBQVMsRUFBRSxVQVZDO0FBV1pDLElBQUFBLGdCQUFnQixFQUFFLDJDQVhOO0FBWVpDLElBQUFBLEVBQUUsRUFBRTtBQVpRLEdBdGFEO0FBb2JiNUIsRUFBQUEsUUFBUSxFQUFFO0FBQ1I5TyxJQUFBQSxLQUFLLEVBQUU7QUFEQyxHQXBiRztBQXViYjJRLEVBQUFBLGFBQWEsRUFBRTtBQUNiQyxJQUFBQSxRQUFRLEVBQUUsY0FERztBQUViQyxJQUFBQSxVQUFVLEVBQUU7QUFGQyxHQXZiRjtBQTJiYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFNBQVMsRUFBRSxrQkFESjtBQUVQQyxJQUFBQSxTQUFTLEVBQUUscUJBRko7QUFHUEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxDLE1BQUFBLFFBQVEsRUFBRTtBQUZMO0FBSEEsR0EzYkk7QUFtY2JDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxPQUFPLEVBQUU7QUFEQyxHQW5jQztBQXNjYnhTLEVBQUFBLE9BQU8sRUFBRSxVQXRjSTtBQXVjYixnQkFBYyxvQkF2Y0Q7QUF3Y2IsZ0JBQWMsaUJBeGNEO0FBeWNieVMsRUFBQUEsSUFBSSxFQUFFLFFBemNPO0FBMGNiQyxFQUFBQSxLQUFLLEVBQUU7QUExY00sQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7TE9DQUxFU30gZnJvbSAnLi4vbG9jYWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcGVydHk6IHtcbiAgICB3ZWlnaHQ6ICdwZXNvJyxcbiAgICBsYWJlbDogJ2V0aXF1ZXRhJyxcbiAgICBmaWxsQ29sb3I6ICdjb2xvciBkZSByZWxsZW5vJyxcbiAgICBjb2xvcjogJ2NvbG9yJyxcbiAgICBjb3ZlcmFnZTogJ2NvYmVydHVyYScsXG4gICAgc3Ryb2tlQ29sb3I6ICdjb2xvciBkZSB0cmF6bycsXG4gICAgcmFkaXVzOiAncmFkaW8nLFxuICAgIG91dGxpbmU6ICdjb250b3JubycsXG4gICAgc3Ryb2tlOiAndHJhem8nLFxuICAgIGRlbnNpdHk6ICdkZW5zaWRhZCcsXG4gICAgaGVpZ2h0OiAnYWx0dXJhJyxcbiAgICBzdW06ICdzdW1hJyxcbiAgICBwb2ludENvdW50OiAnUmVjdWVudG8gZGUgcHVudG9zJ1xuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHNlYXJjaDogJ0J1c3F1ZWRhJyxcbiAgICBzZWxlY3RGaWVsZDogJ1NlbGVjY2lvbmEgdW4gY2FtcG8nLFxuICAgIHlBeGlzOiAnRWplIFknLFxuICAgIHNlbGVjdFR5cGU6ICdTZWxlY2Npb25hIHVuIFRpcG8nLFxuICAgIHNlbGVjdFZhbHVlOiAnU2VsZWNjaW9uYSB1biBWYWxvcicsXG4gICAgZW50ZXJWYWx1ZTogJ0VudHJhIHVuIHZhbG9yJyxcbiAgICBlbXB0eTogJ3ZhY2lvJ1xuICB9LFxuICBtaXNjOiB7XG4gICAgYnk6ICcnLFxuICAgIHZhbHVlc0luOiAnVmFsb3JlcyBlbicsXG4gICAgdmFsdWVFcXVhbHM6ICdWYWxvciBpZ3VhbCBhJyxcbiAgICBkYXRhU291cmNlOiAnRnVlbnRlIGRlIGRhdG9zJyxcbiAgICBicnVzaFJhZGl1czogJ1JhZGlvIGRlbCBwaW5jZWwgKGttKScsXG4gICAgZW1wdHk6ICcgJ1xuICB9LFxuICBtYXBMYXllcnM6IHtcbiAgICB0aXRsZTogJ0NhcGFzIGRlbCBtYXBhJyxcbiAgICBsYWJlbDogJ0V0aXF1ZXRhJyxcbiAgICByb2FkOiAnQ2FycmV0ZXJhJyxcbiAgICBib3JkZXI6ICdGcm9udGVyYScsXG4gICAgYnVpbGRpbmc6ICdFZGlmaWNpbycsXG4gICAgd2F0ZXI6ICdBZ3VhJyxcbiAgICBsYW5kOiAnVGllcnJhJyxcbiAgICAnM2RCdWlsZGluZyc6ICdFZGlmaWNpbyAzRCcsXG4gICAgYmFja2dyb3VuZDogJ0ZvbmRvJ1xuICB9LFxuICBwYW5lbDoge1xuICAgIHRleHQ6IHtcbiAgICAgIGxhYmVsOiAnZXRpcXVldGEnLFxuICAgICAgbGFiZWxXaXRoSWQ6ICdFdGlxdWV0YSB7bGFiZWxJZH0nLFxuICAgICAgZm9udFNpemU6ICdUYW1hw7FvIGRlIGZ1ZW50ZScsXG4gICAgICBmb250Q29sb3I6ICdDb2xvciBkZSBmdWVudGUnLFxuICAgICAgdGV4dEFuY2hvcjogJ0FuY2xhamUgZGVsIHRleHRvJyxcbiAgICAgIGFsaWdubWVudDogJ0FsaW5lYWNpw7NuJyxcbiAgICAgIGFkZE1vcmVMYWJlbDogJ0HDsWFkaXIgbcOhcyBldGlxdWV0YXMnXG4gICAgfVxuICB9LFxuICBzaWRlYmFyOiB7XG4gICAgcGFuZWxzOiB7XG4gICAgICBsYXllcjogJ0NhcGFzJyxcbiAgICAgIGZpbHRlcjogJ0ZpbHRyb3MnLFxuICAgICAgaW50ZXJhY3Rpb246ICdJbnRlcmFjY2lvbmVzJyxcbiAgICAgIGJhc2VtYXA6ICdNYXBhIGJhc2UnXG4gICAgfVxuICB9LFxuICBsYXllcjoge1xuICAgIHJlcXVpcmVkOiAnUmVxdWVyaWRvKicsXG4gICAgcmFkaXVzOiAnUmFkaW8nLFxuICAgIGNvbG9yOiAnQ29sb3InLFxuICAgIGZpbGxDb2xvcjogJ0NvbG9yIGRlIHJlbGxlbm8nLFxuICAgIG91dGxpbmU6ICdDb250b3JubycsXG4gICAgd2VpZ2h0OiAnR3J1ZXNvJyxcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl9IGJhc2FkbyBlbicsXG4gICAgY292ZXJhZ2U6ICdDb2JlcnR1cmEnLFxuICAgIHN0cm9rZTogJ1RyYXpvJyxcbiAgICBzdHJva2VXaWR0aDogJ0dyb3NvciBkZSB0cmF6bycsXG4gICAgc3Ryb2tlQ29sb3I6ICdDb2xvciBkZSB0cmF6bycsXG4gICAgYmFzaWM6ICdCw6FzaWNvJyxcbiAgICB0cmFpbExlbmd0aDogJ0xvbmdpdHVkIGRlIHBpc3RhJyxcbiAgICB0cmFpbExlbmd0aERlc2NyaXB0aW9uOiAnTnVtZXJvIGRlIHNlZ3VuZG9zIGhhc3RhIHF1ZSBkZXNhcGFyZXpjYSBlbCBjYW1pbm8nLFxuICAgIG5ld0xheWVyOiAnbnVldmEgY2FwYScsXG4gICAgZWxldmF0aW9uQnlEZXNjcmlwdGlvbjogJ1NpIGRlc2FjdGl2YWRvLCBsYSBhbHR1cmEgc2UgYmFzYSBlbiBlbCByZWN1ZW50byBkZSBwdW50b3MnLFxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ1NpIGRlc2FjdGl2YWRvLCBlbCBjb2xvciBzZSBiYXNhIGVuIGVsIHJlY3VlbnRvIGRlIHB1bnRvcycsXG4gICAgYWdncmVnYXRlQnk6ICd7ZmllbGR9IGFncmVnYWRvIHBvcicsXG4gICAgJzNETW9kZWwnOiAnTW9kZWxvIDNEJyxcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnT3BjaW9uZXMgZGVsIG1vZGVsbyAzRCcsXG4gICAgdHlwZToge1xuICAgICAgcG9pbnQ6ICdwdW50bycsXG4gICAgICBhcmM6ICdhcmNvJyxcbiAgICAgIGxpbmU6ICdsw61uZWEnLFxuICAgICAgZ3JpZDogJ21hbGxhJyxcbiAgICAgIGhleGJpbjogJ2hleGJpbicsXG4gICAgICBwb2x5Z29uOiAncG9sw61nb25vJyxcbiAgICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICAgIGNsdXN0ZXI6ICdjbHVzdGVyJyxcbiAgICAgIGljb246ICdpY29ubycsXG4gICAgICBoZWF0bWFwOiAnY29uY2VudHJhY2nDs24nLFxuICAgICAgaGV4YWdvbjogJ2hleMOhZ29ubycsXG4gICAgICBoZXhhZ29uaWQ6ICdIMycsXG4gICAgICB0cmlwOiAndmlhamUnLFxuICAgICAgczI6ICdTMicsXG4gICAgICAnM2QnOiAnM0QnXG4gICAgfSxcbiAgICBsYXllclVwZGF0ZUVycm9yOlxuICAgICAgJ1NlIHByb2R1am8gdW4gZXJyb3IgZHVyYW50ZSBsYSBhY3R1YWxpemFjacOzbiBkZSBsYSBjYXBhOiB7ZXJyb3JNZXNzYWdlfS4gQXNlZ8O6cmVzZSBkZSBxdWUgZWwgZm9ybWF0byBkZSBsb3MgZGF0b3MgZGUgZW50cmFkYSBzZWEgdsOhbGlkby4nXG4gIH0sXG4gIGxheWVyVmlzQ29uZmlnczoge1xuICAgIGFuZ2xlOiAnw4FuZ3VsbycsXG4gICAgc3Ryb2tlV2lkdGg6ICdBbmNobyBkZWwgdHJhem8nLFxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdSYW5nbyBkZWwgYW5jaG8gZGVsIHRyYXpvJyxcbiAgICByYWRpdXM6ICdSYWRpbycsXG4gICAgZml4ZWRSYWRpdXM6ICdSYWRpbyBmaWpvIGEgbWVkaXInLFxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICdBanVzdGFyIGVsIHJhZGlvIGFsIHJhZGlvIGFic29sdXRvIGVuIG1ldHJvcywgcC5lLiA1IGEgNSBtZXRyb3MnLFxuICAgIHJhZGl1c1JhbmdlOiAnUmFuZ28gZGUgcmFkaW8nLFxuICAgIGNsdXN0ZXJSYWRpdXM6ICdSYWRpbyBkZWwgY2x1c3RlciBlbiBww614ZWxlcycsXG4gICAgcmFkaXVzUmFuZ2VQaXhlbHM6ICdSYW5nbyBkZWwgcmFkaW8gZW4gcMOteGVsZXMnLFxuICAgIG9wYWNpdHk6ICdPcGFjaWRhZCcsXG4gICAgY292ZXJhZ2U6ICdDb2JlcnR1cmEnLFxuICAgIG91dGxpbmU6ICdDb250b3JubycsXG4gICAgY29sb3JSYW5nZTogJ1JhbmdvIGRlIGNvbG9yJyxcbiAgICBzdHJva2U6ICdUcmF6bycsXG4gICAgc3Ryb2tlQ29sb3I6ICdDb2xvciBkZSB0cmF6bycsXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ1JhbmdvIGRlIGNvbG9yIGRlIHRyYXpvJyxcbiAgICB0YXJnZXRDb2xvcjogJ0NvbG9yIGRlc3Rpbm8nLFxuICAgIGNvbG9yQWdncmVnYXRpb246ICdBZ3JlZ2FjacOzbiBkZSBjb2xvcicsXG4gICAgaGVpZ2h0QWdncmVnYXRpb246ICdBZ3JlZ2FjacOzbiBkZSBsYSBhbHR1cmEnLFxuICAgIHJlc29sdXRpb25SYW5nZTogJ1JhbmdvIGRlIHJlc29sdWNpw7NuJyxcbiAgICBzaXplU2NhbGU6ICdNZWRpZGEgZGUgZXNjYWxhJyxcbiAgICB3b3JsZFVuaXRTaXplOiAnTWVkaWRhIGRlIGxhIHVuaWRhZCBtdW5kaWFsJyxcbiAgICBlbGV2YXRpb25TY2FsZTogJ0VzY2FsYSBkZSBlbGV2YWNpw7NuJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yOiAnVXNhciBmYWN0b3IgZGUgem9vbSBkZSBlbGV2YWNpw7NuJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yRGVzY3JpcHRpb246XG4gICAgICAnQWp1c3RlIGxhIGFsdHVyYSAvIGVsZXZhY2nDs24gc2Vnw7puIGVsIGZhY3RvciBkZSB6b29tIGFjdHVhbCcsXG4gICAgZW5hYmxlSGVpZ2h0Wm9vbUZhY3RvcjogJ1VzYXIgZmFjdG9yIGRlIHpvb20gZGUgYWx0dXJhJyxcbiAgICBoZWlnaHRTY2FsZTogJ0VzY2FsYSBkZSBhbHR1cmEnLFxuICAgIGNvdmVyYWdlUmFuZ2U6ICdSYW5nbyBkZSBjb2JlcnR1cmEnLFxuICAgIGhpZ2hQcmVjaXNpb25SZW5kZXJpbmc6ICdSZXByZXNlbnRhY2nDs24gZGUgYWx0YSBwcmVjaXNpw7NuJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdMYSBwcmVjaXNpw7NuIGFsdGEgdGVuZHLDoSB1biByZW5kaW1pZW50byBtw6FzIGJham8nLFxuICAgIGhlaWdodDogJ0FsdHVyYScsXG4gICAgaGVpZ2h0RGVzY3JpcHRpb246XG4gICAgICAnSGF6IGNsaWMgZW4gZWwgYm90w7NuIGRlIGFycmliYSBhIGxhIGRlcmVjaGEgZGVsIG1hcGEgcGVyIGNhbWJpYXIgYSB2aXN0YSAzRCcsXG4gICAgZmlsbDogJ1JlbGxlbmFyJyxcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnQWN0aXZhciBsYSBhbHR1cmEgZGVsIHBvbMOtZ29ubycsXG4gICAgc2hvd1dpcmVmcmFtZTogJ011ZXN0cmEgZXNxdWVtw6B0aWNvJyxcbiAgICB3ZWlnaHRJbnRlbnNpdHk6ICdJbnRlbnNpZGFkIGRlIHBlc28nLFxuICAgIHpvb21TY2FsZTogJ0VzY2FsYSBkZSB6b29tJyxcbiAgICBoZWlnaHRSYW5nZTogJ1JhbmdvIGRlIGFsdHVyYXMnLFxuICAgIGhlaWdodE11bHRpcGxpZXI6ICdNdWx0aXBsaWNhZG9yIGRlIGFsdHVyYSdcbiAgfSxcbiAgbGF5ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRGF0YTogJ0HDsWFkaXIgZGF0b3MnLFxuICAgIGFkZExheWVyOiAnQcOxYWRpciBjYXBhJyxcbiAgICBsYXllckJsZW5kaW5nOiAnQ29tYmluYXIgY2FwYXMnXG4gIH0sXG4gIG1hcE1hbmFnZXI6IHtcbiAgICBtYXBTdHlsZTogJ0VzdGlsbyBkZSBtYXBhJyxcbiAgICBhZGRNYXBTdHlsZTogJ0HDsWFkaXIgZXN0aWxvIGRlIG1hcGEnLFxuICAgICczZEJ1aWxkaW5nQ29sb3InOiAnQ29sb3IgZWRpZmljaW9zIDNEJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdDb2xvciBkZSBmb25kbydcbiAgfSxcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYXIge3Byb3BlcnR5fSBzZWfDum4gZWwgY2FtcG8gc2VsZWNjaW9uYWRvJyxcbiAgICBob3dUbzogJ0hvdyB0bydcbiAgfSxcbiAgZmlsdGVyTWFuYWdlcjoge1xuICAgIGFkZEZpbHRlcjogJ0HDsWFkaXIgZmlsdHJvJ1xuICB9LFxuICBkYXRhc2V0VGl0bGU6IHtcbiAgICBzaG93RGF0YVRhYmxlOiAnTW9zdGFyIGxhIHRhYmxhIGRlIGRhdG9zJyxcbiAgICByZW1vdmVEYXRhc2V0OiAnRWxpbWluYXIgY29uanVudG8gZGUgZGF0b3MnXG4gIH0sXG4gIGRhdGFzZXRJbmZvOiB7XG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IGZpbGVzJ1xuICB9LFxuICB0b29sdGlwOiB7XG4gICAgaGlkZUxheWVyOiAnT2N1bHRhciBsYSBjYXBhJyxcbiAgICBzaG93TGF5ZXI6ICdNb3N0cmFyIGxhIGNhcGEnLFxuICAgIGhpZGVGZWF0dXJlOiAnT2N1bHRhciBlbCBvYmpldG8nLFxuICAgIHNob3dGZWF0dXJlOiAnTW9zdHJhciBlbCBvYmpldG8nLFxuICAgIGhpZGU6ICdPY3VsdGFyJyxcbiAgICBzaG93OiAnTW9zdHJhcicsXG4gICAgcmVtb3ZlTGF5ZXI6ICdFbGltaW5hciBjYXBhJyxcbiAgICByZXNldEFmdGVyRXJyb3I6ICdJbnRlbnRlIGhhYmlsaXRhciBsYSBjYXBhIGRlc3B1w6lzIGRlIHVuIGVycm9yJyxcbiAgICBsYXllclNldHRpbmdzOiAnQ29uZmlndXJhY2nDs24gZGUgY2FwYScsXG4gICAgY2xvc2VQYW5lbDogJ0NlcnJhciBlbCBwYW5lbCBhY3R1YWwnLFxuICAgIHN3aXRjaFRvRHVhbFZpZXc6ICdDYW1iaWFyIGEgbGEgdmlzdGEgZGUgbWFwYSBkdWFsJyxcbiAgICBzaG93TGVnZW5kOiAnTW9zdHJhciBsZXllbmRhJyxcbiAgICBkaXNhYmxlM0RNYXA6ICdEZXNhY3RpdmFyIG1hcGEgM0QnLFxuICAgIERyYXdPbk1hcDogJ0RpYnVqYXIgZW4gZWwgbWFwYScsXG4gICAgc2VsZWN0TG9jYWxlOiAnU2VsZWNjaW9uYXIgY29uZmlndXJhY2nDs24gcmVnaW9uYWwnLFxuICAgIGhpZGVMYXllclBhbmVsOiAnT2N1bHRhciBsYSB0YWJsYSBkZSBjYXBhcycsXG4gICAgc2hvd0xheWVyUGFuZWw6ICdNb3N0cmFyIGxhIHRhYmxhICBkZSBjYXBhcycsXG4gICAgbW92ZVRvVG9wOiAnRGVzcGxhemFyIGFycmliYSBkZSBsYXMgY2FwYXMgZGUgZGF0b3MnLFxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ1NlbGVjY2lvbmFyIGVzdGlsbyBkZSBtYXBhIGJhc2UnLFxuICAgIGRlbGV0ZTogJ0JvcnJhcicsXG4gICAgdGltZVBsYXliYWNrOiAnUmVwcm9kdWNjacOzbiBkZSB0aWVtcG8nLFxuICAgIGNsb3VkU3RvcmFnZTogJ0FsbWFjZW5hamUgZW4gbGEgbnViZScsXG4gICAgJzNETWFwJzogJ01hcGEgM0QnLFxuICAgIGFuaW1hdGlvbkJ5V2luZG93OiAnVmVudGFuYSBUZW1wb3JhbCBNw7N2aWwnLFxuICAgIGFuaW1hdGlvbkJ5SW5jcmVtZW50YWw6ICdWZW50YW5hIFRlbXBvcmFsIEluY3JlbWVudGFsJyxcbiAgICBzcGVlZDogJ3ZlbG9jaWRhZCcsXG4gICAgcGxheTogJ2luaWNpYXInLFxuICAgIHBhdXNlOiAncGF1c2FyJyxcbiAgICByZXNldDogJ3JlaW5pY2lhcidcbiAgfSxcbiAgdG9vbGJhcjoge1xuICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0YXIgaW1hZ2VuJyxcbiAgICBleHBvcnREYXRhOiAnRXhwb3J0YXIgZGF0b3MnLFxuICAgIGV4cG9ydE1hcDogJ0V4cG9ydGFyIG1hcGEnLFxuICAgIHNoYXJlTWFwVVJMOiAnQ29tcGFydGlyIGVsIGVubGFjZSBkZWwgbWFwYScsXG4gICAgc2F2ZU1hcDogJ0d1YXJkYXIgbWFwYScsXG4gICAgc2VsZWN0OiAnc2VsZWNjaW9uYScsXG4gICAgcG9seWdvbjogJ3BvbMOtZ29ubycsXG4gICAgcmVjdGFuZ2xlOiAncmVjdMOhbmd1bG8nLFxuICAgIGhpZGU6ICdlc2NvbmRlcicsXG4gICAgc2hvdzogJ21vc3RyYXInLFxuICAgIC4uLkxPQ0FMRVNcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICB0aXRsZToge1xuICAgICAgZGVsZXRlRGF0YXNldDogJ0JvcnJhciBjb25qdW50byBkZSBkYXRvcycsXG4gICAgICBhZGREYXRhVG9NYXA6ICdBw7FhZGlyIGRhdG9zIGFsIG1hcGEnLFxuICAgICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnRhciBpbWFnZW4nLFxuICAgICAgZXhwb3J0RGF0YTogJ0V4cG9ydGFyIGRhdG9zJyxcbiAgICAgIGV4cG9ydE1hcDogJ0V4cG9ydGFyIG1hcGEnLFxuICAgICAgYWRkQ3VzdG9tTWFwYm94U3R5bGU6ICdBw7FhZGlyIGVzdGlsbyBkZSBNYXBib3ggcHJvcGlvJyxcbiAgICAgIHNhdmVNYXA6ICdHdWFyZGFyIG1hcGEnLFxuICAgICAgc2hhcmVVUkw6ICdDb21wYXJ0aXIgZW5sYWNlJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBkZWxldGU6ICdCb3JyYXInLFxuICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXInLFxuICAgICAgZXhwb3J0OiAnRXhwb3J0YXInLFxuICAgICAgYWRkU3R5bGU6ICdBw7FhZGlyIGVzdGlsbycsXG4gICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAnQ2FuY2VsYXInLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtYXInXG4gICAgfSxcbiAgICBleHBvcnRJbWFnZToge1xuICAgICAgcmF0aW9UaXRsZTogJ1JhdGlvJyxcbiAgICAgIHJhdGlvRGVzY3JpcHRpb246ICdFc29nZXIgcmF0aW8gcG9yIGRpdmVyc29zIHVzb3MuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdQYW50YWxsYSBvcmlnaW5hbCcsXG4gICAgICByYXRpb0N1c3RvbTogJ1BlcnNvbmFsaXphZG8nLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHVjacOzbicsXG4gICAgICByZXNvbHV0aW9uRGVzY3JpcHRpb246ICdVbmEgYWx0YSByZXNvbHVjacOzbiBlcyBtZWpvciBwYXJhIGxhcyBpbXByZXNpb25lcy4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdMZXllbmRhIGRlbCBtYXBhJyxcbiAgICAgIG1hcExlZ2VuZEFkZDogJ0HDsWFkaXIgbGV5ZW5kYSBhbCBtYXBhJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnQ29uanVudG8gZGUgZGF0b3MnLFxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnRXNjb2dlciBsb3MgY29uanVudG9zIGRlIGRhdG9zIGEgZXhwb3J0YXInLFxuICAgICAgYWxsRGF0YXNldHM6ICdUb2RvcycsXG4gICAgICBkYXRhVHlwZVRpdGxlOiAnVGlwbyBkZSBkYXRvcycsXG4gICAgICBkYXRhVHlwZVN1YnRpdGxlOiAnRXNjb2dlciBlbCB0aXBvIGRlIGRhdG9zIGEgZXhwb3J0YXInLFxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdHJhciBkYXRvcycsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdTZSBwdWVkZSBlc2NvZ2VyIGV4cG9ydGFyIGxvcyBkYXRvcyBvcmlnaW5hbGVzIG8gZmlsdHJhZG9zJyxcbiAgICAgIGZpbHRlcmVkRGF0YTogJ0RhdG9zIGZpbHRyYWRvcycsXG4gICAgICB1bmZpbHRlcmVkRGF0YTogJ0RhdG9zIHNpbiBmaWx0cmFyJyxcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR9IEFyY2hpdm9zJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBGaWxlcydcbiAgICB9LFxuICAgIGRlbGV0ZURhdGE6IHtcbiAgICAgIHdhcm5pbmc6ICdlc3TDoXMgYSBwdW50byBkZSBib3JyYXIgZXN0ZSBjb25qdW50byBkZSBkYXRvcy4gQWZlY3RhcsOhIGEge2xlbmd0aH0gY2FwYXMnXG4gICAgfSxcbiAgICBhZGRTdHlsZToge1xuICAgICAgcHVibGlzaFRpdGxlOiAnMS4gUHVibGljYXIgdHUgZXN0aWxvIGVuIE1hcGJveCBvIHByb3BvcmNpb25hciBlbCB0b2tlbiBkZSBhY2Nlc28nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1B1ZWRlcyBjcmVhciBlbCB0dSBwcm9waW8gZXN0aWxvIGRlIG1hcGEgZW4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMjogJ3knLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMzogJ3B1YmxpY2FyJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICdsby4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ1BhcmEgdXRpbGl6YXIgdW4gZXN0aWxvIHByaXZhZG8sIGVuZ2FuY2hhIHR1JyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTY6ICd0b2tlbiBkZSBhY2Nlc28nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcbiAgICAgICAgJ2FxdcOtLiAqa2VwbGVyLmdsIGVzIHVuYSBhcGxpY2FjacOzbiBjbGllbnRlLCBsb3MgZGF0b3MgcXVlZGFuIGVuIHR1IG5hdmVnYWRvci4uJyxcbiAgICAgIGV4YW1wbGVUb2tlbjogJ3AuZS4gcGsuYWJjZGVmZy54eHh4eHgnLFxuICAgICAgcGFzdGVUaXRsZTogJzIuIEVuZ2FuY2hhIGVsIGVubGFjZSBkZWwgZXN0aWxvJyxcbiAgICAgIHBhc3RlU3VidGl0bGUxOiAnUXXDqSBlcyB1bicsXG4gICAgICBwYXN0ZVN1YnRpdGxlMjogJ2VubGFjZSBkZWwgZXN0aWxvJyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gUG9uZXIgbm9tYnJlIGEgdHUgZXN0aWxvJ1xuICAgIH0sXG4gICAgc2hhcmVNYXA6IHtcbiAgICAgIHNoYXJlVXJpVGl0bGU6ICdDb21wYXJ0aXIgZWwgZW5sYWNlIGRlbCBtYXBhJyxcbiAgICAgIHNoYXJlVXJpU3VidGl0bGU6ICdHZW5lcmFyIHVuIGVubGFjZSBkZWwgbWFwYSBwYXJhIGNvbXBhcnRpciBjb24gb3Ryb3MnLFxuICAgICAgY2xvdWRUaXRsZTogJ0FsbWFjZW5hZ2UgZW4gbGEgbnViZScsXG4gICAgICBjbG91ZFN1YnRpdGxlOiAnQWNjZWRlciB5IGNhcmdhciBkYXRvcyBkZWwgbWFwYSBhIHR1IGFsbWFjZW5hZ2UgYSBsYSBudWJlIHBlcnNvbmFsJyxcbiAgICAgIHNoYXJlRGlzY2xhaW1lcjpcbiAgICAgICAgJ2tlcGxlci5nbCBndWFyZGFyw6EgbG9zIGRhdG9zIGRlbCBtYXBhIGVuIGVsIGFsbWFjZW5hZ2UgZGUgdHUgbnViZSBwZXJzb25hbCwgc8OzbG8gcXVpZW4gdGVuZ2EgZWwgZW5sYWNlIHBvZHJhIGFjY2VkZXIgYWwgbWFwYSB5IGEgbG9zIGRhdG9zIC4gJyArXG4gICAgICAgICdQdWVkZXMgZWRpdGFyL2JvcnJhciBlbCBhcmNoaXZvIGRlIGRhdG9zIGVuIHR1IGN1ZW50YSBlbiBsYSBudWJlIGVuIGN1YWxxdWllciBtb21lbnRvLicsXG4gICAgICBnb3RvUGFnZTogJ1ZlcyBhIGxhIHDDoWdpbmEgZGUge2N1cnJlbnRQcm92aWRlcn0gZGUgS2VwbGVyLmdsJ1xuICAgIH0sXG4gICAgc3RhdHVzUGFuZWw6IHtcbiAgICAgIG1hcFVwbG9hZGluZzogJ0NhcmdhciB1biBtYXBhJyxcbiAgICAgIGVycm9yOiAnRXJyb3InXG4gICAgfSxcbiAgICBzYXZlTWFwOiB7XG4gICAgICB0aXRsZTogJ0FsbWFjZW50YWdlIGVuIGxhIG51YmUnLFxuICAgICAgc3VidGl0bGU6ICdBY2NlZGVyIHBhcmEgZ3VhcmRhciBlbCBtYXBhIGVuIHRldSBhbG1hY2VuYWdlIGVuIGxhIG51YmUnXG4gICAgfSxcbiAgICBleHBvcnRNYXA6IHtcbiAgICAgIGZvcm1hdFRpdGxlOiAnRm9ybWF0byBkZSBtYXBhJyxcbiAgICAgIGZvcm1hdFN1YnRpdGxlOiAnRXNjb2dlciBlbCBmb3JtYXRvIGFsIHF1ZSBzZSBkZXNlYSBleHBvcnRhciBlbCBtYXBhJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0YXIgdHUgbWFwYSBjb21vIHVuIGFyY2hpdm8gSFRNTCBpbnRlcmFjdGl2by4nLFxuICAgICAgICB0b2tlblRpdGxlOiAnVG9rZW4gZGUgYWNjZXNvIGRlIE1hcGJveCcsXG4gICAgICAgIHRva2VuU3VidGl0bGU6ICdVdGlsaXphciB0dSB0b2tlbiBkZSBhY2Nlc28gYSBNYXBib3ggYWwgYXJjaGl2byBIVE1MIChvcGNpb25hbCknLFxuICAgICAgICB0b2tlblBsYWNlaG9sZGVyOiAnRW5nYW5jaGFyIHR1IHRva2VuIGRlIGFjY2VzbyBhIE1hcGJveCcsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiBTaSBubyBwcm9wb3JjaW9uYXMgdHUgcHJvcGlvIHRva2VuLCBlbCBtYXBhIHBvZHLDrWEgZmFsbGFyIGVuIGN1YWxxdWllciBtb21lbnRvIGN1YW5kbyByZWVtcGxhY2Vtb3MgbnVlc3RybyB0b2tlbiBwYXJhIGV2aXRhciBhYnVzb3MuICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjpcbiAgICAgICAgICAnUHVlZGVzIGNhbWJpYXIgZWwgdG9rZW4gZGUgTWFwYm94IHBvc3Rlcmlvcm1lbnRlIHV0aWxpemFuZG8gZXN0YXMgaW5zdHJ1Y2Npb25lczogJyxcbiAgICAgICAgdG9rZW5VcGRhdGU6ICdDb21vIGFjdHVhbGl0emFyIHVuIHRva2VuIHByZWV4aXN0ZW50ZS4nLFxuICAgICAgICBtb2RlVGl0bGU6ICdNb2RvIG1hcGEnLFxuICAgICAgICBtb2RlU3VidGl0bGUxOiAnU2VsZWNjaW9uYXIgbW9kbyBhcHAuIE3DoXMgJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMjogJ2luZm9ybWFjacOzbicsXG4gICAgICAgIG1vZGVEZXNjcmlwdGlvbjogJ1Blcm1taXRlIGEgbG9zIHVzdWFyaW9zIHttb2RvfSBlbCBtYXBhJyxcbiAgICAgICAgcmVhZDogJ2xlZXInLFxuICAgICAgICBlZGl0OiAnZWRpdGFyJ1xuICAgICAgfSxcbiAgICAgIGpzb246IHtcbiAgICAgICAgY29uZmlnVGl0bGU6ICdDb25maWd1cmFjacOzbiBkZWwgbWFwYScsXG4gICAgICAgIGNvbmZpZ0Rpc2NsYWltZXI6XG4gICAgICAgICAgJ0xhIGNvbmZpZ3VyYWNpw7NuIGRlbCBtYXBhIHNlcsOhIGluY2x1aWRhIGVuIGVsIGFyY2hpdm8gSnNvbi4gU2kgdXRpbGl0emFzIGtlcGxlci5nbCBlbiB0dSBwcm9waWEgYXBwIHB1ZWRlcyBjb3BpYXIgZXN0YSBjb25maWd1cmFjacOzbiB5IHBhc2FybGEgYSAgJyxcbiAgICAgICAgc2VsZWN0aW9uOlxuICAgICAgICAgICdFeHBvcnRhciBsb3MgZGF0b3MgZGVsIG1hcGEgeSBsYSBjb25maWd1cmFjacOzbiBlbiB1biBzb2xvIGFyY2hpdm8gSnNvbi4gUG9zdGVyaW9ybWVudGUgcHVlZGVzIGFicmlyIGVzdGUgbWlzbW8gbWFwYSBjYXJnYW5kbyBlc3RlIG1pc21vIGFyY2hpdm8gYSBrZXBsZXIuZ2wuJyxcbiAgICAgICAgZGlzY2xhaW1lcjpcbiAgICAgICAgICAnKiBMYSBjb25maWd1cmFjacOzbiBkZWwgbWFwYSBzZSBjb21iaW5hIGNvbiBsb3MgY29uanVudG9zIGRlIGRhdG9zIGNhcmdhZG9zLiDigJhkYXRhSWTigJkgc2UgdXRpbGl6YSBwYXJhIHZpbmN1bGFyIGNhcGFzLCBmaWx0cm9zIHkgc3VnZXJlbmNpYXMgYSB1biBjb25qdW50byBkZSBkYXRvcyBlc3BlY8OtZmljby4gJyArXG4gICAgICAgICAgJ0N1YW5kbyBwYXNlcyBlc3RhIGNvbmZpZ3VyYWNpw7NuIGEgYWRkRGF0YVRvTWFwLCBhc2VndXJhIHF1ZSBlbCBpZGVudGlmaWNhZG9yIGRlbCBjb25qdW50byBkZSBkYXRvcyBjb2luY2lkYSBjb24gbG9zIOKAmGRhdGFJZOKAmSBkZSBlc3RhIGNvbmZpZ3VyYWNpw7NuLidcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRpbmdEaWFsb2c6IHtcbiAgICAgIGxvYWRpbmc6ICdDYXJnYW5kby4uLidcbiAgICB9LFxuICAgIGxvYWREYXRhOiB7XG4gICAgICB1cGxvYWQ6ICdDYXJnYXIgYXJjaGl2b3MnLFxuICAgICAgc3RvcmFnZTogJ0NhcmdhciBkZXNkZSBhbG1hY2VuYWdlJ1xuICAgIH0sXG4gICAgdHJpcEluZm86IHtcbiAgICAgIHRpdGxlOiAnQ29tbyBoYWJpbGl0YXIgbGEgYW5pbWFjacOzbiBkZSB2aWFqZScsXG4gICAgICBkZXNjcmlwdGlvbjE6XG4gICAgICAgICdQYXJhIGFuaW1hciBsYSBydXRhLCBsb3MgZGF0b3MgZ2VvSlNPTiBoYW4gZGUgY29udGVuZXIgYExpbmVTdHJpbmdgIGVuIHN1IGdlb21ldHLDrWEgeSBsYXMgY29vcmRlbmFkYXMgZGUgTGluZVN0cmluZyBkZWJlbiB0ZW5lciA0IGVsZW1lbnRvcyBlbiBsb3MgZm9ybWF0cyBkZSAnLFxuICAgICAgY29kZTogJyBbbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIHRpbWVzdGFtcF0gJyxcbiAgICAgIGRlc2NyaXB0aW9uMjpcbiAgICAgICAgJ3kgZWwgw7psdGltbyBlbGVtZW50byBkZWJlIHNlciBsYSBtYXJjYSBkZWwgdGllbXBvLiBMb3MgZm9ybWF0b3MgdsOhbGlkb3MgcGFyYSBsYSBtYXJjYSBkZSB0aWVtcG8gaW5jbHV5ZW4gVW5peCBlbiBzZWd1bmRvcyBjb21vIGAxNTY0MTg0MzYzYCBvIGVuIG1pbGlzZWd1bmRvcyBjb21vIGAxNTY0MTg0MzYzMDAwYC4nLFxuICAgICAgZXhhbXBsZTogJ0VqZW1wbG86J1xuICAgIH0sXG4gICAgaWNvbkluZm86IHtcbiAgICAgIHRpdGxlOiAnQ29tbyBkaWJ1amFyIMOtY29ub3MnLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnRW4gdHUgQ1NWIGNyZWEgdW5hIGNvbHVtbmEgeSBwb24gZWwgbm9tYnJlIGRlbCDDrWNvbm8gcXVlIHF1aWVyZXMgZGlidWphci4gUHVlZGVzIGRlamFyIGxhIGNlbGRhIHZhY8OtYSBjdWFuZG8gbm8gcXVpZXJhcyBxdWUgc2UgbXVlc3RyZSBwYXJhIGNpZXJ0b3MgcHVudG9zLiBDdWFuZG8gbGEgY29sdW1uYSBzZSBsbGFtYScsXG4gICAgICBjb2RlOiAnw61jb25vJyxcbiAgICAgIGRlc2NyaXB0aW9uMjogJyBrZXBsZXIuZ2wgYXV0b23DoXRpY2FtZW50ZSBjcmVhcsOhIHVuYSBjYXBhIGRlIMOtY29uby4nLFxuICAgICAgZXhhbXBsZTogJ0VqZW1wbG86JyxcbiAgICAgIGljb25zOiAnSWNvbm9zJ1xuICAgIH0sXG4gICAgc3RvcmFnZU1hcFZpZXdlcjoge1xuICAgICAgbGFzdE1vZGlmaWVkOiAnw5psdGltYSBtb2RpZmljYWNpw7NuIGhhY2Uge2xhc3RVcGRhdGVkfScsXG4gICAgICBiYWNrOiAnQXRyw6FzJ1xuICAgIH0sXG4gICAgb3ZlcndyaXRlTWFwOiB7XG4gICAgICB0aXRsZTogJ0d1YXJkYW5kbyBlbCBtYXBhLi4uJyxcbiAgICAgIGFscmVhZHlFeGlzdHM6ICdqYSBleGlzdGUgZW4ge21hcFNhdmVkfS4gTG8gcXVpZXJlcyBzb2JyZWVzY3JpdmlyPydcbiAgICB9LFxuICAgIGxvYWRTdG9yYWdlTWFwOiB7XG4gICAgICBiYWNrOiAnQXRyw6FzJyxcbiAgICAgIGdvVG9QYWdlOiAnVmVzIGEgbGEgcMOhZ2luYSB7ZGlzcGxheU5hbWV9IGRlIEtlcGxlci5nbCcsXG4gICAgICBzdG9yYWdlTWFwczogJ0FsbWFuY2VuYWdlIC8gTWFwYXMnLFxuICAgICAgbm9TYXZlZE1hcHM6ICdObyBoYXkgbmluZ8O6biBtYXBhIGd1YXJkYWRvIHRvZGF2w61hJ1xuICAgIH1cbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgdmlzaWJsZUxheWVyczogJ0NhcGFzIHZpc2libGVzJyxcbiAgICBsYXllckxlZ2VuZDogJ0NhcGEgZGUgbGV5ZW5kYSdcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgdG9vbHRpcDogJ1N1Z2VyZW5jaWFzJyxcbiAgICBicnVzaDogJ1BpbmNlbCcsXG4gICAgY29vcmRpbmF0ZTogJ0Nvb3JkZW5hZGFzJyxcbiAgICBnZW9jb2RlcjogJ0dlb2NvZGlmaWNhZG9yJ1xuICB9LFxuICBsYXllckJsZW5kaW5nOiB7XG4gICAgdGl0bGU6ICdDb21iaW5hY2nDs24gZGUgY2FwYXMnLFxuICAgIGFkZGl0aXZlOiAnYWRpdGl2YScsXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcbiAgICBzdWJ0cmFjdGl2ZTogJ3N1YnN0cmFjdGl2YSdcbiAgfSxcbiAgY29sdW1uczoge1xuICAgIHRpdGxlOiAnQ29sdW1uYXMnLFxuICAgIGxhdDogJ2xhdCcsXG4gICAgbG5nOiAnbG9uJyxcbiAgICBhbHRpdHVkZTogJ2FsdHVyYScsXG4gICAgaWNvbjogJ8OtY29ubycsXG4gICAgZ2VvanNvbjogJ2dlb2pzb24nLFxuICAgIGFyYzoge1xuICAgICAgbGF0MDogJ2xhdCBvcmlnZW4nLFxuICAgICAgbG5nMDogJ2xuZyBvcmlnZW4gJyxcbiAgICAgIGxhdDE6ICdsYXQgZGVzdGlubycsXG4gICAgICBsbmcxOiAnbG5nIGRlc3Rpbm8nXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICBhbHQwOiAnYWx0dXJhIG9yaWdlbicsXG4gICAgICBhbHQxOiAnYWx0dXJhIGRlc3Rpbm8nXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnVGFtYcOxbyBkZSBsYSBtYWxsYSAoa20pJ1xuICAgIH0sXG4gICAgaGV4YWdvbjoge1xuICAgICAgd29ybGRVbml0U2l6ZTogJ1JhZGlvIGRlIGhleMOhZ29ubyAoa20pJ1xuICAgIH0sXG4gICAgaGV4X2lkOiAnaWQgaGV4J1xuICB9LFxuICBjb2xvcjoge1xuICAgIGN1c3RvbVBhbGV0dGU6ICdQYWxldGEgcGVyc29uYWxpemFkYScsXG4gICAgc3RlcHM6ICdwYXNvcycsXG4gICAgdHlwZTogJ3RpcG8nLFxuICAgIHJldmVyc2VkOiAnaW52ZXJ0aWRhJ1xuICB9LFxuICBzY2FsZToge1xuICAgIGNvbG9yU2NhbGU6ICdFc2NhbGEgZGUgY29sb3InLFxuICAgIHNpemVTY2FsZTogJ0VzY2FsYSBkZSBtZWRpZGFzJyxcbiAgICBzdHJva2VTY2FsZTogJ0VzY2FsYSBkZSB0cmF6bycsXG4gICAgc2NhbGU6ICdFc2NhbGEnXG4gIH0sXG4gIGZpbGVVcGxvYWRlcjoge1xuICAgIG1lc3NhZ2U6ICdBcnJhc3RyYSB5IHN1ZWx0YSBlbCBhcmNoaXZvIGFxdcOtJyxcbiAgICBjaHJvbWVNZXNzYWdlOlxuICAgICAgJyp1c3VhcmlvIGRlIENocm9tZTogbGEgbWVkaWRhIG3DoXhpbWEgc29uIDI1MG1iLCBzaSBkZWJlcyBjYXJnYXIgdW4gYXJjaGl2byBtw6FzIGdyYW5kZSB1dGlsaXphIFNhZmFyaScsXG4gICAgZGlzY2xhaW1lcjpcbiAgICAgICcqa2VwbGVyLmdsIGVzIHVuYSBhcGxpY2FjacOzbiBhbCBsYWRvIGNsaWVudGUgcXVlIG5vIHV0aWxpemEgbmluZ8O6biBzZXJ2aWRvci4gTG9zIGRhdG9zIHPDs2xvIGV4aXN0ZW4gZW4gdHUgbcOhcXVpbmEvbmF2ZWdhZG9yLiAnICtcbiAgICAgICdObyBzZSBlbnZpYW4gZGF0b3MgbmkgbWFwYXMgYSBuaW5nw7puIHNlcnZpZG9yLicsXG4gICAgY29uZmlnVXBsb2FkTWVzc2FnZTpcbiAgICAgICdDYXJnYXIge2ZpbGVGb3JtYXROYW1lc30gbyB1biBtYXBhIGd1YXJkYWRvIGVuICoqSnNvbioqLiBNw6FzIGluZm9ybWFjacOzbiBzb2JyZSBbKipzdXBwb3J0ZWQgZmlsZSBmb3JtYXRzKipdJyxcbiAgICBicm93c2VGaWxlczogJ25hdmVnYSBwb3IgdHVzIGFyY2hpdm9zJyxcbiAgICB1cGxvYWRpbmc6ICdDYXJnYW5kbycsXG4gICAgZmlsZU5vdFN1cHBvcnRlZDogJ0VsIGFyY2hpdm8ge2Vycm9yRmlsZXN9IG5vIGVzIGNvbXBhdGlibGUuJyxcbiAgICBvcjogJ28nXG4gIH0sXG4gIGdlb2NvZGVyOiB7XG4gICAgdGl0bGU6ICdJbnRyb2R1Y2UgdW5hIGRpcmVjY2nDs24nXG4gIH0sXG4gIGZpZWxkU2VsZWN0b3I6IHtcbiAgICBjbGVhckFsbDogJ1F1aXRhciB0b2RvcycsXG4gICAgZm9ybWF0dGluZzogJ0Zvcm1hdG8nXG4gIH0sXG4gIGNvbXBhcmU6IHtcbiAgICBtb2RlTGFiZWw6ICdNb2RvIENvbXBhcmFjacOzbicsXG4gICAgdHlwZUxhYmVsOiAnVGlwbyBkZSBDb21wYXJhY2nDs24nLFxuICAgIHR5cGVzOiB7XG4gICAgICBhYnNvbHV0ZTogJ0Fic29sdXRhJyxcbiAgICAgIHJlbGF0aXZlOiAnUmVsYXRpdmEnXG4gICAgfVxuICB9LFxuICBtYXBQb3BvdmVyOiB7XG4gICAgcHJpbWFyeTogJ1ByaW5jaXBhbCdcbiAgfSxcbiAgZGVuc2l0eTogJ2RlbnNpZGFkJyxcbiAgJ0J1ZyBSZXBvcnQnOiAnSW5mb3JtZSBkZSBlcnJvcmVzJyxcbiAgJ1VzZXIgR3VpZGUnOiAnR3XDrWEgZGUgdXN1YXJpbycsXG4gIFNhdmU6ICdHdWFkYXInLFxuICBTaGFyZTogJ0NvbXBhcnRpcidcbn07XG4iXX0=