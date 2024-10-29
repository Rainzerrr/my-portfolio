import Separator from "@/components/atoms/separator/separator";
import List from "@/components/organisms/list/list";
import "./presentation-skills.scss";
import { useTranslations } from "next-intl";
import TechnologyIconText, {
  TechnologyIconTextProps,
} from "@/components/molecules/technology-icon/technology-icon";

const PresentationSkills = () => {
  const t = useTranslations();

  const technologies: TechnologyIconTextProps[] = [
    { icon: "js", label: "JavaScript" },
    { icon: "ts", label: "TypeScript" },
    { icon: "react", label: "React.js" },
    { icon: "next-js", label: "Next.js" },
    { icon: "angular", label: "Angular" },
    { icon: "node_js", label: "Node.js" },
    { icon: "java", label: "Java" },
    { icon: "php", label: "PHP" },
    { icon: "mysql", label: "MySQL" },
    { icon: "mongodb", label: "MongoDB" },
    { icon: "git", label: "Git" },
    { icon: "azure-devops", label: "Azure DevOps" },
  ];
  const softSkillsKeys = [
    "presentation.skills.soft-skill1",
    "presentation.skills.soft-skill2",
    "presentation.skills.soft-skill3",
    "presentation.skills.soft-skill4",
    "presentation.skills.soft-skill5",
    "presentation.skills.soft-skill6",
  ];
  const languagesKeys = [
    "presentation.languages.fr",
    "presentation.languages.en",
    "presentation.languages.es",
  ];
  const interestsKeys = [
    "presentation.interests.interest1",
    "presentation.interests.interest2",
    "presentation.interests.interest3",
  ];

  const renderTechnologies = (technology: TechnologyIconTextProps) => (
    <TechnologyIconText
      key={technology.label}
      icon={technology.icon}
      label={technology.label}
    />
  );

  return (
    <div className="presentation-skills">
      <div className="presentation-skills__technologies-section">
        <p className="presentation-skills__title">
          {t("presentation.skills.hard-skills-title")}
        </p>
        <div className="presentation-skills__technologies-section__technologies">
          {technologies.map(renderTechnologies)}
        </div>
      </div>
      <Separator />
      <div className="presentation-skills__bottom-sections">
        <div className="presentation-skills__section">
          <p className="presentation-skills__title">
            {t("presentation.skills.soft-skills-title")}
          </p>
          <List items={softSkillsKeys} />
        </div>
        <Separator />
        <div className="presentation-skills__section">
          <p className="presentation-skills__title">
            {t("presentation.languages.title")}
          </p>
          <List items={languagesKeys} />
        </div>
        <Separator />
        <div className="presentation-skills__section">
          <p className="presentation-skills__title">
            {t("presentation.interests.title")}
          </p>
          <List items={interestsKeys} />
        </div>
      </div>
    </div>
  );
};

export default PresentationSkills;
