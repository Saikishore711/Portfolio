import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, demoLink, githubLink }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between">
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          <FaExternalLinkAlt className="inline-block mr-2" />
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
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
      title: 'Project 1',
      description: 'Description of project 1',
      demoLink: 'https://example.com/demo1',
      githubLink: 'https://github.com/user/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      demoLink: 'https://example.com/demo2',
      githubLink: 'https://github.com/user/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
