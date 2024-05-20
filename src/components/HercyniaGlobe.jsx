import Globe from 'react-globe.gl';
import { useRef, useState } from 'react';

import imageDefault from '../assets/hercynia/h5-min.png';
import imagePreMF from '../assets/hercynia/h5-min-pre.png';
import imageWinter from '../assets/hercynia/h5-min-winter.png';
import topology from '../assets/hercynia/topology.png';

import hexRgb from 'hex-rgb';
import { ringsData } from '../data/hercyniaData';
import { getIcon } from '../data/getIcon';

const HercyniaGlobe = ({
    locationsData = [],
    arcsData = [],
    isMonsoonSeason = false,
    isWinterSeason = false,
    isMountainFall = true,
    startLocation
}) => {
const [displayData, setDisplayData] = useState();
console.log(displayData);
const globeRef = useRef(null);

const goTo = (place, ms=1000) => {
    globeRef.current.pointOfView({
    ...place,
    altitude: 0.7,
  },ms)
};

const globeImage = isWinterSeason ? imageWinter : isMountainFall ? imageDefault : imagePreMF;

  const globeReady = () => {
    if (globeRef.current) {
      goTo(startLocation, 4000);
    }
  };



  return (
    <div >
        <div className='cursor-move'>
            <Globe
            globeImageUrl={globeImage}
            ref={globeRef}
            onGlobeReady={globeReady}
            bumpImageUrl={topology}

            htmlElementsData={locationsData}
            htmlAltitude='altitude'
            htmlElement={(data) => {
            const { name, color, size, icon } = data;
            const element = document.createElement('div');
            element.style.color = color;
            element.innerHTML = getIcon(name, color, size, icon);

            element.style['pointer-events'] = 'auto';
            element.style.cursor = 'pointer';
            element.onclick = () => {
                goTo(data)
                setDisplayData(data);
            }
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

            arcsData={arcsData}
            arcColor='color'
            arcStroke='stroke'
            arcDashGap='gap'
            arcDashLength='dash'
            arcAltitudeAutoScale='scale'
            arcDashAnimateTime='time'
        />
    </div>
    {displayData && (
        <div className='fixed bg-white z-40 top-0 right-0'>
            {displayData.name}
        </div>
    )}
    </div>
  );
};

export default HercyniaGlobe;
