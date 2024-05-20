import "./Timeline.css"; // Import CSS for styling
import timelineElements from "./timelineElements";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const TimelinePage = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex items-center justify-center md:px-5 md:py-5 md:mb-5">
        <FaGraduationCap className="mr-3 text-2xl md:text-3xl" />
        <h1 className="mr-3 text-2xl md:text-3xl">Education &</h1>
        <FaLaptopCode className="mr-3 text-2xl md:text-3xl" />
        <h1 className="text-2xl md:text-3xl">Experience</h1>
      </div>

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: 'black',
                boxShadow: 'none'
              }} 
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <FaLaptopCode /> : <FaGraduationCap />}
              contentArrowStyle={{borderRight: '7px solid black'}}
            >
            
             <h3 className="vertical-timeline-element-title font-bold">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle font-medium">
                {element.location}
              </h5>
              <ul id="description">
                {element.description.split("\n").map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>{" "}
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
           
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default TimelinePage;
