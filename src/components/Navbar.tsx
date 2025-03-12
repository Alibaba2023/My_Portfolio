
import  { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
      isScrolled ? "bg-portfolio-navy bg-opacity-90 shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-portfolio-accent font-mono text-xl">ALI BABA HUSSAINI</a>
        
        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-portfolio-lightest-slate hover:text-portfolio-accent"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-portfolio-light-navy bg-opacity-95 flex flex-col items-center justify-center z-40">
                <nav className="flex flex-col items-center space-y-8">
                  {navItems.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="font-mono text-xl text-portfolio-lightest-slate hover:text-portfolio-accent transition-colors"
                    >
                      <span className="text-portfolio-accent">0{i+1}.</span> {item.label}
                    </button>
                  ))}
                </nav>
                <a
                  href="https://drive.google.com/file/d/1y-S4mSLFz1GTuinc3Cs119t7bbIGyRof/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:bg-opacity-10 rounded px-6 py-2 transition-all"
                >
                  Resume
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-sm text-portfolio-light-slate hover:text-portfolio-accent transition-colors"
                >
                  <span className="text-portfolio-accent">0{i+1}.</span> {item.label}
                </button>
              ))}
            </nav>
            <a
              href="https://drive.google.com/file/d/1y-S4mSLFz1GTuinc3Cs119t7bbIGyRof/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:bg-opacity-10 rounded px-4 py-2 transition-all text-sm"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
