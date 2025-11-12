import { SKILLS_INFO } from "../../utils/skillsInfo";
import LevelComponent from "../LevelComponent";
import LevelBar from "../ui/LevelBar";

export default function ExperienceContent() {
  return (
    <section className="flex flex-col gap-24 w-full items-center h-full p-4">
      <div data-testid="experience-content-main-container">
        <h1 className="text-4xl font-semibold font-sains text-golden-yellow">
          Projetos
        </h1>
      </div>

      <section>
        <h2 className="text-4xl font-semibold font-sains text-golden-yellow">
          Skills
        </h2>
      </section>

      <div
        data-testid="experience-skills-main-container"
        className="w-full flex flex-col gap-6 md:grid md:grid-cols-2  md:justify-items-center"
      >
        {SKILLS_INFO.map((skill) => {
          return (
            <div key={skill.id} className="md:max-w-[400px] w-full">
              <LevelComponent label={skill.label} level={skill.level} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
