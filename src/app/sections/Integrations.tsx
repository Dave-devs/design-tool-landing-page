import Tag from "../components/Tag";
import IntegrationItem from "../components/IntegrationItem";

const integrations = [
  {
    name: "Figma",
    icon: '/figma-logo.svg',
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: "/notion-logo.svg",
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: '/slack-logo.svg',
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: '/relume-logo.svg',
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: '/framer-logo.svg',
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: '/github-logo.svg',
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType = typeof integrations;

export const  Integrations = () => {
  return (
    <section id="integrations" className="py-24 px-6 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 text-lg mt-4">
              Layers seamlessly connects with your favourite tools, making it
              easy to plug any workflow and collaborate accross platforms.
            </p>
          </div>
          <div className="">
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4">
              <IntegrationItem integrations={integrations} />
              <IntegrationItem
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}