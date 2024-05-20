"use client"
// Assuming a structure for your project data, you might define interfaces like this:
interface Project {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
  techs: string[];
}

// Import React and necessary hooks
import React, { useState } from 'react';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';


// Function to get unique tags with explicit return type
const getUniqueTags = (data: Project[]): string[] => {
  const tags = data.flatMap((project) => project.techs);
  return Array.from(new Set(tags));
};

// The main functional component
export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>('');

  const uniqueTags = getUniqueTags(projectsData);

  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.techs.includes(selectedTag))
    : projectsData;

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Quelques projets
          </h1>
          <div className="flex flex-wrap gap-2">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded ${
                  selectedTag === tag
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
            <button
              onClick={() => setSelectedTag('')}
              className={`px-4 py-2 rounded ${
                selectedTag === ''
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              All
            </button>
          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap">
            {filteredProjects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
