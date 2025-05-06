import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-4 bg-stone-50 text-center text-sm text-gray-700">
      <p>
        © {new Date().getFullYear()} {t("footer.rights")}
      </p>
    </footer>
  );
};

export default Footer;
