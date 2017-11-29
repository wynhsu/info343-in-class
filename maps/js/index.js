"use strict";

const seattleCoordinates = [-122.3321, 47.6062];
const seattlePoliceIncidentsAPI = "https://data.seattle.gov/resource/pu5n-trf4.json";

mapboxgl.accessToken = 'pk.eyJ1Ijoid3luaHN1IiwiYSI6ImNqYTl6Z2VjajBuajkyd3F1MTNhdnA3aWoifQ.QZAysCnvmcdULbTzOBfW8w';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: seattleCoordinates,
    zoom: 12
});
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onCurrentPos, onErrorPos, { enableHighAccuracy: true });//calls GPS; can have altitude
}

function onCurrentPos(position) {
    console.log(position);
    let lnglat = [position.coords.longitude, position.coords.latitude];
    map.flyTo({ center: lnglat, zoom: 14 });

    let div = document.createElement('div');
    div.className = 'mapboxgl-user-location-dot';
    let marjer = new mapboxgl.Marker(div)
        .setLngLat(lnglat)
        .addTo(map);
}

function onErrorPos(error) {
    console.error(error);
}

fetch(seattlePoliceIncidentsAPI)
    .then(function (resp) {
        if (resp.ok) {
            return resp.json();
        }
        return resp.text()
            .then(function (message) {
                throw new Error(msg);
            });
    })
    .then(function (data) {
        console.log(data);
        data.forEach(function (record) {
            if (record.longitude && record.latitude) {
                let lnglat = [record.longitude, record.latitude];
                let div = document.createElement('div');
                div.className = 'data-marker';
                let marker = new mapboxgl.Marker(div)
                    .setLngLat(lnglat)
                    .addTo(map);
                let popup = new mapboxgl.Popup();
                popup.setHTML('<h2>'+record.event_clearance_description+'</h2>');
                marker.setPopup(popup);
            }
        });
    })
    .catch(function (err) {
        console.error(err);
        alert(err.message);
    })