import Globe from 'react-globe.gl';
import globeImage from '../assets/hercynia/h5-min.png';
import hexRgb from 'hex-rgb';

const Page = () => {

  const arcs = [
    {
      startLat: 17,
      startLng: 56,
      endLat: 1,
      endLng: 35,
      color: ['#00ff33', '#ff0000'],
      stroke: 1,
      gap: 0.02,
      dash: 0.02,
      scale: 0.3,
      time: 4000,
    },
  ];

  const rings = [
    {
      lat: 90,
      lng: 0,
      radius: 20,
      color: '#ff0051',
      speed: 1,
      repeat: 4000,
    },
  ];

  const places = [
    {
      city: 'Daylight',
      lat: 33.5,
      lng: -1.75,
      altitude: 0,
      color: '#00912c',
    },
    {
      city: 'Hivehome',
      lat: 32.5,
      lng: -13,
      altitude: 0,
      color: '#00912c',
    },
    {
      city: 'Mycol Fields',
      lat: 22,
      lng: -14,
      altitude: 0,
      color: '#00912c',
    },
    {
      city: 'Evergreen',
      lat: 28,
      lng: -4,
      altitude: 0,
      color: '#47a9ff',
    },
    {
      city: 'Merricktown',
      lat: 27.5,
      lng: -1.5,
      altitude: 0,
      color: '#969696',
    },
    {
      city: 'Liu Maize',
      lat: 26,
      lng: -2.5,
      altitude: 0,
      color: '#969696',
    },
    {
      city: 'Laguna',
      lat: 1,
      lng: 35,
      altitude: 0,
      color: '#05ffb4',
    },
    {
      city: 'Bella Costa',
      lat: 17,
      lng: 56,
      altitude: 0,
      color: '#05ffb4',
    },
    {
      city: 'Bem Honore',
      lat: 33,
      lng: 107,
      altitude: 0,
      color: '#823ba8',
    },
    {
      city: 'ST. Tellus',
      lat: -45,
      lng: 121,
      altitude: 0,
      color: '#823ba8',
    },
  ];

  return (
    <div className='cursor-move'>
      <Globe
        globeImageUrl={globeImage}

        htmlElementsData={places}
        htmlAltitude='altitude'
        htmlElement={(data) => {
          const { city, color } = data;
          const element = document.createElement('div');
          element.style.color = color;
          element.innerHTML = `
          <div>
            <svg viewBox="0 0 24 24" style="width:24px;margin:0 auto;">
              <path fill="currentColor" fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <strong style="font-size:10px;text-align:center">${city}</strong>
          </div>`;
          return element;
        }}

        ringsData={rings}
        ringMaxRadius='radius'
        ringColor={(ring) => (time) => {
          const { red, green, blue } = hexRgb(ring.color);
          return `rgba(${red},${green},${blue},${Math.sqrt(1 - time)})`;
        }}
        ringPropagationSpeed='speed'
        ringRepeatPeriod='repeat'

        arcsData={arcs}
        arcColor='color'
        arcStroke='stroke'
        arcDashGap='gap'
        arcDashLength='dash'
        arcAltitudeAutoScale='scale'
        arcDashAnimateTime='time'
      />
    </div>
  );
};

export default Page;
