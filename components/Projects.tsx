"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "LUSTRIA",
    description: "E-commerce platform for plant products",
    image: "/project-imgs/petMania.png",
    tech: ["Next.js", "Tailwind", "TypeScript", "Medusa"],
    link: "https://galactic-bits-nursery.vercel.app/",
    repo: "https://github.com/Vishwang0Suthar/Lustria_main",
  },
  {
    title: "CRT-TV",
    description:
      "I created a web app that simulates the interactive experience of a retro cathode-ray TV, with a strong emphasis on UI responsiveness and user experience design.",
    image: "/project-imgs/bhitChitram.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://crt-tv.vercel.app/",
    repo: "https://github.com/Vishwang0Suthar/CRT-TV",
  },
  {
    title: "GiftConnect",
    description: "Frontend design for gift-city mobile app and website",
    image: "/project-imgs/giftConnect.png",
    tech: ["React.js", "Framer Motion"],
    link: "https://gift-city-web.vercel.app/",
    repo: "https://github.com/Vishwang0Suthar/Gift-City-web",
  },
  {
    title: "Memory Game",
    description:
      "Play a Memory Based card game while listening to your favourite music",
    image: "/project-imgs/movieFlix.png",
    tech: ["TypeScript", "CSS", "Spotify API"],
    link: "https://memory-game-flax-six.vercel.app/",
    repo: "https://github.com/Vishwang0Suthar/memory-game",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-16 md:my-32 px-4">
      <div className="mx-auto max-w-6xl space-y-6 md:space-y-8 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <Card className="overflow-hidden h-full transition-transform hover:scale-105 text-start">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>{" "}
                    <div className="flex justify-center gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-primary transition-colors"
                      >
                        <ExternalLink size={24} />
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-primary transition-colors"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2 ">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs sm:text-sm px-2 py-1 transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
