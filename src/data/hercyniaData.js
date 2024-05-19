const locationCities = {
    "Daylight": {
        "city": "Daylight",
        "lat": 33.5,
        "lng": -1.75,
        "altitude": 0,
        "color": "#00912c"
    },
    "Hivehome": {
        "city": "Hivehome",
        "lat": 32.5,
        "lng": -13,
        "altitude": 0,
        "color": "#00912c"
    },
    "MycolFields": {
        "city": "Mycol Fields",
        "lat": 22,
        "lng": -14,
        "altitude": 0,
        "color": "#00912c"
    },
    "Evergreen": {
        "city": "Evergreen",
        "lat": 28,
        "lng": -4,
        "altitude": 0,
        "color": "#47a9ff"
    },
    "Merricktown": {
        "city": "Merricktown",
        "lat": 27.5,
        "lng": -1.5,
        "altitude": 0,
        "color": "#969696"
    },
    "LiuMaize": {
        "city": "Liu Maize",
        "lat": 26,
        "lng": -2.5,
        "altitude": 0,
        "color": "#969696"
    },
    "Laguna": {
        "city": "Laguna",
        "lat": 1,
        "lng": 35,
        "altitude": 0,
        "color": "#05ffb4"
    },
    "BellaCosta": {
        "city": "Bella Costa",
        "lat": 17,
        "lng": 56,
        "altitude": 0,
        "color": "#05ffb4"
    },
    "BemHonore": {
        "city": "Bem Honore",
        "lat": 33,
        "lng": 107,
        "altitude": 0,
        "color": "#823ba8"
    },
    "ST.Tellus": {
        "city": "ST. Tellus",
        "lat": -45,
        "lng": 121,
        "altitude": 0,
        "color": "#823ba8"
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