"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, LinkIcon } from "lucide-react";

export default function About() {
  return (
    <section className="px-4">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/nami.jpg"
            alt="Nami"
            width={160}
            height={160}
            className="rounded-full border-4 border-primary shadow-lg hover:scale-105 hover:rotate-12 transition-transform duration-300"
          />
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl md:text-5xl">
              Hello, I&apos;m Vishwang
            </h2>
            <p className="mt-2 text-xl text-muted-foreground sm:text-3xl">
              Frontend Dev
            </p>
          </div>
        </div>
        <p className="text-base sm:text-lg">
          I&apos;m a passionate FullStack Developer currently seeking to learn
          the new technologies and making exciting products with them, whilst
          providing the client with exciting product.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Button variant="outline" size="icon" aria-label="GitHub">
            <a href="https://github.com/Vishwang0Suthar" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" aria-label="LinkedIn">
            <a
              href="https://www.linkedin.com/in/vishwang-suthar"
              target="_blank"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" aria-label="Linktree">
            <a href="https://linktr.ee/dripy_vishwng" target="_blank">
              <LinkIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
