import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ecomImg from '../assets/ecom.png';
import Ajwt from '../assets/ang.png';
import drumkit from '../assets/drumkit.png';
import next from '../assets/next.png';
import cloudit from '../assets/cloudit.png'

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, demoLink, githubLink, imageSrc }) => {
  console.log(imageSrc); // Debugging: Log the image source to verify it's correct
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
  <img src={imageSrc} alt={title} className="w-full h-58 object-cover rounded-lg mb-4" />
  <h2 className="text-white font-semibold mb-2">{title}</h2>
  <p className="text-white mb-4">{description}</p>
  <div className="flex justify-between">
    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
      <FaExternalLinkAlt className="inline-block mr-2" />
      Live Demo
    </a>
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900">
      <FaGithub className="inline-block mr-2" />
      GitHub
    </a>
  </div>
</div>

  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Cloud-It',
      description: 'Social Media Website- ReactTs,appwrite,Tailwindcss and shadcn',
      demoLink: 'https://cloud-it-ten.vercel.app/',
      githubLink: 'https://github.com/Saikishore711/SM_Application.git',
      imageSrc: cloudit

    },
    {
      title: 'E-commerce Website',
      description: 'Reactjs and TailwindCSS E-commerce website',
      demoLink: 'https://react-ecommerce1212.netlify.app/',
      githubLink: 'https://github.com/Saikishore711/react_Ecommerce',
      imageSrc: ecomImg

    },
    {
      title: 'Music School',
      description: 'Next.ts Music School',
      demoLink: 'https://next-music-school-five.vercel.app/',
      githubLink: 'https://github.com/Saikishore711/next_music_school',
      imageSrc: next

    },
    {
      title: 'Angular-JWT',
      description: 'JWT Authentication in Angular',
      demoLink: 'https://github.com/Saikishore711/Angular_Jwt_auth',
      githubLink: 'https://github.com/Saikishore711/Angular_Jwt_auth',
      imageSrc: Ajwt

    },
    {
      title: 'Drum Kit',
      description: 'Virtual Drum Kit',
      demoLink: 'https://unique-kitsune-8a1d5f.netlify.app/',
      githubLink: 'https://github.com/Saikishore711',
      imageSrc: drumkit

    },
    // Add more projects as needed
  ];

  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white items-center ml-5">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
      </div>
    
  );
};

export default ProjectsPage;
