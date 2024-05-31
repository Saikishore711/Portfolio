import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Typewriter = ({ words, loop, typeSpeed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = words[currentIndex % words.length];
      const currentWordLength = currentWord.length;

      if (displayedText === currentWord && loop) {
        // Clear the displayed text and reset the index for the next word
        setDisplayedText("");
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (displayedText === currentWord && !loop) {
        // Stop the typewriter effect if not looping
        clearInterval(interval);
      } else if (displayedText !== currentWord) {
        // Add a letter from the current word
        const nextLetter = currentWord[displayedText.length];
        setDisplayedText((prevText) => prevText + nextLetter);
      }
    }, typeSpeed);

    return () => clearInterval(interval);
  }, [displayedText, currentIndex, words, loop, typeSpeed]);

  return <span>{displayedText}</span>;
};
const words = ["Mobile", "Web", "Desktop"]; // Array of words

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#7469B6] font-bold p-2">Web & App Development</p>
          <div className="text-3xl py-0 flex justify-center  items-center md:text-7xl  font-bold md:py-6">
            <h1 className="py-0 text-2xl mt-2 mr-2 md:text-5xl md:mr-4 md:mt-4 text-gray-500">
              {" "}
              Hello I`m{" "}
            </h1>
            <h1>SAI KISHORE</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl text-xl font-bold py-4 text-gray-500">
              Software Developer -
            </p>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold pl-2">
              <Typewriter loop={true} words={words} typeSpeed={200} />
            </p>
          </div>
          <div className="flex flex-col items-center mt-5">
            <div className="flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/choragudi-sai-kishore-57963520a/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <FaLinkedin className="mr-3 text-2xl md:text-3xl" />
              </a>
              <a
                href="https://github.com/Saikishore711"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <FaGithub className="mr-3 text-2xl md:text-3xl" />
              </a>
              <a
                href="https://drive.google.com/file/d/1LJ5sB9qFXwjoUlKofPwZU-urtjZC91tS/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <button className="flex items-center text-2xl border border-white rounded-lg px-4 py-2">
                  Resume
                </button>
              </a>
            </div>
            <div className="mt-12 transform transition-transform duration-300 hover:scale-110">
              <Link to="Experience" smooth={true} duration={500}>
              <FaAngleDoubleDown className="text-3xl text-gray-600"/>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
