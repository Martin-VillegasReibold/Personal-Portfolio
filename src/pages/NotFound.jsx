import { useNavigate } from "react-router";
import { ROUTES } from "../const/index";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import ChangeLang from "../components/ChangeLang";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className=" px-4 py-8 min-h-screen flex items-center justify-center flex-col">
      <ThemeToggle />
      <ChangeLang />
      <StarBackground />
      <img src="/img/alt.png" className="rounded w-64 md:w-80" />
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gradient ml-3 opacity-0 animate-fade-in-delay-2">
          {t("notFound.404")}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 mb-6">
          {t("notFound.message")}
        </p>
        <button
          onClick={() => navigate(ROUTES.home)}
          className="cosmic-button cursor-pointer"
        >
          {t("notFound.button")}
        </button>
      </div>
    </div>
  );
};
export default NotFound;
