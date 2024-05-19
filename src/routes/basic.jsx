import Globe from 'react-globe.gl';
import { useRef } from 'react';

import globeImage from '../assets/hercynia/h5-min.png';
import hexRgb from 'hex-rgb';
import { locationCities, locationCitiesArray, ringsData } from '../data/hercyniaData';

const Page = () => {
  const globeRef = useRef(null);

  const arcs = [];

  const places = locationCitiesArray;

  const globeReady = () => {
    if (globeRef.current) {
      globeRef.current.pointOfView({
        ...locationCities.Evergreen,
        altitude: 1,
      },4000);
    }
  };

  return (
    <div className='cursor-move'>
      <Globe
        globeImageUrl={globeImage}
        ref={globeRef}
        onGlobeReady={globeReady}

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

        ringsData={ringsData}
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
