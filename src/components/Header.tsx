import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="w-full flex justify-between px-4 bg-stone-50">
      <div className="w-16">
        <img src="./vmg.png" alt="logo VMG"/>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => handleLanguageChange('es')}
          className={`text-sm font-medium ${
            i18n.language === 'es' ? 'text-purple-800 underline' : 'text-gray-700'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => handleLanguageChange('en')}
          className={`text-sm font-medium ${
            i18n.language === 'en' ? 'text-purple-800 underline' : 'text-gray-700'
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
};

export default Header;
