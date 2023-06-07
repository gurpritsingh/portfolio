import Image from 'next/image';

import HighLightBox from '../components/HighLightBox';

export default function Home() {
  return (
    <HighLightBox>
      <h1 className="text-4xl font-medium">👋 Hi, Im Gurprit </h1>
      <h2 className="text-xl font-light mt-8 tracking-wider leading-8">
        Im a web developer from Delhi, India. Currently lead developer at a local agency. In my spare time I enjoy DIY,
        gaming and building my own projects. My preferred tools are React, Next js and MongoDB.
      </h2>
      <p className='text-xl font-light mt-4 tracking-wider leading-8'>
        I am on GitHub and Linkedin
      </p>
    </HighLightBox>
  );
}
