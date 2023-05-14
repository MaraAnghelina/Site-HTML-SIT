const key='oFj0uisoNxQPnbXnI1Kp';
const map = new maplibregl.Map({
    container: 'map', // container id
    style: `https://api.maptiler.com/maps/streets/style.json?key=${key}`, // style URL
    center: [26.156,44.423], // starting position [lng, lat]
    zoom: 11 // starting zoom
});

map.doubleClickZoom.disable();


