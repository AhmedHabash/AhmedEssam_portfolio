import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectsData } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#131b2e]">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#4b40e0] px-4 py-2 text-sm font-medium text-[#4b40e0] transition hover:bg-[#4b40e0] hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A collection of web experiences I built, from full-stack
            applications to polished landing pages.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-3 text-sm text-gray-600">{project.des}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-[#4b40e0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-[#4b40e0]"
                  >
                    GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#4b40e0] px-4 py-2 text-sm font-medium text-white"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">Coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
