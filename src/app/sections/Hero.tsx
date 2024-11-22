import Button from "../components/Button";
import designExample1Image from "../assets/images/design-example-1.png";
import designExample2Image from "../assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "../components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-auto">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExample1Image} alt="Design example 1 iamge" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={designExample2Image} alt="Design example 2 image" />
        </div>

        <div className="absolute left-56 top-96 hidden lg:block">
            <Pointer name='Andrea' />
        </div>
              <div className="absolute right-80 -top-4 hidden lg:block">
                  <Pointer name='Bryan' color="red" />
              </div>

        <div className="flex items-center justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form
          name="form"
          className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 w-full md:flex-1"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
