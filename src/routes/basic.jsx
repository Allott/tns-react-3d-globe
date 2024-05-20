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
        isWinterSeason={false}
        isMountainFall={true}
      />
    </div>
  );
};

export default Page;
