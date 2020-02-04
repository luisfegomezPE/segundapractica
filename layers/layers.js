var wms_layers = [];

var lyr_bio12_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio12",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio12_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_bio16_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio16",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio16_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_bio17_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio17",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio17_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_biome_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "biome",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/biome_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_bio1_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio1_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_bio5_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio5",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio5_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_bio6copia_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio6 - copia",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio6copia_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_bio6_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio6",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio6_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_bio7_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio7",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio7_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var lyr_bio8_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "bio8",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/bio8_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13914936.349159, -7558415.656082, -3562223.705385, 4865942.279503]
                            })
                        });
var format_Zonotrichia_capensis_csv2_10 = new ol.format.GeoJSON();
var features_Zonotrichia_capensis_csv2_10 = format_Zonotrichia_capensis_csv2_10.readFeatures(json_Zonotrichia_capensis_csv2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonotrichia_capensis_csv2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonotrichia_capensis_csv2_10.addFeatures(features_Zonotrichia_capensis_csv2_10);
var lyr_Zonotrichia_capensis_csv2_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonotrichia_capensis_csv2_10, 
                style: style_Zonotrichia_capensis_csv2_10,
                interactive: true,
                title: '<img src="styles/legend/Zonotrichia_capensis_csv2_10.png" /> Zonotrichia_capensis_csv2'
            });
var format_sample_zonotrichia_con_biosgpkg_11 = new ol.format.GeoJSON();
var features_sample_zonotrichia_con_biosgpkg_11 = format_sample_zonotrichia_con_biosgpkg_11.readFeatures(json_sample_zonotrichia_con_biosgpkg_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sample_zonotrichia_con_biosgpkg_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sample_zonotrichia_con_biosgpkg_11.addFeatures(features_sample_zonotrichia_con_biosgpkg_11);
var lyr_sample_zonotrichia_con_biosgpkg_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sample_zonotrichia_con_biosgpkg_11, 
                style: style_sample_zonotrichia_con_biosgpkg_11,
                interactive: true,
                title: '<img src="styles/legend/sample_zonotrichia_con_biosgpkg_11.png" /> sample_zonotrichia_con_bios.gpkg'
            });
var format_sample_zonotrichia_con_bios_2gpkg_12 = new ol.format.GeoJSON();
var features_sample_zonotrichia_con_bios_2gpkg_12 = format_sample_zonotrichia_con_bios_2gpkg_12.readFeatures(json_sample_zonotrichia_con_bios_2gpkg_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sample_zonotrichia_con_bios_2gpkg_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sample_zonotrichia_con_bios_2gpkg_12.addFeatures(features_sample_zonotrichia_con_bios_2gpkg_12);
var lyr_sample_zonotrichia_con_bios_2gpkg_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sample_zonotrichia_con_bios_2gpkg_12, 
                style: style_sample_zonotrichia_con_bios_2gpkg_12,
                interactive: true,
                title: '<img src="styles/legend/sample_zonotrichia_con_bios_2gpkg_12.png" /> sample_zonotrichia_con_bios_2.gpkg'
            });

lyr_bio12_0.setVisible(true);lyr_bio16_1.setVisible(true);lyr_bio17_2.setVisible(true);lyr_biome_3.setVisible(true);lyr_bio1_4.setVisible(true);lyr_bio5_5.setVisible(true);lyr_bio6copia_6.setVisible(true);lyr_bio6_7.setVisible(true);lyr_bio7_8.setVisible(true);lyr_bio8_9.setVisible(true);lyr_Zonotrichia_capensis_csv2_10.setVisible(true);lyr_sample_zonotrichia_con_biosgpkg_11.setVisible(true);lyr_sample_zonotrichia_con_bios_2gpkg_12.setVisible(true);
var layersList = [lyr_bio12_0,lyr_bio16_1,lyr_bio17_2,lyr_biome_3,lyr_bio1_4,lyr_bio5_5,lyr_bio6copia_6,lyr_bio6_7,lyr_bio7_8,lyr_bio8_9,lyr_Zonotrichia_capensis_csv2_10,lyr_sample_zonotrichia_con_biosgpkg_11,lyr_sample_zonotrichia_con_bios_2gpkg_12];
lyr_Zonotrichia_capensis_csv2_10.set('fieldAliases', {'species': 'species', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_sample_zonotrichia_con_biosgpkg_11.set('fieldAliases', {'fid': 'fid', 'bio8': 'bio8', 'bio7': 'bio7', 'bio6': 'bio6', 'bio6 - cop': 'bio6 - cop', 'bio5': 'bio5', 'bio1': 'bio1', 'biome': 'biome', 'bio17': 'bio17', 'bio16': 'bio16', 'bio12': 'bio12', });
lyr_sample_zonotrichia_con_bios_2gpkg_12.set('fieldAliases', {'fid': 'fid', 'species': 'species', 'latitud': 'latitud', 'longitud': 'longitud', 'bio8': 'bio8', 'bio7': 'bio7', 'bio6': 'bio6', 'bio6 - cop': 'bio6 - cop', 'bio5': 'bio5', 'bio1': 'bio1', 'biome': 'biome', 'bio17': 'bio17', 'bio16': 'bio16', 'bio12': 'bio12', });
lyr_Zonotrichia_capensis_csv2_10.set('fieldImages', {'species': '', 'latitud': '', 'longitud': '', });
lyr_sample_zonotrichia_con_biosgpkg_11.set('fieldImages', {'fid': '', 'bio8': '', 'bio7': '', 'bio6': '', 'bio6 - cop': '', 'bio5': '', 'bio1': '', 'biome': '', 'bio17': '', 'bio16': '', 'bio12': '', });
lyr_sample_zonotrichia_con_bios_2gpkg_12.set('fieldImages', {'fid': '', 'species': '', 'latitud': '', 'longitud': '', 'bio8': '', 'bio7': '', 'bio6': '', 'bio6 - cop': '', 'bio5': '', 'bio1': '', 'biome': '', 'bio17': '', 'bio16': '', 'bio12': '', });
lyr_Zonotrichia_capensis_csv2_10.set('fieldLabels', {'species': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_sample_zonotrichia_con_biosgpkg_11.set('fieldLabels', {'fid': 'no label', 'bio8': 'no label', 'bio7': 'no label', 'bio6': 'no label', 'bio6 - cop': 'no label', 'bio5': 'no label', 'bio1': 'no label', 'biome': 'no label', 'bio17': 'no label', 'bio16': 'no label', 'bio12': 'no label', });
lyr_sample_zonotrichia_con_bios_2gpkg_12.set('fieldLabels', {'fid': 'no label', 'species': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'bio8': 'no label', 'bio7': 'no label', 'bio6': 'no label', 'bio6 - cop': 'no label', 'bio5': 'no label', 'bio1': 'no label', 'biome': 'no label', 'bio17': 'no label', 'bio16': 'no label', 'bio12': 'no label', });
lyr_sample_zonotrichia_con_bios_2gpkg_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});