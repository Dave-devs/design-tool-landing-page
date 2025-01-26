import Image from "next/image";
import FeatureCard from "../components/FeatureCard";
import Tag from "../components/Tag";
import Avatar from "../components/Avatar";
import Key from "../components/Key";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container">
        <div className="flex justify-center items-center">
          <Tag>Features</Tag>
        </div>

        <h2 className="text-6xl text-center font-medium mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Realtime Collaboration"
            desc="Work together seamlessly with conflict-free team editing"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image
                  src={"/avatar-ashwin-santiago.jpg"}
                  alt={"Avatar 1"}
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image
                  src={"/avatar-lula-meyers.jpg"}
                  alt={"Avatar 2"}
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image
                  src={"/avatar-florence-shaw.jpg"}
                  alt={"Avatar 3"}
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    src={"/avatar-owen-garcia.jpg"}
                    alt={"Avatar 4"}
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                    width={0}
                    height={0}
                  />
                  {Array.from({ length: 3 }).map((_, index) => (
                    <span
                      key={index}
                      className="size-1.5 rounded-full bg-white inline-flex"
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Interactive Prototyping"
            desc="Engage your clients with prototypes that reacts to user actions"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                We&apos;ve achieved{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 relative">
                  <span>incredible</span>
                  <video
                    src="/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  ></video>
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Keyboard Quick Actions"
            desc="Powerful commands to help you create designs more quickly"
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">shift</Key>
              <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">alt</Key>
              <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">c</Key>
            </div>
          </FeatureCard>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature, index: number) => (
            <div
              key={index}
              className="bg-neutral-900 border border-white/10 inline-flex items-center px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 hover:scale-105 transition duration-500 grou:"
            >
              <span className="bg-lime-400 text-neutral-950 text-xl size-5 rounded-full inline-flex items-center justify-center group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
