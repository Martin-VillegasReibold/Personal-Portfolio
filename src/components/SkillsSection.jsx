import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
const SkillsSection = () => {
  const { t } = useTranslation();

  const categories = ["all", "frontend", "backend", "tools"];

  const skills = [
    // Frontend
    { name: "HTML/CSS", level: 55, category: "frontend" },
    { name: "JavaScript", level: 70, category: "frontend" },
    { name: "React", level: 60, category: "frontend" },
    { name: "Tailwind CSS", level: 60, category: "frontend" },
    { name: "Node.js", level: 20, category: "frontend" },

    // Backend
    { name: "PHP", level: 50, category: "backend" },
    { name: "Laravel", level: 10, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 60, category: "tools" },
    { name: "Figma", level: 25, category: "tools" },
    { name: "VS Code", level: 75, category: "tools" },
  ];

  const changeLang = (param) => {
    if (param === "all") {
      param = t("skills.all");
    }
    if (param === "tools") {
      param = t("skills.tools");
    }
    return param;
  };

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("skills.titlePart1")}{" "}
          <span className="text-primary"> {t("skills.titlePart2")} </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {changeLang(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
