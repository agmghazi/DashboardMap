let map;
let view;
require(["esri/Map", "esri/views/MapView", "dojo/domReady!"], function (Map, MapView) {
    map = new Map({
    basemap:"topo"
    });
    view=  new MapView({
        container:"mapView",
        map:map
    })
});