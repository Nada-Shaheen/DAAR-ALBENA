"use client";

import { useState } from "react";
import { projectCategories } from "@/src/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectFilter() {
  const [category, setCategory] = useState(1);

  const selectedCategory = projectCategories.find(
    (item) => item.id === category
  );

  return (
    <div className="pt-12">

      {/* Categories */}
      <div className="flex flex-wrap justify-between">
        {projectCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            className={`probtn cursor-pointer ${category===item.id ? "bg-gold border-b-4 border-b-primary" : "bg-primary border-primary" } transition-all duration-200 w-[45%] md:w-[24%] mb-5 py-5 border-b-4 text-white rounded-2xl`}
          >
            {item.type}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="md:flex md:justify-between md:flex-wrap">
        {selectedCategory?.projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="md:w-[45%] lg:w-[30%]"
          >
            <article key={project.id} className='sercard bg-base-100  shadow-xl rounded-3xl h-87.5 mb-5 
                                              flex flex-col justify-between overflow-hidden'>
              <Image
                src={project.images[0]}
                alt={`${project.name} - مشروع`}
                className='w-full h-[70%] object-cover rounded-3xl '
                width={3000}
                height={3000}
              />
              <div className='border-r-4 flex flex-col justify-center border-primary-light pr-5 pl-1 h-[27%]' >
                <h3 className='text-lg text-primary font-bold'>{project.name}</h3>
              </div>
            </article>
          </Link>
        ))}
      </div>

    </div>
  );
}