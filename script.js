let map;
let view;
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "dojo/domReady"
], function(Map, MapView, FeatureLayer) {
  //add symbol
  let layerSambol = {
    type: "simple",
    symbol: {
      type: "simple-marker",
      color: "blue",
      outline: {
        width: 0.5,
        color: "white"
      }
    }
  };
  //add label
  var layerLabel = {
    symbol: {
      type: "text",
      color: "black",
      haloColor: "white",
      haloSize: "1.5px",
      font: {
        size: "13px",
        family: "Noto Sans",
        style: "italic",
        weight: "normal"
      }
    },
    labelPlacement: "above-center",
    labelExpressionInfo: {
      expression: "$feature.Year"
    }
  };
  // add popup
  let layerPopup = {
    title: "{Year}",
    content:
      // "<b>Year:</b> {Year}<br><b>Lenth_of_Tornado:</b> {Lenth_of_Tornado} </br>  <a href='https://www.google.com/' target='_blank'>Google</a>"
      `<table id='popupTable'>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Year</td>
        <td>{Year}</td>
      </tr>
      <tr>
        <td>Lenth_of_Tornado</td>
        <td>{Lenth_of_Tornado}</td>
      </tr>
      <tr>
        <td>Google</td>
        <td><a href='https://www.google.com/'>Google</a></td>
      </tr>
    </table>`
    };
    //add feature layer
  let featureLayer = new FeatureLayer({
    url:
      "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
    outFields: ["*"],
    popupEnabled: true,
    id: "featureLayer",
    renderer: layerSambol,
    outFields: ["Year", "Lenth_of_Tornado"],
    labelingInfo: [layerLabel],
    labelsVisible: true,
    popupTemplate: layerPopup
  });

  map = new Map({
    basemap: "satellite"
    // layers: [featureLayer]
  });
  view = new MapView({
    container: "mapView",
    map: map,
    zoom: 4,
    center: [-99, 38.9]
  });
  map.add(featureLayer);

  view.surface.addEventListener(
    "wheel",
    function(event) {
      event.stopImmediatePropagation();
    },
    true
  );

  let definition = {
    type: "bar-horizontal",
    datasets: [
      {
        url:
          "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
        query: {
          groupByFieldsForStatistics: "state",
          outStatistics: [
            {
              statisticType: "sum",
              onStatisticField: "injuries",
              outStatisticFieldName: "injuries_SUM"
            }
          ],
          orderByFields: "injuries_SUM DESC"
        }
      }
    ],
    series: [
      {
        category: {
          field: "state",
          label: "State"
        },
        value: {
          field: "injuries_SUM",
          label: "Injuries"
        }
      }
    ]
  };

  let cedarChart = new cedar.Chart("chart", definition);
  cedarChart.show();

  view.watch("extent", function(newValue) {
    let newExtent = JSON.stringify(newValue);
    cedarChart.datasets()[0].query.geometry = newExtent;
    cedarChart.show();
  });

  // second chart
  let definitions = {
    type: "bar",
    datasets: [
      {
        url:
          "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
        query: {
          groupByFieldsForStatistics: "state",
          outStatistics: [
            {
              statisticType: "sum",
              onStatisticField: "injuries",
              outStatisticFieldName: "injuries_SUM"
            }
          ],
          orderByFields: "injuries_SUM DESC"
        }
      }
    ],
    series: [
      {
        category: {
          field: "state",
          label: "State"
        },
        value: {
          field: "injuries_SUM",
          label: "Injuries"
        }
      }
    ]
  };

  let cedarCharts = new cedar.Chart("charts", definitions);
  cedarCharts.show();

  view.watch("extent", function(newValue) {
    let newExtent = JSON.stringify(newValue);
    cedarCharts.datasets()[0].query.geometry = newExtent;
    cedarCharts.show();
  });

  //third chart
  let thirddefinition = {
    type: "area",
    datasets: [
      {
        url:
          "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
        query: {
          groupByFieldsForStatistics: "state",
          outStatistics: [
            {
              statisticType: "sum",
              onStatisticField: "injuries",
              outStatisticFieldName: "injuries_SUM"
            }
          ],
          orderByFields: "injuries_SUM DESC"
        }
      }
    ],
    series: [
      {
        category: {
          field: "state",
          label: "State"
        },
        value: {
          field: "injuries_SUM",
          label: "Injuries"
        }
      }
    ]
  };

  let thirdcedarChart = new cedar.Chart("thirdchart", thirddefinition);
  thirdcedarChart.show();

  view.watch("extent", function(newValue) {
    let newExtent = JSON.stringify(newValue);
    thirdcedarChart.datasets()[0].query.geometry = newExtent;
    thirdcedarChart.show();
  });

  //fourth chart
  let fourthdefinition = {
    type: "bar",
    datasets: [
      {
        url:
          "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
        query: {
          groupByFieldsForStatistics: "state",
          outStatistics: [
            {
              statisticType: "sum",
              onStatisticField: "injuries",
              outStatisticFieldName: "injuries_SUM"
            }
          ],
          orderByFields: "injuries_SUM DESC"
        }
      }
    ],
    series: [
      {
        category: {
          field: "state",
          label: "State"
        },
        value: {
          field: "injuries_SUM",
          label: "Injuries"
        }
      }
    ]
  };

  let fourthChart = new cedar.Chart("fourthchart", fourthdefinition);
  fourthChart.show();

  view.watch("extent", function(newValue) {
    let newExtent = JSON.stringify(newValue);
    fourthChart.datasets()[0].query.geometry = newExtent;
    fourthChart.show();
  });

  //Fifth chart
  let Fifthhdefinition = {
    type: "line",
    datasets: [
      {
        url:
          "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
        query: {
          groupByFieldsForStatistics: "state",
          outStatistics: [
            {
              statisticType: "sum",
              onStatisticField: "injuries",
              outStatisticFieldName: "injuries_SUM"
            }
          ],
          orderByFields: "injuries_SUM DESC"
        }
      }
    ],
    series: [
      {
        category: {
          field: "state",
          label: "State"
        },
        value: {
          field: "injuries_SUM",
          label: "Injuries"
        }
      }
    ]
  };

  let FifthChart = new cedar.Chart("Fifthhchart", Fifthhdefinition);
  FifthChart.show();

  view.watch("extent", function(newValue) {
    let newExtent = JSON.stringify(newValue);
    FifthChart.datasets()[0].query.geometry = newExtent;
    FifthChart.show();
  });
});

// jquery widgets
$(function() {
  $("#attributTabe")
    .dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
      width: 500
    })
    .dialogExtend({
      maximizable: true,
      dblclick: "maximize",
      icons: {
        maximize: "ui-icon-arrow-4-diag"
      }
    });
  $("#toggleAttribute").on("click", function() {
    $("#attributTabe").dialog("open");
  });
});
