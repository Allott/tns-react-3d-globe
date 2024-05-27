import Globe from 'react-globe.gl';
import { useRef, useState } from 'react';

import imageDefault from '../assets/hercynia/h5-min.png';
import imagePreMF from '../assets/hercynia/h5-min-pre.png';
import imageWinter from '../assets/hercynia/h5-min-winter.png';
import topology from '../assets/hercynia/topology.png';
import InfoBox from './InfoBox';

import hexRgb from 'hex-rgb';
import { ringsData } from '../data/hercyniaData';
import { getIcon } from '../data/getIcon';
import { labels } from '../data/labels';

const zoomMod = 0.03;

const HercyniaGlobe = ({
    locationsData = [],
    arcsData = [],
    isMonsoonSeason = false,
    isWinterSeason = false,
    isMountainFall = true,
    startLocation
}) => {
const [displayData, setDisplayData] = useState();
const globeRef = useRef(null);

const goTo = (place, ms=1000) => {
    globeRef.current.pointOfView({
    ...place,
    altitude: place.size * zoomMod,
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

            labelsData={labels}
            labelLat={d => d.latitude}
            labelLng={d => d.longitude}
            labelText={d => d.name}
            labelSize={d => d.size}
            labelColor={d => d.color}
            labelResolution={2}
            labelDotRadius={0}
        />
    </div>
      <InfoBox setDisplayData={setDisplayData} displayData={displayData} {...displayData} />
    </div>
  );
};

export default HercyniaGlobe;
