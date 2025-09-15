import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Sachin
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Shrestha
            </span>
          </h1>

          {/* Typing effect */}
          <div className="opacity-0 animate-fade-in-delay-3">
            <ReactTyped
              strings={["Computer Engineer", "Full Stack Engineer"]}
              typeSpeed={80} // typing speed
              backSpeed={50} // backspacing speed
              backDelay={1500} // pause before deleting
              loop // keeps alternating
              className="text-2xl md:text-3xl font-medium text-gray-500 dark:text-white-800"
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            "I am a Computer Engineering graduate with skills in full-stack
            development, problem-solving, and building impactful digital
            solutions."
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary mt-0.5" />
      </div>
    </section>
  );
};
