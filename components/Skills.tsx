import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    "React.JS",
    "Next.JS",
    "TypeScript",
    "JavaScript",
    "Node.JS",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MongoDB",
    "Fire Base",
    "PHP",
    "GitHub",
    "Framer Motion",
    "Figma",
  ];

  return (
    <section className="my-16 md:my-32 px-4">
      <div className="mx-auto max-w-3xl space-y-6 md:space-y-8 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
