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
    weight: 'pes',
    label: 'etiqueta',
    fillColor: 'color fons',
    color: 'color',
    coverage: 'cobertura',
    strokeColor: 'color de traç',
    radius: 'radi',
    outline: 'outline',
    stroke: 'traç',
    density: 'densitat',
    height: 'alçada',
    sum: 'suma',
    pointCount: 'Recompte de Punts'
  },
  placeholder: {
    search: 'Cerca',
    selectField: 'Selecciona un camp',
    yAxis: 'Eix Y',
    selectType: 'Selecciona un Tipus',
    selectValue: 'Selecciona un Valor',
    enterValue: 'Entra un valor',
    empty: 'buit'
  },
  misc: {
    by: '',
    valuesIn: 'Valors a',
    valueEquals: 'Valor igual a',
    dataSource: 'Font de dades',
    brushRadius: 'Radi del pinzell (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Capes del mapa',
    label: 'Etiqueta',
    road: 'Carretera',
    border: 'Frontera',
    building: 'Edifici',
    water: 'Aigua',
    land: 'Terra',
    '3dBuilding': 'Edifici 3D',
    background: 'Fons'
  },
  panel: {
    text: {
      label: 'etiqueta',
      labelWithId: 'Etiqueta {labelId}',
      fontSize: 'Mida de la font',
      fontColor: 'Color de la font',
      textAnchor: 'Àncora del text',
      alignment: 'Alineació',
      addMoreLabel: 'Afegeix més etiquetes'
    }
  },
  sidebar: {
    panels: {
      layer: 'Capes',
      filter: 'Filtres',
      interaction: 'Interaccions',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Requerit*',
    radius: 'Radi',
    color: 'Color',
    fillColor: 'Color fons',
    outline: 'Contorn',
    weight: 'Gruix',
    propertyBasedOn: '{property} basada en',
    coverage: 'Cobertura',
    stroke: 'Traç',
    strokeWidth: 'Amplada de traç',
    strokeColor: 'Color de traç',
    basic: 'Basic',
    trailLength: 'Longitud de pista',
    trailLengthDescription: 'Nombre de segons fins que desapareix el camí',
    newLayer: 'nova capa',
    elevationByDescription: "Si desactivat, l'alçada es basa en el recompte de punts",
    colorByDescription: 'Si desactivat, el color es basa en el recompte de punts',
    aggregateBy: '{field} agregat per',
    '3DModel': 'Model 3D',
    '3DModelOptions': 'Opcions del model 3D',
    type: {
      point: 'punt',
      arc: 'arc',
      line: 'línia',
      grid: 'malla',
      hexbin: 'hexbin',
      polygon: 'polígon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icona',
      heatmap: 'heatmap',
      hexagon: 'hexàgon',
      hexagonid: 'H3',
      trip: 'viatge',
      s2: 'S2',
      '3d': '3D'
    },
    layerUpdateError: "S'ha produït un error durant l'actualització de la capa: {errorMessage}. Assegureu-vos que el format de les dades d’entrada sigui vàlid."
  },
  layerVisConfigs: {
    angle: 'Angle',
    strokeWidth: 'Amplada traç',
    strokeWidthRange: 'Rang amplada de traç',
    radius: 'Radi',
    fixedRadius: 'Radi fixe a mesurar',
    fixedRadiusDescription: 'Ajusta el radi al radi absolut en metres, p.ex 5 a 5 metres',
    radiusRange: 'Rang de radi',
    clusterRadius: 'Radi Cluster en Pixels',
    radiusRangePixels: 'Rang del radi en pixels',
    opacity: 'Opacitat',
    coverage: 'Cobertura',
    outline: 'Outline',
    colorRange: 'Rang de color',
    stroke: 'Traç',
    strokeColor: 'Color de traç',
    strokeColorRange: 'Rang de color de traç',
    targetColor: 'Color destí',
    colorAggregation: 'Agregació de color',
    heightAggregation: 'Agregació alçada',
    resolutionRange: 'Rang de resolució',
    sizeScale: 'Mida escala',
    worldUnitSize: 'Mida de la unitat mundial',
    elevationScale: 'Escala elevació',
    enableElevationZoomFactor: 'Utilitzeu el factor de zoom d’elevació',
    enableElevationZoomFactorDescription: "'Ajusteu l'alçada / elevació en funció del factor de zoom actual",
    enableHeightZoomFactor: 'Utilitzeu el factor de zoom d’alçada',
    heightScale: 'Escala alçada',
    coverageRange: 'Rang ed cobertura',
    highPrecisionRendering: 'Representació alta precisió',
    highPrecisionRenderingDescription: 'La precisió alta tindrà rendiment més baix',
    height: 'Alçada',
    heightDescription: 'Fes clic al botó a dalt a la dreta del mapa per canviar a vista 3D',
    fill: 'Omple',
    enablePolygonHeight: 'Activa alçada del polígon',
    showWireframe: 'Mostra Wireframe',
    weightIntensity: 'Intensitat de pes',
    zoomScale: 'Escala de zoom',
    heightRange: 'Rang alçada',
    heightMultiplier: "Multiplicador d'alçada"
  },
  layerManager: {
    addData: 'Afegeix Dades',
    addLayer: 'Afegeix Capes',
    layerBlending: 'Combinar capes'
  },
  mapManager: {
    mapStyle: 'Estil de mapa',
    addMapStyle: 'Afegeix estils de mapa',
    '3dBuildingColor': 'Color edifici 3D',
    backgroundColor: 'Color de fons'
  },
  layerConfiguration: {
    defaultDescription: 'Calcula {property} segons el camp seleccionat',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Afegeix Filtre'
  },
  datasetTitle: {
    showDataTable: 'Mostra taula de dades',
    removeDataset: 'Elimina conjunt de dades'
  },
  datasetInfo: {
    rowCount: '{rowCount} files'
  },
  tooltip: {
    hideLayer: 'oculta la capa',
    showLayer: 'mostra la capa',
    hideFeature: "Amaga l'objecte",
    showFeature: "Mostra l'objecte",
    hide: 'amaga',
    show: 'mostra',
    removeLayer: 'Elimina capa',
    resetAfterError: 'Intenteu habilitar la capa després dun error',
    layerSettings: 'Configuració de capa',
    closePanel: 'Tanca panel actual',
    switchToDualView: 'Canvia a la vista de mapa dual',
    showLegend: 'mostra llegenda',
    disable3DMap: 'Desactiva mapa 3D',
    DrawOnMap: 'Dibuixa al mapa',
    selectLocale: 'Selecciona configuració regional',
    hideLayerPanel: 'Oculta el tauler de capes',
    showLayerPanel: 'Mostra el tauler de capes',
    moveToTop: 'Desplaça a dalt de tot de les capes de dades',
    selectBaseMapStyle: 'Selecciona estil de mapa base',
    "delete": 'Esborra',
    timePlayback: 'Reproducció de temps',
    cloudStorage: 'Emmagatzematge al núvol',
    '3DMap': 'Mapa 3D',
    animationByWindow: 'Finestra Temporal Mòbil',
    animationByIncremental: 'Finestra Temporal Incremental',
    speed: 'velocitat',
    play: 'iniciar',
    pause: 'pausar',
    reset: 'reiniciar'
  },
  toolbar: _objectSpread({
    exportImage: 'Exporta imatge',
    exportData: 'Exporta dades',
    exportMap: 'Exporta mapa',
    shareMapURL: 'Comparteix URL del mapa',
    saveMap: 'Desa mapa',
    select: 'selecciona',
    polygon: 'polígon',
    rectangle: 'rectangle',
    hide: 'amaga',
    show: 'mostra'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Esborra conjunt de dades',
      addDataToMap: 'Afegeix dades al mapa',
      exportImage: 'Exporta imatge',
      exportData: 'Exporta dades',
      exportMap: 'Exporta mapa',
      addCustomMapboxStyle: 'Afegeix estil Mapbox propi',
      saveMap: 'Desa mapa',
      shareURL: 'Comparteix URL'
    },
    button: {
      "delete": 'Esborra',
      download: 'Descarrega',
      "export": 'Exporta',
      addStyle: 'Afegeix estil',
      save: 'Desa',
      defaultCancel: 'Cancel·la',
      defaultConfirm: 'Confirma'
    },
    exportImage: {
      ratioTitle: 'Ràtio',
      ratioDescription: 'Escull ràtio per diversos usos.',
      ratioOriginalScreen: 'Pantalla original',
      ratioCustom: 'Personalitzat',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolució',
      resolutionDescription: 'Alta resolució és millor per a les impressions.',
      mapLegendTitle: 'Llegenda del mapa',
      mapLegendAdd: 'Afegir llegenda al mapa'
    },
    exportData: {
      datasetTitle: 'Conjunt de dades',
      datasetSubtitle: 'Escull els conjunts de dades que vols exportar',
      allDatasets: 'Tots',
      dataTypeTitle: 'Tipus de dades',
      dataTypeSubtitle: 'Escull els tipus de dades que vols exportar',
      filterDataTitle: 'Filtra dades',
      filterDataSubtitle: 'Pots escollir exportar les dades originals o les filtrades',
      filteredData: 'Dades filtrades',
      unfilteredData: 'Dades sense filtrar',
      fileCount: '{fileCount} Arxius',
      rowCount: '{rowCount} Files'
    },
    deleteData: {
      warning: "estàs a punt d'esborrar aquest conjunt de dades. Afectarà {length} capes"
    },
    addStyle: {
      publishTitle: "2. Publica el teu estil a Mapbox o proporciona el token d'accés",
      publishSubtitle1: 'Pots crear el teu propi estil de mapa a',
      publishSubtitle2: 'i',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'ho.',
      publishSubtitle5: 'Per utilitzar un estil privat, enganxa el teu',
      publishSubtitle6: "token d'accés",
      publishSubtitle7: 'aquí. *kepler.gl és una aplicació client, les dades romanen al teu navegador..',
      exampleToken: 'p.ex. pk.abcdefg.xxxxxx',
      pasteTitle: "1. Enganxa la URL de l'estil",
      pasteSubtitle1: 'Què és un',
      pasteSubtitle2: "URL de l'estil",
      namingTitle: '3. Posa nom al teu estil'
    },
    shareMap: {
      shareUriTitle: 'Comparteix URL del mapa',
      shareUriSubtitle: 'Genera una URL del mapa per compartir amb altri',
      cloudTitle: 'Emmagatzematge al núvol',
      cloudSubtitle: 'Accedeix i carrega dades de mapa al teu emmagatzematge al núvol personal',
      shareDisclaimer: 'kepler.gl desarà les dades del mapa al teu emmagatzematge al núvol personal, només qui tingui la URL podrà accedir al mapa i a les dades . ' + "Pots editar/esborrar l'arxiu de dades en el teu compte al núvol en qualsevol moment.",
      gotoPage: 'Ves a la pàgina de {currentProvider} de Kepler.gl'
    },
    statusPanel: {
      mapUploading: 'Carregar un mapa',
      error: 'Error'
    },
    saveMap: {
      title: 'Emmagatzematge al núvol',
      subtitle: 'Accedeix per desar el mapa al teu emmagatzematge al núvol'
    },
    exportMap: {
      formatTitle: 'Format de mapa',
      formatSubtitle: 'Escull el format amb què vols exportar el teu mapa',
      html: {
        selection: 'Exporta el teu mapa com un arxiu HTML interactiu.',
        tokenTitle: "Token d'accés de Mapbox",
        tokenSubtitle: "Utilitza el teu token d'accés de Mapbox a l'arxiu HTML (opcional)",
        tokenPlaceholder: "Enganxa el teu token d'accés a Mapbox",
        tokenMisuseWarning: '* Si no proporciones el teu propi token, el mapa podria fallar en qualsevol moment quan reemplacem el nostre token per evitar abusos. ',
        tokenDisclaimer: 'Pots canviar el toke de Mapbox més endavant fent servir aquestes instruccions: ',
        tokenUpdate: 'Com actualitzar un token preexistent.',
        modeTitle: 'Mode mapa',
        modeSubtitle1: 'Selecciona mode app. Més ',
        modeSubtitle2: 'informació',
        modeDescription: 'Permet als usuaris {mode} el mapa',
        read: 'llegir',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configuració del mapa',
        configDisclaimer: "La configuració del mapa s'inclourà a l'arxiu Json. Si utilitzes kepler.gl a la teva pròpia app pots copiar aquesta configuració i passar-la a  ",
        selection: 'Exporta les dades del mapa i la configuració en un sol arxiu Json. Més endavant pots obrir aquest mateix mapa carregant aquest mateix arxiu a kepler.gl.',
        disclaimer: "* La configuració del mapa es combina amb els conjunts de dades carregats. ‘dataId’ s'utilitza per lligar capes, filtres i suggeriments a un conjunt de dades específic. " + "Quan passis aquesta configuració a addDataToMap, assegura que l'identificador del conjunt de dades coincideixi amb els ‘dataId’ d'aquesta configuració."
      }
    },
    loadingDialog: {
      loading: 'Carregant...'
    },
    loadData: {
      upload: 'Carregar arxius',
      storage: "Carregar des d'emmagatzematge"
    },
    tripInfo: {
      title: 'Com habilitar l’animació de viatge',
      description1: 'Per animar la ruta, les dades geoJSON han de contenir `LineString` en la seva geometria i les coordenades de LineString han de tenir 4 elements en els formats de ',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'i el darrer element ha de ser la marca de temps. Els formats vàlids per a la marca de temps inclouen Unix en segons com `1564184363` o en milisegons com `1564184363000`.',
      example: 'Exemple:'
    },
    iconInfo: {
      title: 'Com dibuixar icones',
      description1: "En el teu CSV crea una columna i posa-hi el nom de la icona que vols dibuixar. Pots deixar la cel·la buida quan no vulguis que es mostri per a certs punts. Quan la columna s'anomena",
      code: 'icon',
      description2: " kepler.gl automàticament crearà una capa d'icona.",
      example: 'Exemple:',
      icons: 'Icones'
    },
    storageMapViewer: {
      lastModified: 'Darrera modificació fa {lastUpdated}',
      back: 'Enrere'
    },
    overwriteMap: {
      title: 'Desant mapa...',
      alreadyExists: 'ja existeix a {mapSaved}. El vols sobreescriure?'
    },
    loadStorageMap: {
      back: 'Enrere',
      goToPage: 'Ves a la pàgina {displayName} de Kepler.gl',
      storageMaps: 'Emmagatzematge / Mapes',
      noSavedMaps: 'Cap mapa desat encara'
    }
  },
  header: {
    visibleLayers: 'Capes visibles',
    layerLegend: 'Llegenda de capes'
  },
  interactions: {
    tooltip: 'Suggeriment',
    brush: 'Pinzell',
    coordinate: 'Coordenades',
    geocoder: 'Geocodificador'
  },
  layerBlending: {
    title: 'Combinació de capes',
    additive: 'additiva',
    normal: 'normal',
    subtractive: 'substractiva'
  },
  columns: {
    title: 'Columnes',
    lat: 'lat',
    lng: 'lon',
    altitude: 'alçada',
    icon: 'icona',
    geojson: 'geojson',
    arc: {
      lat0: 'lat origen',
      lng0: 'lng origen ',
      lat1: 'lat destinació',
      lng1: 'lng destinació'
    },
    line: {
      alt0: 'alçada origen',
      alt1: 'alçada destinació'
    },
    grid: {
      worldUnitSize: 'Mida de malla (km)'
    },
    hexagon: {
      worldUnitSize: "Radi d'hexàgon (km)"
    },
    hex_id: 'id hex'
  },
  color: {
    customPalette: 'Paleta personalitzada',
    steps: 'intervals',
    type: 'tipus',
    reversed: 'invertida'
  },
  scale: {
    colorScale: 'Escala de color',
    sizeScale: 'Escala de mides',
    strokeScale: 'Escala de traç',
    scale: 'Escala'
  },
  fileUploader: {
    message: "Arrossega i deixa anar l'arxiu aquí",
    chromeMessage: '*usuari de Chrome: la mida màxima són 250mb, si has de carrgar un arxiu més gran fes servir Safari',
    disclaimer: '*kepler.gl és una aplicació a la banda client que no es recolza en cap servidor. Les dades només existeixen a la teva màquina/navegador. ' + "No s'envien dades ni mapes a cap servidor.",
    configUploadMessage: 'Carrega {fileFormatNames} o un mapa desat en **Json**. Més informació sobre [**supported file formats**]',
    browseFiles: 'navega pels teus arxius',
    uploading: 'Carregant',
    fileNotSupported: "L'arxiu {errorFiles} no és compatible.",
    or: 'o'
  },
  geocoder: {
    title: 'Introdueix una adreça'
  },
  fieldSelector: {
    clearAll: 'Treure tots',
    formatting: 'Format'
  },
  compare: {
    modeLabel: 'Mode Comparació',
    typeLabel: 'Tipus de Comparació',
    types: {
      absolute: 'Absoluta',
      relative: 'Relativa'
    }
  },
  mapPopover: {
    primary: 'Principal'
  },
  density: 'densitat',
  'Bug Report': "Informe d'errors",
  'User Guide': "Guia d'usuari",
  Save: 'Desa',
  Share: 'Comparteix'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sb2NhbGl6YXRpb24vc3JjL3RyYW5zbGF0aW9ucy9jYS50cyJdLCJuYW1lcyI6WyJwcm9wZXJ0eSIsIndlaWdodCIsImxhYmVsIiwiZmlsbENvbG9yIiwiY29sb3IiLCJjb3ZlcmFnZSIsInN0cm9rZUNvbG9yIiwicmFkaXVzIiwib3V0bGluZSIsInN0cm9rZSIsImRlbnNpdHkiLCJoZWlnaHQiLCJzdW0iLCJwb2ludENvdW50IiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzZWxlY3RGaWVsZCIsInlBeGlzIiwic2VsZWN0VHlwZSIsInNlbGVjdFZhbHVlIiwiZW50ZXJWYWx1ZSIsImVtcHR5IiwibWlzYyIsImJ5IiwidmFsdWVzSW4iLCJ2YWx1ZUVxdWFscyIsImRhdGFTb3VyY2UiLCJicnVzaFJhZGl1cyIsIm1hcExheWVycyIsInRpdGxlIiwicm9hZCIsImJvcmRlciIsImJ1aWxkaW5nIiwid2F0ZXIiLCJsYW5kIiwiYmFja2dyb3VuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVXBkYXRlRXJyb3IiLCJsYXllclZpc0NvbmZpZ3MiLCJhbmdsZSIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvciIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbiIsImVuYWJsZUhlaWdodFpvb21GYWN0b3IiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImhlaWdodE11bHRpcGxpZXIiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJyZXNldEFmdGVyRXJyb3IiLCJsYXllclNldHRpbmdzIiwiY2xvc2VQYW5lbCIsInN3aXRjaFRvRHVhbFZpZXciLCJzaG93TGVnZW5kIiwiZGlzYWJsZTNETWFwIiwiRHJhd09uTWFwIiwic2VsZWN0TG9jYWxlIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsImFuaW1hdGlvbkJ5V2luZG93IiwiYW5pbWF0aW9uQnlJbmNyZW1lbnRhbCIsInNwZWVkIiwicGxheSIsInBhdXNlIiwicmVzZXQiLCJ0b29sYmFyIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwic2hhcmVNYXBVUkwiLCJzYXZlTWFwIiwic2VsZWN0IiwicmVjdGFuZ2xlIiwiTE9DQUxFUyIsIm1vZGFsIiwiZGVsZXRlRGF0YXNldCIsImFkZERhdGFUb01hcCIsImFkZEN1c3RvbU1hcGJveFN0eWxlIiwic2hhcmVVUkwiLCJidXR0b24iLCJkb3dubG9hZCIsImFkZFN0eWxlIiwic2F2ZSIsImRlZmF1bHRDYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInJhdGlvVGl0bGUiLCJyYXRpb0Rlc2NyaXB0aW9uIiwicmF0aW9PcmlnaW5hbFNjcmVlbiIsInJhdGlvQ3VzdG9tIiwicmF0aW80XzMiLCJyYXRpbzE2XzkiLCJyZXNvbHV0aW9uVGl0bGUiLCJyZXNvbHV0aW9uRGVzY3JpcHRpb24iLCJtYXBMZWdlbmRUaXRsZSIsIm1hcExlZ2VuZEFkZCIsImRhdGFzZXRTdWJ0aXRsZSIsImFsbERhdGFzZXRzIiwiZGF0YVR5cGVUaXRsZSIsImRhdGFUeXBlU3VidGl0bGUiLCJmaWx0ZXJEYXRhVGl0bGUiLCJmaWx0ZXJEYXRhU3VidGl0bGUiLCJmaWx0ZXJlZERhdGEiLCJ1bmZpbHRlcmVkRGF0YSIsImZpbGVDb3VudCIsImRlbGV0ZURhdGEiLCJ3YXJuaW5nIiwicHVibGlzaFRpdGxlIiwicHVibGlzaFN1YnRpdGxlMSIsInB1Ymxpc2hTdWJ0aXRsZTIiLCJwdWJsaXNoU3VidGl0bGUzIiwicHVibGlzaFN1YnRpdGxlNCIsInB1Ymxpc2hTdWJ0aXRsZTUiLCJwdWJsaXNoU3VidGl0bGU2IiwicHVibGlzaFN1YnRpdGxlNyIsImV4YW1wbGVUb2tlbiIsInBhc3RlVGl0bGUiLCJwYXN0ZVN1YnRpdGxlMSIsInBhc3RlU3VidGl0bGUyIiwibmFtaW5nVGl0bGUiLCJzaGFyZU1hcCIsInNoYXJlVXJpVGl0bGUiLCJzaGFyZVVyaVN1YnRpdGxlIiwiY2xvdWRUaXRsZSIsImNsb3VkU3VidGl0bGUiLCJzaGFyZURpc2NsYWltZXIiLCJnb3RvUGFnZSIsInN0YXR1c1BhbmVsIiwibWFwVXBsb2FkaW5nIiwiZXJyb3IiLCJzdWJ0aXRsZSIsImZvcm1hdFRpdGxlIiwiZm9ybWF0U3VidGl0bGUiLCJodG1sIiwic2VsZWN0aW9uIiwidG9rZW5UaXRsZSIsInRva2VuU3VidGl0bGUiLCJ0b2tlblBsYWNlaG9sZGVyIiwidG9rZW5NaXN1c2VXYXJuaW5nIiwidG9rZW5EaXNjbGFpbWVyIiwidG9rZW5VcGRhdGUiLCJtb2RlVGl0bGUiLCJtb2RlU3VidGl0bGUxIiwibW9kZVN1YnRpdGxlMiIsIm1vZGVEZXNjcmlwdGlvbiIsInJlYWQiLCJlZGl0IiwianNvbiIsImNvbmZpZ1RpdGxlIiwiY29uZmlnRGlzY2xhaW1lciIsImRpc2NsYWltZXIiLCJsb2FkaW5nRGlhbG9nIiwibG9hZGluZyIsImxvYWREYXRhIiwidXBsb2FkIiwic3RvcmFnZSIsInRyaXBJbmZvIiwiZGVzY3JpcHRpb24xIiwiY29kZSIsImRlc2NyaXB0aW9uMiIsImV4YW1wbGUiLCJpY29uSW5mbyIsImljb25zIiwic3RvcmFnZU1hcFZpZXdlciIsImxhc3RNb2RpZmllZCIsImJhY2siLCJvdmVyd3JpdGVNYXAiLCJhbHJlYWR5RXhpc3RzIiwibG9hZFN0b3JhZ2VNYXAiLCJnb1RvUGFnZSIsInN0b3JhZ2VNYXBzIiwibm9TYXZlZE1hcHMiLCJoZWFkZXIiLCJ2aXNpYmxlTGF5ZXJzIiwibGF5ZXJMZWdlbmQiLCJpbnRlcmFjdGlvbnMiLCJicnVzaCIsImNvb3JkaW5hdGUiLCJnZW9jb2RlciIsImFkZGl0aXZlIiwibm9ybWFsIiwic3VidHJhY3RpdmUiLCJjb2x1bW5zIiwibGF0IiwibG5nIiwiYWx0aXR1ZGUiLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiYWx0MCIsImFsdDEiLCJoZXhfaWQiLCJjdXN0b21QYWxldHRlIiwic3RlcHMiLCJyZXZlcnNlZCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxLQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxVQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxZQUhIO0FBSVJDLElBQUFBLEtBQUssRUFBRSxPQUpDO0FBS1JDLElBQUFBLFFBQVEsRUFBRSxXQUxGO0FBTVJDLElBQUFBLFdBQVcsRUFBRSxlQU5MO0FBT1JDLElBQUFBLE1BQU0sRUFBRSxNQVBBO0FBUVJDLElBQUFBLE9BQU8sRUFBRSxTQVJEO0FBU1JDLElBQUFBLE1BQU0sRUFBRSxNQVRBO0FBVVJD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QVVaQyxJQUFBQSxTQUFTLEVBQUUsV0FWQztBQVdaQyxJQUFBQSxnQkFBZ0IsRUFBRSx3Q0FYTjtBQVlaQyxJQUFBQSxFQUFFLEVBQUU7QUFaUSxHQXJhRDtBQW1iYjVCLEVBQUFBLFFBQVEsRUFBRTtBQUNSOU8sSUFBQUEsS0FBSyxFQUFFO0FBREMsR0FuYkc7QUFzYmIyUSxFQUFBQSxhQUFhLEVBQUU7QUFDYkMsSUFBQUEsUUFBUSxFQUFFLGFBREc7QUFFYkMsSUFBQUEsVUFBVSxFQUFFO0FBRkMsR0F0YkY7QUEwYmJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxTQUFTLEVBQUUsaUJBREo7QUFFUEMsSUFBQUEsU0FBUyxFQUFFLHFCQUZKO0FBR1BDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLEVBQUUsVUFETDtBQUVMQyxNQUFBQSxRQUFRLEVBQUU7QUFGTDtBQUhBLEdBMWJJO0FBa2NiQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsT0FBTyxFQUFFO0FBREMsR0FsY0M7QUFxY2J4UyxFQUFBQSxPQUFPLEVBQUUsVUFyY0k7QUFzY2IsZ0JBQWMsa0JBdGNEO0FBdWNiLGdCQUFjLGVBdmNEO0FBd2NieVMsRUFBQUEsSUFBSSxFQUFFLE1BeGNPO0FBeWNiQyxFQUFBQSxLQUFLLEVBQUU7QUF6Y00sQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7TE9DQUxFU30gZnJvbSAnLi4vbG9jYWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcGVydHk6IHtcbiAgICB3ZWlnaHQ6ICdwZXMnLFxuICAgIGxhYmVsOiAnZXRpcXVldGEnLFxuICAgIGZpbGxDb2xvcjogJ2NvbG9yIGZvbnMnLFxuICAgIGNvbG9yOiAnY29sb3InLFxuICAgIGNvdmVyYWdlOiAnY29iZXJ0dXJhJyxcbiAgICBzdHJva2VDb2xvcjogJ2NvbG9yIGRlIHRyYcOnJyxcbiAgICByYWRpdXM6ICdyYWRpJyxcbiAgICBvdXRsaW5lOiAnb3V0bGluZScsXG4gICAgc3Ryb2tlOiAndHJhw6cnLFxuICAgIGRlbnNpdHk6ICdkZW5zaXRhdCcsXG4gICAgaGVpZ2h0OiAnYWzDp2FkYScsXG4gICAgc3VtOiAnc3VtYScsXG4gICAgcG9pbnRDb3VudDogJ1JlY29tcHRlIGRlIFB1bnRzJ1xuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHNlYXJjaDogJ0NlcmNhJyxcbiAgICBzZWxlY3RGaWVsZDogJ1NlbGVjY2lvbmEgdW4gY2FtcCcsXG4gICAgeUF4aXM6ICdFaXggWScsXG4gICAgc2VsZWN0VHlwZTogJ1NlbGVjY2lvbmEgdW4gVGlwdXMnLFxuICAgIHNlbGVjdFZhbHVlOiAnU2VsZWNjaW9uYSB1biBWYWxvcicsXG4gICAgZW50ZXJWYWx1ZTogJ0VudHJhIHVuIHZhbG9yJyxcbiAgICBlbXB0eTogJ2J1aXQnXG4gIH0sXG4gIG1pc2M6IHtcbiAgICBieTogJycsXG4gICAgdmFsdWVzSW46ICdWYWxvcnMgYScsXG4gICAgdmFsdWVFcXVhbHM6ICdWYWxvciBpZ3VhbCBhJyxcbiAgICBkYXRhU291cmNlOiAnRm9udCBkZSBkYWRlcycsXG4gICAgYnJ1c2hSYWRpdXM6ICdSYWRpIGRlbCBwaW56ZWxsIChrbSknLFxuICAgIGVtcHR5OiAnICdcbiAgfSxcbiAgbWFwTGF5ZXJzOiB7XG4gICAgdGl0bGU6ICdDYXBlcyBkZWwgbWFwYScsXG4gICAgbGFiZWw6ICdFdGlxdWV0YScsXG4gICAgcm9hZDogJ0NhcnJldGVyYScsXG4gICAgYm9yZGVyOiAnRnJvbnRlcmEnLFxuICAgIGJ1aWxkaW5nOiAnRWRpZmljaScsXG4gICAgd2F0ZXI6ICdBaWd1YScsXG4gICAgbGFuZDogJ1RlcnJhJyxcbiAgICAnM2RCdWlsZGluZyc6ICdFZGlmaWNpIDNEJyxcbiAgICBiYWNrZ3JvdW5kOiAnRm9ucydcbiAgfSxcbiAgcGFuZWw6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBsYWJlbDogJ2V0aXF1ZXRhJyxcbiAgICAgIGxhYmVsV2l0aElkOiAnRXRpcXVldGEge2xhYmVsSWR9JyxcbiAgICAgIGZvbnRTaXplOiAnTWlkYSBkZSBsYSBmb250JyxcbiAgICAgIGZvbnRDb2xvcjogJ0NvbG9yIGRlIGxhIGZvbnQnLFxuICAgICAgdGV4dEFuY2hvcjogJ8OAbmNvcmEgZGVsIHRleHQnLFxuICAgICAgYWxpZ25tZW50OiAnQWxpbmVhY2nDsycsXG4gICAgICBhZGRNb3JlTGFiZWw6ICdBZmVnZWl4IG3DqXMgZXRpcXVldGVzJ1xuICAgIH1cbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIHBhbmVsczoge1xuICAgICAgbGF5ZXI6ICdDYXBlcycsXG4gICAgICBmaWx0ZXI6ICdGaWx0cmVzJyxcbiAgICAgIGludGVyYWN0aW9uOiAnSW50ZXJhY2Npb25zJyxcbiAgICAgIGJhc2VtYXA6ICdNYXBhIGJhc2UnXG4gICAgfVxuICB9LFxuICBsYXllcjoge1xuICAgIHJlcXVpcmVkOiAnUmVxdWVyaXQqJyxcbiAgICByYWRpdXM6ICdSYWRpJyxcbiAgICBjb2xvcjogJ0NvbG9yJyxcbiAgICBmaWxsQ29sb3I6ICdDb2xvciBmb25zJyxcbiAgICBvdXRsaW5lOiAnQ29udG9ybicsXG4gICAgd2VpZ2h0OiAnR3J1aXgnLFxuICAgIHByb3BlcnR5QmFzZWRPbjogJ3twcm9wZXJ0eX0gYmFzYWRhIGVuJyxcbiAgICBjb3ZlcmFnZTogJ0NvYmVydHVyYScsXG4gICAgc3Ryb2tlOiAnVHJhw6cnLFxuICAgIHN0cm9rZVdpZHRoOiAnQW1wbGFkYSBkZSB0cmHDpycsXG4gICAgc3Ryb2tlQ29sb3I6ICdDb2xvciBkZSB0cmHDpycsXG4gICAgYmFzaWM6ICdCYXNpYycsXG4gICAgdHJhaWxMZW5ndGg6ICdMb25naXR1ZCBkZSBwaXN0YScsXG4gICAgdHJhaWxMZW5ndGhEZXNjcmlwdGlvbjogJ05vbWJyZSBkZSBzZWdvbnMgZmlucyBxdWUgZGVzYXBhcmVpeCBlbCBjYW3DrScsXG4gICAgbmV3TGF5ZXI6ICdub3ZhIGNhcGEnLFxuICAgIGVsZXZhdGlvbkJ5RGVzY3JpcHRpb246IFwiU2kgZGVzYWN0aXZhdCwgbCdhbMOnYWRhIGVzIGJhc2EgZW4gZWwgcmVjb21wdGUgZGUgcHVudHNcIixcbiAgICBjb2xvckJ5RGVzY3JpcHRpb246ICdTaSBkZXNhY3RpdmF0LCBlbCBjb2xvciBlcyBiYXNhIGVuIGVsIHJlY29tcHRlIGRlIHB1bnRzJyxcbiAgICBhZ2dyZWdhdGVCeTogJ3tmaWVsZH0gYWdyZWdhdCBwZXInLFxuICAgICczRE1vZGVsJzogJ01vZGVsIDNEJyxcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnT3BjaW9ucyBkZWwgbW9kZWwgM0QnLFxuICAgIHR5cGU6IHtcbiAgICAgIHBvaW50OiAncHVudCcsXG4gICAgICBhcmM6ICdhcmMnLFxuICAgICAgbGluZTogJ2zDrW5pYScsXG4gICAgICBncmlkOiAnbWFsbGEnLFxuICAgICAgaGV4YmluOiAnaGV4YmluJyxcbiAgICAgIHBvbHlnb246ICdwb2zDrWdvbicsXG4gICAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgICBjbHVzdGVyOiAnY2x1c3RlcicsXG4gICAgICBpY29uOiAnaWNvbmEnLFxuICAgICAgaGVhdG1hcDogJ2hlYXRtYXAnLFxuICAgICAgaGV4YWdvbjogJ2hleMOgZ29uJyxcbiAgICAgIGhleGFnb25pZDogJ0gzJyxcbiAgICAgIHRyaXA6ICd2aWF0Z2UnLFxuICAgICAgczI6ICdTMicsXG4gICAgICAnM2QnOiAnM0QnXG4gICAgfSxcbiAgICBsYXllclVwZGF0ZUVycm9yOlxuICAgICAgXCJTJ2hhIHByb2R1w690IHVuIGVycm9yIGR1cmFudCBsJ2FjdHVhbGl0emFjacOzIGRlIGxhIGNhcGE6IHtlcnJvck1lc3NhZ2V9LiBBc3NlZ3VyZXUtdm9zIHF1ZSBlbCBmb3JtYXQgZGUgbGVzIGRhZGVzIGTigJllbnRyYWRhIHNpZ3VpIHbDoGxpZC5cIlxuICB9LFxuICBsYXllclZpc0NvbmZpZ3M6IHtcbiAgICBhbmdsZTogJ0FuZ2xlJyxcbiAgICBzdHJva2VXaWR0aDogJ0FtcGxhZGEgdHJhw6cnLFxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdSYW5nIGFtcGxhZGEgZGUgdHJhw6cnLFxuICAgIHJhZGl1czogJ1JhZGknLFxuICAgIGZpeGVkUmFkaXVzOiAnUmFkaSBmaXhlIGEgbWVzdXJhcicsXG4gICAgZml4ZWRSYWRpdXNEZXNjcmlwdGlvbjogJ0FqdXN0YSBlbCByYWRpIGFsIHJhZGkgYWJzb2x1dCBlbiBtZXRyZXMsIHAuZXggNSBhIDUgbWV0cmVzJyxcbiAgICByYWRpdXNSYW5nZTogJ1JhbmcgZGUgcmFkaScsXG4gICAgY2x1c3RlclJhZGl1czogJ1JhZGkgQ2x1c3RlciBlbiBQaXhlbHMnLFxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnUmFuZyBkZWwgcmFkaSBlbiBwaXhlbHMnLFxuICAgIG9wYWNpdHk6ICdPcGFjaXRhdCcsXG4gICAgY292ZXJhZ2U6ICdDb2JlcnR1cmEnLFxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcbiAgICBjb2xvclJhbmdlOiAnUmFuZyBkZSBjb2xvcicsXG4gICAgc3Ryb2tlOiAnVHJhw6cnLFxuICAgIHN0cm9rZUNvbG9yOiAnQ29sb3IgZGUgdHJhw6cnLFxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICdSYW5nIGRlIGNvbG9yIGRlIHRyYcOnJyxcbiAgICB0YXJnZXRDb2xvcjogJ0NvbG9yIGRlc3TDrScsXG4gICAgY29sb3JBZ2dyZWdhdGlvbjogJ0FncmVnYWNpw7MgZGUgY29sb3InLFxuICAgIGhlaWdodEFnZ3JlZ2F0aW9uOiAnQWdyZWdhY2nDsyBhbMOnYWRhJyxcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdSYW5nIGRlIHJlc29sdWNpw7MnLFxuICAgIHNpemVTY2FsZTogJ01pZGEgZXNjYWxhJyxcbiAgICB3b3JsZFVuaXRTaXplOiAnTWlkYSBkZSBsYSB1bml0YXQgbXVuZGlhbCcsXG4gICAgZWxldmF0aW9uU2NhbGU6ICdFc2NhbGEgZWxldmFjacOzJyxcbiAgICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yOiAnVXRpbGl0emV1IGVsIGZhY3RvciBkZSB6b29tIGTigJllbGV2YWNpw7MnLFxuICAgIGVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbjpcbiAgICAgIFwiJ0FqdXN0ZXUgbCdhbMOnYWRhIC8gZWxldmFjacOzIGVuIGZ1bmNpw7MgZGVsIGZhY3RvciBkZSB6b29tIGFjdHVhbFwiLFxuICAgIGVuYWJsZUhlaWdodFpvb21GYWN0b3I6ICdVdGlsaXR6ZXUgZWwgZmFjdG9yIGRlIHpvb20gZOKAmWFsw6dhZGEnLFxuICAgIGhlaWdodFNjYWxlOiAnRXNjYWxhIGFsw6dhZGEnLFxuICAgIGNvdmVyYWdlUmFuZ2U6ICdSYW5nIGVkIGNvYmVydHVyYScsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZzogJ1JlcHJlc2VudGFjacOzIGFsdGEgcHJlY2lzacOzJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdMYSBwcmVjaXNpw7MgYWx0YSB0aW5kcsOgIHJlbmRpbWVudCBtw6lzIGJhaXgnLFxuICAgIGhlaWdodDogJ0Fsw6dhZGEnLFxuICAgIGhlaWdodERlc2NyaXB0aW9uOiAnRmVzIGNsaWMgYWwgYm90w7MgYSBkYWx0IGEgbGEgZHJldGEgZGVsIG1hcGEgcGVyIGNhbnZpYXIgYSB2aXN0YSAzRCcsXG4gICAgZmlsbDogJ09tcGxlJyxcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnQWN0aXZhIGFsw6dhZGEgZGVsIHBvbMOtZ29uJyxcbiAgICBzaG93V2lyZWZyYW1lOiAnTW9zdHJhIFdpcmVmcmFtZScsXG4gICAgd2VpZ2h0SW50ZW5zaXR5OiAnSW50ZW5zaXRhdCBkZSBwZXMnLFxuICAgIHpvb21TY2FsZTogJ0VzY2FsYSBkZSB6b29tJyxcbiAgICBoZWlnaHRSYW5nZTogJ1JhbmcgYWzDp2FkYScsXG4gICAgaGVpZ2h0TXVsdGlwbGllcjogXCJNdWx0aXBsaWNhZG9yIGQnYWzDp2FkYVwiXG4gIH0sXG4gIGxheWVyTWFuYWdlcjoge1xuICAgIGFkZERhdGE6ICdBZmVnZWl4IERhZGVzJyxcbiAgICBhZGRMYXllcjogJ0FmZWdlaXggQ2FwZXMnLFxuICAgIGxheWVyQmxlbmRpbmc6ICdDb21iaW5hciBjYXBlcydcbiAgfSxcbiAgbWFwTWFuYWdlcjoge1xuICAgIG1hcFN0eWxlOiAnRXN0aWwgZGUgbWFwYScsXG4gICAgYWRkTWFwU3R5bGU6ICdBZmVnZWl4IGVzdGlscyBkZSBtYXBhJyxcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJ0NvbG9yIGVkaWZpY2kgM0QnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ0NvbG9yIGRlIGZvbnMnXG4gIH0sXG4gIGxheWVyQ29uZmlndXJhdGlvbjoge1xuICAgIGRlZmF1bHREZXNjcmlwdGlvbjogJ0NhbGN1bGEge3Byb3BlcnR5fSBzZWdvbnMgZWwgY2FtcCBzZWxlY2Npb25hdCcsXG4gICAgaG93VG86ICdIb3cgdG8nXG4gIH0sXG4gIGZpbHRlck1hbmFnZXI6IHtcbiAgICBhZGRGaWx0ZXI6ICdBZmVnZWl4IEZpbHRyZSdcbiAgfSxcbiAgZGF0YXNldFRpdGxlOiB7XG4gICAgc2hvd0RhdGFUYWJsZTogJ01vc3RyYSB0YXVsYSBkZSBkYWRlcycsXG4gICAgcmVtb3ZlRGF0YXNldDogJ0VsaW1pbmEgY29uanVudCBkZSBkYWRlcydcbiAgfSxcbiAgZGF0YXNldEluZm86IHtcbiAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gZmlsZXMnXG4gIH0sXG4gIHRvb2x0aXA6IHtcbiAgICBoaWRlTGF5ZXI6ICdvY3VsdGEgbGEgY2FwYScsXG4gICAgc2hvd0xheWVyOiAnbW9zdHJhIGxhIGNhcGEnLFxuICAgIGhpZGVGZWF0dXJlOiBcIkFtYWdhIGwnb2JqZWN0ZVwiLFxuICAgIHNob3dGZWF0dXJlOiBcIk1vc3RyYSBsJ29iamVjdGVcIixcbiAgICBoaWRlOiAnYW1hZ2EnLFxuICAgIHNob3c6ICdtb3N0cmEnLFxuICAgIHJlbW92ZUxheWVyOiAnRWxpbWluYSBjYXBhJyxcbiAgICByZXNldEFmdGVyRXJyb3I6ICdJbnRlbnRldSBoYWJpbGl0YXIgbGEgY2FwYSBkZXNwcsOpcyBkdW4gZXJyb3InLFxuICAgIGxheWVyU2V0dGluZ3M6ICdDb25maWd1cmFjacOzIGRlIGNhcGEnLFxuICAgIGNsb3NlUGFuZWw6ICdUYW5jYSBwYW5lbCBhY3R1YWwnLFxuICAgIHN3aXRjaFRvRHVhbFZpZXc6ICdDYW52aWEgYSBsYSB2aXN0YSBkZSBtYXBhIGR1YWwnLFxuICAgIHNob3dMZWdlbmQ6ICdtb3N0cmEgbGxlZ2VuZGEnLFxuICAgIGRpc2FibGUzRE1hcDogJ0Rlc2FjdGl2YSBtYXBhIDNEJyxcbiAgICBEcmF3T25NYXA6ICdEaWJ1aXhhIGFsIG1hcGEnLFxuICAgIHNlbGVjdExvY2FsZTogJ1NlbGVjY2lvbmEgY29uZmlndXJhY2nDsyByZWdpb25hbCcsXG4gICAgaGlkZUxheWVyUGFuZWw6ICdPY3VsdGEgZWwgdGF1bGVyIGRlIGNhcGVzJyxcbiAgICBzaG93TGF5ZXJQYW5lbDogJ01vc3RyYSBlbCB0YXVsZXIgZGUgY2FwZXMnLFxuICAgIG1vdmVUb1RvcDogJ0Rlc3BsYcOnYSBhIGRhbHQgZGUgdG90IGRlIGxlcyBjYXBlcyBkZSBkYWRlcycsXG4gICAgc2VsZWN0QmFzZU1hcFN0eWxlOiAnU2VsZWNjaW9uYSBlc3RpbCBkZSBtYXBhIGJhc2UnLFxuICAgIGRlbGV0ZTogJ0VzYm9ycmEnLFxuICAgIHRpbWVQbGF5YmFjazogJ1JlcHJvZHVjY2nDsyBkZSB0ZW1wcycsXG4gICAgY2xvdWRTdG9yYWdlOiAnRW1tYWdhdHplbWF0Z2UgYWwgbsO6dm9sJyxcbiAgICAnM0RNYXAnOiAnTWFwYSAzRCcsXG4gICAgYW5pbWF0aW9uQnlXaW5kb3c6ICdGaW5lc3RyYSBUZW1wb3JhbCBNw7JiaWwnLFxuICAgIGFuaW1hdGlvbkJ5SW5jcmVtZW50YWw6ICdGaW5lc3RyYSBUZW1wb3JhbCBJbmNyZW1lbnRhbCcsXG4gICAgc3BlZWQ6ICd2ZWxvY2l0YXQnLFxuICAgIHBsYXk6ICdpbmljaWFyJyxcbiAgICBwYXVzZTogJ3BhdXNhcicsXG4gICAgcmVzZXQ6ICdyZWluaWNpYXInXG4gIH0sXG4gIHRvb2xiYXI6IHtcbiAgICBleHBvcnRJbWFnZTogJ0V4cG9ydGEgaW1hdGdlJyxcbiAgICBleHBvcnREYXRhOiAnRXhwb3J0YSBkYWRlcycsXG4gICAgZXhwb3J0TWFwOiAnRXhwb3J0YSBtYXBhJyxcbiAgICBzaGFyZU1hcFVSTDogJ0NvbXBhcnRlaXggVVJMIGRlbCBtYXBhJyxcbiAgICBzYXZlTWFwOiAnRGVzYSBtYXBhJyxcbiAgICBzZWxlY3Q6ICdzZWxlY2Npb25hJyxcbiAgICBwb2x5Z29uOiAncG9sw61nb24nLFxuICAgIHJlY3RhbmdsZTogJ3JlY3RhbmdsZScsXG4gICAgaGlkZTogJ2FtYWdhJyxcbiAgICBzaG93OiAnbW9zdHJhJyxcbiAgICAuLi5MT0NBTEVTXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGRlbGV0ZURhdGFzZXQ6ICdFc2JvcnJhIGNvbmp1bnQgZGUgZGFkZXMnLFxuICAgICAgYWRkRGF0YVRvTWFwOiAnQWZlZ2VpeCBkYWRlcyBhbCBtYXBhJyxcbiAgICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0YSBpbWF0Z2UnLFxuICAgICAgZXhwb3J0RGF0YTogJ0V4cG9ydGEgZGFkZXMnLFxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0YSBtYXBhJyxcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAnQWZlZ2VpeCBlc3RpbCBNYXBib3ggcHJvcGknLFxuICAgICAgc2F2ZU1hcDogJ0Rlc2EgbWFwYScsXG4gICAgICBzaGFyZVVSTDogJ0NvbXBhcnRlaXggVVJMJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBkZWxldGU6ICdFc2JvcnJhJyxcbiAgICAgIGRvd25sb2FkOiAnRGVzY2FycmVnYScsXG4gICAgICBleHBvcnQ6ICdFeHBvcnRhJyxcbiAgICAgIGFkZFN0eWxlOiAnQWZlZ2VpeCBlc3RpbCcsXG4gICAgICBzYXZlOiAnRGVzYScsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAnQ2FuY2VswrdsYScsXG4gICAgICBkZWZhdWx0Q29uZmlybTogJ0NvbmZpcm1hJ1xuICAgIH0sXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIHJhdGlvVGl0bGU6ICdSw6B0aW8nLFxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ0VzY3VsbCByw6B0aW8gcGVyIGRpdmVyc29zIHVzb3MuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdQYW50YWxsYSBvcmlnaW5hbCcsXG4gICAgICByYXRpb0N1c3RvbTogJ1BlcnNvbmFsaXR6YXQnLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHVjacOzJyxcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0FsdGEgcmVzb2x1Y2nDsyDDqXMgbWlsbG9yIHBlciBhIGxlcyBpbXByZXNzaW9ucy4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdMbGVnZW5kYSBkZWwgbWFwYScsXG4gICAgICBtYXBMZWdlbmRBZGQ6ICdBZmVnaXIgbGxlZ2VuZGEgYWwgbWFwYSdcbiAgICB9LFxuICAgIGV4cG9ydERhdGE6IHtcbiAgICAgIGRhdGFzZXRUaXRsZTogJ0Nvbmp1bnQgZGUgZGFkZXMnLFxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnRXNjdWxsIGVscyBjb25qdW50cyBkZSBkYWRlcyBxdWUgdm9scyBleHBvcnRhcicsXG4gICAgICBhbGxEYXRhc2V0czogJ1RvdHMnLFxuICAgICAgZGF0YVR5cGVUaXRsZTogJ1RpcHVzIGRlIGRhZGVzJyxcbiAgICAgIGRhdGFUeXBlU3VidGl0bGU6ICdFc2N1bGwgZWxzIHRpcHVzIGRlIGRhZGVzIHF1ZSB2b2xzIGV4cG9ydGFyJyxcbiAgICAgIGZpbHRlckRhdGFUaXRsZTogJ0ZpbHRyYSBkYWRlcycsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdQb3RzIGVzY29sbGlyIGV4cG9ydGFyIGxlcyBkYWRlcyBvcmlnaW5hbHMgbyBsZXMgZmlsdHJhZGVzJyxcbiAgICAgIGZpbHRlcmVkRGF0YTogJ0RhZGVzIGZpbHRyYWRlcycsXG4gICAgICB1bmZpbHRlcmVkRGF0YTogJ0RhZGVzIHNlbnNlIGZpbHRyYXInLFxuICAgICAgZmlsZUNvdW50OiAne2ZpbGVDb3VudH0gQXJ4aXVzJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBGaWxlcydcbiAgICB9LFxuICAgIGRlbGV0ZURhdGE6IHtcbiAgICAgIHdhcm5pbmc6IFwiZXN0w6BzIGEgcHVudCBkJ2VzYm9ycmFyIGFxdWVzdCBjb25qdW50IGRlIGRhZGVzLiBBZmVjdGFyw6Age2xlbmd0aH0gY2FwZXNcIlxuICAgIH0sXG4gICAgYWRkU3R5bGU6IHtcbiAgICAgIHB1Ymxpc2hUaXRsZTogXCIyLiBQdWJsaWNhIGVsIHRldSBlc3RpbCBhIE1hcGJveCBvIHByb3BvcmNpb25hIGVsIHRva2VuIGQnYWNjw6lzXCIsXG4gICAgICBwdWJsaXNoU3VidGl0bGUxOiAnUG90cyBjcmVhciBlbCB0ZXUgcHJvcGkgZXN0aWwgZGUgbWFwYSBhJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdpJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTM6ICdwdWJsaWNhcicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU0OiAnaG8uJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTU6ICdQZXIgdXRpbGl0emFyIHVuIGVzdGlsIHByaXZhdCwgZW5nYW54YSBlbCB0ZXUnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNjogXCJ0b2tlbiBkJ2FjY8Opc1wiLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcbiAgICAgICAgJ2FxdcOtLiAqa2VwbGVyLmdsIMOpcyB1bmEgYXBsaWNhY2nDsyBjbGllbnQsIGxlcyBkYWRlcyByb21hbmVuIGFsIHRldSBuYXZlZ2Fkb3IuLicsXG4gICAgICBleGFtcGxlVG9rZW46ICdwLmV4LiBway5hYmNkZWZnLnh4eHh4eCcsXG4gICAgICBwYXN0ZVRpdGxlOiBcIjEuIEVuZ2FueGEgbGEgVVJMIGRlIGwnZXN0aWxcIixcbiAgICAgIHBhc3RlU3VidGl0bGUxOiAnUXXDqCDDqXMgdW4nLFxuICAgICAgcGFzdGVTdWJ0aXRsZTI6IFwiVVJMIGRlIGwnZXN0aWxcIixcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gUG9zYSBub20gYWwgdGV1IGVzdGlsJ1xuICAgIH0sXG4gICAgc2hhcmVNYXA6IHtcbiAgICAgIHNoYXJlVXJpVGl0bGU6ICdDb21wYXJ0ZWl4IFVSTCBkZWwgbWFwYScsXG4gICAgICBzaGFyZVVyaVN1YnRpdGxlOiAnR2VuZXJhIHVuYSBVUkwgZGVsIG1hcGEgcGVyIGNvbXBhcnRpciBhbWIgYWx0cmknLFxuICAgICAgY2xvdWRUaXRsZTogJ0VtbWFnYXR6ZW1hdGdlIGFsIG7DunZvbCcsXG4gICAgICBjbG91ZFN1YnRpdGxlOiAnQWNjZWRlaXggaSBjYXJyZWdhIGRhZGVzIGRlIG1hcGEgYWwgdGV1IGVtbWFnYXR6ZW1hdGdlIGFsIG7DunZvbCBwZXJzb25hbCcsXG4gICAgICBzaGFyZURpc2NsYWltZXI6XG4gICAgICAgICdrZXBsZXIuZ2wgZGVzYXLDoCBsZXMgZGFkZXMgZGVsIG1hcGEgYWwgdGV1IGVtbWFnYXR6ZW1hdGdlIGFsIG7DunZvbCBwZXJzb25hbCwgbm9tw6lzIHF1aSB0aW5ndWkgbGEgVVJMIHBvZHLDoCBhY2NlZGlyIGFsIG1hcGEgaSBhIGxlcyBkYWRlcyAuICcgK1xuICAgICAgICBcIlBvdHMgZWRpdGFyL2VzYm9ycmFyIGwnYXJ4aXUgZGUgZGFkZXMgZW4gZWwgdGV1IGNvbXB0ZSBhbCBuw7p2b2wgZW4gcXVhbHNldm9sIG1vbWVudC5cIixcbiAgICAgIGdvdG9QYWdlOiAnVmVzIGEgbGEgcMOgZ2luYSBkZSB7Y3VycmVudFByb3ZpZGVyfSBkZSBLZXBsZXIuZ2wnXG4gICAgfSxcbiAgICBzdGF0dXNQYW5lbDoge1xuICAgICAgbWFwVXBsb2FkaW5nOiAnQ2FycmVnYXIgdW4gbWFwYScsXG4gICAgICBlcnJvcjogJ0Vycm9yJ1xuICAgIH0sXG4gICAgc2F2ZU1hcDoge1xuICAgICAgdGl0bGU6ICdFbW1hZ2F0emVtYXRnZSBhbCBuw7p2b2wnLFxuICAgICAgc3VidGl0bGU6ICdBY2NlZGVpeCBwZXIgZGVzYXIgZWwgbWFwYSBhbCB0ZXUgZW1tYWdhdHplbWF0Z2UgYWwgbsO6dm9sJ1xuICAgIH0sXG4gICAgZXhwb3J0TWFwOiB7XG4gICAgICBmb3JtYXRUaXRsZTogJ0Zvcm1hdCBkZSBtYXBhJyxcbiAgICAgIGZvcm1hdFN1YnRpdGxlOiAnRXNjdWxsIGVsIGZvcm1hdCBhbWIgcXXDqCB2b2xzIGV4cG9ydGFyIGVsIHRldSBtYXBhJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0YSBlbCB0ZXUgbWFwYSBjb20gdW4gYXJ4aXUgSFRNTCBpbnRlcmFjdGl1LicsXG4gICAgICAgIHRva2VuVGl0bGU6IFwiVG9rZW4gZCdhY2PDqXMgZGUgTWFwYm94XCIsXG4gICAgICAgIHRva2VuU3VidGl0bGU6IFwiVXRpbGl0emEgZWwgdGV1IHRva2VuIGQnYWNjw6lzIGRlIE1hcGJveCBhIGwnYXJ4aXUgSFRNTCAob3BjaW9uYWwpXCIsXG4gICAgICAgIHRva2VuUGxhY2Vob2xkZXI6IFwiRW5nYW54YSBlbCB0ZXUgdG9rZW4gZCdhY2PDqXMgYSBNYXBib3hcIixcbiAgICAgICAgdG9rZW5NaXN1c2VXYXJuaW5nOlxuICAgICAgICAgICcqIFNpIG5vIHByb3BvcmNpb25lcyBlbCB0ZXUgcHJvcGkgdG9rZW4sIGVsIG1hcGEgcG9kcmlhIGZhbGxhciBlbiBxdWFsc2V2b2wgbW9tZW50IHF1YW4gcmVlbXBsYWNlbSBlbCBub3N0cmUgdG9rZW4gcGVyIGV2aXRhciBhYnVzb3MuICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjpcbiAgICAgICAgICAnUG90cyBjYW52aWFyIGVsIHRva2UgZGUgTWFwYm94IG3DqXMgZW5kYXZhbnQgZmVudCBzZXJ2aXIgYXF1ZXN0ZXMgaW5zdHJ1Y2Npb25zOiAnLFxuICAgICAgICB0b2tlblVwZGF0ZTogJ0NvbSBhY3R1YWxpdHphciB1biB0b2tlbiBwcmVleGlzdGVudC4nLFxuICAgICAgICBtb2RlVGl0bGU6ICdNb2RlIG1hcGEnLFxuICAgICAgICBtb2RlU3VidGl0bGUxOiAnU2VsZWNjaW9uYSBtb2RlIGFwcC4gTcOpcyAnLFxuICAgICAgICBtb2RlU3VidGl0bGUyOiAnaW5mb3JtYWNpw7MnLFxuICAgICAgICBtb2RlRGVzY3JpcHRpb246ICdQZXJtZXQgYWxzIHVzdWFyaXMge21vZGV9IGVsIG1hcGEnLFxuICAgICAgICByZWFkOiAnbGxlZ2lyJyxcbiAgICAgICAgZWRpdDogJ2VkaXRhcidcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnQ29uZmlndXJhY2nDsyBkZWwgbWFwYScsXG4gICAgICAgIGNvbmZpZ0Rpc2NsYWltZXI6XG4gICAgICAgICAgXCJMYSBjb25maWd1cmFjacOzIGRlbCBtYXBhIHMnaW5jbG91csOgIGEgbCdhcnhpdSBKc29uLiBTaSB1dGlsaXR6ZXMga2VwbGVyLmdsIGEgbGEgdGV2YSBwcsOycGlhIGFwcCBwb3RzIGNvcGlhciBhcXVlc3RhIGNvbmZpZ3VyYWNpw7MgaSBwYXNzYXItbGEgYSAgXCIsXG4gICAgICAgIHNlbGVjdGlvbjpcbiAgICAgICAgICAnRXhwb3J0YSBsZXMgZGFkZXMgZGVsIG1hcGEgaSBsYSBjb25maWd1cmFjacOzIGVuIHVuIHNvbCBhcnhpdSBKc29uLiBNw6lzIGVuZGF2YW50IHBvdHMgb2JyaXIgYXF1ZXN0IG1hdGVpeCBtYXBhIGNhcnJlZ2FudCBhcXVlc3QgbWF0ZWl4IGFyeGl1IGEga2VwbGVyLmdsLicsXG4gICAgICAgIGRpc2NsYWltZXI6XG4gICAgICAgICAgXCIqIExhIGNvbmZpZ3VyYWNpw7MgZGVsIG1hcGEgZXMgY29tYmluYSBhbWIgZWxzIGNvbmp1bnRzIGRlIGRhZGVzIGNhcnJlZ2F0cy4g4oCYZGF0YUlk4oCZIHMndXRpbGl0emEgcGVyIGxsaWdhciBjYXBlcywgZmlsdHJlcyBpIHN1Z2dlcmltZW50cyBhIHVuIGNvbmp1bnQgZGUgZGFkZXMgZXNwZWPDrWZpYy4gXCIgK1xuICAgICAgICAgIFwiUXVhbiBwYXNzaXMgYXF1ZXN0YSBjb25maWd1cmFjacOzIGEgYWRkRGF0YVRvTWFwLCBhc3NlZ3VyYSBxdWUgbCdpZGVudGlmaWNhZG9yIGRlbCBjb25qdW50IGRlIGRhZGVzIGNvaW5jaWRlaXhpIGFtYiBlbHMg4oCYZGF0YUlk4oCZIGQnYXF1ZXN0YSBjb25maWd1cmFjacOzLlwiXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkaW5nRGlhbG9nOiB7XG4gICAgICBsb2FkaW5nOiAnQ2FycmVnYW50Li4uJ1xuICAgIH0sXG4gICAgbG9hZERhdGE6IHtcbiAgICAgIHVwbG9hZDogJ0NhcnJlZ2FyIGFyeGl1cycsXG4gICAgICBzdG9yYWdlOiBcIkNhcnJlZ2FyIGRlcyBkJ2VtbWFnYXR6ZW1hdGdlXCJcbiAgICB9LFxuICAgIHRyaXBJbmZvOiB7XG4gICAgICB0aXRsZTogJ0NvbSBoYWJpbGl0YXIgbOKAmWFuaW1hY2nDsyBkZSB2aWF0Z2UnLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnUGVyIGFuaW1hciBsYSBydXRhLCBsZXMgZGFkZXMgZ2VvSlNPTiBoYW4gZGUgY29udGVuaXIgYExpbmVTdHJpbmdgIGVuIGxhIHNldmEgZ2VvbWV0cmlhIGkgbGVzIGNvb3JkZW5hZGVzIGRlIExpbmVTdHJpbmcgaGFuIGRlIHRlbmlyIDQgZWxlbWVudHMgZW4gZWxzIGZvcm1hdHMgZGUgJyxcbiAgICAgIGNvZGU6ICcgW2xvbmdpdHVkZSwgbGF0aXR1ZGUsIGFsdGl0dWRlLCB0aW1lc3RhbXBdICcsXG4gICAgICBkZXNjcmlwdGlvbjI6XG4gICAgICAgICdpIGVsIGRhcnJlciBlbGVtZW50IGhhIGRlIHNlciBsYSBtYXJjYSBkZSB0ZW1wcy4gRWxzIGZvcm1hdHMgdsOgbGlkcyBwZXIgYSBsYSBtYXJjYSBkZSB0ZW1wcyBpbmNsb3VlbiBVbml4IGVuIHNlZ29ucyBjb20gYDE1NjQxODQzNjNgIG8gZW4gbWlsaXNlZ29ucyBjb20gYDE1NjQxODQzNjMwMDBgLicsXG4gICAgICBleGFtcGxlOiAnRXhlbXBsZTonXG4gICAgfSxcbiAgICBpY29uSW5mbzoge1xuICAgICAgdGl0bGU6ICdDb20gZGlidWl4YXIgaWNvbmVzJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgXCJFbiBlbCB0ZXUgQ1NWIGNyZWEgdW5hIGNvbHVtbmEgaSBwb3NhLWhpIGVsIG5vbSBkZSBsYSBpY29uYSBxdWUgdm9scyBkaWJ1aXhhci4gUG90cyBkZWl4YXIgbGEgY2VswrdsYSBidWlkYSBxdWFuIG5vIHZ1bGd1aXMgcXVlIGVzIG1vc3RyaSBwZXIgYSBjZXJ0cyBwdW50cy4gUXVhbiBsYSBjb2x1bW5hIHMnYW5vbWVuYVwiLFxuICAgICAgY29kZTogJ2ljb24nLFxuICAgICAgZGVzY3JpcHRpb24yOiBcIiBrZXBsZXIuZ2wgYXV0b23DoHRpY2FtZW50IGNyZWFyw6AgdW5hIGNhcGEgZCdpY29uYS5cIixcbiAgICAgIGV4YW1wbGU6ICdFeGVtcGxlOicsXG4gICAgICBpY29uczogJ0ljb25lcydcbiAgICB9LFxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcbiAgICAgIGxhc3RNb2RpZmllZDogJ0RhcnJlcmEgbW9kaWZpY2FjacOzIGZhIHtsYXN0VXBkYXRlZH0nLFxuICAgICAgYmFjazogJ0VucmVyZSdcbiAgICB9LFxuICAgIG92ZXJ3cml0ZU1hcDoge1xuICAgICAgdGl0bGU6ICdEZXNhbnQgbWFwYS4uLicsXG4gICAgICBhbHJlYWR5RXhpc3RzOiAnamEgZXhpc3RlaXggYSB7bWFwU2F2ZWR9LiBFbCB2b2xzIHNvYnJlZXNjcml1cmU/J1xuICAgIH0sXG4gICAgbG9hZFN0b3JhZ2VNYXA6IHtcbiAgICAgIGJhY2s6ICdFbnJlcmUnLFxuICAgICAgZ29Ub1BhZ2U6ICdWZXMgYSBsYSBww6BnaW5hIHtkaXNwbGF5TmFtZX0gZGUgS2VwbGVyLmdsJyxcbiAgICAgIHN0b3JhZ2VNYXBzOiAnRW1tYWdhdHplbWF0Z2UgLyBNYXBlcycsXG4gICAgICBub1NhdmVkTWFwczogJ0NhcCBtYXBhIGRlc2F0IGVuY2FyYSdcbiAgICB9XG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIHZpc2libGVMYXllcnM6ICdDYXBlcyB2aXNpYmxlcycsXG4gICAgbGF5ZXJMZWdlbmQ6ICdMbGVnZW5kYSBkZSBjYXBlcydcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgdG9vbHRpcDogJ1N1Z2dlcmltZW50JyxcbiAgICBicnVzaDogJ1BpbnplbGwnLFxuICAgIGNvb3JkaW5hdGU6ICdDb29yZGVuYWRlcycsXG4gICAgZ2VvY29kZXI6ICdHZW9jb2RpZmljYWRvcidcbiAgfSxcbiAgbGF5ZXJCbGVuZGluZzoge1xuICAgIHRpdGxlOiAnQ29tYmluYWNpw7MgZGUgY2FwZXMnLFxuICAgIGFkZGl0aXZlOiAnYWRkaXRpdmEnLFxuICAgIG5vcm1hbDogJ25vcm1hbCcsXG4gICAgc3VidHJhY3RpdmU6ICdzdWJzdHJhY3RpdmEnXG4gIH0sXG4gIGNvbHVtbnM6IHtcbiAgICB0aXRsZTogJ0NvbHVtbmVzJyxcbiAgICBsYXQ6ICdsYXQnLFxuICAgIGxuZzogJ2xvbicsXG4gICAgYWx0aXR1ZGU6ICdhbMOnYWRhJyxcbiAgICBpY29uOiAnaWNvbmEnLFxuICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICBhcmM6IHtcbiAgICAgIGxhdDA6ICdsYXQgb3JpZ2VuJyxcbiAgICAgIGxuZzA6ICdsbmcgb3JpZ2VuICcsXG4gICAgICBsYXQxOiAnbGF0IGRlc3RpbmFjacOzJyxcbiAgICAgIGxuZzE6ICdsbmcgZGVzdGluYWNpw7MnXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICBhbHQwOiAnYWzDp2FkYSBvcmlnZW4nLFxuICAgICAgYWx0MTogJ2Fsw6dhZGEgZGVzdGluYWNpw7MnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnTWlkYSBkZSBtYWxsYSAoa20pJ1xuICAgIH0sXG4gICAgaGV4YWdvbjoge1xuICAgICAgd29ybGRVbml0U2l6ZTogXCJSYWRpIGQnaGV4w6Bnb24gKGttKVwiXG4gICAgfSxcbiAgICBoZXhfaWQ6ICdpZCBoZXgnXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgY3VzdG9tUGFsZXR0ZTogJ1BhbGV0YSBwZXJzb25hbGl0emFkYScsXG4gICAgc3RlcHM6ICdpbnRlcnZhbHMnLFxuICAgIHR5cGU6ICd0aXB1cycsXG4gICAgcmV2ZXJzZWQ6ICdpbnZlcnRpZGEnXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgY29sb3JTY2FsZTogJ0VzY2FsYSBkZSBjb2xvcicsXG4gICAgc2l6ZVNjYWxlOiAnRXNjYWxhIGRlIG1pZGVzJyxcbiAgICBzdHJva2VTY2FsZTogJ0VzY2FsYSBkZSB0cmHDpycsXG4gICAgc2NhbGU6ICdFc2NhbGEnXG4gIH0sXG4gIGZpbGVVcGxvYWRlcjoge1xuICAgIG1lc3NhZ2U6IFwiQXJyb3NzZWdhIGkgZGVpeGEgYW5hciBsJ2FyeGl1IGFxdcOtXCIsXG4gICAgY2hyb21lTWVzc2FnZTpcbiAgICAgICcqdXN1YXJpIGRlIENocm9tZTogbGEgbWlkYSBtw6B4aW1hIHPDs24gMjUwbWIsIHNpIGhhcyBkZSBjYXJyZ2FyIHVuIGFyeGl1IG3DqXMgZ3JhbiBmZXMgc2VydmlyIFNhZmFyaScsXG4gICAgZGlzY2xhaW1lcjpcbiAgICAgICcqa2VwbGVyLmdsIMOpcyB1bmEgYXBsaWNhY2nDsyBhIGxhIGJhbmRhIGNsaWVudCBxdWUgbm8gZXMgcmVjb2x6YSBlbiBjYXAgc2Vydmlkb3IuIExlcyBkYWRlcyBub23DqXMgZXhpc3RlaXhlbiBhIGxhIHRldmEgbcOgcXVpbmEvbmF2ZWdhZG9yLiAnICtcbiAgICAgIFwiTm8gcydlbnZpZW4gZGFkZXMgbmkgbWFwZXMgYSBjYXAgc2Vydmlkb3IuXCIsXG4gICAgY29uZmlnVXBsb2FkTWVzc2FnZTpcbiAgICAgICdDYXJyZWdhIHtmaWxlRm9ybWF0TmFtZXN9IG8gdW4gbWFwYSBkZXNhdCBlbiAqKkpzb24qKi4gTcOpcyBpbmZvcm1hY2nDsyBzb2JyZSBbKipzdXBwb3J0ZWQgZmlsZSBmb3JtYXRzKipdJyxcbiAgICBicm93c2VGaWxlczogJ25hdmVnYSBwZWxzIHRldXMgYXJ4aXVzJyxcbiAgICB1cGxvYWRpbmc6ICdDYXJyZWdhbnQnLFxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6IFwiTCdhcnhpdSB7ZXJyb3JGaWxlc30gbm8gw6lzIGNvbXBhdGlibGUuXCIsXG4gICAgb3I6ICdvJ1xuICB9LFxuICBnZW9jb2Rlcjoge1xuICAgIHRpdGxlOiAnSW50cm9kdWVpeCB1bmEgYWRyZcOnYSdcbiAgfSxcbiAgZmllbGRTZWxlY3Rvcjoge1xuICAgIGNsZWFyQWxsOiAnVHJldXJlIHRvdHMnLFxuICAgIGZvcm1hdHRpbmc6ICdGb3JtYXQnXG4gIH0sXG4gIGNvbXBhcmU6IHtcbiAgICBtb2RlTGFiZWw6ICdNb2RlIENvbXBhcmFjacOzJyxcbiAgICB0eXBlTGFiZWw6ICdUaXB1cyBkZSBDb21wYXJhY2nDsycsXG4gICAgdHlwZXM6IHtcbiAgICAgIGFic29sdXRlOiAnQWJzb2x1dGEnLFxuICAgICAgcmVsYXRpdmU6ICdSZWxhdGl2YSdcbiAgICB9XG4gIH0sXG4gIG1hcFBvcG92ZXI6IHtcbiAgICBwcmltYXJ5OiAnUHJpbmNpcGFsJ1xuICB9LFxuICBkZW5zaXR5OiAnZGVuc2l0YXQnLFxuICAnQnVnIFJlcG9ydCc6IFwiSW5mb3JtZSBkJ2Vycm9yc1wiLFxuICAnVXNlciBHdWlkZSc6IFwiR3VpYSBkJ3VzdWFyaVwiLFxuICBTYXZlOiAnRGVzYScsXG4gIFNoYXJlOiAnQ29tcGFydGVpeCdcbn07XG4iXX0=