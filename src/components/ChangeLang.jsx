import { useTranslation } from "react-i18next";
import "../i18n";

const ChangeLang = () => {
  const { i18n } = useTranslation();

  const toogleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  const flagSrc = i18n.language === "es" ? "/img/ES.png" : "/img/GB.png";

  return (
    <div className="fixed top-30 right-8 z-50 cursor-pointer">
      <img
        src={flagSrc}
        className="w-10 h-10 hover:scale-110 transition-transform rounded-full shadow-md"
        onClick={toogleLanguage}
      />
    </div>
  );
};

export default ChangeLang;
