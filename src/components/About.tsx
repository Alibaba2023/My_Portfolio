import photo from "../components/assets/photo.jpg";

const About = () => {
  const skills = [
    "PHP",
    "Laravel",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "MySQL",
    "Git",
    "Github",
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
          <span className="numbered-heading">About Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="mb-4">
              Hello! My name is Ali Baba and I enjoy creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try
              customizing a Tumblr theme — turns out hacking together a custom reblog button
              taught me a lot about HTML & CSS!
            </p>

            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a large corporation, and a design studio.
              My main focus these days is building accessible, inclusive products and
              digital experiences for a variety of clients.
            </p>

            <p className="mb-8">Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center font-mono text-sm">
                  <span className="text-portfolio-accent mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative rounded-md overflow-hidden w-full aspect-square">
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-portfolio-accent opacity-20 group-hover:opacity-0 transition-opacity z-10 pointer-events-none"></div>

              {/* Image container */}
              <div className="w-full h-full">
                <img src={photo} alt="photo" className="w-full h-full object-cover" />
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-portfolio-accent rounded-md transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
