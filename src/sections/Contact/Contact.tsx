import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react';
import { contactData } from '../../utils/contactData';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 md:px-24 bg-white" id="contact">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">
        { t('contact.title')}
      </h2>

      <div className="flex flex-wrap gap-6">
        {contactData(t).map(({ name, icon, tooltip, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ir a ${name}`}
            className="group relative flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Icon icon={icon} width="40" height="40"/>

            <span className="text-sm text-gray-700 dark:text-gray-200">{name}</span>

            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10 opacity-80">
              {tooltip}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
