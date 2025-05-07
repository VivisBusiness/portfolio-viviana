import { useTranslation } from "react-i18next";
import SkillCard from "./SkillCard";
import { skills } from "../../utils/skillsData";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">
        { t('skills.title')}
      </h2>

      <div className="space-y-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {items.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
