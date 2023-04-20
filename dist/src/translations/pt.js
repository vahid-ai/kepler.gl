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
    weight: 'Espessura do texto',
    label: 'Rótulo',
    fillColor: 'Cor do preenchimento',
    color: 'Cor',
    strokeColor: 'Cor da borda',
    radius: 'Raio',
    outline: 'Contorno',
    stroke: 'Traçado',
    density: 'Densidade',
    height: 'Altura',
    sum: 'Soma',
    pointCount: 'Contagem de Pontos'
  },
  placeholder: {
    search: 'Pesquisar',
    selectField: 'Selecione um campo',
    yAxis: 'Eixo Y',
    selectType: 'Selecione um Tipo',
    selectValue: 'Selecione um valor',
    enterValue: 'Insira um valor',
    empty: 'Vazio'
  },
  misc: {
    by: '',
    valuesIn: 'Valores em',
    valueEquals: 'Valor igual a',
    dataSource: 'Origem dos dados',
    brushRadius: 'Raio do Traço (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Camadas do mapa',
    label: 'Rótulo',
    road: 'Estrada',
    border: 'Fronteira',
    building: 'Edifícios',
    water: 'Água',
    land: 'Terra',
    '3dBuilding': 'Edifícios em 3d',
    background: 'Fundo'
  },
  panel: {
    text: {
      label: 'Rótulo',
      labelWithId: 'Rótulo {labelId}',
      fontSize: 'Tamanho da fonte',
      fontColor: 'Cor da fonte',
      textAnchor: 'Âncora do texto',
      alignment: 'Alinhamento',
      addMoreLabel: 'Adicionar mais Rótulos'
    }
  },
  sidebar: {
    panels: {
      layer: 'Camadas',
      filter: 'Filtros',
      interaction: 'Interações',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Obrigatório*',
    radius: 'Raio',
    color: 'Cor',
    fillColor: 'Cor de preenchimento',
    outline: 'Contorno',
    weight: 'Espessura',
    propertyBasedOn: '{property} baseada em',
    coverage: 'Cobertura',
    stroke: 'Traço',
    strokeWidth: 'Largura do Traçado',
    strokeColor: 'Cor do Traçado',
    basic: 'Básico',
    trailLength: 'Comprimento da trilha',
    trailLengthDescription: 'Número de segundos para um caminho completamente desaparecer',
    newLayer: 'nova camada',
    elevationByDescription: 'Quando desligado, a altura é baseada na contagem de pontos',
    colorByDescription: 'Quando desligado, a cor é baseada na contagem de pontos',
    aggregateBy: '{field} agregado por',
    '3DModel': 'Modelo 3D',
    '3DModelOptions': 'Opções do Modelo 3D',
    type: {
      point: 'ponto',
      arc: 'arco',
      line: 'linha',
      grid: 'grade',
      hexbin: 'hexágono',
      polygon: 'polígono',
      geojson: 'geojson',
      cluster: 'grupo',
      icon: 'icon',
      heatmap: 'mapa de calor',
      hexagon: 'hexágono',
      hexagonid: 'H3',
      trip: 'viagem',
      s2: 'S2',
      '3d': '3D'
    },
    layerUpdateError: 'Ocorreu um erro ao atualizar a camada: {errorMessage}. Certifique-se de que o formato dos dados de entrada seja válido.'
  },
  layerVisConfigs: {
    strokeWidth: 'Largura do Traço',
    strokeWidthRange: 'Alcance da Largura do Traço',
    radius: 'Raio',
    fixedRadius: 'Raio ajustado para metro',
    fixedRadiusDescription: 'Raio do Mapa para Raio absoluto em metros, e.g. 5 para 5 metros',
    radiusRange: 'Alcance do Raio',
    clusterRadius: 'Raio do Agrupamento em pixels',
    radiusRangePixels: 'Alcance do Raio em pixels',
    opacity: 'Opacidade',
    coverage: 'Cobertura',
    outline: 'Contorno',
    colorRange: 'Alcance da Cor',
    stroke: 'Traçado',
    strokeColor: 'Cor do Traçado',
    strokeColorRange: 'Alcance da Cor do Traçado',
    targetColor: 'Cor de destino',
    colorAggregation: 'Agregação da Cor',
    heightAggregation: 'Agregação da Altura',
    resolutionRange: 'Alcance da Resolução',
    sizeScale: 'Escala de tamanho',
    worldUnitSize: 'Tamanho unitário do mundo',
    elevationScale: 'Escala de Elevação',
    enableElevationZoomFactor: 'Use fator de zoom de elevação',
    enableElevationZoomFactorDescription: 'Ajuste a altura / elevação com base no fator de zoom atual',
    enableHeightZoomFactor: 'Usar fator de zoom de altura',
    heightScale: 'Escala de Altura',
    coverageRange: 'Alcance de cobertura',
    highPrecisionRendering: 'Renderização de Alta Precisão',
    highPrecisionRenderingDescription: 'Alta precisão irá em resultar em baixa performance',
    height: 'Altura',
    heightDescription: 'Clique no botão no canto superior direito para trocar para a visualização 3d',
    fill: 'Preenchimento',
    enablePolygonHeight: 'Habilitar Altura de Polígono',
    showWireframe: 'Mostrar Wireframe',
    weightIntensity: 'Intensidade da Espessura',
    zoomScale: 'Escala do Zoom',
    heightRange: 'Alcance da Altura',
    heightMultiplier: 'Multiplicador de altura'
  },
  layerManager: {
    addData: 'Adicionar Dados',
    addLayer: 'Adicionar Camada',
    layerBlending: 'Mistura de Camada'
  },
  mapManager: {
    mapStyle: 'Estilo do Mapa',
    addMapStyle: 'Adicionar Estilo de Mapa',
    '3dBuildingColor': 'Cor do Edifício 3D',
    backgroundColor: 'Cor de Fundo'
  },
  layerConfiguration: {
    defaultDescription: 'Calcular {property} baseada no campo selecionado',
    howTo: 'Como'
  },
  filterManager: {
    addFilter: 'Adicionar Filtro'
  },
  datasetTitle: {
    showDataTable: 'Mostrar tabela de dados',
    removeDataset: 'Remover tabela de dados'
  },
  datasetInfo: {
    rowCount: '{rowCount} linhas'
  },
  tooltip: {
    hideLayer: 'esconder camada',
    showLayer: 'mostrar camada',
    hideFeature: 'Esconder propriedade',
    showFeature: 'Mostrar propriedade',
    hide: 'esconder',
    show: 'mostrar',
    removeLayer: 'Remover Camada',
    resetAfterError: 'Tente habilitar a camada após um erro',
    layerSettings: 'Configurações de Camada',
    closePanel: 'Fechar painel atual',
    switchToDualView: 'Trocar para visualização dupla de mapa',
    showLegend: 'mostrar legenda',
    disable3DMap: 'Desabilitar Mapa 3D',
    DrawOnMap: 'Desenhar no mapa',
    selectLocale: 'Selecionar língua',
    hideLayerPanel: 'Esconder painel de camada',
    showLayerPanel: 'Mostrar painel de camada',
    moveToTop: 'Mover para o topo das camadas',
    selectBaseMapStyle: 'Selecionar o Estilo do Mapa Base',
    "delete": 'Deletar',
    timePlayback: 'Tempo de reprodução',
    cloudStorage: 'Armazenamento Cloud',
    '3DMap': ' Mapa 3D'
  },
  toolbar: _objectSpread({
    exportImage: 'Exportar Imagem',
    exportData: 'Exportar Dados',
    exportMap: 'Exportar Mapa',
    shareMapURL: 'Compartilhar URL do Mapa',
    saveMap: 'Salvar Mapa',
    select: 'selecionar',
    polygon: 'polígono',
    rectangle: 'retângulo',
    hide: 'esconder',
    show: 'mostrar'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Deletar Conjunto de Dados',
      addDataToMap: 'Adicionar Dados ao Mapa',
      exportImage: 'Exportar Imagem',
      exportData: 'Exportar Dados',
      exportMap: 'Exportar Mapa',
      addCustomMapboxStyle: 'Adicionar Estilo Mapbox Customizado',
      saveMap: 'Salvar Mapa',
      shareURL: 'Compartilhar URL'
    },
    button: {
      "delete": 'Deletar',
      download: 'Download',
      "export": 'Exportar',
      addStyle: 'Adicionar Estilo',
      save: 'Salvar',
      defaultCancel: 'Cancelar',
      defaultConfirm: 'Confirmar'
    },
    exportImage: {
      ratioTitle: 'Proporção',
      ratioDescription: 'Escolha a proporção para vários usos.',
      ratioOriginalScreen: 'Tela Original',
      ratioCustom: 'Customizado',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolução',
      resolutionDescription: 'Alta resolução é melhor para impressões.',
      mapLegendTitle: 'Legenda do Mapa',
      mapLegendAdd: 'Adicionar Legenda no mapa'
    },
    exportData: {
      datasetTitle: 'Conjunto de dados',
      datasetSubtitle: 'Escolha o conjunto de dados que você quer exportar',
      allDatasets: 'Todos',
      dataTypeTitle: 'Tipo de Dado',
      dataTypeSubtitle: 'Escolha o tipo de dados que você quer exportar',
      filterDataTitle: 'Filtrar Dados',
      filterDataSubtitle: 'Você pode escolher exportar os dados originais ou os dados filtrados',
      filteredData: 'Dados Filtrados',
      unfilteredData: 'Dados não filtrados',
      fileCount: '{fileCount} Arquivos',
      rowCount: '{rowCount} Linhas'
    },
    deleteData: {
      warning: 'você irá deletar esse conjunto de dados. Isso irá afetar {length} camadas'
    },
    addStyle: {
      publishTitle: '1. Publique o seu Estilo no Mapbox ou providencie a chave de acesso',
      publishSubtitle1: 'Você pode criar o seu próprio estilo em',
      publishSubtitle2: 'e',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'isso.',
      publishSubtitle5: 'Para utilizar estilo privado, cole a sua',
      publishSubtitle6: 'chave de acesso',
      publishSubtitle7: 'aqui. *kepler.gl é uma aplicação client-side, os dados permanecem no seu browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Cole a url do seu estilo',
      pasteSubtitle1: 'O que é uma',
      pasteSubtitle2: 'URL de estilo',
      namingTitle: '3. Nomeie o seu estilo'
    },
    shareMap: {
      shareUriTitle: 'Compartilhar a URL do Mapa',
      shareUriSubtitle: 'Gerar a url do mapa e compartilhar com outros',
      cloudTitle: 'Armazenamento Cloud',
      cloudSubtitle: 'Conecte-se e envie os dados do mapa para o seu armazenamento cloud pessoal',
      shareDisclaimer: 'kepler.gl irá salvar os dados do mapa em seu armazenamento cloud pessoal, apenas pessoas com a URL podem acessar o seu mapa e dados. ' + 'Você pode editar/deletar o arquivo de dados na sua conta de armazenamento cloud em qualquer momento.',
      gotoPage: 'Vá para a sua página Kepler.gl {currentProvider}'
    },
    statusPanel: {
      mapUploading: 'Enviando Mapa',
      error: 'Erro'
    },
    saveMap: {
      title: 'Armazenamento Cloud',
      subtitle: 'Conecte-se para salvar o mapa para o seu armazenamento cloud pessoal'
    },
    exportMap: {
      formatTitle: 'Formato do mapa',
      formatSubtitle: 'Escolher o formato de mapa para exportar',
      html: {
        selection: 'Exportar seu mapa em um arquivo html interativo.',
        tokenTitle: 'Chave de acesso do Mapbox',
        tokenSubtitle: 'Use a sua própria chave de acesso Mapbox em seu arquivo html (opcional)',
        tokenPlaceholder: 'Cole a sua chave de acesso Mapbox',
        tokenMisuseWarning: '* Se você não fornecer a sua própria chave de acesso, o mapa pode falhar em exibir a qualquer momento quando nós substituirmos a nossa para evitar mau uso. ',
        tokenDisclaimer: 'Você pode trocar a sua chave de acesso Mapbox mais tarde utizando as instruções seguintes: ',
        tokenUpdate: 'Como atualizar a chave de acesso de um mapa existente.',
        modeTitle: 'Modo do Mapa',
        modeSubtitle1: 'Selecionar o modo do aplicativo. Mais ',
        modeSubtitle2: 'info',
        modeDescription: 'Permitir usuários a {mode} o mapa',
        read: 'ler',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configurações do Mapa',
        configDisclaimer: 'A configuração do mapa será incluida no arquivo Json. Se você está utilizando kepler.gl no seu próprio mapa. Você pode copiar essa configuração e passar para ele ',
        selection: 'Exportar atuais dados e configurações do mapa em um único arquivo Json. Você pode mais tarde abrir o mesmo mapa enviando esse arquivo para o kepler.gl.',
        disclaimer: '* Configuração do mapa é aclopado com conjunto de dados carregados. ‘dataId’ é utilizado para ligar as camadas, filtros, e dicas de contextos a conjunto de dados expecíficos. ' + 'Quando passando essa configuração para addDataToMap, tenha certeza de que o id do conjunto de dados combina com o(s) dataId/s nessa configuração.'
      }
    },
    loadingDialog: {
      loading: 'Carregando...'
    },
    loadData: {
      upload: 'Carregar arquivo',
      storage: 'Carregar do armazenamento'
    },
    tripInfo: {
      title: 'Como habilitar animação de viagem',
      description1: 'Para animar o caminho, o dado geoJSON deve conter `LineString` na sua propriedade geometry, e as coordenadas na LineString devem ter 4 elementos no seguinte formato',
      code: ' [longitude, latitude, altitude, data] ',
      description2: 'com um ultimo elemento sendo uma data. Um formato de data válida inclui segundos unix como `1564184363` ou em milisegundos como `1564184363000`.',
      example: 'Exemplo:'
    },
    iconInfo: {
      title: 'Como desenhar ícones',
      description1: 'No seu csv, crie uma coluna, coloque o nome do ícone que você quer desenhar nele. Você pode deixar o campo vazio se você não desejar que o ícone apareça para alguns pontos. Quando a coluna tem nome',
      code: 'icon',
      description2: ' kepler.gl irá automaticamente criar uma camada de ícone para você.',
      example: 'Exemplos:',
      icons: 'Ícones'
    },
    storageMapViewer: {
      lastModified: 'Modificado há {lastUpdated}',
      back: 'Voltar'
    },
    overwriteMap: {
      title: 'Salvando mapa...',
      alreadyExists: 'já existe no mapa {mapSaved}. Você desejaria sobrescrever o mapa?'
    },
    loadStorageMap: {
      back: 'Voltar',
      goToPage: 'Vá para a sua página {displayName} do Kepler.gl',
      storageMaps: 'Armazenamento / Mapas',
      noSavedMaps: 'Nenhum mapa salvo'
    }
  },
  header: {
    visibleLayers: 'Camadas Visíveis',
    layerLegend: 'Legenda da Camada'
  },
  interactions: {
    tooltip: 'Dica de contexto',
    brush: 'Pincel',
    coordinate: 'Coordenadas'
  },
  layerBlending: {
    title: 'Mistura de Camadas',
    additive: 'aditivo',
    normal: 'normal',
    subtractive: 'subtrativo'
  },
  columns: {
    title: 'Colunas',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altitude',
    icon: 'ícone',
    geojson: 'geojson',
    arc: {
      lat0: 'origem lat',
      lng0: 'origem lng',
      lat1: 'destino lat',
      lng1: 'destino lng'
    },
    line: {
      alt0: 'origem altitude',
      alt1: 'destino altitude'
    },
    grid: {
      worldUnitSize: 'Tamanho da Grade (km)'
    },
    hexagon: {
      worldUnitSize: 'Raio do Hexágono (km)'
    }
  },
  color: {
    customPalette: 'Paletas customizadas',
    steps: 'caminhos',
    type: 'tipo',
    reversed: 'reverso'
  },
  scale: {
    colorScale: 'Escala da Cor',
    sizeScale: 'Tamanho da Escala',
    strokeScale: 'Escala do Traço',
    scale: 'Escala'
  },
  fileUploader: {
    message: 'Arraste e solte seu(s) arquivo(s) aqui',
    chromeMessage: '*Usuários do chrome: O limite de tamanho de arquivo é 250mb, se você precisa fazer upload de arquivos maiores tente o Safari',
    disclaimer: '*kepler.gl é uma aplicação client-side, sem um servidor backend. Os dados ficam apenas na sua máquina/browser. ' + 'Nenhuma informação ou dados de mapa é enviado para qualquer server.',
    configUploadMessage: 'Envie {fileFormatNames} ou mapas salvos **Json**. Leia mais sobre [**tipos de arquivos suportados**]',
    browseFiles: 'procure seus arquivos',
    uploading: 'Enviando',
    fileNotSupported: 'Arquivo {errorFiles} não é suportado.',
    or: 'ou'
  },
  density: 'densidade',
  'Bug Report': 'Reportar Bug',
  'User Guide': 'Guia do Usuário',
  Save: 'Salvar',
  Share: 'Compartilhar'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sb2NhbGl6YXRpb24vc3JjL3RyYW5zbGF0aW9ucy9wdC50cyJdLCJuYW1lcyI6WyJwcm9wZXJ0eSIsIndlaWdodCIsImxhYmVsIiwiZmlsbENvbG9yIiwiY29sb3IiLCJzdHJva2VDb2xvciIsInJhZGl1cyIsIm91dGxpbmUiLCJzdHJva2UiLCJkZW5zaXR5IiwiaGVpZ2h0Iiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsImJhY2tncm91bmQiLCJwYW5lbCIsInRleHQiLCJsYWJlbFdpdGhJZCIsImZvbnRTaXplIiwiZm9udENvbG9yIiwidGV4dEFuY2hvciIsImFsaWdubWVudCIsImFkZE1vcmVMYWJlbCIsInNpZGViYXIiLCJwYW5lbHMiLCJsYXllciIsImZpbHRlciIsImludGVyYWN0aW9uIiwiYmFzZW1hcCIsInJlcXVpcmVkIiwicHJvcGVydHlCYXNlZE9uIiwiY292ZXJhZ2UiLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVXBkYXRlRXJyb3IiLCJsYXllclZpc0NvbmZpZ3MiLCJzdHJva2VXaWR0aFJhbmdlIiwiZml4ZWRSYWRpdXMiLCJmaXhlZFJhZGl1c0Rlc2NyaXB0aW9uIiwicmFkaXVzUmFuZ2UiLCJjbHVzdGVyUmFkaXVzIiwicmFkaXVzUmFuZ2VQaXhlbHMiLCJvcGFjaXR5IiwiY29sb3JSYW5nZSIsInN0cm9rZUNvbG9yUmFuZ2UiLCJ0YXJnZXRDb2xvciIsImNvbG9yQWdncmVnYXRpb24iLCJoZWlnaHRBZ2dyZWdhdGlvbiIsInJlc29sdXRpb25SYW5nZSIsInNpemVTY2FsZSIsIndvcmxkVW5pdFNpemUiLCJlbGV2YXRpb25TY2FsZSIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3IiLCJlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yRGVzY3JpcHRpb24iLCJlbmFibGVIZWlnaHRab29tRmFjdG9yIiwiaGVpZ2h0U2NhbGUiLCJjb3ZlcmFnZVJhbmdlIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZyIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbiIsImhlaWdodERlc2NyaXB0aW9uIiwiZmlsbCIsImVuYWJsZVBvbHlnb25IZWlnaHQiLCJzaG93V2lyZWZyYW1lIiwid2VpZ2h0SW50ZW5zaXR5Iiwiem9vbVNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJoZWlnaHRNdWx0aXBsaWVyIiwibGF5ZXJNYW5hZ2VyIiwiYWRkRGF0YSIsImFkZExheWVyIiwibGF5ZXJCbGVuZGluZyIsIm1hcE1hbmFnZXIiLCJtYXBTdHlsZSIsImFkZE1hcFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGF5ZXJDb25maWd1cmF0aW9uIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiaG93VG8iLCJmaWx0ZXJNYW5hZ2VyIiwiYWRkRmlsdGVyIiwiZGF0YXNldFRpdGxlIiwic2hvd0RhdGFUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJkYXRhc2V0SW5mbyIsInJvd0NvdW50IiwidG9vbHRpcCIsImhpZGVMYXllciIsInNob3dMYXllciIsImhpZGVGZWF0dXJlIiwic2hvd0ZlYXR1cmUiLCJoaWRlIiwic2hvdyIsInJlbW92ZUxheWVyIiwicmVzZXRBZnRlckVycm9yIiwibGF5ZXJTZXR0aW5ncyIsImNsb3NlUGFuZWwiLCJzd2l0Y2hUb0R1YWxWaWV3Iiwic2hvd0xlZ2VuZCIsImRpc2FibGUzRE1hcCIsIkRyYXdPbk1hcCIsInNlbGVjdExvY2FsZSIsImhpZGVMYXllclBhbmVsIiwic2hvd0xheWVyUGFuZWwiLCJtb3ZlVG9Ub3AiLCJzZWxlY3RCYXNlTWFwU3R5bGUiLCJ0aW1lUGxheWJhY2siLCJjbG91ZFN0b3JhZ2UiLCJ0b29sYmFyIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwic2hhcmVNYXBVUkwiLCJzYXZlTWFwIiwic2VsZWN0IiwicmVjdGFuZ2xlIiwiTE9DQUxFUyIsIm1vZGFsIiwiZGVsZXRlRGF0YXNldCIsImFkZERhdGFUb01hcCIsImFkZEN1c3RvbU1hcGJveFN0eWxlIiwic2hhcmVVUkwiLCJidXR0b24iLCJkb3dubG9hZCIsImFkZFN0eWxlIiwic2F2ZSIsImRlZmF1bHRDYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInJhdGlvVGl0bGUiLCJyYXRpb0Rlc2NyaXB0aW9uIiwicmF0aW9PcmlnaW5hbFNjcmVlbiIsInJhdGlvQ3VzdG9tIiwicmF0aW80XzMiLCJyYXRpbzE2XzkiLCJyZXNvbHV0aW9uVGl0bGUiLCJyZXNvbHV0aW9uRGVzY3JpcHRpb24iLCJtYXBMZWdlbmRUaXRsZSIsIm1hcExlZ2VuZEFkZCIsImRhdGFzZXRTdWJ0aXRsZSIsImFsbERhdGFzZXRzIiwiZGF0YVR5cGVUaXRsZSIsImRhdGFUeXBlU3VidGl0bGUiLCJmaWx0ZXJEYXRhVGl0bGUiLCJmaWx0ZXJEYXRhU3VidGl0bGUiLCJmaWx0ZXJlZERhdGEiLCJ1bmZpbHRlcmVkRGF0YSIsImZpbGVDb3VudCIsImRlbGV0ZURhdGEiLCJ3YXJuaW5nIiwicHVibGlzaFRpdGxlIiwicHVibGlzaFN1YnRpdGxlMSIsInB1Ymxpc2hTdWJ0aXRsZTIiLCJwdWJsaXNoU3VidGl0bGUzIiwicHVibGlzaFN1YnRpdGxlNCIsInB1Ymxpc2hTdWJ0aXRsZTUiLCJwdWJsaXNoU3VidGl0bGU2IiwicHVibGlzaFN1YnRpdGxlNyIsImV4YW1wbGVUb2tlbiIsInBhc3RlVGl0bGUiLCJwYXN0ZVN1YnRpdGxlMSIsInBhc3RlU3VidGl0bGUyIiwibmFtaW5nVGl0bGUiLCJzaGFyZU1hcCIsInNoYXJlVXJpVGl0bGUiLCJzaGFyZVVyaVN1YnRpdGxlIiwiY2xvdWRUaXRsZSIsImNsb3VkU3VidGl0bGUiLCJzaGFyZURpc2NsYWltZXIiLCJnb3RvUGFnZSIsInN0YXR1c1BhbmVsIiwibWFwVXBsb2FkaW5nIiwiZXJyb3IiLCJzdWJ0aXRsZSIsImZvcm1hdFRpdGxlIiwiZm9ybWF0U3VidGl0bGUiLCJodG1sIiwic2VsZWN0aW9uIiwidG9rZW5UaXRsZSIsInRva2VuU3VidGl0bGUiLCJ0b2tlblBsYWNlaG9sZGVyIiwidG9rZW5NaXN1c2VXYXJuaW5nIiwidG9rZW5EaXNjbGFpbWVyIiwidG9rZW5VcGRhdGUiLCJtb2RlVGl0bGUiLCJtb2RlU3VidGl0bGUxIiwibW9kZVN1YnRpdGxlMiIsIm1vZGVEZXNjcmlwdGlvbiIsInJlYWQiLCJlZGl0IiwianNvbiIsImNvbmZpZ1RpdGxlIiwiY29uZmlnRGlzY2xhaW1lciIsImRpc2NsYWltZXIiLCJsb2FkaW5nRGlhbG9nIiwibG9hZGluZyIsImxvYWREYXRhIiwidXBsb2FkIiwic3RvcmFnZSIsInRyaXBJbmZvIiwiZGVzY3JpcHRpb24xIiwiY29kZSIsImRlc2NyaXB0aW9uMiIsImV4YW1wbGUiLCJpY29uSW5mbyIsImljb25zIiwic3RvcmFnZU1hcFZpZXdlciIsImxhc3RNb2RpZmllZCIsImJhY2siLCJvdmVyd3JpdGVNYXAiLCJhbHJlYWR5RXhpc3RzIiwibG9hZFN0b3JhZ2VNYXAiLCJnb1RvUGFnZSIsInN0b3JhZ2VNYXBzIiwibm9TYXZlZE1hcHMiLCJoZWFkZXIiLCJ2aXNpYmxlTGF5ZXJzIiwibGF5ZXJMZWdlbmQiLCJpbnRlcmFjdGlvbnMiLCJicnVzaCIsImNvb3JkaW5hdGUiLCJhZGRpdGl2ZSIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImFsdDAiLCJhbHQxIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwicmV2ZXJzZWQiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsImZpbGVVcGxvYWRlciIsIm1lc3NhZ2UiLCJjaHJvbWVNZXNzYWdlIiwiY29uZmlnVXBsb2FkTWVzc2FnZSIsImJyb3dzZUZpbGVzIiwidXBsb2FkaW5nIiwiZmlsZU5vdFN1cHBvcnRlZCIsIm9yIiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxvQkFEQTtBQUVSQyxJQUFBQSxLQUFLLEVBQUUsUUFGQztBQUdSQyxJQUFBQSxTQUFTLEVBQUUsc0JBSEg7QUFJUkMsSUFBQUEsS0FBSyxFQUFFLEtBSkM7QUFLUkMsSUFBQUEsV0FBVyxFQUFFLGNBTEw7QUFNUkMsSUFBQUEsTUFBTSxFQUFFLE1BTkE7QUFPUkMsSUFBQUEsT0FBTyxFQUFFLFVBUEQ7QUFRUkMsSUFBQUEsTUFBTSxFQUFFLFNBUkE7QUFTUkMsSUFBQUEsT0FBTyxFQUFFLFdBVEQ7QUFVUkMsSUFBQUEsTUFBTSxFQUFFLFFBVkE7QUFXUkMsSUFBQUEsR0FBRyxFQUFFLE1BWEc7QUFZUkMsSUFBQUEsVUFBVSxFQUFFO0FBWkosR0FERztBQWViQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsTUFBTSxFQUFFLFdBREc7QUFFWEMsSUFBQUEsV0FBVyxFQUFFLG9CQUZGO0FBR1hDLElBQUFBLEtBQUssRUFBRSxRQUhJO0FBSVhDLElBQUFBLFVBQVUsRUFBRSxtQkFKRDtBQUtYQyxJQUFBQSxXQUFXLEVBQUUsb0JBTEY7QUFNWEMsSUFBQUEsVUFBVSxFQUFFLGlCQU5EO0FBT1hDLElBQUFBLEtBQUssRUFBRTtBQVBJLEdBZkE7QUF3QmJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxFQUFFLEVBQUUsRUFEQTtBQUVKQyxJQUFBQSxRQUFRLEVBQUUsWUFGTjtBQUdKQyxJQUFBQSxXQUFXLEVBQUUsZUFIVDtBQUlKQyxJQUFBQSxVQUFVLEVBQUUsa0JBSlI7QUFLSkMsSUFBQUEsV0FBVyxFQUFFLG9CQUxUO0FBTUpOLElBQUFBLEtBQUssRUFBRTtBQU5ILEdBeEJPO0FBZ0NiTyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsS0FBSyxFQUFFLGlCQURFO0FBRVQxQixJQUFBQSxLQUFLLEVBQUUsUUFGRTtBQUdUMkIsSUFBQUEsSUFBSSxFQUFFLFNBSEc7QUFJVEMsSUFBQUEsTUFBTSxFQUFFLFdBSkM7QUFLVEMsSUFBQUEsUUFBUSxFQUFFLFdBTEQ7QUFNVEMsSUFBQUEsS0FBSyxFQUFFLE1BTkU7QUFPVEMsSUFBQUEsSUFBSSxFQUFFLE9BUEc7QUFRVCxrQkFBYyxpQkFSTDtBQVNUQyxJQUFBQSxVQUFVLEVBQUU7QUFUSCxHQWhDRTtBQTJDYkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRTtBQUNKbEMsTUFBQUEsS0FBSyxFQUFFLFFBREg7QUFFSm1DLE1BQUFBLFdBQVcsRUFBRSxrQkFGVDtBQUdKQyxNQUFBQSxRQUFRLEVBQUUsa0JBSE47QUFJSkMsTUFBQUEsU0FBUyxFQUFFLGNBSlA7QUFLSkMsTUFBQUEsVUFBVSxFQUFFLGlCQUxSO0FBTUpDLE1BQUFBLFNBQVMsRUFBRSxhQU5QO0FBT0pDLE1BQUFBLFlBQVksRUFBRTtBQVBWO0FBREQsR0EzQ007QUFzRGJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsS0FBSyxFQUFFLFNBREQ7QUFFTkMsTUFBQUEsTUFBTSxFQUFFLFNBRkY7QUFHTkMsTUFBQUEsV0FBVyxFQUFFLFlBSFA7QUFJTkMsTUFBQUEsT0FBTyxFQUFFO0FBSkg7QUFERCxHQXRESTtBQThEYkgsRUFBQUEsS0FBSyxFQUFFO0FBQ0xJLElBQUFBLFFBQVEsRUFBRSxjQURMO0FBRUwzQyxJQUFBQSxNQUFNLEVBQUUsTUFGSDtBQUdMRixJQUFBQSxLQUFLLEVBQUUsS0FIRjtBQUlMRCxJQUFBQSxTQUFTLEVBQUUsc0JBSk47QUFLTEksSUFBQUEsT0FBTyxFQUFFLFVBTEo7QUFNTE4sSUFBQUEsTUFBTSxFQUFFLFdBTkg7QUFPTGlELElBQUFBLGVBQWUsRUFBRSx1QkFQWjtBQVFMQyxJQUFBQSxRQUFRLEVBQUUsV0FSTDtBQVNMM0MsSUFBQUEsTUFBTSxFQUFFLE9BVEg7QUFVTDRDLElBQUFBLFdBQVcsRUFBRSxvQkFWUjtBQVdML0MsSUFBQUEsV0FBVyxFQUFFLGdCQVhSO0FBWUxnRCxJQUFBQSxLQUFLLEVBQUUsUUFaRjtBQWFMQyxJQUFBQSxXQUFXLEVBQUUsdUJBYlI7QUFjTEMsSUFBQUEsc0JBQXNCLEVBQUUsOERBZG5CO0FBZUxDLElBQUFBLFFBQVEsRUFBRSxhQWZMO0FBZ0JMQyxJQUFBQSxzQkFBc0IsRUFBRSw0REFoQm5CO0FBaUJMQyxJQUFBQSxrQkFBa0IsRUFBRSx5REFqQmY7QUFrQkxDLElBQUFBLFdBQVcsRUFBRSxzQkFsQlI7QUFtQkwsZUFBVyxXQW5CTjtBQW9CTCxzQkFBa0IscUJBcEJiO0FBcUJMQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFLE9BREg7QUFFSkMsTUFBQUEsR0FBRyxFQUFFLE1BRkQ7QUFHSkMsTUFBQUEsSUFBSSxFQUFFLE9BSEY7QUFJSkMsTUFBQUEsSUFBSSxFQUFFLE9BSkY7QUFLSkMsTUFBQUEsTUFBTSxFQUFFLFVBTEo7QUFNSkMsTUFBQUEsT0FBTyxFQUFFLFVBTkw7QUFPSkMsTUFBQUEsT0FBTyxFQUFFLFNBUEw7QUFRSkMsTUFBQUEsT0FBTyxFQUFFLE9BUkw7QUFTSkMsTUFBQUEsSUFBSSxFQUFFLE1BVEY7QUFVSkMsTUFBQUEsT0FBTyxFQUFFLGVBVkw7QUFXSkMsTUFBQUEsT0FBTyxFQUFFLFVBWEw7QUFZSkMsTUFBQUEsU0FBUyxFQUFFLElBWlA7QUFhSkMsTUFBQUEsSUFBSSxFQUFFLFFBYkY7QUFjSkMsTUFBQUEsRUFBRSxFQUFFLElBZEE7QUFlSixZQUFNO0FBZkYsS0FyQkQ7QUFzQ0xDLElBQUFBLGdCQUFnQixFQUNkO0FBdkNHLEdBOURNO0FBdUdiQyxFQUFBQSxlQUFlLEVBQUU7QUFDZnhCLElBQUFBLFdBQVcsRUFBRSxrQkFERTtBQUVmeUIsSUFBQUEsZ0JBQWdCLEVBQUUsNkJBRkg7QUFHZnZFLElBQUFBLE1BQU0sRUFBRSxNQUhPO0FBSWZ3RSxJQUFBQSxXQUFXLEVBQUUsMEJBSkU7QUFLZkMsSUFBQUEsc0JBQXNCLEVBQUUsaUVBTFQ7QUFNZkMsSUFBQUEsV0FBVyxFQUFFLGlCQU5FO0FBT2ZDLElBQUFBLGFBQWEsRUFBRSwrQkFQQTtBQVFmQyxJQUFBQSxpQkFBaUIsRUFBRSwyQkFSSjtBQVNmQyxJQUFBQSxPQUFPLEVBQUUsV0FUTTtBQVVmaEMsSUFBQUEsUUFBUSxFQUFFLFdBVks7QUFXZjVDLElBQUFBLE9BQU8sRUFBRSxVQVhNO0FBWWY2RSxJQUFBQSxVQUFVLEVBQUUsZ0JBWkc7QUFhZjVFLElBQUFBLE1BQU0sRUFBRSxTQWJPO0FBY2ZILElBQUFBLFdBQVcsRUFBRSxnQkFkRTtBQWVmZ0YsSUFBQUEsZ0JBQWdCLEVBQUUsMkJBZkg7QUFnQmZDLElBQUFBLFdBQVcsRUFBRSxnQkFoQkU7QUFpQmZDLElBQUFBLGdCQUFnQixFQUFFLGtCQWpCSDtBQWtCZkMsSUFBQUEsaUJBQWlCLEVBQUUscUJBbEJKO0FBbUJmQyxJQUFBQSxlQUFlLEVBQUUsc0JBbkJGO0FBb0JmQyxJQUFBQSxTQUFTLEVBQUUsbUJBcEJJO0FBcUJmQyxJQUFBQSxhQUFhLEVBQUUsMkJBckJBO0FBc0JmQyxJQUFBQSxjQUFjLEVBQUUsb0JBdEJEO0FBdUJmQyxJQUFBQSx5QkFBeUIsRUFBRSwrQkF2Qlo7QUF3QmZDLElBQUFBLG9DQUFvQyxFQUNsQyw0REF6QmE7QUEwQmZDLElBQUFBLHNCQUFzQixFQUFFLDhCQTFCVDtBQTJCZkMsSUFBQUEsV0FBVyxFQUFFLGtCQTNCRTtBQTRCZkMsSUFBQUEsYUFBYSxFQUFFLHNCQTVCQTtBQTZCZkMsSUFBQUEsc0JBQXNCLEVBQUUsK0JBN0JUO0FBOEJmQyxJQUFBQSxpQ0FBaUMsRUFBRSxvREE5QnBCO0FBK0JmekYsSUFBQUEsTUFBTSxFQUFFLFFBL0JPO0FBZ0NmMEYsSUFBQUEsaUJBQWlCLEVBQ2YsOEVBakNhO0FBa0NmQyxJQUFBQSxJQUFJLEVBQUUsZUFsQ1M7QUFtQ2ZDLElBQUFBLG1CQUFtQixFQUFFLDhCQW5DTjtBQW9DZkMsSUFBQUEsYUFBYSxFQUFFLG1CQXBDQTtBQXFDZkMsSUFBQUEsZUFBZSxFQUFFLDBCQXJDRjtBQXNDZkMsSUFBQUEsU0FBUyxFQUFFLGdCQXRDSTtBQXVDZkMsSUFBQUEsV0FBVyxFQUFFLG1CQXZDRTtBQXdDZkMsSUFBQUEsZ0JBQWdCLEVBQUU7QUF4Q0gsR0F2R0o7QUFpSmJDLEVBQUFBLFlBQVksRUFBRTtBQUNaQyxJQUFBQSxPQUFPLEVBQUUsaUJBREc7QUFFWkMsSUFBQUEsUUFBUSxFQUFFLGtCQUZFO0FBR1pDLElBQUFBLGFBQWEsRUFBRTtBQUhILEdBakpEO0FBc0piQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsUUFBUSxFQUFFLGdCQURBO0FBRVZDLElBQUFBLFdBQVcsRUFBRSwwQkFGSDtBQUdWLHVCQUFtQixvQkFIVDtBQUlWQyxJQUFBQSxlQUFlLEVBQUU7QUFKUCxHQXRKQztBQTRKYkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFDbEJDLElBQUFBLGtCQUFrQixFQUFFLGtEQURGO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUU7QUFGVyxHQTVKUDtBQWdLYkMsRUFBQUEsYUFBYSxFQUFFO0FBQ2JDLElBQUFBLFNBQVMsRUFBRTtBQURFLEdBaEtGO0FBbUtiQyxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsYUFBYSxFQUFFLHlCQURIO0FBRVpDLElBQUFBLGFBQWEsRUFBRTtBQUZILEdBbktEO0FBdUtiQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsUUFBUSxFQUFFO0FBREMsR0F2S0E7QUEwS2JDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxTQUFTLEVBQUUsaUJBREo7QUFFUEMsSUFBQUEsU0FBUyxFQUFFLGdCQUZKO0FBR1BDLElBQUFBLFdBQVcsRUFBRSxzQkFITjtBQUlQQyxJQUFBQSxXQUFXLEVBQUUscUJBSk47QUFLUEMsSUFBQUEsSUFBSSxFQUFFLFVBTEM7QUFNUEMsSUFBQUEsSUFBSSxFQUFFLFNBTkM7QUFPUEMsSUFBQUEsV0FBVyxFQUFFLGdCQVBOO0FBUVBDLElBQUFBLGVBQWUsRUFBRSx1Q0FSVjtBQVNQQyxJQUFBQSxhQUFhLEVBQUUseUJBVFI7QUFVUEMsSUFBQUEsVUFBVSxFQUFFLHFCQVZMO0FBV1BDLElBQUFBLGdCQUFnQixFQUFFLHdDQVhYO0FBWVBDLElBQUFBLFVBQVUsRUFBRSxpQkFaTDtBQWFQQyxJQUFBQSxZQUFZLEVBQUUscUJBYlA7QUFjUEMsSUFBQUEsU0FBUyxFQUFFLGtCQWRKO0FBZVBDLElBQUFBLFlBQVksRUFBRSxtQkFmUDtBQWdCUEMsSUFBQUEsY0FBYyxFQUFFLDJCQWhCVDtBQWlCUEMsSUFBQUEsY0FBYyxFQUFFLDBCQWpCVDtBQWtCUEMsSUFBQUEsU0FBUyxFQUFFLCtCQWxCSjtBQW1CUEMsSUFBQUEsa0JBQWtCLEVBQUUsa0NBbkJiO0FBb0JQLGNBQVEsU0FwQkQ7QUFxQlBDLElBQUFBLFlBQVksRUFBRSxxQkFyQlA7QUFzQlBDLElBQUFBLFlBQVksRUFBRSxxQkF0QlA7QUF1QlAsYUFBUztBQXZCRixHQTFLSTtBQW1NYkMsRUFBQUEsT0FBTztBQUNMQyxJQUFBQSxXQUFXLEVBQUUsaUJBRFI7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLGdCQUZQO0FBR0xDLElBQUFBLFNBQVMsRUFBRSxlQUhOO0FBSUxDLElBQUFBLFdBQVcsRUFBRSwwQkFKUjtBQUtMQyxJQUFBQSxPQUFPLEVBQUUsYUFMSjtBQU1MQyxJQUFBQSxNQUFNLEVBQUUsWUFOSDtBQU9MeEYsSUFBQUEsT0FBTyxFQUFFLFVBUEo7QUFRTHlGLElBQUFBLFNBQVMsRUFBRSxXQVJOO0FBU0x4QixJQUFBQSxJQUFJLEVBQUUsVUFURDtBQVVMQyxJQUFBQSxJQUFJLEVBQUU7QUFWRCxLQVdGd0IsZ0JBWEUsQ0FuTU07QUFnTmJDLEVBQUFBLEtBQUssRUFBRTtBQUNMakksSUFBQUEsS0FBSyxFQUFFO0FBQ0xrSSxNQUFBQSxhQUFhLEVBQUUsMkJBRFY7QUFFTEMsTUFBQUEsWUFBWSxFQUFFLHlCQUZUO0FBR0xWLE1BQUFBLFdBQVcsRUFBRSxpQkFIUjtBQUlMQyxNQUFBQSxVQUFVLEVBQUUsZ0JBSlA7QUFLTEMsTUFBQUEsU0FBUyxFQUFFLGVBTE47QUFNTFMsTUFBQUEsb0JBQW9CLEVBQUUscUNBTmpCO0FBT0xQLE1BQUFBLE9BQU8sRUFBRSxhQVBKO0FBUUxRLE1BQUFBLFFBQVEsRUFBRTtBQVJMLEtBREY7QUFXTEMsSUFBQUEsTUFBTSxFQUFFO0FBQ04sZ0JBQVEsU0FERjtBQUVOQyxNQUFBQSxRQUFRLEVBQUUsVUFGSjtBQUdOLGdCQUFRLFVBSEY7QUFJTkMsTUFBQUEsUUFBUSxFQUFFLGtCQUpKO0FBS05DLE1BQUFBLElBQUksRUFBRSxRQUxBO0FBTU5DLE1BQUFBLGFBQWEsRUFBRSxVQU5UO0FBT05DLE1BQUFBLGNBQWMsRUFBRTtBQVBWLEtBWEg7QUFvQkxsQixJQUFBQSxXQUFXLEVBQUU7QUFDWG1CLE1BQUFBLFVBQVUsRUFBRSxXQUREO0FBRVhDLE1BQUFBLGdCQUFnQixFQUFFLHVDQUZQO0FBR1hDLE1BQUFBLG1CQUFtQixFQUFFLGVBSFY7QUFJWEMsTUFBQUEsV0FBVyxFQUFFLGFBSkY7QUFLWEMsTUFBQUEsUUFBUSxFQUFFLEtBTEM7QUFNWEMsTUFBQUEsU0FBUyxFQUFFLE1BTkE7QUFPWEMsTUFBQUEsZUFBZSxFQUFFLFdBUE47QUFRWEMsTUFBQUEscUJBQXFCLEVBQUUsMENBUlo7QUFTWEMsTUFBQUEsY0FBYyxFQUFFLGlCQVRMO0FBVVhDLE1BQUFBLFlBQVksRUFBRTtBQVZILEtBcEJSO0FBZ0NMM0IsSUFBQUEsVUFBVSxFQUFFO0FBQ1Y3QixNQUFBQSxZQUFZLEVBQUUsbUJBREo7QUFFVnlELE1BQUFBLGVBQWUsRUFBRSxvREFGUDtBQUdWQyxNQUFBQSxXQUFXLEVBQUUsT0FISDtBQUlWQyxNQUFBQSxhQUFhLEVBQUUsY0FKTDtBQUtWQyxNQUFBQSxnQkFBZ0IsRUFBRSxnREFMUjtBQU1WQyxNQUFBQSxlQUFlLEVBQUUsZUFOUDtBQU9WQyxNQUFBQSxrQkFBa0IsRUFBRSxzRUFQVjtBQVFWQyxNQUFBQSxZQUFZLEVBQUUsaUJBUko7QUFTVkMsTUFBQUEsY0FBYyxFQUFFLHFCQVROO0FBVVZDLE1BQUFBLFNBQVMsRUFBRSxzQkFWRDtBQVdWN0QsTUFBQUEsUUFBUSxFQUFFO0FBWEEsS0FoQ1A7QUE2Q0w4RCxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsT0FBTyxFQUFFO0FBREMsS0E3Q1A7QUFnREx4QixJQUFBQSxRQUFRLEVBQUU7QUFDUnlCLE1BQUFBLFlBQVksRUFBRSxxRUFETjtBQUVSQyxNQUFBQSxnQkFBZ0IsRUFBRSx5Q0FGVjtBQUdSQyxNQUFBQSxnQkFBZ0IsRUFBRSxHQUhWO0FBSVJDLE1BQUFBLGdCQUFnQixFQUFFLFVBSlY7QUFLUkMsTUFBQUEsZ0JBQWdCLEVBQUUsT0FMVjtBQU1SQyxNQUFBQSxnQkFBZ0IsRUFBRSwwQ0FOVjtBQU9SQyxNQUFBQSxnQkFBZ0IsRUFBRSxpQkFQVjtBQVFSQyxNQUFBQSxnQkFBZ0IsRUFDZCxvRkFUTTtBQVVSQyxNQUFBQSxZQUFZLEVBQUUsd0JBVk47QUFXUkMsTUFBQUEsVUFBVSxFQUFFLDZCQVhKO0FBWVJDLE1BQUFBLGNBQWMsRUFBRSxhQVpSO0FBYVJDLE1BQUFBLGNBQWMsRUFBRSxlQWJSO0FBY1JDLE1BQUFBLFdBQVcsRUFBRTtBQWRMLEtBaERMO0FBZ0VMQyxJQUFBQSxRQUFRLEVBQUU7QUFDUkMsTUFBQUEsYUFBYSxFQUFFLDRCQURQO0FBRVJDLE1BQUFBLGdCQUFnQixFQUFFLCtDQUZWO0FBR1JDLE1BQUFBLFVBQVUsRUFBRSxxQkFISjtBQUlSQyxNQUFBQSxhQUFhLEVBQUUsNEVBSlA7QUFLUkMsTUFBQUEsZUFBZSxFQUNiLDBJQUNBLHNHQVBNO0FBUVJDLE1BQUFBLFFBQVEsRUFBRTtBQVJGLEtBaEVMO0FBMEVMQyxJQUFBQSxXQUFXLEVBQUU7QUFDWEMsTUFBQUEsWUFBWSxFQUFFLGVBREg7QUFFWEMsTUFBQUEsS0FBSyxFQUFFO0FBRkksS0ExRVI7QUE4RUwxRCxJQUFBQSxPQUFPLEVBQUU7QUFDUDdILE1BQUFBLEtBQUssRUFBRSxxQkFEQTtBQUVQd0wsTUFBQUEsUUFBUSxFQUFFO0FBRkgsS0E5RUo7QUFrRkw3RCxJQUFBQSxTQUFTLEVBQUU7QUFDVDhELE1BQUFBLFdBQVcsRUFBRSxpQkFESjtBQUVUQyxNQUFBQSxjQUFjLEVBQUUsMENBRlA7QUFHVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFNBQVMsRUFBRSxrREFEUDtBQUVKQyxRQUFBQSxVQUFVLEVBQUUsMkJBRlI7QUFHSkMsUUFBQUEsYUFBYSxFQUFFLHlFQUhYO0FBSUpDLFFBQUFBLGdCQUFnQixFQUFFLG1DQUpkO0FBS0pDLFFBQUFBLGtCQUFrQixFQUNoQiw4SkFORTtBQU9KQyxRQUFBQSxlQUFlLEVBQ2IsNkZBUkU7QUFTSkMsUUFBQUEsV0FBVyxFQUFFLHdEQVRUO0FBVUpDLFFBQUFBLFNBQVMsRUFBRSxjQVZQO0FBV0pDLFFBQUFBLGFBQWEsRUFBRSx3Q0FYWDtBQVlKQyxRQUFBQSxhQUFhLEVBQUUsTUFaWDtBQWFKQyxRQUFBQSxlQUFlLEVBQUUsbUNBYmI7QUFjSkMsUUFBQUEsSUFBSSxFQUFFLEtBZEY7QUFlSkMsUUFBQUEsSUFBSSxFQUFFO0FBZkYsT0FIRztBQW9CVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFdBQVcsRUFBRSx1QkFEVDtBQUVKQyxRQUFBQSxnQkFBZ0IsRUFDZCxvS0FIRTtBQUlKZixRQUFBQSxTQUFTLEVBQ1AseUpBTEU7QUFNSmdCLFFBQUFBLFVBQVUsRUFDUixvTEFDQTtBQVJFO0FBcEJHLEtBbEZOO0FBaUhMQyxJQUFBQSxhQUFhLEVBQUU7QUFDYkMsTUFBQUEsT0FBTyxFQUFFO0FBREksS0FqSFY7QUFvSExDLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxNQUFNLEVBQUUsa0JBREE7QUFFUkMsTUFBQUEsT0FBTyxFQUFFO0FBRkQsS0FwSEw7QUF3SExDLElBQUFBLFFBQVEsRUFBRTtBQUNSbE4sTUFBQUEsS0FBSyxFQUFFLG1DQURDO0FBRVJtTixNQUFBQSxZQUFZLEVBQ1Ysc0tBSE07QUFJUkMsTUFBQUEsSUFBSSxFQUFFLHlDQUpFO0FBS1JDLE1BQUFBLFlBQVksRUFDVixrSkFOTTtBQU9SQyxNQUFBQSxPQUFPLEVBQUU7QUFQRCxLQXhITDtBQWlJTEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1J2TixNQUFBQSxLQUFLLEVBQUUsc0JBREM7QUFFUm1OLE1BQUFBLFlBQVksRUFDVix1TUFITTtBQUlSQyxNQUFBQSxJQUFJLEVBQUUsTUFKRTtBQUtSQyxNQUFBQSxZQUFZLEVBQUUscUVBTE47QUFNUkMsTUFBQUEsT0FBTyxFQUFFLFdBTkQ7QUFPUkUsTUFBQUEsS0FBSyxFQUFFO0FBUEMsS0FqSUw7QUEwSUxDLElBQUFBLGdCQUFnQixFQUFFO0FBQ2hCQyxNQUFBQSxZQUFZLEVBQUUsNkJBREU7QUFFaEJDLE1BQUFBLElBQUksRUFBRTtBQUZVLEtBMUliO0FBOElMQyxJQUFBQSxZQUFZLEVBQUU7QUFDWjVOLE1BQUFBLEtBQUssRUFBRSxrQkFESztBQUVaNk4sTUFBQUEsYUFBYSxFQUFFO0FBRkgsS0E5SVQ7QUFrSkxDLElBQUFBLGNBQWMsRUFBRTtBQUNkSCxNQUFBQSxJQUFJLEVBQUUsUUFEUTtBQUVkSSxNQUFBQSxRQUFRLEVBQUUsaURBRkk7QUFHZEMsTUFBQUEsV0FBVyxFQUFFLHVCQUhDO0FBSWRDLE1BQUFBLFdBQVcsRUFBRTtBQUpDO0FBbEpYLEdBaE5NO0FBeVdiQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsYUFBYSxFQUFFLGtCQURUO0FBRU5DLElBQUFBLFdBQVcsRUFBRTtBQUZQLEdBeldLO0FBNldiQyxFQUFBQSxZQUFZLEVBQUU7QUFDWm5JLElBQUFBLE9BQU8sRUFBRSxrQkFERztBQUVab0ksSUFBQUEsS0FBSyxFQUFFLFFBRks7QUFHWkMsSUFBQUEsVUFBVSxFQUFFO0FBSEEsR0E3V0Q7QUFrWGJwSixFQUFBQSxhQUFhLEVBQUU7QUFDYm5GLElBQUFBLEtBQUssRUFBRSxvQkFETTtBQUVid08sSUFBQUEsUUFBUSxFQUFFLFNBRkc7QUFHYkMsSUFBQUEsTUFBTSxFQUFFLFFBSEs7QUFJYkMsSUFBQUEsV0FBVyxFQUFFO0FBSkEsR0FsWEY7QUF3WGJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQM08sSUFBQUEsS0FBSyxFQUFFLFNBREE7QUFFUDRPLElBQUFBLEdBQUcsRUFBRSxLQUZFO0FBR1BDLElBQUFBLEdBQUcsRUFBRSxLQUhFO0FBSVBDLElBQUFBLFFBQVEsRUFBRSxVQUpIO0FBS1ByTSxJQUFBQSxJQUFJLEVBQUUsT0FMQztBQU1QRixJQUFBQSxPQUFPLEVBQUUsU0FORjtBQU9QTCxJQUFBQSxHQUFHLEVBQUU7QUFDSDZNLE1BQUFBLElBQUksRUFBRSxZQURIO0FBRUhDLE1BQUFBLElBQUksRUFBRSxZQUZIO0FBR0hDLE1BQUFBLElBQUksRUFBRSxhQUhIO0FBSUhDLE1BQUFBLElBQUksRUFBRTtBQUpILEtBUEU7QUFhUC9NLElBQUFBLElBQUksRUFBRTtBQUNKZ04sTUFBQUEsSUFBSSxFQUFFLGlCQURGO0FBRUpDLE1BQUFBLElBQUksRUFBRTtBQUZGLEtBYkM7QUFpQlBoTixJQUFBQSxJQUFJLEVBQUU7QUFDSjJCLE1BQUFBLGFBQWEsRUFBRTtBQURYLEtBakJDO0FBb0JQcEIsSUFBQUEsT0FBTyxFQUFFO0FBQ1BvQixNQUFBQSxhQUFhLEVBQUU7QUFEUjtBQXBCRixHQXhYSTtBQWdaYnZGLEVBQUFBLEtBQUssRUFBRTtBQUNMNlEsSUFBQUEsYUFBYSxFQUFFLHNCQURWO0FBRUxDLElBQUFBLEtBQUssRUFBRSxVQUZGO0FBR0x0TixJQUFBQSxJQUFJLEVBQUUsTUFIRDtBQUlMdU4sSUFBQUEsUUFBUSxFQUFFO0FBSkwsR0FoWk07QUFzWmJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxVQUFVLEVBQUUsZUFEUDtBQUVMM0wsSUFBQUEsU0FBUyxFQUFFLG1CQUZOO0FBR0w0TCxJQUFBQSxXQUFXLEVBQUUsaUJBSFI7QUFJTEYsSUFBQUEsS0FBSyxFQUFFO0FBSkYsR0F0Wk07QUE0WmJHLEVBQUFBLFlBQVksRUFBRTtBQUNaQyxJQUFBQSxPQUFPLEVBQUUsd0NBREc7QUFFWkMsSUFBQUEsYUFBYSxFQUNYLDhIQUhVO0FBSVpqRCxJQUFBQSxVQUFVLEVBQ1Isb0hBQ0EscUVBTlU7QUFPWmtELElBQUFBLG1CQUFtQixFQUNqQixzR0FSVTtBQVNaQyxJQUFBQSxXQUFXLEVBQUUsdUJBVEQ7QUFVWkMsSUFBQUEsU0FBUyxFQUFFLFVBVkM7QUFXWkMsSUFBQUEsZ0JBQWdCLEVBQUUsdUNBWE47QUFZWkMsSUFBQUEsRUFBRSxFQUFFO0FBWlEsR0E1WkQ7QUEwYWJyUixFQUFBQSxPQUFPLEVBQUUsV0ExYUk7QUEyYWIsZ0JBQWMsY0EzYUQ7QUE0YWIsZ0JBQWMsaUJBNWFEO0FBNmFic1IsRUFBQUEsSUFBSSxFQUFFLFFBN2FPO0FBOGFiQyxFQUFBQSxLQUFLLEVBQUU7QUE5YU0sQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7TE9DQUxFU30gZnJvbSAnLi4vbG9jYWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcGVydHk6IHtcbiAgICB3ZWlnaHQ6ICdFc3Blc3N1cmEgZG8gdGV4dG8nLFxuICAgIGxhYmVsOiAnUsOzdHVsbycsXG4gICAgZmlsbENvbG9yOiAnQ29yIGRvIHByZWVuY2hpbWVudG8nLFxuICAgIGNvbG9yOiAnQ29yJyxcbiAgICBzdHJva2VDb2xvcjogJ0NvciBkYSBib3JkYScsXG4gICAgcmFkaXVzOiAnUmFpbycsXG4gICAgb3V0bGluZTogJ0NvbnRvcm5vJyxcbiAgICBzdHJva2U6ICdUcmHDp2FkbycsXG4gICAgZGVuc2l0eTogJ0RlbnNpZGFkZScsXG4gICAgaGVpZ2h0OiAnQWx0dXJhJyxcbiAgICBzdW06ICdTb21hJyxcbiAgICBwb2ludENvdW50OiAnQ29udGFnZW0gZGUgUG9udG9zJ1xuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHNlYXJjaDogJ1Blc3F1aXNhcicsXG4gICAgc2VsZWN0RmllbGQ6ICdTZWxlY2lvbmUgdW0gY2FtcG8nLFxuICAgIHlBeGlzOiAnRWl4byBZJyxcbiAgICBzZWxlY3RUeXBlOiAnU2VsZWNpb25lIHVtIFRpcG8nLFxuICAgIHNlbGVjdFZhbHVlOiAnU2VsZWNpb25lIHVtIHZhbG9yJyxcbiAgICBlbnRlclZhbHVlOiAnSW5zaXJhIHVtIHZhbG9yJyxcbiAgICBlbXB0eTogJ1ZhemlvJ1xuICB9LFxuICBtaXNjOiB7XG4gICAgYnk6ICcnLFxuICAgIHZhbHVlc0luOiAnVmFsb3JlcyBlbScsXG4gICAgdmFsdWVFcXVhbHM6ICdWYWxvciBpZ3VhbCBhJyxcbiAgICBkYXRhU291cmNlOiAnT3JpZ2VtIGRvcyBkYWRvcycsXG4gICAgYnJ1c2hSYWRpdXM6ICdSYWlvIGRvIFRyYcOnbyAoa20pJyxcbiAgICBlbXB0eTogJyAnXG4gIH0sXG4gIG1hcExheWVyczoge1xuICAgIHRpdGxlOiAnQ2FtYWRhcyBkbyBtYXBhJyxcbiAgICBsYWJlbDogJ1LDs3R1bG8nLFxuICAgIHJvYWQ6ICdFc3RyYWRhJyxcbiAgICBib3JkZXI6ICdGcm9udGVpcmEnLFxuICAgIGJ1aWxkaW5nOiAnRWRpZsOtY2lvcycsXG4gICAgd2F0ZXI6ICfDgWd1YScsXG4gICAgbGFuZDogJ1RlcnJhJyxcbiAgICAnM2RCdWlsZGluZyc6ICdFZGlmw61jaW9zIGVtIDNkJyxcbiAgICBiYWNrZ3JvdW5kOiAnRnVuZG8nXG4gIH0sXG4gIHBhbmVsOiB7XG4gICAgdGV4dDoge1xuICAgICAgbGFiZWw6ICdSw7N0dWxvJyxcbiAgICAgIGxhYmVsV2l0aElkOiAnUsOzdHVsbyB7bGFiZWxJZH0nLFxuICAgICAgZm9udFNpemU6ICdUYW1hbmhvIGRhIGZvbnRlJyxcbiAgICAgIGZvbnRDb2xvcjogJ0NvciBkYSBmb250ZScsXG4gICAgICB0ZXh0QW5jaG9yOiAnw4JuY29yYSBkbyB0ZXh0bycsXG4gICAgICBhbGlnbm1lbnQ6ICdBbGluaGFtZW50bycsXG4gICAgICBhZGRNb3JlTGFiZWw6ICdBZGljaW9uYXIgbWFpcyBSw7N0dWxvcydcbiAgICB9XG4gIH0sXG4gIHNpZGViYXI6IHtcbiAgICBwYW5lbHM6IHtcbiAgICAgIGxheWVyOiAnQ2FtYWRhcycsXG4gICAgICBmaWx0ZXI6ICdGaWx0cm9zJyxcbiAgICAgIGludGVyYWN0aW9uOiAnSW50ZXJhw6fDtWVzJyxcbiAgICAgIGJhc2VtYXA6ICdNYXBhIGJhc2UnXG4gICAgfVxuICB9LFxuICBsYXllcjoge1xuICAgIHJlcXVpcmVkOiAnT2JyaWdhdMOzcmlvKicsXG4gICAgcmFkaXVzOiAnUmFpbycsXG4gICAgY29sb3I6ICdDb3InLFxuICAgIGZpbGxDb2xvcjogJ0NvciBkZSBwcmVlbmNoaW1lbnRvJyxcbiAgICBvdXRsaW5lOiAnQ29udG9ybm8nLFxuICAgIHdlaWdodDogJ0VzcGVzc3VyYScsXG4gICAgcHJvcGVydHlCYXNlZE9uOiAne3Byb3BlcnR5fSBiYXNlYWRhIGVtJyxcbiAgICBjb3ZlcmFnZTogJ0NvYmVydHVyYScsXG4gICAgc3Ryb2tlOiAnVHJhw6dvJyxcbiAgICBzdHJva2VXaWR0aDogJ0xhcmd1cmEgZG8gVHJhw6dhZG8nLFxuICAgIHN0cm9rZUNvbG9yOiAnQ29yIGRvIFRyYcOnYWRvJyxcbiAgICBiYXNpYzogJ0LDoXNpY28nLFxuICAgIHRyYWlsTGVuZ3RoOiAnQ29tcHJpbWVudG8gZGEgdHJpbGhhJyxcbiAgICB0cmFpbExlbmd0aERlc2NyaXB0aW9uOiAnTsO6bWVybyBkZSBzZWd1bmRvcyBwYXJhIHVtIGNhbWluaG8gY29tcGxldGFtZW50ZSBkZXNhcGFyZWNlcicsXG4gICAgbmV3TGF5ZXI6ICdub3ZhIGNhbWFkYScsXG4gICAgZWxldmF0aW9uQnlEZXNjcmlwdGlvbjogJ1F1YW5kbyBkZXNsaWdhZG8sIGEgYWx0dXJhIMOpIGJhc2VhZGEgbmEgY29udGFnZW0gZGUgcG9udG9zJyxcbiAgICBjb2xvckJ5RGVzY3JpcHRpb246ICdRdWFuZG8gZGVzbGlnYWRvLCBhIGNvciDDqSBiYXNlYWRhIG5hIGNvbnRhZ2VtIGRlIHBvbnRvcycsXG4gICAgYWdncmVnYXRlQnk6ICd7ZmllbGR9IGFncmVnYWRvIHBvcicsXG4gICAgJzNETW9kZWwnOiAnTW9kZWxvIDNEJyxcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnT3DDp8O1ZXMgZG8gTW9kZWxvIDNEJyxcbiAgICB0eXBlOiB7XG4gICAgICBwb2ludDogJ3BvbnRvJyxcbiAgICAgIGFyYzogJ2FyY28nLFxuICAgICAgbGluZTogJ2xpbmhhJyxcbiAgICAgIGdyaWQ6ICdncmFkZScsXG4gICAgICBoZXhiaW46ICdoZXjDoWdvbm8nLFxuICAgICAgcG9seWdvbjogJ3BvbMOtZ29ubycsXG4gICAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgICBjbHVzdGVyOiAnZ3J1cG8nLFxuICAgICAgaWNvbjogJ2ljb24nLFxuICAgICAgaGVhdG1hcDogJ21hcGEgZGUgY2Fsb3InLFxuICAgICAgaGV4YWdvbjogJ2hleMOhZ29ubycsXG4gICAgICBoZXhhZ29uaWQ6ICdIMycsXG4gICAgICB0cmlwOiAndmlhZ2VtJyxcbiAgICAgIHMyOiAnUzInLFxuICAgICAgJzNkJzogJzNEJ1xuICAgIH0sXG4gICAgbGF5ZXJVcGRhdGVFcnJvcjpcbiAgICAgICdPY29ycmV1IHVtIGVycm8gYW8gYXR1YWxpemFyIGEgY2FtYWRhOiB7ZXJyb3JNZXNzYWdlfS4gQ2VydGlmaXF1ZS1zZSBkZSBxdWUgbyBmb3JtYXRvIGRvcyBkYWRvcyBkZSBlbnRyYWRhIHNlamEgdsOhbGlkby4nXG4gIH0sXG4gIGxheWVyVmlzQ29uZmlnczoge1xuICAgIHN0cm9rZVdpZHRoOiAnTGFyZ3VyYSBkbyBUcmHDp28nLFxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdBbGNhbmNlIGRhIExhcmd1cmEgZG8gVHJhw6dvJyxcbiAgICByYWRpdXM6ICdSYWlvJyxcbiAgICBmaXhlZFJhZGl1czogJ1JhaW8gYWp1c3RhZG8gcGFyYSBtZXRybycsXG4gICAgZml4ZWRSYWRpdXNEZXNjcmlwdGlvbjogJ1JhaW8gZG8gTWFwYSBwYXJhIFJhaW8gYWJzb2x1dG8gZW0gbWV0cm9zLCBlLmcuIDUgcGFyYSA1IG1ldHJvcycsXG4gICAgcmFkaXVzUmFuZ2U6ICdBbGNhbmNlIGRvIFJhaW8nLFxuICAgIGNsdXN0ZXJSYWRpdXM6ICdSYWlvIGRvIEFncnVwYW1lbnRvIGVtIHBpeGVscycsXG4gICAgcmFkaXVzUmFuZ2VQaXhlbHM6ICdBbGNhbmNlIGRvIFJhaW8gZW0gcGl4ZWxzJyxcbiAgICBvcGFjaXR5OiAnT3BhY2lkYWRlJyxcbiAgICBjb3ZlcmFnZTogJ0NvYmVydHVyYScsXG4gICAgb3V0bGluZTogJ0NvbnRvcm5vJyxcbiAgICBjb2xvclJhbmdlOiAnQWxjYW5jZSBkYSBDb3InLFxuICAgIHN0cm9rZTogJ1RyYcOnYWRvJyxcbiAgICBzdHJva2VDb2xvcjogJ0NvciBkbyBUcmHDp2FkbycsXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ0FsY2FuY2UgZGEgQ29yIGRvIFRyYcOnYWRvJyxcbiAgICB0YXJnZXRDb2xvcjogJ0NvciBkZSBkZXN0aW5vJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnQWdyZWdhw6fDo28gZGEgQ29yJyxcbiAgICBoZWlnaHRBZ2dyZWdhdGlvbjogJ0FncmVnYcOnw6NvIGRhIEFsdHVyYScsXG4gICAgcmVzb2x1dGlvblJhbmdlOiAnQWxjYW5jZSBkYSBSZXNvbHXDp8OjbycsXG4gICAgc2l6ZVNjYWxlOiAnRXNjYWxhIGRlIHRhbWFuaG8nLFxuICAgIHdvcmxkVW5pdFNpemU6ICdUYW1hbmhvIHVuaXTDoXJpbyBkbyBtdW5kbycsXG4gICAgZWxldmF0aW9uU2NhbGU6ICdFc2NhbGEgZGUgRWxldmHDp8OjbycsXG4gICAgZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvcjogJ1VzZSBmYXRvciBkZSB6b29tIGRlIGVsZXZhw6fDo28nLFxuICAgIGVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3JEZXNjcmlwdGlvbjpcbiAgICAgICdBanVzdGUgYSBhbHR1cmEgLyBlbGV2YcOnw6NvIGNvbSBiYXNlIG5vIGZhdG9yIGRlIHpvb20gYXR1YWwnLFxuICAgIGVuYWJsZUhlaWdodFpvb21GYWN0b3I6ICdVc2FyIGZhdG9yIGRlIHpvb20gZGUgYWx0dXJhJyxcbiAgICBoZWlnaHRTY2FsZTogJ0VzY2FsYSBkZSBBbHR1cmEnLFxuICAgIGNvdmVyYWdlUmFuZ2U6ICdBbGNhbmNlIGRlIGNvYmVydHVyYScsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZzogJ1JlbmRlcml6YcOnw6NvIGRlIEFsdGEgUHJlY2lzw6NvJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdBbHRhIHByZWNpc8OjbyBpcsOhIGVtIHJlc3VsdGFyIGVtIGJhaXhhIHBlcmZvcm1hbmNlJyxcbiAgICBoZWlnaHQ6ICdBbHR1cmEnLFxuICAgIGhlaWdodERlc2NyaXB0aW9uOlxuICAgICAgJ0NsaXF1ZSBubyBib3TDo28gbm8gY2FudG8gc3VwZXJpb3IgZGlyZWl0byBwYXJhIHRyb2NhciBwYXJhIGEgdmlzdWFsaXphw6fDo28gM2QnLFxuICAgIGZpbGw6ICdQcmVlbmNoaW1lbnRvJyxcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnSGFiaWxpdGFyIEFsdHVyYSBkZSBQb2zDrWdvbm8nLFxuICAgIHNob3dXaXJlZnJhbWU6ICdNb3N0cmFyIFdpcmVmcmFtZScsXG4gICAgd2VpZ2h0SW50ZW5zaXR5OiAnSW50ZW5zaWRhZGUgZGEgRXNwZXNzdXJhJyxcbiAgICB6b29tU2NhbGU6ICdFc2NhbGEgZG8gWm9vbScsXG4gICAgaGVpZ2h0UmFuZ2U6ICdBbGNhbmNlIGRhIEFsdHVyYScsXG4gICAgaGVpZ2h0TXVsdGlwbGllcjogJ011bHRpcGxpY2Fkb3IgZGUgYWx0dXJhJ1xuICB9LFxuICBsYXllck1hbmFnZXI6IHtcbiAgICBhZGREYXRhOiAnQWRpY2lvbmFyIERhZG9zJyxcbiAgICBhZGRMYXllcjogJ0FkaWNpb25hciBDYW1hZGEnLFxuICAgIGxheWVyQmxlbmRpbmc6ICdNaXN0dXJhIGRlIENhbWFkYSdcbiAgfSxcbiAgbWFwTWFuYWdlcjoge1xuICAgIG1hcFN0eWxlOiAnRXN0aWxvIGRvIE1hcGEnLFxuICAgIGFkZE1hcFN0eWxlOiAnQWRpY2lvbmFyIEVzdGlsbyBkZSBNYXBhJyxcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJ0NvciBkbyBFZGlmw61jaW8gM0QnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ0NvciBkZSBGdW5kbydcbiAgfSxcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYXIge3Byb3BlcnR5fSBiYXNlYWRhIG5vIGNhbXBvIHNlbGVjaW9uYWRvJyxcbiAgICBob3dUbzogJ0NvbW8nXG4gIH0sXG4gIGZpbHRlck1hbmFnZXI6IHtcbiAgICBhZGRGaWx0ZXI6ICdBZGljaW9uYXIgRmlsdHJvJ1xuICB9LFxuICBkYXRhc2V0VGl0bGU6IHtcbiAgICBzaG93RGF0YVRhYmxlOiAnTW9zdHJhciB0YWJlbGEgZGUgZGFkb3MnLFxuICAgIHJlbW92ZURhdGFzZXQ6ICdSZW1vdmVyIHRhYmVsYSBkZSBkYWRvcydcbiAgfSxcbiAgZGF0YXNldEluZm86IHtcbiAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gbGluaGFzJ1xuICB9LFxuICB0b29sdGlwOiB7XG4gICAgaGlkZUxheWVyOiAnZXNjb25kZXIgY2FtYWRhJyxcbiAgICBzaG93TGF5ZXI6ICdtb3N0cmFyIGNhbWFkYScsXG4gICAgaGlkZUZlYXR1cmU6ICdFc2NvbmRlciBwcm9wcmllZGFkZScsXG4gICAgc2hvd0ZlYXR1cmU6ICdNb3N0cmFyIHByb3ByaWVkYWRlJyxcbiAgICBoaWRlOiAnZXNjb25kZXInLFxuICAgIHNob3c6ICdtb3N0cmFyJyxcbiAgICByZW1vdmVMYXllcjogJ1JlbW92ZXIgQ2FtYWRhJyxcbiAgICByZXNldEFmdGVyRXJyb3I6ICdUZW50ZSBoYWJpbGl0YXIgYSBjYW1hZGEgYXDDs3MgdW0gZXJybycsXG4gICAgbGF5ZXJTZXR0aW5nczogJ0NvbmZpZ3VyYcOnw7VlcyBkZSBDYW1hZGEnLFxuICAgIGNsb3NlUGFuZWw6ICdGZWNoYXIgcGFpbmVsIGF0dWFsJyxcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAnVHJvY2FyIHBhcmEgdmlzdWFsaXphw6fDo28gZHVwbGEgZGUgbWFwYScsXG4gICAgc2hvd0xlZ2VuZDogJ21vc3RyYXIgbGVnZW5kYScsXG4gICAgZGlzYWJsZTNETWFwOiAnRGVzYWJpbGl0YXIgTWFwYSAzRCcsXG4gICAgRHJhd09uTWFwOiAnRGVzZW5oYXIgbm8gbWFwYScsXG4gICAgc2VsZWN0TG9jYWxlOiAnU2VsZWNpb25hciBsw61uZ3VhJyxcbiAgICBoaWRlTGF5ZXJQYW5lbDogJ0VzY29uZGVyIHBhaW5lbCBkZSBjYW1hZGEnLFxuICAgIHNob3dMYXllclBhbmVsOiAnTW9zdHJhciBwYWluZWwgZGUgY2FtYWRhJyxcbiAgICBtb3ZlVG9Ub3A6ICdNb3ZlciBwYXJhIG8gdG9wbyBkYXMgY2FtYWRhcycsXG4gICAgc2VsZWN0QmFzZU1hcFN0eWxlOiAnU2VsZWNpb25hciBvIEVzdGlsbyBkbyBNYXBhIEJhc2UnLFxuICAgIGRlbGV0ZTogJ0RlbGV0YXInLFxuICAgIHRpbWVQbGF5YmFjazogJ1RlbXBvIGRlIHJlcHJvZHXDp8OjbycsXG4gICAgY2xvdWRTdG9yYWdlOiAnQXJtYXplbmFtZW50byBDbG91ZCcsXG4gICAgJzNETWFwJzogJyBNYXBhIDNEJ1xuICB9LFxuICB0b29sYmFyOiB7XG4gICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnRhciBJbWFnZW0nLFxuICAgIGV4cG9ydERhdGE6ICdFeHBvcnRhciBEYWRvcycsXG4gICAgZXhwb3J0TWFwOiAnRXhwb3J0YXIgTWFwYScsXG4gICAgc2hhcmVNYXBVUkw6ICdDb21wYXJ0aWxoYXIgVVJMIGRvIE1hcGEnLFxuICAgIHNhdmVNYXA6ICdTYWx2YXIgTWFwYScsXG4gICAgc2VsZWN0OiAnc2VsZWNpb25hcicsXG4gICAgcG9seWdvbjogJ3BvbMOtZ29ubycsXG4gICAgcmVjdGFuZ2xlOiAncmV0w6JuZ3VsbycsXG4gICAgaGlkZTogJ2VzY29uZGVyJyxcbiAgICBzaG93OiAnbW9zdHJhcicsXG4gICAgLi4uTE9DQUxFU1xuICB9LFxuICBtb2RhbDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBkZWxldGVEYXRhc2V0OiAnRGVsZXRhciBDb25qdW50byBkZSBEYWRvcycsXG4gICAgICBhZGREYXRhVG9NYXA6ICdBZGljaW9uYXIgRGFkb3MgYW8gTWFwYScsXG4gICAgICBleHBvcnRJbWFnZTogJ0V4cG9ydGFyIEltYWdlbScsXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0YXIgRGFkb3MnLFxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0YXIgTWFwYScsXG4gICAgICBhZGRDdXN0b21NYXBib3hTdHlsZTogJ0FkaWNpb25hciBFc3RpbG8gTWFwYm94IEN1c3RvbWl6YWRvJyxcbiAgICAgIHNhdmVNYXA6ICdTYWx2YXIgTWFwYScsXG4gICAgICBzaGFyZVVSTDogJ0NvbXBhcnRpbGhhciBVUkwnXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGRlbGV0ZTogJ0RlbGV0YXInLFxuICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXG4gICAgICBleHBvcnQ6ICdFeHBvcnRhcicsXG4gICAgICBhZGRTdHlsZTogJ0FkaWNpb25hciBFc3RpbG8nLFxuICAgICAgc2F2ZTogJ1NhbHZhcicsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAnQ2FuY2VsYXInLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtYXInXG4gICAgfSxcbiAgICBleHBvcnRJbWFnZToge1xuICAgICAgcmF0aW9UaXRsZTogJ1Byb3BvcsOnw6NvJyxcbiAgICAgIHJhdGlvRGVzY3JpcHRpb246ICdFc2NvbGhhIGEgcHJvcG9yw6fDo28gcGFyYSB2w6FyaW9zIHVzb3MuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdUZWxhIE9yaWdpbmFsJyxcbiAgICAgIHJhdGlvQ3VzdG9tOiAnQ3VzdG9taXphZG8nLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHXDp8OjbycsXG4gICAgICByZXNvbHV0aW9uRGVzY3JpcHRpb246ICdBbHRhIHJlc29sdcOnw6NvIMOpIG1lbGhvciBwYXJhIGltcHJlc3PDtWVzLicsXG4gICAgICBtYXBMZWdlbmRUaXRsZTogJ0xlZ2VuZGEgZG8gTWFwYScsXG4gICAgICBtYXBMZWdlbmRBZGQ6ICdBZGljaW9uYXIgTGVnZW5kYSBubyBtYXBhJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnQ29uanVudG8gZGUgZGFkb3MnLFxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnRXNjb2xoYSBvIGNvbmp1bnRvIGRlIGRhZG9zIHF1ZSB2b2PDqiBxdWVyIGV4cG9ydGFyJyxcbiAgICAgIGFsbERhdGFzZXRzOiAnVG9kb3MnLFxuICAgICAgZGF0YVR5cGVUaXRsZTogJ1RpcG8gZGUgRGFkbycsXG4gICAgICBkYXRhVHlwZVN1YnRpdGxlOiAnRXNjb2xoYSBvIHRpcG8gZGUgZGFkb3MgcXVlIHZvY8OqIHF1ZXIgZXhwb3J0YXInLFxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdHJhciBEYWRvcycsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdWb2PDqiBwb2RlIGVzY29saGVyIGV4cG9ydGFyIG9zIGRhZG9zIG9yaWdpbmFpcyBvdSBvcyBkYWRvcyBmaWx0cmFkb3MnLFxuICAgICAgZmlsdGVyZWREYXRhOiAnRGFkb3MgRmlsdHJhZG9zJyxcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnRGFkb3MgbsOjbyBmaWx0cmFkb3MnLFxuICAgICAgZmlsZUNvdW50OiAne2ZpbGVDb3VudH0gQXJxdWl2b3MnLFxuICAgICAgcm93Q291bnQ6ICd7cm93Q291bnR9IExpbmhhcydcbiAgICB9LFxuICAgIGRlbGV0ZURhdGE6IHtcbiAgICAgIHdhcm5pbmc6ICd2b2PDqiBpcsOhIGRlbGV0YXIgZXNzZSBjb25qdW50byBkZSBkYWRvcy4gSXNzbyBpcsOhIGFmZXRhciB7bGVuZ3RofSBjYW1hZGFzJ1xuICAgIH0sXG4gICAgYWRkU3R5bGU6IHtcbiAgICAgIHB1Ymxpc2hUaXRsZTogJzEuIFB1YmxpcXVlIG8gc2V1IEVzdGlsbyBubyBNYXBib3ggb3UgcHJvdmlkZW5jaWUgYSBjaGF2ZSBkZSBhY2Vzc28nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1ZvY8OqIHBvZGUgY3JpYXIgbyBzZXUgcHLDs3ByaW8gZXN0aWxvIGVtJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdlJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTM6ICdwdWJsaWNhcicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU0OiAnaXNzby4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ1BhcmEgdXRpbGl6YXIgZXN0aWxvIHByaXZhZG8sIGNvbGUgYSBzdWEnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNjogJ2NoYXZlIGRlIGFjZXNzbycsXG4gICAgICBwdWJsaXNoU3VidGl0bGU3OlxuICAgICAgICAnYXF1aS4gKmtlcGxlci5nbCDDqSB1bWEgYXBsaWNhw6fDo28gY2xpZW50LXNpZGUsIG9zIGRhZG9zIHBlcm1hbmVjZW0gbm8gc2V1IGJyb3dzZXIuLicsXG4gICAgICBleGFtcGxlVG9rZW46ICdlLmcuIHBrLmFiY2RlZmcueHh4eHh4JyxcbiAgICAgIHBhc3RlVGl0bGU6ICcyLiBDb2xlIGEgdXJsIGRvIHNldSBlc3RpbG8nLFxuICAgICAgcGFzdGVTdWJ0aXRsZTE6ICdPIHF1ZSDDqSB1bWEnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTI6ICdVUkwgZGUgZXN0aWxvJyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gTm9tZWllIG8gc2V1IGVzdGlsbydcbiAgICB9LFxuICAgIHNoYXJlTWFwOiB7XG4gICAgICBzaGFyZVVyaVRpdGxlOiAnQ29tcGFydGlsaGFyIGEgVVJMIGRvIE1hcGEnLFxuICAgICAgc2hhcmVVcmlTdWJ0aXRsZTogJ0dlcmFyIGEgdXJsIGRvIG1hcGEgZSBjb21wYXJ0aWxoYXIgY29tIG91dHJvcycsXG4gICAgICBjbG91ZFRpdGxlOiAnQXJtYXplbmFtZW50byBDbG91ZCcsXG4gICAgICBjbG91ZFN1YnRpdGxlOiAnQ29uZWN0ZS1zZSBlIGVudmllIG9zIGRhZG9zIGRvIG1hcGEgcGFyYSBvIHNldSBhcm1hemVuYW1lbnRvIGNsb3VkIHBlc3NvYWwnLFxuICAgICAgc2hhcmVEaXNjbGFpbWVyOlxuICAgICAgICAna2VwbGVyLmdsIGlyw6Egc2FsdmFyIG9zIGRhZG9zIGRvIG1hcGEgZW0gc2V1IGFybWF6ZW5hbWVudG8gY2xvdWQgcGVzc29hbCwgYXBlbmFzIHBlc3NvYXMgY29tIGEgVVJMIHBvZGVtIGFjZXNzYXIgbyBzZXUgbWFwYSBlIGRhZG9zLiAnICtcbiAgICAgICAgJ1ZvY8OqIHBvZGUgZWRpdGFyL2RlbGV0YXIgbyBhcnF1aXZvIGRlIGRhZG9zIG5hIHN1YSBjb250YSBkZSBhcm1hemVuYW1lbnRvIGNsb3VkIGVtIHF1YWxxdWVyIG1vbWVudG8uJyxcbiAgICAgIGdvdG9QYWdlOiAnVsOhIHBhcmEgYSBzdWEgcMOhZ2luYSBLZXBsZXIuZ2wge2N1cnJlbnRQcm92aWRlcn0nXG4gICAgfSxcbiAgICBzdGF0dXNQYW5lbDoge1xuICAgICAgbWFwVXBsb2FkaW5nOiAnRW52aWFuZG8gTWFwYScsXG4gICAgICBlcnJvcjogJ0Vycm8nXG4gICAgfSxcbiAgICBzYXZlTWFwOiB7XG4gICAgICB0aXRsZTogJ0FybWF6ZW5hbWVudG8gQ2xvdWQnLFxuICAgICAgc3VidGl0bGU6ICdDb25lY3RlLXNlIHBhcmEgc2FsdmFyIG8gbWFwYSBwYXJhIG8gc2V1IGFybWF6ZW5hbWVudG8gY2xvdWQgcGVzc29hbCdcbiAgICB9LFxuICAgIGV4cG9ydE1hcDoge1xuICAgICAgZm9ybWF0VGl0bGU6ICdGb3JtYXRvIGRvIG1hcGEnLFxuICAgICAgZm9ybWF0U3VidGl0bGU6ICdFc2NvbGhlciBvIGZvcm1hdG8gZGUgbWFwYSBwYXJhIGV4cG9ydGFyJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0YXIgc2V1IG1hcGEgZW0gdW0gYXJxdWl2byBodG1sIGludGVyYXRpdm8uJyxcbiAgICAgICAgdG9rZW5UaXRsZTogJ0NoYXZlIGRlIGFjZXNzbyBkbyBNYXBib3gnLFxuICAgICAgICB0b2tlblN1YnRpdGxlOiAnVXNlIGEgc3VhIHByw7NwcmlhIGNoYXZlIGRlIGFjZXNzbyBNYXBib3ggZW0gc2V1IGFycXVpdm8gaHRtbCAob3BjaW9uYWwpJyxcbiAgICAgICAgdG9rZW5QbGFjZWhvbGRlcjogJ0NvbGUgYSBzdWEgY2hhdmUgZGUgYWNlc3NvIE1hcGJveCcsXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcbiAgICAgICAgICAnKiBTZSB2b2PDqiBuw6NvIGZvcm5lY2VyIGEgc3VhIHByw7NwcmlhIGNoYXZlIGRlIGFjZXNzbywgbyBtYXBhIHBvZGUgZmFsaGFyIGVtIGV4aWJpciBhIHF1YWxxdWVyIG1vbWVudG8gcXVhbmRvIG7Ds3Mgc3Vic3RpdHVpcm1vcyBhIG5vc3NhIHBhcmEgZXZpdGFyIG1hdSB1c28uICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjpcbiAgICAgICAgICAnVm9jw6ogcG9kZSB0cm9jYXIgYSBzdWEgY2hhdmUgZGUgYWNlc3NvIE1hcGJveCBtYWlzIHRhcmRlIHV0aXphbmRvIGFzIGluc3RydcOnw7VlcyBzZWd1aW50ZXM6ICcsXG4gICAgICAgIHRva2VuVXBkYXRlOiAnQ29tbyBhdHVhbGl6YXIgYSBjaGF2ZSBkZSBhY2Vzc28gZGUgdW0gbWFwYSBleGlzdGVudGUuJyxcbiAgICAgICAgbW9kZVRpdGxlOiAnTW9kbyBkbyBNYXBhJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ1NlbGVjaW9uYXIgbyBtb2RvIGRvIGFwbGljYXRpdm8uIE1haXMgJyxcbiAgICAgICAgbW9kZVN1YnRpdGxlMjogJ2luZm8nLFxuICAgICAgICBtb2RlRGVzY3JpcHRpb246ICdQZXJtaXRpciB1c3XDoXJpb3MgYSB7bW9kZX0gbyBtYXBhJyxcbiAgICAgICAgcmVhZDogJ2xlcicsXG4gICAgICAgIGVkaXQ6ICdlZGl0YXInXG4gICAgICB9LFxuICAgICAganNvbjoge1xuICAgICAgICBjb25maWdUaXRsZTogJ0NvbmZpZ3VyYcOnw7VlcyBkbyBNYXBhJyxcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcbiAgICAgICAgICAnQSBjb25maWd1cmHDp8OjbyBkbyBtYXBhIHNlcsOhIGluY2x1aWRhIG5vIGFycXVpdm8gSnNvbi4gU2Ugdm9jw6ogZXN0w6EgdXRpbGl6YW5kbyBrZXBsZXIuZ2wgbm8gc2V1IHByw7NwcmlvIG1hcGEuIFZvY8OqIHBvZGUgY29waWFyIGVzc2EgY29uZmlndXJhw6fDo28gZSBwYXNzYXIgcGFyYSBlbGUgJyxcbiAgICAgICAgc2VsZWN0aW9uOlxuICAgICAgICAgICdFeHBvcnRhciBhdHVhaXMgZGFkb3MgZSBjb25maWd1cmHDp8O1ZXMgZG8gbWFwYSBlbSB1bSDDum5pY28gYXJxdWl2byBKc29uLiBWb2PDqiBwb2RlIG1haXMgdGFyZGUgYWJyaXIgbyBtZXNtbyBtYXBhIGVudmlhbmRvIGVzc2UgYXJxdWl2byBwYXJhIG8ga2VwbGVyLmdsLicsXG4gICAgICAgIGRpc2NsYWltZXI6XG4gICAgICAgICAgJyogQ29uZmlndXJhw6fDo28gZG8gbWFwYSDDqSBhY2xvcGFkbyBjb20gY29uanVudG8gZGUgZGFkb3MgY2FycmVnYWRvcy4g4oCYZGF0YUlk4oCZIMOpIHV0aWxpemFkbyBwYXJhIGxpZ2FyIGFzIGNhbWFkYXMsIGZpbHRyb3MsIGUgZGljYXMgZGUgY29udGV4dG9zIGEgY29uanVudG8gZGUgZGFkb3MgZXhwZWPDrWZpY29zLiAnICtcbiAgICAgICAgICAnUXVhbmRvIHBhc3NhbmRvIGVzc2EgY29uZmlndXJhw6fDo28gcGFyYSBhZGREYXRhVG9NYXAsIHRlbmhhIGNlcnRlemEgZGUgcXVlIG8gaWQgZG8gY29uanVudG8gZGUgZGFkb3MgY29tYmluYSBjb20gbyhzKSBkYXRhSWQvcyBuZXNzYSBjb25maWd1cmHDp8Ojby4nXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkaW5nRGlhbG9nOiB7XG4gICAgICBsb2FkaW5nOiAnQ2FycmVnYW5kby4uLidcbiAgICB9LFxuICAgIGxvYWREYXRhOiB7XG4gICAgICB1cGxvYWQ6ICdDYXJyZWdhciBhcnF1aXZvJyxcbiAgICAgIHN0b3JhZ2U6ICdDYXJyZWdhciBkbyBhcm1hemVuYW1lbnRvJ1xuICAgIH0sXG4gICAgdHJpcEluZm86IHtcbiAgICAgIHRpdGxlOiAnQ29tbyBoYWJpbGl0YXIgYW5pbWHDp8OjbyBkZSB2aWFnZW0nLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnUGFyYSBhbmltYXIgbyBjYW1pbmhvLCBvIGRhZG8gZ2VvSlNPTiBkZXZlIGNvbnRlciBgTGluZVN0cmluZ2AgbmEgc3VhIHByb3ByaWVkYWRlIGdlb21ldHJ5LCBlIGFzIGNvb3JkZW5hZGFzIG5hIExpbmVTdHJpbmcgZGV2ZW0gdGVyIDQgZWxlbWVudG9zIG5vIHNlZ3VpbnRlIGZvcm1hdG8nLFxuICAgICAgY29kZTogJyBbbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIGRhdGFdICcsXG4gICAgICBkZXNjcmlwdGlvbjI6XG4gICAgICAgICdjb20gdW0gdWx0aW1vIGVsZW1lbnRvIHNlbmRvIHVtYSBkYXRhLiBVbSBmb3JtYXRvIGRlIGRhdGEgdsOhbGlkYSBpbmNsdWkgc2VndW5kb3MgdW5peCBjb21vIGAxNTY0MTg0MzYzYCBvdSBlbSBtaWxpc2VndW5kb3MgY29tbyBgMTU2NDE4NDM2MzAwMGAuJyxcbiAgICAgIGV4YW1wbGU6ICdFeGVtcGxvOidcbiAgICB9LFxuICAgIGljb25JbmZvOiB7XG4gICAgICB0aXRsZTogJ0NvbW8gZGVzZW5oYXIgw61jb25lcycsXG4gICAgICBkZXNjcmlwdGlvbjE6XG4gICAgICAgICdObyBzZXUgY3N2LCBjcmllIHVtYSBjb2x1bmEsIGNvbG9xdWUgbyBub21lIGRvIMOtY29uZSBxdWUgdm9jw6ogcXVlciBkZXNlbmhhciBuZWxlLiBWb2PDqiBwb2RlIGRlaXhhciBvIGNhbXBvIHZhemlvIHNlIHZvY8OqIG7Do28gZGVzZWphciBxdWUgbyDDrWNvbmUgYXBhcmXDp2EgcGFyYSBhbGd1bnMgcG9udG9zLiBRdWFuZG8gYSBjb2x1bmEgdGVtIG5vbWUnLFxuICAgICAgY29kZTogJ2ljb24nLFxuICAgICAgZGVzY3JpcHRpb24yOiAnIGtlcGxlci5nbCBpcsOhIGF1dG9tYXRpY2FtZW50ZSBjcmlhciB1bWEgY2FtYWRhIGRlIMOtY29uZSBwYXJhIHZvY8OqLicsXG4gICAgICBleGFtcGxlOiAnRXhlbXBsb3M6JyxcbiAgICAgIGljb25zOiAnw41jb25lcydcbiAgICB9LFxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcbiAgICAgIGxhc3RNb2RpZmllZDogJ01vZGlmaWNhZG8gaMOhIHtsYXN0VXBkYXRlZH0nLFxuICAgICAgYmFjazogJ1ZvbHRhcidcbiAgICB9LFxuICAgIG92ZXJ3cml0ZU1hcDoge1xuICAgICAgdGl0bGU6ICdTYWx2YW5kbyBtYXBhLi4uJyxcbiAgICAgIGFscmVhZHlFeGlzdHM6ICdqw6EgZXhpc3RlIG5vIG1hcGEge21hcFNhdmVkfS4gVm9jw6ogZGVzZWphcmlhIHNvYnJlc2NyZXZlciBvIG1hcGE/J1xuICAgIH0sXG4gICAgbG9hZFN0b3JhZ2VNYXA6IHtcbiAgICAgIGJhY2s6ICdWb2x0YXInLFxuICAgICAgZ29Ub1BhZ2U6ICdWw6EgcGFyYSBhIHN1YSBww6FnaW5hIHtkaXNwbGF5TmFtZX0gZG8gS2VwbGVyLmdsJyxcbiAgICAgIHN0b3JhZ2VNYXBzOiAnQXJtYXplbmFtZW50byAvIE1hcGFzJyxcbiAgICAgIG5vU2F2ZWRNYXBzOiAnTmVuaHVtIG1hcGEgc2Fsdm8nXG4gICAgfVxuICB9LFxuICBoZWFkZXI6IHtcbiAgICB2aXNpYmxlTGF5ZXJzOiAnQ2FtYWRhcyBWaXPDrXZlaXMnLFxuICAgIGxheWVyTGVnZW5kOiAnTGVnZW5kYSBkYSBDYW1hZGEnXG4gIH0sXG4gIGludGVyYWN0aW9uczoge1xuICAgIHRvb2x0aXA6ICdEaWNhIGRlIGNvbnRleHRvJyxcbiAgICBicnVzaDogJ1BpbmNlbCcsXG4gICAgY29vcmRpbmF0ZTogJ0Nvb3JkZW5hZGFzJ1xuICB9LFxuICBsYXllckJsZW5kaW5nOiB7XG4gICAgdGl0bGU6ICdNaXN0dXJhIGRlIENhbWFkYXMnLFxuICAgIGFkZGl0aXZlOiAnYWRpdGl2bycsXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcbiAgICBzdWJ0cmFjdGl2ZTogJ3N1YnRyYXRpdm8nXG4gIH0sXG4gIGNvbHVtbnM6IHtcbiAgICB0aXRsZTogJ0NvbHVuYXMnLFxuICAgIGxhdDogJ2xhdCcsXG4gICAgbG5nOiAnbG9uJyxcbiAgICBhbHRpdHVkZTogJ2FsdGl0dWRlJyxcbiAgICBpY29uOiAnw61jb25lJyxcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgYXJjOiB7XG4gICAgICBsYXQwOiAnb3JpZ2VtIGxhdCcsXG4gICAgICBsbmcwOiAnb3JpZ2VtIGxuZycsXG4gICAgICBsYXQxOiAnZGVzdGlubyBsYXQnLFxuICAgICAgbG5nMTogJ2Rlc3Rpbm8gbG5nJ1xuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgYWx0MDogJ29yaWdlbSBhbHRpdHVkZScsXG4gICAgICBhbHQxOiAnZGVzdGlubyBhbHRpdHVkZSdcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdUYW1hbmhvIGRhIEdyYWRlIChrbSknXG4gICAgfSxcbiAgICBoZXhhZ29uOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnUmFpbyBkbyBIZXjDoWdvbm8gKGttKSdcbiAgICB9XG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgY3VzdG9tUGFsZXR0ZTogJ1BhbGV0YXMgY3VzdG9taXphZGFzJyxcbiAgICBzdGVwczogJ2NhbWluaG9zJyxcbiAgICB0eXBlOiAndGlwbycsXG4gICAgcmV2ZXJzZWQ6ICdyZXZlcnNvJ1xuICB9LFxuICBzY2FsZToge1xuICAgIGNvbG9yU2NhbGU6ICdFc2NhbGEgZGEgQ29yJyxcbiAgICBzaXplU2NhbGU6ICdUYW1hbmhvIGRhIEVzY2FsYScsXG4gICAgc3Ryb2tlU2NhbGU6ICdFc2NhbGEgZG8gVHJhw6dvJyxcbiAgICBzY2FsZTogJ0VzY2FsYSdcbiAgfSxcbiAgZmlsZVVwbG9hZGVyOiB7XG4gICAgbWVzc2FnZTogJ0FycmFzdGUgZSBzb2x0ZSBzZXUocykgYXJxdWl2byhzKSBhcXVpJyxcbiAgICBjaHJvbWVNZXNzYWdlOlxuICAgICAgJypVc3XDoXJpb3MgZG8gY2hyb21lOiBPIGxpbWl0ZSBkZSB0YW1hbmhvIGRlIGFycXVpdm8gw6kgMjUwbWIsIHNlIHZvY8OqIHByZWNpc2EgZmF6ZXIgdXBsb2FkIGRlIGFycXVpdm9zIG1haW9yZXMgdGVudGUgbyBTYWZhcmknLFxuICAgIGRpc2NsYWltZXI6XG4gICAgICAnKmtlcGxlci5nbCDDqSB1bWEgYXBsaWNhw6fDo28gY2xpZW50LXNpZGUsIHNlbSB1bSBzZXJ2aWRvciBiYWNrZW5kLiBPcyBkYWRvcyBmaWNhbSBhcGVuYXMgbmEgc3VhIG3DoXF1aW5hL2Jyb3dzZXIuICcgK1xuICAgICAgJ05lbmh1bWEgaW5mb3JtYcOnw6NvIG91IGRhZG9zIGRlIG1hcGEgw6kgZW52aWFkbyBwYXJhIHF1YWxxdWVyIHNlcnZlci4nLFxuICAgIGNvbmZpZ1VwbG9hZE1lc3NhZ2U6XG4gICAgICAnRW52aWUge2ZpbGVGb3JtYXROYW1lc30gb3UgbWFwYXMgc2Fsdm9zICoqSnNvbioqLiBMZWlhIG1haXMgc29icmUgWyoqdGlwb3MgZGUgYXJxdWl2b3Mgc3Vwb3J0YWRvcyoqXScsXG4gICAgYnJvd3NlRmlsZXM6ICdwcm9jdXJlIHNldXMgYXJxdWl2b3MnLFxuICAgIHVwbG9hZGluZzogJ0VudmlhbmRvJyxcbiAgICBmaWxlTm90U3VwcG9ydGVkOiAnQXJxdWl2byB7ZXJyb3JGaWxlc30gbsOjbyDDqSBzdXBvcnRhZG8uJyxcbiAgICBvcjogJ291J1xuICB9LFxuICBkZW5zaXR5OiAnZGVuc2lkYWRlJyxcbiAgJ0J1ZyBSZXBvcnQnOiAnUmVwb3J0YXIgQnVnJyxcbiAgJ1VzZXIgR3VpZGUnOiAnR3VpYSBkbyBVc3XDoXJpbycsXG4gIFNhdmU6ICdTYWx2YXInLFxuICBTaGFyZTogJ0NvbXBhcnRpbGhhcidcbn07XG4iXX0=