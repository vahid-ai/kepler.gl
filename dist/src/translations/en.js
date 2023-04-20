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
    weight: 'weight',
    label: 'label',
    fillColor: 'fill color',
    color: 'color',
    coverage: 'coverage',
    strokeColor: 'stroke color',
    radius: 'radius',
    outline: 'outline',
    stroke: 'stroke',
    density: 'density',
    height: 'height',
    sum: 'sum',
    pointCount: 'Point Count'
  },
  placeholder: {
    search: 'Search',
    selectField: 'Select a field',
    yAxis: 'Y Axis',
    selectType: 'Select A Type',
    selectValue: 'Select A Value',
    enterValue: 'Enter a value',
    empty: 'empty',
    selectLayer: 'Select a layer'
  },
  misc: {
    by: '',
    valuesIn: 'Values in',
    valueEquals: 'Value equals',
    dataSource: 'Data Source',
    brushRadius: 'Brush Radius (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Map Layers',
    label: 'Label',
    road: 'Road',
    border: 'Border',
    building: 'Building',
    water: 'Water',
    land: 'Land',
    '3dBuilding': '3d Building',
    background: 'Background'
  },
  panel: {
    text: {
      label: 'label',
      labelWithId: 'Label {labelId}',
      fontSize: 'Font size',
      fontColor: 'Font color',
      textAnchor: 'Text anchor',
      alignment: 'Alignment',
      addMoreLabel: 'Add More Label'
    }
  },
  sidebar: {
    panels: {
      layer: 'Layers',
      filter: 'Filters',
      interaction: 'Interactions',
      basemap: 'Base map'
    },
    panelViewToggle: {
      list: 'View List',
      byDataset: 'View by Dataset'
    }
  },
  layer: {
    required: 'Required*',
    radius: 'Radius',
    color: 'Color',
    fillColor: 'Fill Color',
    outline: 'Outline',
    weight: 'Weight',
    propertyBasedOn: '{property} based on',
    coverage: 'Coverage',
    stroke: 'Stroke',
    strokeWidth: 'Stroke Width',
    strokeColor: 'Stroke Color',
    basic: 'Basic',
    trailLength: 'Trail Length',
    trailLengthDescription: 'Number of seconds for a path to completely fade out',
    newLayer: 'new layer',
    elevationByDescription: 'When off, height is based on count of points',
    colorByDescription: 'When off, color is based on count of points',
    aggregateBy: 'Aggregate {field} by',
    '3DModel': '3D Model',
    '3DModelOptions': '3D Model Options',
    type: {
      point: 'point',
      arc: 'arc',
      line: 'line',
      grid: 'grid',
      hexbin: 'hexbin',
      polygon: 'polygon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icon',
      heatmap: 'heatmap',
      hexagon: 'hexagon',
      hexagonid: 'H3',
      trip: 'trip',
      s2: 'S2',
      '3d': '3D'
    },
    layerUpdateError: 'An error occurred during layer update: {errorMessage}. Make sure the format of the input data is valid.'
  },
  layerVisConfigs: {
    angle: 'Angle',
    strokeWidth: 'Stroke Width (Pixels)',
    strokeWidthRange: 'Stroke Width Range',
    radius: 'Radius',
    fixedRadius: 'Fixed Radius to meter',
    fixedRadiusDescription: 'Map radius to absolute radius in meters, e.g. 5 to 5 meters',
    radiusRange: 'Radius Range',
    clusterRadius: 'Cluster Radius in Pixels',
    radiusRangePixels: 'Radius Range in pixels',
    opacity: 'Opacity',
    coverage: 'Coverage',
    outline: 'Outline',
    colorRange: 'Color range',
    stroke: 'Stroke',
    strokeColor: 'Stroke Color',
    strokeColorRange: 'Stroke Color range',
    targetColor: 'Target Color',
    colorAggregation: 'Color Aggregation',
    heightAggregation: 'Height Aggregation',
    resolutionRange: 'Resolution range',
    sizeScale: 'Size Scale',
    worldUnitSize: 'World Unit Size',
    elevationScale: 'Elevation Scale',
    enableElevationZoomFactor: 'Use elevation zoom factor',
    enableElevationZoomFactorDescription: 'Adjust height/elevation based on current zoom factor',
    enableHeightZoomFactor: 'Use height zoom factor',
    heightScale: 'Height Scale',
    coverageRange: 'Coverage Range',
    highPrecisionRendering: 'High Precision Rendering',
    highPrecisionRenderingDescription: 'High precision will result in slower performance',
    height: 'Height',
    heightDescription: 'Click button at top right of the map to switch to 3d view',
    fill: 'Fill',
    enablePolygonHeight: 'Enable Polygon Height',
    showWireframe: 'Show Wireframe',
    weightIntensity: 'Weight Intensity',
    zoomScale: 'Zoom Scale',
    heightRange: 'Height Range',
    heightMultiplier: 'Height Multiplier',
    darkModeEnabled: 'Dark base map'
  },
  layerManager: {
    addData: 'Add Data',
    addLayer: 'Add Layer',
    layerBlending: 'Layer Blending',
    overlayBlending: 'Overlay Blending'
  },
  mapManager: {
    mapStyle: 'Map style',
    addMapStyle: 'Add Map Style',
    '3dBuildingColor': '3D Building Color',
    backgroundColor: 'Background Color'
  },
  layerConfiguration: {
    defaultDescription: 'Calculate {property} based on selected field',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Add Filter'
  },
  datasetTitle: {
    showDataTable: 'Show data table',
    removeDataset: 'Remove dataset'
  },
  datasetInfo: {
    rowCount: '{rowCount} rows'
  },
  tooltip: {
    hideLayer: 'hide layer',
    showLayer: 'show layer',
    hideFeature: 'Hide Feature',
    showFeature: 'Show feature',
    hide: 'hide',
    show: 'show',
    removeLayer: 'Remove layer',
    duplicateLayer: 'Duplicate layer',
    resetAfterError: 'Try to enable the layer after an error',
    layerSettings: 'Layer settings',
    closePanel: 'Close current panel',
    switchToDualView: 'Switch to dual map view',
    showLegend: 'Show legend',
    disable3DMap: 'Disable 3D Map',
    DrawOnMap: 'Draw on map',
    selectLocale: 'Select locale',
    hideLayerPanel: 'Hide layer panel',
    showLayerPanel: 'Show layer panel',
    moveToTop: 'Move to top of data layers',
    selectBaseMapStyle: 'Select Base Map Style',
    "delete": 'Delete',
    timePlayback: 'Time Playback',
    cloudStorage: 'Cloud Storage',
    '3DMap': '3D Map',
    animationByWindow: 'Moving Time Window',
    animationByIncremental: 'Incremental Time Window',
    speed: 'speed',
    play: 'play',
    pause: 'pause',
    reset: 'reset',
    "export": 'export'
  },
  toolbar: _objectSpread({
    exportImage: 'Export Image',
    exportData: 'Export Data',
    exportMap: 'Export Map',
    shareMapURL: 'Share Map URL',
    saveMap: 'Save Map',
    select: 'Select',
    polygon: 'Polygon',
    rectangle: 'Rectangle',
    hide: 'Hide',
    show: 'Show'
  }, _locales.LOCALES),
  editor: {
    filterLayer: 'Filter Layers',
    copyGeometry: 'Copy Geometry',
    noLayersToFilter: 'No layers to filter'
  },
  modal: {
    title: {
      deleteDataset: 'Delete Dataset',
      addDataToMap: 'Add Data To Map',
      exportImage: 'Export Image',
      exportData: 'Export Data',
      exportMap: 'Export Map',
      addCustomMapboxStyle: 'Add Custom Map Style',
      saveMap: 'Save Map',
      shareURL: 'Share URL'
    },
    button: {
      "delete": 'Delete',
      download: 'Download',
      "export": 'Export',
      addStyle: 'Add Style',
      save: 'Save',
      defaultCancel: 'Cancel',
      defaultConfirm: 'Confirm'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Choose the ratio for various usages.',
      ratioOriginalScreen: 'Original Screen',
      ratioCustom: 'Custom',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolution',
      resolutionDescription: 'High resolution is better for prints.',
      mapLegendTitle: 'Map Legend',
      mapLegendAdd: 'Add legend on map'
    },
    exportData: {
      datasetTitle: 'Dataset',
      datasetSubtitle: 'Choose the datasets you want to export',
      allDatasets: 'All',
      dataTypeTitle: 'Data Type',
      dataTypeSubtitle: 'Choose the type of data you want to export',
      filterDataTitle: 'Filter Data',
      filterDataSubtitle: 'You can choose exporting original data or filtered data',
      filteredData: 'Filtered data',
      unfilteredData: 'Unfiltered Data',
      fileCount: '{fileCount} Files',
      rowCount: '{rowCount} Rows'
    },
    deleteData: {
      warning: 'you are going to delete this dataset. It will affect {length} layers'
    },
    addStyle: {
      publishTitle: '2. If entered mapbox style url in step.1, publish your style at mapbox or provide access token. (Optional)',
      publishSubtitle1: 'You can create your own map style at',
      publishSubtitle2: 'and',
      publishSubtitle3: 'publish',
      publishSubtitle4: 'it.',
      publishSubtitle5: 'To use private style, paste your',
      publishSubtitle6: 'access token',
      publishSubtitle7: 'here. *kepler.gl is a client-side application, data stays in your browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '1. Paste style url',
      pasteSubtitle0: 'Style url can be a mapbox',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'style URL',
      pasteSubtitle3: 'or a style.json using the',
      pasteSubtitle4: 'Mapbox GL Style Spec',
      namingTitle: '3. Name your style'
    },
    shareMap: {
      shareUriTitle: 'Share Map Url',
      shareUriSubtitle: 'Generate a map url to share with others',
      cloudTitle: 'Cloud storage',
      cloudSubtitle: 'Login and upload map data to your personal cloud storage',
      shareDisclaimer: 'kepler.gl will save your map data to your personal cloud storage, only people with the URL can access your map and data. ' + 'You can edit/delete the data file in your cloud account anytime.',
      gotoPage: 'Go to your Kepler.gl {currentProvider} page'
    },
    statusPanel: {
      mapUploading: 'Map Uploading',
      error: 'Error'
    },
    saveMap: {
      title: 'Cloud storage',
      subtitle: 'Login to save map to your personal cloud storage'
    },
    exportMap: {
      formatTitle: 'Map format',
      formatSubtitle: 'Choose the format to export your map to',
      html: {
        selection: 'Export your map into an interactive html file.',
        tokenTitle: 'Mapbox access token',
        tokenSubtitle: 'Use your own Mapbox access token in the html (optional)',
        tokenPlaceholder: 'Paste your Mapbox access token',
        tokenMisuseWarning: '* If you do not provide your own token, the map may fail to display at any time when we replace ours to avoid misuse. ',
        tokenDisclaimer: 'You can change the Mapbox token later using the following instructions: ',
        tokenUpdate: 'How to update an existing map token.',
        modeTitle: 'Map Mode',
        modeSubtitle1: 'Select the app mode. More ',
        modeSubtitle2: 'info',
        modeDescription: 'Allow users to {mode} the map',
        read: 'read',
        edit: 'edit'
      },
      json: {
        configTitle: 'Map Config',
        configDisclaimer: 'Map config will be included in the Json file. If you are using kepler.gl in your own app. You can copy this config and pass it to ',
        selection: 'Export current map data and config into a single Json file. You can later open the same map by uploading this file to kepler.gl.',
        disclaimer: '* Map config is coupled with loaded datasets. ‘dataId’ is used to bind layers, filters, and tooltips to a specific dataset. ' + 'When passing this config to addDataToMap, make sure the dataset id matches the dataId/s in this config.'
      }
    },
    loadingDialog: {
      loading: 'Loading...'
    },
    loadData: {
      upload: 'Load Files',
      storage: 'Load from Storage'
    },
    tripInfo: {
      title: 'How to enable trip animation',
      description1: 'In order to animate the path, the geoJSON data needs to contain `LineString` in its feature geometry, and the coordinates in the LineString need to have 4 elements in the formats of',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'with the last element being a timestamp. Valid timestamp formats include unix in seconds such as `1564184363` or in milliseconds such as `1564184363000`.',
      example: 'Example:'
    },
    iconInfo: {
      title: 'How to draw icons',
      description1: 'In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named',
      code: 'icon',
      description2: ' kepler.gl will automatically create a icon layer for you.',
      example: 'Example:',
      icons: 'Icons'
    },
    storageMapViewer: {
      lastModified: 'Last modified {lastUpdated} ago',
      back: 'Back'
    },
    overwriteMap: {
      title: 'Saving map...',
      alreadyExists: 'already exists in your {mapSaved}. Would you like to overwrite it?'
    },
    loadStorageMap: {
      back: 'Back',
      goToPage: 'Go to your Kepler.gl {displayName} page',
      storageMaps: 'Storage / Maps',
      noSavedMaps: 'No saved maps yet'
    }
  },
  header: {
    visibleLayers: 'Visible layers',
    layerLegend: 'Legend'
  },
  interactions: {
    tooltip: 'Tooltip',
    brush: 'Brush',
    coordinate: 'Coordinates',
    geocoder: 'Geocoder'
  },
  layerBlending: {
    title: 'Layer Blending',
    additive: 'additive',
    normal: 'normal',
    subtractive: 'subtractive'
  },
  overlayBlending: {
    title: 'Map overlay blending',
    description: 'Blend layers with the base map so that both are visible.',
    screen: 'dark base map',
    normal: 'normal',
    darken: 'light base map'
  },
  columns: {
    title: 'Columns',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altitude',
    icon: 'icon',
    geojson: 'geojson',
    token: 'token',
    arc: {
      lat0: 'source lat',
      lng0: 'source lng',
      lat1: 'target lat',
      lng1: 'target lng'
    },
    line: {
      alt0: 'source altitude',
      alt1: 'target altitude'
    },
    grid: {
      worldUnitSize: 'Grid Size (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagon Radius (km)'
    },
    hex_id: 'hex id'
  },
  color: {
    customPalette: 'Custom Palette',
    steps: 'steps',
    type: 'type',
    reversed: 'reversed'
  },
  scale: {
    colorScale: 'Color Scale',
    sizeScale: 'Size Scale',
    strokeScale: 'Stroke Scale',
    scale: 'Scale'
  },
  fileUploader: {
    message: 'Drag & Drop Your File(s) Here',
    chromeMessage: '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari',
    disclaimer: '*kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.',
    configUploadMessage: 'Upload {fileFormatNames} or saved map **Json**. Read more about [**supported file formats**]',
    browseFiles: 'browse your files',
    uploading: 'Uploading',
    fileNotSupported: 'File {errorFiles} is not supported.',
    or: 'or'
  },
  geocoder: {
    title: 'Enter an address or coordinates, ex 37.79,-122.40'
  },
  fieldSelector: {
    clearAll: 'Clear All',
    formatting: 'Formatting'
  },
  compare: {
    modeLabel: 'Comparison Mode',
    typeLabel: 'Comparison Type',
    types: {
      absolute: 'Absolute',
      relative: 'Relative'
    }
  },
  mapPopover: {
    primary: 'Primary'
  },
  density: 'density',
  'Bug Report': 'Bug Report',
  'User Guide': 'User Guide',
  Save: 'Save',
  Share: 'Share'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sb2NhbGl6YXRpb24vc3JjL3RyYW5zbGF0aW9ucy9lbi50cyJdLCJuYW1lcyI6WyJwcm9wZXJ0eSIsIndlaWdodCIsImxhYmVsIiwiZmlsbENvbG9yIiwiY29sb3IiLCJjb3ZlcmFnZSIsInN0cm9rZUNvbG9yIiwicmFkaXVzIiwib3V0bGluZSIsInN0cm9rZSIsImRlbnNpdHkiLCJoZWlnaHQiLCJzdW0iLCJwb2ludENvdW50IiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzZWxlY3RGaWVsZCIsInlBeGlzIiwic2VsZWN0VHlwZSIsInNlbGVjdFZhbHVlIiwiZW50ZXJWYWx1ZSIsImVtcHR5Iiwic2VsZWN0TGF5ZXIiLCJtaXNjIiwiYnkiLCJ2YWx1ZXNJbiIsInZhbHVlRXF1YWxzIiwiZGF0YVNvdXJjZSIsImJydXNoUmFkaXVzIiwibWFwTGF5ZXJzIiwidGl0bGUiLCJyb2FkIiwiYm9yZGVyIiwiYnVpbGRpbmciLCJ3YXRlciIsImxhbmQiLCJiYWNrZ3JvdW5kIiwicGFuZWwiLCJ0ZXh0IiwibGFiZWxXaXRoSWQiLCJmb250U2l6ZSIsImZvbnRDb2xvciIsInRleHRBbmNob3IiLCJhbGlnbm1lbnQiLCJhZGRNb3JlTGFiZWwiLCJzaWRlYmFyIiwicGFuZWxzIiwibGF5ZXIiLCJmaWx0ZXIiLCJpbnRlcmFjdGlvbiIsImJhc2VtYXAiLCJwYW5lbFZpZXdUb2dnbGUiLCJsaXN0IiwiYnlEYXRhc2V0IiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVXBkYXRlRXJyb3IiLCJsYXllclZpc0NvbmZpZ3MiLCJhbmdsZSIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvciIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbiIsImVuYWJsZUhlaWdodFpvb21GYWN0b3IiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImhlaWdodE11bHRpcGxpZXIiLCJkYXJrTW9kZUVuYWJsZWQiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwib3ZlcmxheUJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJkdXBsaWNhdGVMYXllciIsInJlc2V0QWZ0ZXJFcnJvciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJoaWRlTGF5ZXJQYW5lbCIsInNob3dMYXllclBhbmVsIiwibW92ZVRvVG9wIiwic2VsZWN0QmFzZU1hcFN0eWxlIiwidGltZVBsYXliYWNrIiwiY2xvdWRTdG9yYWdlIiwiYW5pbWF0aW9uQnlXaW5kb3ciLCJhbmltYXRpb25CeUluY3JlbWVudGFsIiwic3BlZWQiLCJwbGF5IiwicGF1c2UiLCJyZXNldCIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwiZWRpdG9yIiwiZmlsdGVyTGF5ZXIiLCJjb3B5R2VvbWV0cnkiLCJub0xheWVyc1RvRmlsdGVyIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUwIiwicGFzdGVTdWJ0aXRsZTEiLCJwYXN0ZVN1YnRpdGxlMiIsInBhc3RlU3VidGl0bGUzIiwicGFzdGVTdWJ0aXRsZTQiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJkZXNjcmlwdGlvbjEiLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiZXhhbXBsZSIsImljb25JbmZvIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImdlb2NvZGVyIiwiYWRkaXRpdmUiLCJub3JtYWwiLCJzdWJ0cmFjdGl2ZSIsImRlc2NyaXB0aW9uIiwic2NyZWVuIiwiZGFya2VuIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwidG9rZW4iLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiYWx0MCIsImFsdDEiLCJoZXhfaWQiLCJjdXN0b21QYWxldHRlIiwic3RlcHMiLCJyZXZlcnNlZCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxF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LEVBQUU7QUFaUSxHQTliRDtBQTRjYmhDLEVBQUFBLFFBQVEsRUFBRTtBQUNSM1AsSUFBQUEsS0FBSyxFQUFFO0FBREMsR0E1Y0c7QUErY2I0UixFQUFBQSxhQUFhLEVBQUU7QUFDYkMsSUFBQUEsUUFBUSxFQUFFLFdBREc7QUFFYkMsSUFBQUEsVUFBVSxFQUFFO0FBRkMsR0EvY0Y7QUFtZGJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxTQUFTLEVBQUUsaUJBREo7QUFFUEMsSUFBQUEsU0FBUyxFQUFFLGlCQUZKO0FBR1BDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLEVBQUUsVUFETDtBQUVMQyxNQUFBQSxRQUFRLEVBQUU7QUFGTDtBQUhBLEdBbmRJO0FBMmRiQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsT0FBTyxFQUFFO0FBREMsR0EzZEM7QUE4ZGIxVCxFQUFBQSxPQUFPLEVBQUUsU0E5ZEk7QUErZGIsZ0JBQWMsWUEvZEQ7QUFnZWIsZ0JBQWMsWUFoZUQ7QUFpZWIyVCxFQUFBQSxJQUFJLEVBQUUsTUFqZU87QUFrZWJDLEVBQUFBLEtBQUssRUFBRTtBQWxlTSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtMT0NBTEVTfSBmcm9tICcuLi9sb2NhbGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wZXJ0eToge1xuICAgIHdlaWdodDogJ3dlaWdodCcsXG4gICAgbGFiZWw6ICdsYWJlbCcsXG4gICAgZmlsbENvbG9yOiAnZmlsbCBjb2xvcicsXG4gICAgY29sb3I6ICdjb2xvcicsXG4gICAgY292ZXJhZ2U6ICdjb3ZlcmFnZScsXG4gICAgc3Ryb2tlQ29sb3I6ICdzdHJva2UgY29sb3InLFxuICAgIHJhZGl1czogJ3JhZGl1cycsXG4gICAgb3V0bGluZTogJ291dGxpbmUnLFxuICAgIHN0cm9rZTogJ3N0cm9rZScsXG4gICAgZGVuc2l0eTogJ2RlbnNpdHknLFxuICAgIGhlaWdodDogJ2hlaWdodCcsXG4gICAgc3VtOiAnc3VtJyxcbiAgICBwb2ludENvdW50OiAnUG9pbnQgQ291bnQnXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICBzZWxlY3RGaWVsZDogJ1NlbGVjdCBhIGZpZWxkJyxcbiAgICB5QXhpczogJ1kgQXhpcycsXG4gICAgc2VsZWN0VHlwZTogJ1NlbGVjdCBBIFR5cGUnLFxuICAgIHNlbGVjdFZhbHVlOiAnU2VsZWN0IEEgVmFsdWUnLFxuICAgIGVudGVyVmFsdWU6ICdFbnRlciBhIHZhbHVlJyxcbiAgICBlbXB0eTogJ2VtcHR5JyxcbiAgICBzZWxlY3RMYXllcjogJ1NlbGVjdCBhIGxheWVyJ1xuICB9LFxuICBtaXNjOiB7XG4gICAgYnk6ICcnLFxuICAgIHZhbHVlc0luOiAnVmFsdWVzIGluJyxcbiAgICB2YWx1ZUVxdWFsczogJ1ZhbHVlIGVxdWFscycsXG4gICAgZGF0YVNvdXJjZTogJ0RhdGEgU291cmNlJyxcbiAgICBicnVzaFJhZGl1czogJ0JydXNoIFJhZGl1cyAoa20pJyxcbiAgICBlbXB0eTogJyAnXG4gIH0sXG4gIG1hcExheWVyczoge1xuICAgIHRpdGxlOiAnTWFwIExheWVycycsXG4gICAgbGFiZWw6ICdMYWJlbCcsXG4gICAgcm9hZDogJ1JvYWQnLFxuICAgIGJvcmRlcjogJ0JvcmRlcicsXG4gICAgYnVpbGRpbmc6ICdCdWlsZGluZycsXG4gICAgd2F0ZXI6ICdXYXRlcicsXG4gICAgbGFuZDogJ0xhbmQnLFxuICAgICczZEJ1aWxkaW5nJzogJzNkIEJ1aWxkaW5nJyxcbiAgICBiYWNrZ3JvdW5kOiAnQmFja2dyb3VuZCdcbiAgfSxcbiAgcGFuZWw6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBsYWJlbDogJ2xhYmVsJyxcbiAgICAgIGxhYmVsV2l0aElkOiAnTGFiZWwge2xhYmVsSWR9JyxcbiAgICAgIGZvbnRTaXplOiAnRm9udCBzaXplJyxcbiAgICAgIGZvbnRDb2xvcjogJ0ZvbnQgY29sb3InLFxuICAgICAgdGV4dEFuY2hvcjogJ1RleHQgYW5jaG9yJyxcbiAgICAgIGFsaWdubWVudDogJ0FsaWdubWVudCcsXG4gICAgICBhZGRNb3JlTGFiZWw6ICdBZGQgTW9yZSBMYWJlbCdcbiAgICB9XG4gIH0sXG4gIHNpZGViYXI6IHtcbiAgICBwYW5lbHM6IHtcbiAgICAgIGxheWVyOiAnTGF5ZXJzJyxcbiAgICAgIGZpbHRlcjogJ0ZpbHRlcnMnLFxuICAgICAgaW50ZXJhY3Rpb246ICdJbnRlcmFjdGlvbnMnLFxuICAgICAgYmFzZW1hcDogJ0Jhc2UgbWFwJ1xuICAgIH0sXG4gICAgcGFuZWxWaWV3VG9nZ2xlOiB7XG4gICAgICBsaXN0OiAnVmlldyBMaXN0JyxcbiAgICAgIGJ5RGF0YXNldDogJ1ZpZXcgYnkgRGF0YXNldCdcbiAgICB9XG4gIH0sXG4gIGxheWVyOiB7XG4gICAgcmVxdWlyZWQ6ICdSZXF1aXJlZConLFxuICAgIHJhZGl1czogJ1JhZGl1cycsXG4gICAgY29sb3I6ICdDb2xvcicsXG4gICAgZmlsbENvbG9yOiAnRmlsbCBDb2xvcicsXG4gICAgb3V0bGluZTogJ091dGxpbmUnLFxuICAgIHdlaWdodDogJ1dlaWdodCcsXG4gICAgcHJvcGVydHlCYXNlZE9uOiAne3Byb3BlcnR5fSBiYXNlZCBvbicsXG4gICAgY292ZXJhZ2U6ICdDb3ZlcmFnZScsXG4gICAgc3Ryb2tlOiAnU3Ryb2tlJyxcbiAgICBzdHJva2VXaWR0aDogJ1N0cm9rZSBXaWR0aCcsXG4gICAgc3Ryb2tlQ29sb3I6ICdTdHJva2UgQ29sb3InLFxuICAgIGJhc2ljOiAnQmFzaWMnLFxuICAgIHRyYWlsTGVuZ3RoOiAnVHJhaWwgTGVuZ3RoJyxcbiAgICB0cmFpbExlbmd0aERlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHNlY29uZHMgZm9yIGEgcGF0aCB0byBjb21wbGV0ZWx5IGZhZGUgb3V0JyxcbiAgICBuZXdMYXllcjogJ25ldyBsYXllcicsXG4gICAgZWxldmF0aW9uQnlEZXNjcmlwdGlvbjogJ1doZW4gb2ZmLCBoZWlnaHQgaXMgYmFzZWQgb24gY291bnQgb2YgcG9pbnRzJyxcbiAgICBjb2xvckJ5RGVzY3JpcHRpb246ICdXaGVuIG9mZiwgY29sb3IgaXMgYmFzZWQgb24gY291bnQgb2YgcG9pbnRzJyxcbiAgICBhZ2dyZWdhdGVCeTogJ0FnZ3JlZ2F0ZSB7ZmllbGR9IGJ5JyxcbiAgICAnM0RNb2RlbCc6ICczRCBNb2RlbCcsXG4gICAgJzNETW9kZWxPcHRpb25zJzogJzNEIE1vZGVsIE9wdGlvbnMnLFxuICAgIHR5cGU6IHtcbiAgICAgIHBvaW50OiAncG9pbnQnLFxuICAgICAgYXJjOiAnYXJjJyxcbiAgICAgIGxpbmU6ICdsaW5lJyxcbiAgICAgIGdyaWQ6ICdncmlkJyxcbiAgICAgIGhleGJpbjogJ2hleGJpbicsXG4gICAgICBwb2x5Z29uOiAncG9seWdvbicsXG4gICAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgICBjbHVzdGVyOiAnY2x1c3RlcicsXG4gICAgICBpY29uOiAnaWNvbicsXG4gICAgICBoZWF0bWFwOiAnaGVhdG1hcCcsXG4gICAgICBoZXhhZ29uOiAnaGV4YWdvbicsXG4gICAgICBoZXhhZ29uaWQ6ICdIMycsXG4gICAgICB0cmlwOiAndHJpcCcsXG4gICAgICBzMjogJ1MyJyxcbiAgICAgICczZCc6ICczRCdcbiAgICB9LFxuICAgIGxheWVyVXBkYXRlRXJyb3I6XG4gICAgICAnQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGxheWVyIHVwZGF0ZToge2Vycm9yTWVzc2FnZX0uIE1ha2Ugc3VyZSB0aGUgZm9ybWF0IG9mIHRoZSBpbnB1dCBkYXRhIGlzIHZhbGlkLidcbiAgfSxcbiAgbGF5ZXJWaXNDb25maWdzOiB7XG4gICAgYW5nbGU6ICdBbmdsZScsXG4gICAgc3Ryb2tlV2lkdGg6ICdTdHJva2UgV2lkdGggKFBpeGVscyknLFxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdTdHJva2UgV2lkdGggUmFuZ2UnLFxuICAgIHJhZGl1czogJ1JhZGl1cycsXG4gICAgZml4ZWRSYWRpdXM6ICdGaXhlZCBSYWRpdXMgdG8gbWV0ZXInLFxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICdNYXAgcmFkaXVzIHRvIGFic29sdXRlIHJhZGl1cyBpbiBtZXRlcnMsIGUuZy4gNSB0byA1IG1ldGVycycsXG4gICAgcmFkaXVzUmFuZ2U6ICdSYWRpdXMgUmFuZ2UnLFxuICAgIGNsdXN0ZXJSYWRpdXM6ICdDbHVzdGVyIFJhZGl1cyBpbiBQaXhlbHMnLFxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnUmFkaXVzIFJhbmdlIGluIHBpeGVscycsXG4gICAgb3BhY2l0eTogJ09wYWNpdHknLFxuICAgIGNvdmVyYWdlOiAnQ292ZXJhZ2UnLFxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcbiAgICBjb2xvclJhbmdlOiAnQ29sb3IgcmFuZ2UnLFxuICAgIHN0cm9rZTogJ1N0cm9rZScsXG4gICAgc3Ryb2tlQ29sb3I6ICdTdHJva2UgQ29sb3InLFxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICdTdHJva2UgQ29sb3IgcmFuZ2UnLFxuICAgIHRhcmdldENvbG9yOiAnVGFyZ2V0IENvbG9yJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnQ29sb3IgQWdncmVnYXRpb24nLFxuICAgIGhlaWdodEFnZ3JlZ2F0aW9uOiAnSGVpZ2h0IEFnZ3JlZ2F0aW9uJyxcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdSZXNvbHV0aW9uIHJhbmdlJyxcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcbiAgICB3b3JsZFVuaXRTaXplOiAnV29ybGQgVW5pdCBTaXplJyxcbiAgICBlbGV2YXRpb25TY2FsZTogJ0VsZXZhdGlvbiBTY2FsZScsXG4gICAgZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvcjogJ1VzZSBlbGV2YXRpb24gem9vbSBmYWN0b3InLFxuICAgIGVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbjogJ0FkanVzdCBoZWlnaHQvZWxldmF0aW9uIGJhc2VkIG9uIGN1cnJlbnQgem9vbSBmYWN0b3InLFxuICAgIGVuYWJsZUhlaWdodFpvb21GYWN0b3I6ICdVc2UgaGVpZ2h0IHpvb20gZmFjdG9yJyxcbiAgICBoZWlnaHRTY2FsZTogJ0hlaWdodCBTY2FsZScsXG4gICAgY292ZXJhZ2VSYW5nZTogJ0NvdmVyYWdlIFJhbmdlJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAnSGlnaCBQcmVjaXNpb24gUmVuZGVyaW5nJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdIaWdoIHByZWNpc2lvbiB3aWxsIHJlc3VsdCBpbiBzbG93ZXIgcGVyZm9ybWFuY2UnLFxuICAgIGhlaWdodDogJ0hlaWdodCcsXG4gICAgaGVpZ2h0RGVzY3JpcHRpb246ICdDbGljayBidXR0b24gYXQgdG9wIHJpZ2h0IG9mIHRoZSBtYXAgdG8gc3dpdGNoIHRvIDNkIHZpZXcnLFxuICAgIGZpbGw6ICdGaWxsJyxcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnRW5hYmxlIFBvbHlnb24gSGVpZ2h0JyxcbiAgICBzaG93V2lyZWZyYW1lOiAnU2hvdyBXaXJlZnJhbWUnLFxuICAgIHdlaWdodEludGVuc2l0eTogJ1dlaWdodCBJbnRlbnNpdHknLFxuICAgIHpvb21TY2FsZTogJ1pvb20gU2NhbGUnLFxuICAgIGhlaWdodFJhbmdlOiAnSGVpZ2h0IFJhbmdlJyxcbiAgICBoZWlnaHRNdWx0aXBsaWVyOiAnSGVpZ2h0IE11bHRpcGxpZXInLFxuICAgIGRhcmtNb2RlRW5hYmxlZDogJ0RhcmsgYmFzZSBtYXAnXG4gIH0sXG4gIGxheWVyTWFuYWdlcjoge1xuICAgIGFkZERhdGE6ICdBZGQgRGF0YScsXG4gICAgYWRkTGF5ZXI6ICdBZGQgTGF5ZXInLFxuICAgIGxheWVyQmxlbmRpbmc6ICdMYXllciBCbGVuZGluZycsXG4gICAgb3ZlcmxheUJsZW5kaW5nOiAnT3ZlcmxheSBCbGVuZGluZydcbiAgfSxcbiAgbWFwTWFuYWdlcjoge1xuICAgIG1hcFN0eWxlOiAnTWFwIHN0eWxlJyxcbiAgICBhZGRNYXBTdHlsZTogJ0FkZCBNYXAgU3R5bGUnLFxuICAgICczZEJ1aWxkaW5nQ29sb3InOiAnM0QgQnVpbGRpbmcgQ29sb3InLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ0JhY2tncm91bmQgQ29sb3InXG4gIH0sXG4gIGxheWVyQ29uZmlndXJhdGlvbjoge1xuICAgIGRlZmF1bHREZXNjcmlwdGlvbjogJ0NhbGN1bGF0ZSB7cHJvcGVydHl9IGJhc2VkIG9uIHNlbGVjdGVkIGZpZWxkJyxcbiAgICBob3dUbzogJ0hvdyB0bydcbiAgfSxcbiAgZmlsdGVyTWFuYWdlcjoge1xuICAgIGFkZEZpbHRlcjogJ0FkZCBGaWx0ZXInXG4gIH0sXG4gIGRhdGFzZXRUaXRsZToge1xuICAgIHNob3dEYXRhVGFibGU6ICdTaG93IGRhdGEgdGFibGUnLFxuICAgIHJlbW92ZURhdGFzZXQ6ICdSZW1vdmUgZGF0YXNldCdcbiAgfSxcbiAgZGF0YXNldEluZm86IHtcbiAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gcm93cydcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIGhpZGVMYXllcjogJ2hpZGUgbGF5ZXInLFxuICAgIHNob3dMYXllcjogJ3Nob3cgbGF5ZXInLFxuICAgIGhpZGVGZWF0dXJlOiAnSGlkZSBGZWF0dXJlJyxcbiAgICBzaG93RmVhdHVyZTogJ1Nob3cgZmVhdHVyZScsXG4gICAgaGlkZTogJ2hpZGUnLFxuICAgIHNob3c6ICdzaG93JyxcbiAgICByZW1vdmVMYXllcjogJ1JlbW92ZSBsYXllcicsXG4gICAgZHVwbGljYXRlTGF5ZXI6ICdEdXBsaWNhdGUgbGF5ZXInLFxuICAgIHJlc2V0QWZ0ZXJFcnJvcjogJ1RyeSB0byBlbmFibGUgdGhlIGxheWVyIGFmdGVyIGFuIGVycm9yJyxcbiAgICBsYXllclNldHRpbmdzOiAnTGF5ZXIgc2V0dGluZ3MnLFxuICAgIGNsb3NlUGFuZWw6ICdDbG9zZSBjdXJyZW50IHBhbmVsJyxcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAnU3dpdGNoIHRvIGR1YWwgbWFwIHZpZXcnLFxuICAgIHNob3dMZWdlbmQ6ICdTaG93IGxlZ2VuZCcsXG4gICAgZGlzYWJsZTNETWFwOiAnRGlzYWJsZSAzRCBNYXAnLFxuICAgIERyYXdPbk1hcDogJ0RyYXcgb24gbWFwJyxcbiAgICBzZWxlY3RMb2NhbGU6ICdTZWxlY3QgbG9jYWxlJyxcbiAgICBoaWRlTGF5ZXJQYW5lbDogJ0hpZGUgbGF5ZXIgcGFuZWwnLFxuICAgIHNob3dMYXllclBhbmVsOiAnU2hvdyBsYXllciBwYW5lbCcsXG4gICAgbW92ZVRvVG9wOiAnTW92ZSB0byB0b3Agb2YgZGF0YSBsYXllcnMnLFxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ1NlbGVjdCBCYXNlIE1hcCBTdHlsZScsXG4gICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICB0aW1lUGxheWJhY2s6ICdUaW1lIFBsYXliYWNrJyxcbiAgICBjbG91ZFN0b3JhZ2U6ICdDbG91ZCBTdG9yYWdlJyxcbiAgICAnM0RNYXAnOiAnM0QgTWFwJyxcbiAgICBhbmltYXRpb25CeVdpbmRvdzogJ01vdmluZyBUaW1lIFdpbmRvdycsXG4gICAgYW5pbWF0aW9uQnlJbmNyZW1lbnRhbDogJ0luY3JlbWVudGFsIFRpbWUgV2luZG93JyxcbiAgICBzcGVlZDogJ3NwZWVkJyxcbiAgICBwbGF5OiAncGxheScsXG4gICAgcGF1c2U6ICdwYXVzZScsXG4gICAgcmVzZXQ6ICdyZXNldCcsXG4gICAgZXhwb3J0OiAnZXhwb3J0J1xuICB9LFxuICB0b29sYmFyOiB7XG4gICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnQgSW1hZ2UnLFxuICAgIGV4cG9ydERhdGE6ICdFeHBvcnQgRGF0YScsXG4gICAgZXhwb3J0TWFwOiAnRXhwb3J0IE1hcCcsXG4gICAgc2hhcmVNYXBVUkw6ICdTaGFyZSBNYXAgVVJMJyxcbiAgICBzYXZlTWFwOiAnU2F2ZSBNYXAnLFxuICAgIHNlbGVjdDogJ1NlbGVjdCcsXG4gICAgcG9seWdvbjogJ1BvbHlnb24nLFxuICAgIHJlY3RhbmdsZTogJ1JlY3RhbmdsZScsXG4gICAgaGlkZTogJ0hpZGUnLFxuICAgIHNob3c6ICdTaG93JyxcbiAgICAuLi5MT0NBTEVTXG4gIH0sXG4gIGVkaXRvcjoge1xuICAgIGZpbHRlckxheWVyOiAnRmlsdGVyIExheWVycycsXG4gICAgY29weUdlb21ldHJ5OiAnQ29weSBHZW9tZXRyeScsXG4gICAgbm9MYXllcnNUb0ZpbHRlcjogJ05vIGxheWVycyB0byBmaWx0ZXInXG4gIH0sXG5cbiAgbW9kYWw6IHtcbiAgICB0aXRsZToge1xuICAgICAgZGVsZXRlRGF0YXNldDogJ0RlbGV0ZSBEYXRhc2V0JyxcbiAgICAgIGFkZERhdGFUb01hcDogJ0FkZCBEYXRhIFRvIE1hcCcsXG4gICAgICBleHBvcnRJbWFnZTogJ0V4cG9ydCBJbWFnZScsXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0IERhdGEnLFxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0IE1hcCcsXG4gICAgICBhZGRDdXN0b21NYXBib3hTdHlsZTogJ0FkZCBDdXN0b20gTWFwIFN0eWxlJyxcbiAgICAgIHNhdmVNYXA6ICdTYXZlIE1hcCcsXG4gICAgICBzaGFyZVVSTDogJ1NoYXJlIFVSTCdcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQnLFxuICAgICAgZXhwb3J0OiAnRXhwb3J0JyxcbiAgICAgIGFkZFN0eWxlOiAnQWRkIFN0eWxlJyxcbiAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtJ1xuICAgIH0sXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIHJhdGlvVGl0bGU6ICdSYXRpbycsXG4gICAgICByYXRpb0Rlc2NyaXB0aW9uOiAnQ2hvb3NlIHRoZSByYXRpbyBmb3IgdmFyaW91cyB1c2FnZXMuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdPcmlnaW5hbCBTY3JlZW4nLFxuICAgICAgcmF0aW9DdXN0b206ICdDdXN0b20nLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHV0aW9uJyxcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0hpZ2ggcmVzb2x1dGlvbiBpcyBiZXR0ZXIgZm9yIHByaW50cy4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdNYXAgTGVnZW5kJyxcbiAgICAgIG1hcExlZ2VuZEFkZDogJ0FkZCBsZWdlbmQgb24gbWFwJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnRGF0YXNldCcsXG4gICAgICBkYXRhc2V0U3VidGl0bGU6ICdDaG9vc2UgdGhlIGRhdGFzZXRzIHlvdSB3YW50IHRvIGV4cG9ydCcsXG4gICAgICBhbGxEYXRhc2V0czogJ0FsbCcsXG4gICAgICBkYXRhVHlwZVRpdGxlOiAnRGF0YSBUeXBlJyxcbiAgICAgIGRhdGFUeXBlU3VidGl0bGU6ICdDaG9vc2UgdGhlIHR5cGUgb2YgZGF0YSB5b3Ugd2FudCB0byBleHBvcnQnLFxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdGVyIERhdGEnLFxuICAgICAgZmlsdGVyRGF0YVN1YnRpdGxlOiAnWW91IGNhbiBjaG9vc2UgZXhwb3J0aW5nIG9yaWdpbmFsIGRhdGEgb3IgZmlsdGVyZWQgZGF0YScsXG4gICAgICBmaWx0ZXJlZERhdGE6ICdGaWx0ZXJlZCBkYXRhJyxcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnVW5maWx0ZXJlZCBEYXRhJyxcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR9IEZpbGVzJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBSb3dzJ1xuICAgIH0sXG4gICAgZGVsZXRlRGF0YToge1xuICAgICAgd2FybmluZzogJ3lvdSBhcmUgZ29pbmcgdG8gZGVsZXRlIHRoaXMgZGF0YXNldC4gSXQgd2lsbCBhZmZlY3Qge2xlbmd0aH0gbGF5ZXJzJ1xuICAgIH0sXG4gICAgYWRkU3R5bGU6IHtcbiAgICAgIHB1Ymxpc2hUaXRsZTpcbiAgICAgICAgJzIuIElmIGVudGVyZWQgbWFwYm94IHN0eWxlIHVybCBpbiBzdGVwLjEsIHB1Ymxpc2ggeW91ciBzdHlsZSBhdCBtYXBib3ggb3IgcHJvdmlkZSBhY2Nlc3MgdG9rZW4uIChPcHRpb25hbCknLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1lvdSBjYW4gY3JlYXRlIHlvdXIgb3duIG1hcCBzdHlsZSBhdCcsXG4gICAgICBwdWJsaXNoU3VidGl0bGUyOiAnYW5kJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTM6ICdwdWJsaXNoJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICdpdC4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ1RvIHVzZSBwcml2YXRlIHN0eWxlLCBwYXN0ZSB5b3VyJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTY6ICdhY2Nlc3MgdG9rZW4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcbiAgICAgICAgJ2hlcmUuICprZXBsZXIuZ2wgaXMgYSBjbGllbnQtc2lkZSBhcHBsaWNhdGlvbiwgZGF0YSBzdGF5cyBpbiB5b3VyIGJyb3dzZXIuLicsXG4gICAgICBleGFtcGxlVG9rZW46ICdlLmcuIHBrLmFiY2RlZmcueHh4eHh4JyxcbiAgICAgIHBhc3RlVGl0bGU6ICcxLiBQYXN0ZSBzdHlsZSB1cmwnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTA6ICdTdHlsZSB1cmwgY2FuIGJlIGEgbWFwYm94JyxcbiAgICAgIHBhc3RlU3VidGl0bGUxOiAnV2hhdCBpcyBhJyxcbiAgICAgIHBhc3RlU3VidGl0bGUyOiAnc3R5bGUgVVJMJyxcbiAgICAgIHBhc3RlU3VidGl0bGUzOiAnb3IgYSBzdHlsZS5qc29uIHVzaW5nIHRoZScsXG4gICAgICBwYXN0ZVN1YnRpdGxlNDogJ01hcGJveCBHTCBTdHlsZSBTcGVjJyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gTmFtZSB5b3VyIHN0eWxlJ1xuICAgIH0sXG4gICAgc2hhcmVNYXA6IHtcbiAgICAgIHNoYXJlVXJpVGl0bGU6ICdTaGFyZSBNYXAgVXJsJyxcbiAgICAgIHNoYXJlVXJpU3VidGl0bGU6ICdHZW5lcmF0ZSBhIG1hcCB1cmwgdG8gc2hhcmUgd2l0aCBvdGhlcnMnLFxuICAgICAgY2xvdWRUaXRsZTogJ0Nsb3VkIHN0b3JhZ2UnLFxuICAgICAgY2xvdWRTdWJ0aXRsZTogJ0xvZ2luIGFuZCB1cGxvYWQgbWFwIGRhdGEgdG8geW91ciBwZXJzb25hbCBjbG91ZCBzdG9yYWdlJyxcbiAgICAgIHNoYXJlRGlzY2xhaW1lcjpcbiAgICAgICAgJ2tlcGxlci5nbCB3aWxsIHNhdmUgeW91ciBtYXAgZGF0YSB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UsIG9ubHkgcGVvcGxlIHdpdGggdGhlIFVSTCBjYW4gYWNjZXNzIHlvdXIgbWFwIGFuZCBkYXRhLiAnICtcbiAgICAgICAgJ1lvdSBjYW4gZWRpdC9kZWxldGUgdGhlIGRhdGEgZmlsZSBpbiB5b3VyIGNsb3VkIGFjY291bnQgYW55dGltZS4nLFxuICAgICAgZ290b1BhZ2U6ICdHbyB0byB5b3VyIEtlcGxlci5nbCB7Y3VycmVudFByb3ZpZGVyfSBwYWdlJ1xuICAgIH0sXG4gICAgc3RhdHVzUGFuZWw6IHtcbiAgICAgIG1hcFVwbG9hZGluZzogJ01hcCBVcGxvYWRpbmcnLFxuICAgICAgZXJyb3I6ICdFcnJvcidcbiAgICB9LFxuICAgIHNhdmVNYXA6IHtcbiAgICAgIHRpdGxlOiAnQ2xvdWQgc3RvcmFnZScsXG4gICAgICBzdWJ0aXRsZTogJ0xvZ2luIHRvIHNhdmUgbWFwIHRvIHlvdXIgcGVyc29uYWwgY2xvdWQgc3RvcmFnZSdcbiAgICB9LFxuICAgIGV4cG9ydE1hcDoge1xuICAgICAgZm9ybWF0VGl0bGU6ICdNYXAgZm9ybWF0JyxcbiAgICAgIGZvcm1hdFN1YnRpdGxlOiAnQ2hvb3NlIHRoZSBmb3JtYXQgdG8gZXhwb3J0IHlvdXIgbWFwIHRvJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0IHlvdXIgbWFwIGludG8gYW4gaW50ZXJhY3RpdmUgaHRtbCBmaWxlLicsXG4gICAgICAgIHRva2VuVGl0bGU6ICdNYXBib3ggYWNjZXNzIHRva2VuJyxcbiAgICAgICAgdG9rZW5TdWJ0aXRsZTogJ1VzZSB5b3VyIG93biBNYXBib3ggYWNjZXNzIHRva2VuIGluIHRoZSBodG1sIChvcHRpb25hbCknLFxuICAgICAgICB0b2tlblBsYWNlaG9sZGVyOiAnUGFzdGUgeW91ciBNYXBib3ggYWNjZXNzIHRva2VuJyxcbiAgICAgICAgdG9rZW5NaXN1c2VXYXJuaW5nOlxuICAgICAgICAgICcqIElmIHlvdSBkbyBub3QgcHJvdmlkZSB5b3VyIG93biB0b2tlbiwgdGhlIG1hcCBtYXkgZmFpbCB0byBkaXNwbGF5IGF0IGFueSB0aW1lIHdoZW4gd2UgcmVwbGFjZSBvdXJzIHRvIGF2b2lkIG1pc3VzZS4gJyxcbiAgICAgICAgdG9rZW5EaXNjbGFpbWVyOiAnWW91IGNhbiBjaGFuZ2UgdGhlIE1hcGJveCB0b2tlbiBsYXRlciB1c2luZyB0aGUgZm9sbG93aW5nIGluc3RydWN0aW9uczogJyxcbiAgICAgICAgdG9rZW5VcGRhdGU6ICdIb3cgdG8gdXBkYXRlIGFuIGV4aXN0aW5nIG1hcCB0b2tlbi4nLFxuICAgICAgICBtb2RlVGl0bGU6ICdNYXAgTW9kZScsXG4gICAgICAgIG1vZGVTdWJ0aXRsZTE6ICdTZWxlY3QgdGhlIGFwcCBtb2RlLiBNb3JlICcsXG4gICAgICAgIG1vZGVTdWJ0aXRsZTI6ICdpbmZvJyxcbiAgICAgICAgbW9kZURlc2NyaXB0aW9uOiAnQWxsb3cgdXNlcnMgdG8ge21vZGV9IHRoZSBtYXAnLFxuICAgICAgICByZWFkOiAncmVhZCcsXG4gICAgICAgIGVkaXQ6ICdlZGl0J1xuICAgICAgfSxcbiAgICAgIGpzb246IHtcbiAgICAgICAgY29uZmlnVGl0bGU6ICdNYXAgQ29uZmlnJyxcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcbiAgICAgICAgICAnTWFwIGNvbmZpZyB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBKc29uIGZpbGUuIElmIHlvdSBhcmUgdXNpbmcga2VwbGVyLmdsIGluIHlvdXIgb3duIGFwcC4gWW91IGNhbiBjb3B5IHRoaXMgY29uZmlnIGFuZCBwYXNzIGl0IHRvICcsXG4gICAgICAgIHNlbGVjdGlvbjpcbiAgICAgICAgICAnRXhwb3J0IGN1cnJlbnQgbWFwIGRhdGEgYW5kIGNvbmZpZyBpbnRvIGEgc2luZ2xlIEpzb24gZmlsZS4gWW91IGNhbiBsYXRlciBvcGVuIHRoZSBzYW1lIG1hcCBieSB1cGxvYWRpbmcgdGhpcyBmaWxlIHRvIGtlcGxlci5nbC4nLFxuICAgICAgICBkaXNjbGFpbWVyOlxuICAgICAgICAgICcqIE1hcCBjb25maWcgaXMgY291cGxlZCB3aXRoIGxvYWRlZCBkYXRhc2V0cy4g4oCYZGF0YUlk4oCZIGlzIHVzZWQgdG8gYmluZCBsYXllcnMsIGZpbHRlcnMsIGFuZCB0b29sdGlwcyB0byBhIHNwZWNpZmljIGRhdGFzZXQuICcgK1xuICAgICAgICAgICdXaGVuIHBhc3NpbmcgdGhpcyBjb25maWcgdG8gYWRkRGF0YVRvTWFwLCBtYWtlIHN1cmUgdGhlIGRhdGFzZXQgaWQgbWF0Y2hlcyB0aGUgZGF0YUlkL3MgaW4gdGhpcyBjb25maWcuJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZGluZ0RpYWxvZzoge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nXG4gICAgfSxcbiAgICBsb2FkRGF0YToge1xuICAgICAgdXBsb2FkOiAnTG9hZCBGaWxlcycsXG4gICAgICBzdG9yYWdlOiAnTG9hZCBmcm9tIFN0b3JhZ2UnXG4gICAgfSxcbiAgICB0cmlwSW5mbzoge1xuICAgICAgdGl0bGU6ICdIb3cgdG8gZW5hYmxlIHRyaXAgYW5pbWF0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgJ0luIG9yZGVyIHRvIGFuaW1hdGUgdGhlIHBhdGgsIHRoZSBnZW9KU09OIGRhdGEgbmVlZHMgdG8gY29udGFpbiBgTGluZVN0cmluZ2AgaW4gaXRzIGZlYXR1cmUgZ2VvbWV0cnksIGFuZCB0aGUgY29vcmRpbmF0ZXMgaW4gdGhlIExpbmVTdHJpbmcgbmVlZCB0byBoYXZlIDQgZWxlbWVudHMgaW4gdGhlIGZvcm1hdHMgb2YnLFxuICAgICAgY29kZTogJyBbbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIHRpbWVzdGFtcF0gJyxcbiAgICAgIGRlc2NyaXB0aW9uMjpcbiAgICAgICAgJ3dpdGggdGhlIGxhc3QgZWxlbWVudCBiZWluZyBhIHRpbWVzdGFtcC4gVmFsaWQgdGltZXN0YW1wIGZvcm1hdHMgaW5jbHVkZSB1bml4IGluIHNlY29uZHMgc3VjaCBhcyBgMTU2NDE4NDM2M2Agb3IgaW4gbWlsbGlzZWNvbmRzIHN1Y2ggYXMgYDE1NjQxODQzNjMwMDBgLicsXG4gICAgICBleGFtcGxlOiAnRXhhbXBsZTonXG4gICAgfSxcbiAgICBpY29uSW5mbzoge1xuICAgICAgdGl0bGU6ICdIb3cgdG8gZHJhdyBpY29ucycsXG4gICAgICBkZXNjcmlwdGlvbjE6XG4gICAgICAgICdJbiB5b3VyIGNzdiwgY3JlYXRlIGEgY29sdW1uLCBwdXQgdGhlIG5hbWUgb2YgdGhlIGljb24geW91IHdhbnQgdG8gZHJhdyBpbiBpdC4gWW91IGNhbiBsZWF2ZSB0aGUgY2VsbCBlbXB0eSBpZiB5b3UgZG8gbm90IHdhbnQgdGhlIGljb24gdG8gc2hvdyBmb3Igc29tZSBwb2ludHMuIFdoZW4gdGhlIGNvbHVtbiBpcyBuYW1lZCcsXG4gICAgICBjb2RlOiAnaWNvbicsXG4gICAgICBkZXNjcmlwdGlvbjI6ICcga2VwbGVyLmdsIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgYSBpY29uIGxheWVyIGZvciB5b3UuJyxcbiAgICAgIGV4YW1wbGU6ICdFeGFtcGxlOicsXG4gICAgICBpY29uczogJ0ljb25zJ1xuICAgIH0sXG4gICAgc3RvcmFnZU1hcFZpZXdlcjoge1xuICAgICAgbGFzdE1vZGlmaWVkOiAnTGFzdCBtb2RpZmllZCB7bGFzdFVwZGF0ZWR9IGFnbycsXG4gICAgICBiYWNrOiAnQmFjaydcbiAgICB9LFxuICAgIG92ZXJ3cml0ZU1hcDoge1xuICAgICAgdGl0bGU6ICdTYXZpbmcgbWFwLi4uJyxcbiAgICAgIGFscmVhZHlFeGlzdHM6ICdhbHJlYWR5IGV4aXN0cyBpbiB5b3VyIHttYXBTYXZlZH0uIFdvdWxkIHlvdSBsaWtlIHRvIG92ZXJ3cml0ZSBpdD8nXG4gICAgfSxcbiAgICBsb2FkU3RvcmFnZU1hcDoge1xuICAgICAgYmFjazogJ0JhY2snLFxuICAgICAgZ29Ub1BhZ2U6ICdHbyB0byB5b3VyIEtlcGxlci5nbCB7ZGlzcGxheU5hbWV9IHBhZ2UnLFxuICAgICAgc3RvcmFnZU1hcHM6ICdTdG9yYWdlIC8gTWFwcycsXG4gICAgICBub1NhdmVkTWFwczogJ05vIHNhdmVkIG1hcHMgeWV0J1xuICAgIH1cbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgdmlzaWJsZUxheWVyczogJ1Zpc2libGUgbGF5ZXJzJyxcbiAgICBsYXllckxlZ2VuZDogJ0xlZ2VuZCdcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgdG9vbHRpcDogJ1Rvb2x0aXAnLFxuICAgIGJydXNoOiAnQnJ1c2gnLFxuICAgIGNvb3JkaW5hdGU6ICdDb29yZGluYXRlcycsXG4gICAgZ2VvY29kZXI6ICdHZW9jb2RlcidcbiAgfSxcbiAgbGF5ZXJCbGVuZGluZzoge1xuICAgIHRpdGxlOiAnTGF5ZXIgQmxlbmRpbmcnLFxuICAgIGFkZGl0aXZlOiAnYWRkaXRpdmUnLFxuICAgIG5vcm1hbDogJ25vcm1hbCcsXG4gICAgc3VidHJhY3RpdmU6ICdzdWJ0cmFjdGl2ZSdcbiAgfSxcbiAgb3ZlcmxheUJsZW5kaW5nOiB7XG4gICAgdGl0bGU6ICdNYXAgb3ZlcmxheSBibGVuZGluZycsXG4gICAgZGVzY3JpcHRpb246ICdCbGVuZCBsYXllcnMgd2l0aCB0aGUgYmFzZSBtYXAgc28gdGhhdCBib3RoIGFyZSB2aXNpYmxlLicsXG4gICAgc2NyZWVuOiAnZGFyayBiYXNlIG1hcCcsXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcbiAgICBkYXJrZW46ICdsaWdodCBiYXNlIG1hcCdcbiAgfSxcbiAgY29sdW1uczoge1xuICAgIHRpdGxlOiAnQ29sdW1ucycsXG4gICAgbGF0OiAnbGF0JyxcbiAgICBsbmc6ICdsb24nLFxuICAgIGFsdGl0dWRlOiAnYWx0aXR1ZGUnLFxuICAgIGljb246ICdpY29uJyxcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgdG9rZW46ICd0b2tlbicsXG4gICAgYXJjOiB7XG4gICAgICBsYXQwOiAnc291cmNlIGxhdCcsXG4gICAgICBsbmcwOiAnc291cmNlIGxuZycsXG4gICAgICBsYXQxOiAndGFyZ2V0IGxhdCcsXG4gICAgICBsbmcxOiAndGFyZ2V0IGxuZydcbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgIGFsdDA6ICdzb3VyY2UgYWx0aXR1ZGUnLFxuICAgICAgYWx0MTogJ3RhcmdldCBhbHRpdHVkZSdcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdHcmlkIFNpemUgKGttKSdcbiAgICB9LFxuICAgIGhleGFnb246IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdIZXhhZ29uIFJhZGl1cyAoa20pJ1xuICAgIH0sXG4gICAgaGV4X2lkOiAnaGV4IGlkJ1xuICB9LFxuICBjb2xvcjoge1xuICAgIGN1c3RvbVBhbGV0dGU6ICdDdXN0b20gUGFsZXR0ZScsXG4gICAgc3RlcHM6ICdzdGVwcycsXG4gICAgdHlwZTogJ3R5cGUnLFxuICAgIHJldmVyc2VkOiAncmV2ZXJzZWQnXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgY29sb3JTY2FsZTogJ0NvbG9yIFNjYWxlJyxcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcbiAgICBzdHJva2VTY2FsZTogJ1N0cm9rZSBTY2FsZScsXG4gICAgc2NhbGU6ICdTY2FsZSdcbiAgfSxcbiAgZmlsZVVwbG9hZGVyOiB7XG4gICAgbWVzc2FnZTogJ0RyYWcgJiBEcm9wIFlvdXIgRmlsZShzKSBIZXJlJyxcbiAgICBjaHJvbWVNZXNzYWdlOlxuICAgICAgJypDaHJvbWUgdXNlcjogTGltaXQgZmlsZSBzaXplIHRvIDI1MG1iLCBpZiBuZWVkIHRvIHVwbG9hZCBsYXJnZXIgZmlsZSwgdHJ5IFNhZmFyaScsXG4gICAgZGlzY2xhaW1lcjpcbiAgICAgICcqa2VwbGVyLmdsIGlzIGEgY2xpZW50LXNpZGUgYXBwbGljYXRpb24gd2l0aCBubyBzZXJ2ZXIgYmFja2VuZC4gRGF0YSBsaXZlcyBvbmx5IG9uIHlvdXIgbWFjaGluZS9icm93c2VyLiAnICtcbiAgICAgICdObyBpbmZvcm1hdGlvbiBvciBtYXAgZGF0YSBpcyBzZW50IHRvIGFueSBzZXJ2ZXIuJyxcbiAgICBjb25maWdVcGxvYWRNZXNzYWdlOlxuICAgICAgJ1VwbG9hZCB7ZmlsZUZvcm1hdE5hbWVzfSBvciBzYXZlZCBtYXAgKipKc29uKiouIFJlYWQgbW9yZSBhYm91dCBbKipzdXBwb3J0ZWQgZmlsZSBmb3JtYXRzKipdJyxcbiAgICBicm93c2VGaWxlczogJ2Jyb3dzZSB5b3VyIGZpbGVzJyxcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcnLFxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6ICdGaWxlIHtlcnJvckZpbGVzfSBpcyBub3Qgc3VwcG9ydGVkLicsXG4gICAgb3I6ICdvcidcbiAgfSxcbiAgZ2VvY29kZXI6IHtcbiAgICB0aXRsZTogJ0VudGVyIGFuIGFkZHJlc3Mgb3IgY29vcmRpbmF0ZXMsIGV4IDM3Ljc5LC0xMjIuNDAnXG4gIH0sXG4gIGZpZWxkU2VsZWN0b3I6IHtcbiAgICBjbGVhckFsbDogJ0NsZWFyIEFsbCcsXG4gICAgZm9ybWF0dGluZzogJ0Zvcm1hdHRpbmcnXG4gIH0sXG4gIGNvbXBhcmU6IHtcbiAgICBtb2RlTGFiZWw6ICdDb21wYXJpc29uIE1vZGUnLFxuICAgIHR5cGVMYWJlbDogJ0NvbXBhcmlzb24gVHlwZScsXG4gICAgdHlwZXM6IHtcbiAgICAgIGFic29sdXRlOiAnQWJzb2x1dGUnLFxuICAgICAgcmVsYXRpdmU6ICdSZWxhdGl2ZSdcbiAgICB9XG4gIH0sXG4gIG1hcFBvcG92ZXI6IHtcbiAgICBwcmltYXJ5OiAnUHJpbWFyeSdcbiAgfSxcbiAgZGVuc2l0eTogJ2RlbnNpdHknLFxuICAnQnVnIFJlcG9ydCc6ICdCdWcgUmVwb3J0JyxcbiAgJ1VzZXIgR3VpZGUnOiAnVXNlciBHdWlkZScsXG4gIFNhdmU6ICdTYXZlJyxcbiAgU2hhcmU6ICdTaGFyZSdcbn07XG4iXX0=