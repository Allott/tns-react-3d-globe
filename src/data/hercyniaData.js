const locationCities = {
    "Daylight": {
        "name": "Daylight",
        "lat": 33.5,
        "lng": -1.75,
        "altitude": 0,
        "color": "#00912c",
        "size": 14
    },
    "Hivehome": {
        "name": "Hivehome",
        "lat": 32.5,
        "lng": -13,
        "altitude": 0,
        "color": "#00912c",
        "size": 14
    },
    "MycolFields": {
        "name": "Mycol Fields",
        "lat": 22,
        "lng": -14,
        "altitude": 0,
        "color": "#00912c",
        "size": 20
    },
    "Evergreen": {
        "name": "Evergreen",
        "lat": 28,
        "lng": -4,
        "altitude": 0,
        "color": "#47a9ff",
        "size": 14
    },
    "Merricktown": {
        "name": "Merricktown",
        "lat": 27.5,
        "lng": -1.5,
        "altitude": 0,
        "color": "#969696",
        "size": 8
    },
    "LiuMaize": {
        "name": "Liu Maize",
        "lat": 26,
        "lng": -2.5,
        "altitude": 0,
        "color": "#969696",
        "size": 8
    },
    "Laguna": {
        "name": "Laguna",
        "lat": 1,
        "lng": 35,
        "altitude": 0,
        "color": "#05ffb4",
        "size": 10
    },
    "BellaCosta": {
        "name": "Bella Costa",
        "lat": 17,
        "lng": 56,
        "altitude": 0,
        "color": "#05ffb4",
        "size": 16
    },
    "BemHonore": {
        "name": "Bem Honore",
        "lat": 33,
        "lng": 107,
        "altitude": 0,
        "color": "#823ba8",
        "size": 20
    },
    "ST.Tellus": {
        "name": "ST. Tellus",
        "lat": -45,
        "lng": 121,
        "altitude": 0,
        "color": "#823ba8",
        "size": 20
    }
}

const ringsData = [
    {
      lat: 90,
      lng: 0,
      radius: 20,
      color: '#ff0051',
      speed: 1,
      repeat: 4000,
    },
  ];

const locationCitiesArray = Object.values(locationCities);


export { locationCities, locationCitiesArray, ringsData };