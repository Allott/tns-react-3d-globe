import { useSearchParams } from 'react-router-dom';
import { locations, locationsArray, ringsData } from '../data/hercyniaData';
import HercyniaGlobe from '../components/HercyniaGlobe';

const Page = () => {
  const arcs = [];
  const places = locationsArray;

  const [searchParams] = useSearchParams();
  var focusLocation = null;
  if (searchParams.has('location')) {
    const location = locations[searchParams.get('location')];
    console.log(location);
    if (location) {
      focusLocation = location;
    }
  }

  if (searchParams.has('lat') && searchParams.has('lng')) {
    const lat = parseFloat(searchParams.get('lat'));
    const lng = parseFloat(searchParams.get('lng'));
    // const name = searchParams.get('name');
    // if(name) {
    //   const color = "#570057";
    //   const size = 14;
    //   const icon = 'info';
    //   const location = { lat, lng, name, color, size, icon };
    //   locationsArray.push(location);
    // }
    ringsData.push({
      lat,
      lng,
      radius: 2,
      color: '#ffbd31',
      speed: 2,
      repeat: 500,
    });
    focusLocation = { lat, lng, size: 14 };
    
  }

  return (
    <div>
      <HercyniaGlobe
        locationsData={places}
        arcsData={arcs}
        startLocation={focusLocation || locations.hivehome}
        isWinterSeason={true}
        isMountainFall={true}
        yearText={'HERCYNIA - 5015u - Early Winter'}
      />
    </div>
  );
};

export default Page;
