import Image from "next/image";
import { notFound } from "next/navigation";
import { projectCategories } from "@/src/data/projects";
import ContactBtn from "@/src/components/ui/ContactBtn";


// Get all projects from all categories
function getAllProjects() {
  return projectCategories.flatMap(
    (category) => category.projects
  );
}


// Generate all project URLs
export function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}


// SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const projects = getAllProjects();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "المشروع غير موجود",
    };
  }

  return {
    title: project.name,

    description: project.description,

    openGraph: {
      title: project.name,
      description: project.description,

      images: [
        {
          url: project.images[0],
          width: 1200,
          height: 630,
          alt: `${project.name} - مشروع`,
        },
      ],
    },
  };
}


export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const projects = getAllProjects();

  const project = projects.find(
    (item) => item.slug === slug
  );

  // If project doesn't exist
  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">

      {/* Main Project Image */}
      <section
        className="mb-8"
        aria-labelledby="project-title"
      >

        <div className="relative h-[300px] overflow-hidden rounded-3xl md:h-[550px]">

          <Image
            src={project.images[0]}
            alt={`${project.name} - الصورة الرئيسية للمشروع`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />

        </div>

      </section>


      {/* Project Gallery */}
      {project.images.length > 1 && (
        <section
          className="mb-12"
          aria-label="صور المشروع"
        >

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {project.images.slice(1).map((image, index) => (

              <div
                key={image}
                className="relative h-40 overflow-hidden rounded-2xl md:h-52"
              >

                <Image
                  src={image}
                  alt={`${project.name} - صورة ${index + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />

              </div>

            ))}

          </div>

        </section>
      )}


      {/* Project Information */}
      <section
        className="border-r-4 border-primary-light pr-5 flex flex-col md:flex-row md:justify-between md:items-center"
      >
        <div className="w-[75%]">
          <h1
          id="project-title"
          className="mb-5 text-3xl font-bold text-primary md:text-4xl"
        >
          {project.name}
        </h1>

        <p className="max-w-4xl text-base leading-9 text-gray-600 md:text-lg">
          {project.description}
        </p>
        </div> 
        <ContactBtn href="https://wa.me/966543020833" target="_blank" className="w-fit">
                    طلب عرض سعر 
        </ContactBtn>

      </section>

    </main>
  );
}