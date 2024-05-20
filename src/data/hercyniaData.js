const locations = {
    "Daylight": {
        "name": "Daylight",
        "lat": 33.5,
        "lng": -1.75,
        "altitude": 0,
        "color": "#00912c",
        "size": 14,
        "icon": "city"
    },
    "Hivehome": {
        "name": "Hivehome",
        "lat": 32.5,
        "lng": -13,
        "altitude": 0,
        "color": "#00912c",
        "size": 20,
        "icon": "city"
    },
    "MycolFields": {
        "name": "Mycol Fields",
        "lat": 22,
        "lng": -14,
        "altitude": 0,
        "color": "#00912c",
        "size": 20,
        "icon": "city"
    },
    "Evergreen": {
        "name": "Evergreen",
        "lat": 29,
        "lng": -4,
        "altitude": 0.001,
        "color": "#47a9ff",
        "size": 20,
        "icon": "city"
    },
    "Merricktown": {
        "name": "Merricktown",
        "lat": 28.2,
        "lng": -2,
        "altitude": 0,
        "color": "#9c9c9c",
        "size": 12,
        "icon": "town"
    },
    "LiuMaize": {
        "name": "Liu Maize",
        "lat": 27,
        "lng": -2.5,
        "altitude": 0,
        "color": "#9c9c9c",
        "size": 12,
        "icon": "town"
    },
    "Laguna": {
        "name": "Laguna",
        "lat": 1,
        "lng": 35,
        "altitude": 0,
        "color": "#05ffb4",
        "size": 15,
        "icon": "city"
    },
    "BellaCosta": {
        "name": "Bella Costa",
        "lat": 17,
        "lng": 56,
        "altitude": 0,
        "color": "#05ffb4",
        "size": 15,
        "icon": "city"
    },
    "BemHonore": {
        "name": "Bem Honore",
        "lat": 33,
        "lng": 107,
        "altitude": 0,
        "color": "#823ba8",
        "size": 20,
        "icon": "city"
    },
    "ST.Tellus": {
        "name": "ST. Tellus",
        "lat": -45,
        "lng": 121,
        "altitude": 0,
        "color": "#823ba8",
        "size": 20,
        "icon": "city"
    },
    "Tower1": {
        "name": "Tower 1",
        "lat": 28,
        "lng": -3.6,
        "altitude": 0,
        "color": "#969696",
        "size": 10,
        "icon": "tower"
    },
    "Tower2": {
        "name": "Tower 2",
        "lat": 31,
        "lng": -5,
        "altitude": 0,
        "color": "#969696",
        "size": 10,
        "icon": "tower"
    },
    "Tower3": {
        "name": "Tower 3",
        "lat": 28.7,
        "lng": 1.5,
        "altitude": 0,
        "color": "#969696",
        "size": 10,
        "icon": "tower"
    },
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

const locationsArray = Object.values(locations);


export { locations, locationsArray, ringsData };