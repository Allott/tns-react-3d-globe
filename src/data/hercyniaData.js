const locations = {
    "Daylight": {
        "name": "Daylight",
        "lat": 33.5,
        "lng": -1.75,
        "altitude": 0,
        "color": "#00912c",
        "size": 18,
        "icon": "city"
    },
    "Hivehome": {
        "name": "Hivehome",
        "lat": 32.5,
        "lng": -13,
        "altitude": 0,
        "color": "#00912c",
        "size": 24,
        "icon": "city"
    },
    "MycolFields": {
        "name": "Mycol Fields",
        "lat": 22,
        "lng": -14,
        "altitude": 0,
        "color": "#00912c",
        "size": 24,
        "icon": "city"
    },
    "Evergreen": {
        "name": "Evergreen",
        "lat": 29,
        "lng": -4,
        "altitude": 0.001,
        "color": "#47a9ff",
        "size": 16,
        "icon": "city"
    },
    "Merricktown": {
        "name": "Merricktown",
        "lat": 28.2,
        "lng": -2,
        "altitude": 0,
        "color": "#575757",
        "size": 12,
        "icon": "town"
    },
    "LiuMaize": {
        "name": "Liu Maize",
        "lat": 27,
        "lng": -2.5,
        "altitude": 0,
        "color": "#575757",
        "size": 12,
        "icon": "town"
    },
    "Laguna": {
        "name": "Laguna",
        "lat": 1,
        "lng": 35,
        "altitude": 0,
        "color": "#05ffb4",
        "size": 24,
        "icon": "city"
    },
    "BellaCosta": {
        "name": "Bella Costa",
        "lat": 17,
        "lng": 56,
        "altitude": 0,
        "color": "#05ffb4",
        "size": 26,
        "icon": "city"
    },
    "BemHonore": {
        "name": "Bem Honore",
        "lat": 33,
        "lng": 107,
        "altitude": 0,
        "color": "#823ba8",
        "size": 30,
        "icon": "city"
    },
    "ST.Tellus": {
        "name": "ST. Tellus",
        "lat": -45,
        "lng": 121,
        "altitude": 0,
        "color": "#823ba8",
        "size": 26,
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
      color: '#00ff00',
      speed: 1,
      repeat: 4000,
    },
    {
        lat: 31.2,
        lng: -51,
        radius: 7,
        color: '#00ff00',
        speed: 1,
        repeat: 3000,
      },
      {
        lat: 22,
        lng: -47.5,
        radius: 4,
        color: '#00ff00',
        speed: 1,
        repeat: 3450,
      },
      {
        lat: 47,
        lng: -60,
        radius: 6,
        color: '#00ff00',
        speed: 1,
        repeat: 3100,
      },
      {
        lat: 50,
        lng: -79,
        radius: 8,
        color: '#00ff00',
        speed: 1,
        repeat: 3200,
      },
      {
        lat: 38,
        lng: -69,
        radius: 12,
        color: '#00ff00',
        speed: 1,
        repeat: 4300,
      },
      {
        lat: 15.3,
        lng: 135,
        radius: 3,
        color: '#00ff00',
        speed: 1,
        repeat: 1500,
      },
      {
        lat: -30,
        lng: 106.5,
        radius: 3,
        color: '#00ff00',
        speed: 1,
        repeat: 2100,
      },
      {
        lat: -29.3,
        lng: -18.4,
        radius: 7,
        color: '#00ff00',
        speed: 1,
        repeat: 3000,
      },
  ];

const locationsArray = Object.values(locations);


export { locations, locationsArray, ringsData };