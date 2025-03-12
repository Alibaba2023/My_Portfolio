import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";

interface Job {
  company: string;
  title: string;
  range: string;
  responsibilities: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      company: "MICROVERSE",
      title: "Mentor (Volunteer) Remote",
      range: "May 2023 - May 2024",
      responsibilities: [
       " Mentored 3+ junior web developers with Slack and Zoom every week, providing technical support through code reviews.",
        "Proposed strategic improvements to code organization, resulting in a 15% enhancement in code quality and a 20% improvement in overall performance.",
        "Provided advice and tips for more than 13+ developers on how to maintain motivation to maintain longevity in the program."
      ]
    },
    {
      company: "Something",
      title: "Mentor (Volunteer)",
      range: "Mar 2023 - Mar 2024",
      responsibilities: [
       " Mentored 3+ junior web developers with Slack and Zoom every week, providing technical support through code reviews.",
        "Proposed strategic improvements to code organization, resulting in a 15% enhancement in code quality and a 20% improvement in overall performance.",
        "Provided advice and tips for more than 13+ developers on how to maintain motivation to maintain longevity in the program."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
          <span className="numbered-heading">Where I've Worked</span>
        </h2>
        
        <Tabs defaultValue={jobs[0].company} className="w-full">
          <TabsList className="flex flex-col sm:flex-row overflow-x-auto border-l sm:border-b sm:border-l-0 border-portfolio-lightest-navy mb-8 scrollbar-hide">
            {jobs.map((job) => (
              <TabsTrigger 
                key={job.company}
                value={job.company}
                className="px-4 py-2 font-mono text-sm border-b-2 border-transparent data-[state=active]:border-portfolio-accent data-[state=active]:text-portfolio-accent h-full"
              >
                {job.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {jobs.map((job) => (
            <TabsContent 
              key={job.company} 
              value={job.company}
              className="animate-fade-in-up space-y-4"
            >
              <h3 className="text-xl text-portfolio-lightest-slate">
                <span className="font-bold">{job.title}</span>
                <span className="text-portfolio-accent"> @ {job.company}</span>
              </h3>
              
              <p className="font-mono text-sm text-portfolio-light-slate">
                {job.range}
              </p>
              
              <ul className="space-y-4 mt-6">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex">
                    <span className="text-portfolio-accent mr-2 pt-1 flex-shrink-0">▹</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;