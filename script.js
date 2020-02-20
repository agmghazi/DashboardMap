require(["esri/layers/FeatureLayer", "esri/Map", "esri/views/MapView", "dojo/domReady"],
    function (FeatureLayer, Map, MapView) {
        var map = new Map({
            basemap: 'topo'
        });

        var view = new MapView({
            container: 'mapView',
            map: map,
            zoom: 4,
            center: [-99, 38.9],
        });

        view.surface.addEventListener('wheel', function (event) {
            event.stopImmediatePropagation();
        }, true);

        var defaultSymbol = {
            type: 'simple-marker',
            outline: {
                color: [198, 12, 70, 1]
            },
            size: 9,
            color: [248, 187, 37, 0.9]
        };
        var rend = {
            type: 'simple',
            symbol: defaultSymbol
        };
        var featureLayer = new FeatureLayer({
            url: "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
            renderer: rend
            // outFields: ["*"]
        });
        map.add(featureLayer);

        var definition = {
            type: 'bar-horizontal',
            datasets: [{
                url: "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
                query: {
                    groupByFieldsForStatistics: 'state',
                    outStatistics: [{
                        'statisticType': 'sum',
                        'onStatisticField': 'injuries',
                        'outStatisticFieldName': 'injuries_SUM'
                    }],
                    orderByFields: 'injuries_SUM DESC'
                }
            }],
            series: [{
                category: {
                    field: 'state',
                    label: 'State'
                },
                value: {
                    field: 'injuries_SUM',
                    label: 'Injuries'
                }
            }]
        };

        var cedarChart = new cedar.Chart('chart', definition);
        cedarChart.show();

        view.watch('extent', function (newValue) {
            var newExtent = JSON.stringify(newValue);
            cedarChart.datasets()[0].query.geometry = newExtent;
            cedarChart.show();
        });

        // second chart
        let definitions = {
            type: 'bar',
            datasets: [{
                url: "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
                query: {
                    groupByFieldsForStatistics: 'state',
                    outStatistics: [{
                        'statisticType': 'sum',
                        'onStatisticField': 'injuries',
                        'outStatisticFieldName': 'injuries_SUM'
                    }],
                    orderByFields: 'injuries_SUM DESC'
                }
            }],
            series: [{
                category: {
                    field: 'state',
                    label: 'State'
                },
                value: {
                    field: 'injuries_SUM',
                    label: 'Injuries'
                }
            }]
        };

        var cedarCharts = new cedar.Chart('charts', definitions);
        cedarCharts.show();

        view.watch('extent', function (newValue) {
            var newExtent = JSON.stringify(newValue);
            cedarCharts.datasets()[0].query.geometry = newExtent;
            cedarCharts.show();
        });

        //third chart
          let thirddefinition = {
            type: 'area',
            datasets: [{
                url: "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
                query: {
                    groupByFieldsForStatistics: 'state',
                    outStatistics: [{
                        'statisticType': 'sum',
                        'onStatisticField': 'injuries',
                        'outStatisticFieldName': 'injuries_SUM'
                    }],
                    orderByFields: 'injuries_SUM DESC'
                }
            }],
            series: [{
                category: {
                    field: 'state',
                    label: 'State'
                },
                value: {
                    field: 'injuries_SUM',
                    label: 'Injuries'
                }
            }]
        };

        var thirdcedarChart = new cedar.Chart('thirdchart', thirddefinition);
        thirdcedarChart.show();

        view.watch('extent', function (newValue) {
            var newExtent = JSON.stringify(newValue);
            thirdcedarChart.datasets()[0].query.geometry = newExtent;
            thirdcedarChart.show();
        });

          //fourth chart
          let fourthdefinition = {
            type: 'bar',
            datasets: [{
                url: "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
                query: {
                    groupByFieldsForStatistics: 'state',
                    outStatistics: [{
                        'statisticType': 'sum',
                        'onStatisticField': 'injuries',
                        'outStatisticFieldName': 'injuries_SUM'
                    }],
                    orderByFields: 'injuries_SUM DESC'
                }
            }],
            series: [{
                category: {
                    field: 'state',
                    label: 'State'
                },
                value: {
                    field: 'injuries_SUM',
                    label: 'Injuries'
                }
            }]
        };

        var fourthChart = new cedar.Chart('fourthchart', fourthdefinition);
        fourthChart.show();

        view.watch('extent', function (newValue) {
            var newExtent = JSON.stringify(newValue);
            fourthChart.datasets()[0].query.geometry = newExtent;
            fourthChart.show();
        });

        //Fifth chart
        let Fifthhdefinition = {
            type: 'line',
            datasets: [{
                url: "https://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It's_a_Tornado_Map/FeatureServer/0",
                query: {
                    groupByFieldsForStatistics: 'state',
                    outStatistics: [{
                        'statisticType': 'sum',
                        'onStatisticField': 'injuries',
                        'outStatisticFieldName': 'injuries_SUM'
                    }],
                    orderByFields: 'injuries_SUM DESC'
                }
            }],
            series: [{
                category: {
                    field: 'state',
                    label: 'State'
                },
                value: {
                    field: 'injuries_SUM',
                    label: 'Injuries'
                }
            }]
        };

        var FifthChart = new cedar.Chart('Fifthhchart', Fifthhdefinition);
        FifthChart.show();

        view.watch('extent', function (newValue) {
            var newExtent = JSON.stringify(newValue);
            FifthChart.datasets()[0].query.geometry = newExtent;
            FifthChart.show();
        });
    });