import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-4 py-8 justify-center">
      <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-md">
        <img src="./profile.jpeg" alt="Profile" className="w-full h-full object-cover"/>
      </div>

      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-purple-600 mb-2">
          {t("aboutMe.title")}
        </h2>

        <p className="text-gray-700 max-w-3xl">
        {t("aboutMe.description")}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
