import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/Alibaba2023", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/ali-baba-hussaini/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://x.com/AliBabaHu2023", label: "Twitter" },
    { icon: <Mail size={20} />, url: "mailto:ali7090370@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-8 text-center text-portfolio-slate">
      {/* Social Links for Mobile */}
      <div className="flex justify-center space-x-6 md:hidden mb-4">
        {socialLinks.map((link, i) => (
          <a 
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-light-slate hover:text-portfolio-accent transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      
      <div className="font-mono text-sm">
        <a 
          href="https://github.com/Alibaba2023"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-portfolio-accent transition-colors"
        >
          Designed & Built by Ali Baba Hussaini
        </a>
      </div>
      
      {/* Fixed Social Links for Desktop */}
      <div className="fixed bottom-0 left-6 hidden md:block">
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:mx-auto after:my-0 after:bg-portfolio-light-slate">
          {socialLinks.map((link, i) => (
            <li key={i}>
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-light-slate hover:text-portfolio-accent transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Email Address for Desktop */}
      <div className="fixed bottom-0 right-6 hidden md:block">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:mx-auto after:my-0 after:bg-portfolio-light-slate">
          <a 
            href="mailto:ali7090370@gmail.com"
            className="font-mono text-portfolio-light-slate hover:text-portfolio-accent transition-colors [writing-mode:vertical-rl]"
          >
            ali7090370@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
