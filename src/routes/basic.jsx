import { useRef } from 'react';
import Globe from 'react-globe.gl';


import globeImage from '../assets/hercynia/h5-min.png';


const Page = () => {


  return (
    <div className='cursor-move'>
      <Globe
        globeImageUrl={globeImage}
      />
    </div>
  );
};

export default Page;
