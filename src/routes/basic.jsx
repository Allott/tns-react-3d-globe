import { locations, locationsArray, ringsData } from '../data/hercyniaData';

import HercyniaGlobe from '../components/HercyniaGlobe';

const Page = () => {
  const arcs = [];
  const places = locationsArray;

  return (
    <div>
      <HercyniaGlobe
        locationsData={places}
        arcsData={arcs}
        startLocation={locations.Evergreen}
        isWinterSeason={true}
        isMountainFall={true}
        yearText={'HERCYNIA - 5015u - Early Winter'}
      />
    </div>
  );
};

export default Page;
