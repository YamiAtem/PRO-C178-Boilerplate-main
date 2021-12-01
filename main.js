let latitude = 22.7868542;
let longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoicHlkZXYxOSIsImEiOiJja3duaWo1cGwybXI4Mm9xaWY3dGltcGViIn0.Tf-AA38yRUtOej_v7thYpQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16
});

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);
