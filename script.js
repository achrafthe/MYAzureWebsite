document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const geojsonData = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": "United States",
                    "president": "Joe Biden"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-98.35, 39.50]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Canada",
                    "president": "Mary Simon (Governor General, representing the monarch)"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-106.34, 56.13]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "France",
                    "president": "Emmanuel Macron"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.21, 46.23]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Brazil",
                    "president": "Luiz Inácio Lula da Silva"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-51.9253, -14.2350]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Russia",
                    "president": "Vladimir Putin"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [105.3188, 61.5240]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "China",
                    "president": "Xi Jinping"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [104.1954, 35.8617]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "India",
                    "president": "Droupadi Murmu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [78.9629, 20.5937]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Germany",
                    "president": "Frank-Walter Steinmeier"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.4515, 51.1657]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "South Africa",
                    "president": "Cyril Ramaphosa"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [22.9375, -30.5595]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Australia",
                    "president": "David Hurley (Governor General, representing the monarch)"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [133.7751, -25.2744]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Mexico",
                    "president": "Andrés Manuel López Obrador"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-102.5528, 23.6345]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Japan",
                    "president": "Naruhito (Emperor, representing the state)"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [138.2529, 36.2048]
                }
            }
        ]
    };

    L.geoJSON(geojsonData, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng);
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.name && feature.properties.president) {
                layer.bindPopup(`<strong>${feature.properties.name}</strong><br>President: ${feature.properties.president}`);
            }
        }
    }).addTo(map);
});
