import { twMerge } from "tailwind-merge";
import { IntegrationsType } from "../sections/Integrations";
import Image from "next/image";

const IntegrationItem = (props: { integrations: IntegrationsType, className?: string }) => {
  const { integrations, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-6 pb-4", className)}>
      {integrations.map((item) => (
        <div
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
          key={item.name}
        >
          <div className="flex justify-center">
            <Image
              className="size-24"
              src={item.icon}
              alt={`${item.name} logo`}
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{item.name}</h3>
          <p className="text-center text-white/50 mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IntegrationItem;
