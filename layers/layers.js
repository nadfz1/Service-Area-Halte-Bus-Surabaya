var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIBoundariesPlaces_1 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ServiceArea_2 = new ol.format.GeoJSON();
var features_ServiceArea_2 = format_ServiceArea_2.readFeatures(json_ServiceArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_2.addFeatures(features_ServiceArea_2);
var lyr_ServiceArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_2, 
                style: style_ServiceArea_2,
                popuplayertitle: 'Service Area',
                interactive: true,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_2_0.png" /> 500 - 1500<br />\
    <img src="styles/legend/ServiceArea_2_1.png" /> 1500 - 2000<br />\
    <img src="styles/legend/ServiceArea_2_2.png" /> 2000 - 2500<br />\
    <img src="styles/legend/ServiceArea_2_3.png" /> 2500 - 3000<br />\
    <img src="styles/legend/ServiceArea_2_4.png" /> 3000 - 3000<br />' });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });
var format_SebaranHalteBusSurabaya_4 = new ol.format.GeoJSON();
var features_SebaranHalteBusSurabaya_4 = format_SebaranHalteBusSurabaya_4.readFeatures(json_SebaranHalteBusSurabaya_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranHalteBusSurabaya_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranHalteBusSurabaya_4.addFeatures(features_SebaranHalteBusSurabaya_4);
var lyr_SebaranHalteBusSurabaya_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranHalteBusSurabaya_4, 
                style: style_SebaranHalteBusSurabaya_4,
                popuplayertitle: 'Sebaran Halte Bus Surabaya',
                interactive: true,
    title: 'Sebaran Halte Bus Surabaya<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_0.png" /> Halte Galaxy 2<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_1.png" /> Halte ITS<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_2.png" /> Halte Kedung Baruk<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_3.png" /> Halte KONI MERR<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_4.png" /> Halte PENS<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_5.png" /> Halte RS Haji 1<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_6.png" /> Halte Semolowaru 2<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_7.png" /> Halte Sentra UKM MERR<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_8.png" /> Halte SMPN 19<br />\
    <img src="styles/legend/SebaranHalteBusSurabaya_4_9.png" /> Halte UNAIR 1<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_ESRIBoundariesPlaces_1.setVisible(true);lyr_ServiceArea_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_SebaranHalteBusSurabaya_4.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_ESRIBoundariesPlaces_1,lyr_ServiceArea_2,lyr_Roads_3,lyr_SebaranHalteBusSurabaya_4];
lyr_ServiceArea_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_Roads_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', });
lyr_SebaranHalteBusSurabaya_4.set('fieldAliases', {'name': 'name', 'highway': 'highway', 'Foto': 'Foto', });
lyr_ServiceArea_2.set('fieldImages', {'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', });
lyr_SebaranHalteBusSurabaya_4.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ServiceArea_2.set('fieldLabels', {'id': 'inline label - visible with data', 'cost_level': 'inline label - visible with data', });
lyr_Roads_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_SebaranHalteBusSurabaya_4.set('fieldLabels', {'name': 'header label - always visible', 'highway': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_SebaranHalteBusSurabaya_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});