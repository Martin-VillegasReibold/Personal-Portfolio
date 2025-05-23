import { Briefcase, Code, User, Cross } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const itemsLeft = [
    {
      paragraph: t("about.itemsLeft.p1"),
    },
    {
      paragraph: t("about.itemsLeft.p2"),
    },
  ];

  const buttonsLeft = [
    { tag: t("about.itemsLeft.b1"), href: "#contact" },
    { tag: t("about.itemsLeft.b2"), href: "#" },
  ];

  const itemsRight = [
    {
      icon: "code",
      title: t("about.itemsRight.i1.t"),
      content: t("about.itemsRight.i1.c"),
    },
    {
      icon: "user",
      title: t("about.itemsRight.i2.t"),
      content: t("about.itemsRight.i2.c"),
    },
    {
      icon: "briefcase",
      title: t("about.itemsRight.i3.t"),
      content: t("about.itemsRight.i3.c"),
    },
  ];

  const renderIcon = (param) => {
    switch (param) {
      case "code":
        return <Code className="h-6 w-6 text-primary" />;
      case "user":
        return <User className="h-6 w-6 text-primary" />;
      case "briefcase":
        return <Briefcase className="h-6 w-6 text-primary" />;
      default:
        return <Cross className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.titlePart1")}{" "}
          <span className="text-primary"> {t("about.titlePart2")} </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("about.titleLeft")}</h3>
            {itemsLeft.map((p, key) => (
              <p key={key} className="text-muted-foreground">
                {p.paragraph}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {buttonsLeft.map((tag, key) => (
                <a key={key} href={tag.href} className="cosmic-button">
                  {tag.tag}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {itemsRight.map((item, key) => (
              <div key={key} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {renderIcon(item.icon)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> {item.title} </h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
