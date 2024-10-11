
var MarkerOptionsSitios = {
    radius: 8,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSitios(feature) {
    return (
        "<div id='Estilo1'><h3>Sitios para Modelos </h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<div id='Estilo3a'>" +
        "<b> Nombre : </b>" + feature.properties.id + "<br>" +
        // "<b> Habitantes (Censo 2010): </b>" + feature.properties.HABITANTES + "<br>" +
        // "<b> Tipo de asentamiento: </b>" + feature.properties.tipo_asent + "<br>" +
        // "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSitios() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Sitios seleccionados', color: '' },
            { label: ' ', color: '#ff7f00' },
                    
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(SitiosSeleccionados)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}


var sitios = 
{
    "type": "FeatureCollection",
    "name": "sitios",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 5.0, "x": -65.730885080899995, "y": -26.929449613300001, "fna": "Departamento Tafí del Valle", "nam": "Tafí del Valle", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.730885080947303, -26.929449613311437 ] } },
    { "type": "Feature", "properties": { "id": 6.0, "x": -65.623445148000002, "y": -27.747358115000001, "fna": "Departamento La Cocha", "nam": "La Cocha", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.623445147989415, -27.747358114966115 ] } },
    { "type": "Feature", "properties": { "id": 7.0, "x": -65.433509133100003, "y": -26.38668643, "fna": "Departamento Trancas", "nam": "Trancas", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.433509133082993, -26.38668642997834 ] } },
    { "type": "Feature", "properties": { "id": 8.0, "x": -64.895653876200001, "y": -26.648141987, "fna": "Departamento Burruyacú", "nam": "Burruyacú", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -64.895653876155151, -26.64814198700963 ] } },
    { "type": "Feature", "properties": { "id": 28.0, "x": -65.972735620700007, "y": -26.448320557900001, "fna": "Departamento Tafí del Valle", "nam": "Tafí del Valle", "NOMBRE_ECO": "Monte de Sierras y Bolsones", "precipitac": 400.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.97273562074389, -26.448320557918542 ] } }
    ]
    }
    
    
