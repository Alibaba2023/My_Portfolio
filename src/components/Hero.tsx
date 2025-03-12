import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-24 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-portfolio-accent mb-4 opacity-0 animate-fade-in-up">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-7xl font-bold text-portfolio-lightest-slate mb-4 opacity-0 animate-fade-in-up animation-delay-200">
          Ali Baba
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold text-portfolio-slate mb-6 opacity-0 animate-fade-in-up animation-delay-400">
          I'm a Software Developer.
        </h2>
        <p className="text-portfolio-slate max-w-xl text-lg mb-12 opacity-0 animate-fade-in-up animation-delay-600">
        Crafting innovative solutions for your software needs is my expertise. Explore my portfolio and delve into my skills! Should your vision align with my work and you harbor a coding project, don't hesitate to get in touch. I'm prepared to breathe life into your ideas!
        </p>
        <div className="opacity-0 animate-fade-in-up animation-delay-800">
          <Button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent hover:bg-portfolio-accent hover:bg-opacity-10 text-portfolio-accent border border-portfolio-accent px-7 py-5 rounded font-mono"
          >
            Check out my work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
