import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";


import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            imgId: 'java',
            src: html,
            title: "JAVA",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            imgId: 'go',
            src: html,
            title: "GO",
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            imgId: 'python',
            src: html,
            title: "PYTHON",
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            imgId: 'angular',
            src: html,
            title: "ANGULAR",
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            imgId: 'react',
            src: react,
            title: "REACT",
            style: 'shadow-blue-600'
        },
       
        {
            id: 6,
            imgId: 'windows',
            src: html,
            title: "WPF",
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            imgId: 'next',
            src: css,
            title: "NEXT",
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            imgId: 'tailwind',
            src: tailwind,
            title: "TAILWIND",
            style: 'shadow-sky-500'
        },        
        {
            id: 9,
            imgId: 'flutter',
            src: github,
            title: "FLUTTER",
            style: 'shadow-gray-500'
        },
        {
            id: 10,
            imgId: 'dotnet',
            src: github,
            title: "ASP.NET CORE",
            style: 'shadow-gray-500'
        },
        {
            id: 11,
            imgId: 'nodejs',
            src: github,
            title: "NODE",
            style: 'shadow-gray-500'
        },
        {
            id: 12,
            imgId: 'mysql',
            src: github,
            title: "SQL",
            style: 'shadow-gray-500'
        },
        {
            id: 13,
            imgId: 'mongodb',
            src: github,
            title: "MONGO DB",
            style: 'shadow-gray-500'
        }, 
           {
            id: 14,
            imgId: 'docker',
            src: github,
            title: "DOCKER",
            style: 'shadow-gray-500'
        },
        {
            id: 15,
            imgId: 'aws',
            src: github,
            title: "AWS EC2",
            style: 'shadow-gray-500'
        },
    
    
    
    
    ];

    return (
        <div name='experience' className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                    <p className="py-6">These are the languages and technologies I have worked on</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, title, style,imgId }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={`https://skillicons.dev/icons?i=${imgId}&size=1x`} alt={title} className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;