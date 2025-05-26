# Possible esri bug?

The esri arcgis-map web component when built appears to bundle in and load transformations and geodesic length. These are being bundled and loaded despite not being used. When using CDN they do not get loaded.

I've created the most basic web app with three versions (CDN, Vite with web map and vite with arcgis-map)

see https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/arcgis-map-components-build-performance-issues/m-p/1618299#M87194