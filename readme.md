# Possible esri arcgis-components bug?

The esri arcgis-map web component when built appears to bundle in and load transformations and geodesic length. These are being bundled and loaded despite not being used. When using CDN they do not get loaded. If I don't use arcgis-components and create the webmap using core the bundle is also much smaller and quicker to load.

I've created the most basic web app with three versions (CDN, Vite with web map and vite with arcgis-map)

see https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/arcgis-map-components-build-performance-issues/m-p/1618299#M87194

Performance with CDN

![alt text](/cdn/chrome_ATbakzYN9m.png)


Performance with vite build and arcgis core

![alt text](/vite/chrome_o7FYTGHRgc.png)


Performance with vite build and web components

![alt text](/vite-web-component/chrome_USQjvCJ2ZY.png)

