import { useState, useEffect } from 'react';

// Define Typewriter component outside of Home component
// eslint-disable-next-line react/prop-types
const Typewriter = ({ text, loop, typeSpeed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react/prop-types
      if (currentIndex < text.length) {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else if (loop) {
        setDisplayedText('');
        setCurrentIndex(0);
      } else {
        clearInterval(interval);
      }
    }, typeSpeed);

    return () => clearInterval(interval);
  }, [text, loop, typeSpeed, currentIndex]);

  return <span>{displayedText}</span>;
};

const Home = () => {
  return (
    <>
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>
            Web & App Development
          </p>
          <div className='text-3xl py-0 flex justify-center  items-center md:text-7xl  font-bold md:py-6'>
            <h1 className='py-0 text-2xl mt-2 mr-2 md:text-5xl md:mr-4 md:mt-4 text-gray-500'> Hello I`m </h1>
          <h1>
            SAI KISHORE
                      </h1>
          </div>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl text-xl font-bold py-4 text-gray-500'>
             Junior Full Stack
            </p>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'>
              <Typewriter loop={true} text="Developer" typeSpeed={200} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
