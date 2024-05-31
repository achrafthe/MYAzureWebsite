// Initialize the map
const map = L.map('map').setView([20, 0], 2);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load GeoJSON data
fetch('countries.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => {
                return L.marker(latlng);
            },
            onEachFeature: (feature, layer) => {
                layer.bindPopup(`<strong>${feature.properties.name}</strong><br>President: ${feature.properties.president}`);
            }
        }).addTo(map);
    });
