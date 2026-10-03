"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectGallery({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  function closeModal() {
    setSelectedProject(null);
  }

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      closeModal();
    }
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelectedProject(project)}
            aria-haspopup="dialog"
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
          >
            <img
              src={project.image}
              alt={project.imageAlt || project.name}
              loading="lazy"
              className="aspect-[8/5] w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-950">
                {project.name}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">
                {project.summary}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-teal-700">
                View project →
              </span>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-modal-title"
        onCancel={closeModal}
        onClose={closeModal}
        onClick={handleBackdropClick}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border-0 bg-white p-0 text-zinc-950 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        {selectedProject && (
          <>
            <div className="flex items-center justify-between gap-4 border-b border-zinc-200 px-6 py-4">
              <h2 id="project-modal-title" className="text-xl font-bold">
                {selectedProject.name}
              </h2>

              <button
                type="button"
                autoFocus
                onClick={closeModal}
                aria-label="Close project details"
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-2xl text-zinc-600 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-teal-600"
              >
                ×
              </button>
            </div>

            <img
              src={selectedProject.image}
              alt={selectedProject.imageAlt || selectedProject.name}
              className="aspect-[8/5] w-full object-cover"
            />

            <div className="p-6 sm:p-8">
              <p className="text-base leading-7 text-zinc-600">
                {selectedProject.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-teal-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                  >
                    Live demo ↗
                  </a>
                )}

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
