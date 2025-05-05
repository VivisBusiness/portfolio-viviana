import { useTranslation } from "react-i18next";
import Card from "../../components/Card";
import { projectsList } from "../../utils/projectList";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">
        { t('projects.title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsList(t).map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            url={project.url}
            buttonText={project.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
