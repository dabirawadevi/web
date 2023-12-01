var wms_layers = [];

var format_Rasterpotongankecamatan_0 = new ol.format.GeoJSON();
var features_Rasterpotongankecamatan_0 = format_Rasterpotongankecamatan_0.readFeatures(json_Rasterpotongankecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rasterpotongankecamatan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rasterpotongankecamatan_0.addFeatures(features_Rasterpotongankecamatan_0);
var lyr_Rasterpotongankecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rasterpotongankecamatan_0, 
                style: style_Rasterpotongankecamatan_0,
                interactive: true,
                title: '<img src="styles/legend/Rasterpotongankecamatan_0.png" /> Raster potongan kecamatan'
            });
var format_menghilangkanbatas_1 = new ol.format.GeoJSON();
var features_menghilangkanbatas_1 = format_menghilangkanbatas_1.readFeatures(json_menghilangkanbatas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_menghilangkanbatas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_menghilangkanbatas_1.addFeatures(features_menghilangkanbatas_1);
var lyr_menghilangkanbatas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_menghilangkanbatas_1, 
                style: style_menghilangkanbatas_1,
                interactive: true,
                title: '<img src="styles/legend/menghilangkanbatas_1.png" /> menghilangkan batas'
            });
var format_sungai_2 = new ol.format.GeoJSON();
var features_sungai_2 = format_sungai_2.readFeatures(json_sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_2.addFeatures(features_sungai_2);
var lyr_sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_2, 
                style: style_sungai_2,
                interactive: true,
                title: '<img src="styles/legend/sungai_2.png" /> sungai'
            });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                interactive: true,
                title: '<img src="styles/legend/jalan_3.png" /> jalan'
            });
var format_JEMBATAN_LN_25K_4 = new ol.format.GeoJSON();
var features_JEMBATAN_LN_25K_4 = format_JEMBATAN_LN_25K_4.readFeatures(json_JEMBATAN_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_LN_25K_4.addFeatures(features_JEMBATAN_LN_25K_4);
var lyr_JEMBATAN_LN_25K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JEMBATAN_LN_25K_4, 
                style: style_JEMBATAN_LN_25K_4,
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_LN_25K_4.png" /> JEMBATAN_LN_25K'
            });
var format_jembatan_5 = new ol.format.GeoJSON();
var features_jembatan_5 = format_jembatan_5.readFeatures(json_jembatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jembatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jembatan_5.addFeatures(features_jembatan_5);
var lyr_jembatan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jembatan_5, 
                style: style_jembatan_5,
                interactive: true,
                title: '<img src="styles/legend/jembatan_5.png" /> jembatan'
            });
var format_plsby_6 = new ol.format.GeoJSON();
var features_plsby_6 = format_plsby_6.readFeatures(json_plsby_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plsby_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plsby_6.addFeatures(features_plsby_6);
var lyr_plsby_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_plsby_6, 
                style: style_plsby_6,
                interactive: true,
                title: '<img src="styles/legend/plsby_6.png" /> pl sby'
            });
var format_TitikSurveiGentenggenteng_7 = new ol.format.GeoJSON();
var features_TitikSurveiGentenggenteng_7 = format_TitikSurveiGentenggenteng_7.readFeatures(json_TitikSurveiGentenggenteng_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSurveiGentenggenteng_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSurveiGentenggenteng_7.addFeatures(features_TitikSurveiGentenggenteng_7);
var lyr_TitikSurveiGentenggenteng_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikSurveiGentenggenteng_7, 
                style: style_TitikSurveiGentenggenteng_7,
                interactive: true,
                title: 'Titik Survei Genteng — genteng'
            });

lyr_Rasterpotongankecamatan_0.setVisible(true);lyr_menghilangkanbatas_1.setVisible(true);lyr_sungai_2.setVisible(true);lyr_jalan_3.setVisible(true);lyr_JEMBATAN_LN_25K_4.setVisible(true);lyr_jembatan_5.setVisible(true);lyr_plsby_6.setVisible(true);lyr_TitikSurveiGentenggenteng_7.setVisible(true);
var layersList = [lyr_Rasterpotongankecamatan_0,lyr_menghilangkanbatas_1,lyr_sungai_2,lyr_jalan_3,lyr_JEMBATAN_LN_25K_4,lyr_jembatan_5,lyr_plsby_6,lyr_TitikSurveiGentenggenteng_7];
lyr_Rasterpotongankecamatan_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_menghilangkanbatas_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sungai_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JEMBATAN_LN_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jembatan_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_plsby_6.set('fieldAliases', {'id': 'id', 'Pl': 'Pl', });
lyr_TitikSurveiGentenggenteng_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'TITIK': 'TITIK', 'X': 'X', 'Y': 'Y', });
lyr_Rasterpotongankecamatan_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_menghilangkanbatas_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sungai_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalan_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JEMBATAN_LN_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'Range', 'TGGJMB': 'Range', 'JBTJMB': 'Range', 'LBRJMB': 'Range', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'Range', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jembatan_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'Range', 'TGGJMB': 'Range', 'JBTJMB': 'Range', 'LBRJMB': 'Range', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'Range', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_plsby_6.set('fieldImages', {'id': 'TextEdit', 'Pl': 'TextEdit', });
lyr_TitikSurveiGentenggenteng_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'id': 'TextEdit', 'TITIK': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Rasterpotongankecamatan_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_menghilangkanbatas_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sungai_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JEMBATAN_LN_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jembatan_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_plsby_6.set('fieldLabels', {'id': 'no label', 'Pl': 'no label', });
lyr_TitikSurveiGentenggenteng_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'TITIK': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_TitikSurveiGentenggenteng_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});