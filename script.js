document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    fetch('countries.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
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
});
