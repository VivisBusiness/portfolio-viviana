import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n  } = useTranslation();

  const getFileUrl = (): string => {
    const lang = i18n.language;
    const fileMap: Record<string, string> = {
      es: 'cv_es.pdf',
      en: 'cv_en.pdf',
    };

    return fileMap[lang] || fileMap['en'];
  };

  const handleViewFile = () => {
    const fileUrl = getFileUrl();
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full flex items-center bg-stone-50 justify-center px-4">
      <div className="max-w-4xl text-center py-12 md:px-6">
        <h1 className="text-4xl font-bold text-purple-800">
        {t("hero.myName")}
        </h1>

        <h2 className="text-2xl font-medium text-gray-700 mt-2">
          {t("hero.title")}
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          {t("hero.description")}
        </p>

        <div className="mt-6 flex gap-4 max-w-sm mx-auto">
          <button 
            onClick={handleViewFile} 
            className="flex-1 bg-purple-800 hover:bg-purple-900 text-white font-medium py-2 px-6 rounded-xl shadow"
            aria-label={t('download')}
          >
            {t("hero.cv")}
          </button>

          <button className="flex-1 border border-purple-800 text-purple-800 hover:bg-purple-50 font-medium py-2 px-6 rounded-xl">
            {t("hero.contact")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
