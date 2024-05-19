import { locationCities, locationCitiesArray, ringsData } from '../data/hercyniaData';

import HercyniaGlobe from '../components/hercyniaGlobe';

const Page = () => {
  const arcs = [];
  const places = locationCitiesArray;

  return (
    <div>
      <HercyniaGlobe
        locationsData={places}
        arcsData={arcs}
        startLocation={locationCities.Evergreen}
        isWinterSeason={false}
        isMountainFall={true}
      />
    </div>
  );
};

export default Page;
