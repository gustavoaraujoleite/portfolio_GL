import { SKILLS_INFO } from "../../utils/skillsInfo";
import LevelComponent from "../LevelComponent";
import ProjectCard from "../ProjectCard";
import SteToloiPortfolio from "../../../../../../public/images/lp_ste_toloi.png";
import NodeFrame from "../../../../../../public/images/node-frame.jpg";
import Link from "next/link";

export default function ExperienceContent() {
  const projectData = [
    {
      id: 1,
      src: SteToloiPortfolio,
      buttonTitle: "Go to repository",
      title: "Stephanie Toloi | Arquitetura",
      alt: "Stephanie Toloi",
      badgesArray: ["Next.js", "Typescript", "Tailwind", "Cypress.io"],
      buttonHref: "https://github.com/gustavoaraujoleite/toloi_architecture",
      description: (
        <>
          Desenvolvimento de uma landinpage moderna e funcional para a arquiteta
          Stephanie Toloi, destacando seus projetos e estilo de trabalho. Fui
          responsável pelo design e desenvolvimento completo, criando uma
          experiência elegante e intuitiva, alinhada à identidade visual do
          escritório.
          <br />
          <br />O projeto foi implementado usando Next.js, React, Tailwind CSS e
          boas práticas de responsividade e performance. Link:{" "}
          <Link
            href="https://www.lp.stephanietoloi.com.br/"
            target="_blank"
            className="underline text-blue-400"
          >
            https://www.lp.stephanietoloi.com.br/
          </Link>
        </>
      ),
    },
    {
      id: 2,
      src: NodeFrame,
      buttonTitle: "Go to repository",
      title: "Gerenciador de arquivos | Backend",
      alt: "Gerenciador de arquivos",
      badgesArray: [
        "Node.js",
        "Typescript",
        "Express",
        "Docker",
        "PostgreSQL",
        "Jest",
      ],
      buttonHref: "https://github.com/gustavoaraujoleite/file_system_manager",
      description: (
        <>
          Desenvolvimento de uma sistema de gerenciamento de arquivos que
          permite aos usuários enviar, visualizar e deletar arquivos. Fui
          responsável pelo design e desenvolvimento completo, criando uma
          experiência funcional, intuitiva e confiável para o usuário.
          <br />
          <br />O projeto foi implementado usando Node.js, Next.js, TypeScript,
          Docker, PostgreSQL e Jest. Foi um projeto pessoal criado para
          aprimorar minhas habilidades em Backend, containerização e
          gerenciamento de banco de dados.
        </>
      ),
    },
  ];
  return (
    <section className="flex flex-col gap-24 w-full items-center h-full px-4">
      <section className="h-full w-full flex flex-col gap-40">
        {projectData.map((project) => {
          return (
            <div key={project.id}>
              <ProjectCard
                src={project.src}
                buttonTitle={project.buttonTitle}
                title={project.title}
                alt={project.alt}
                badgesArray={project.badgesArray}
                buttonHref={project.buttonHref}
                description={project.description}
              />
            </div>
          );
        })}
      </section>

      <section>
        <h2 className="text-3xl font-semibold font-sains text-golden-yellow">
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
