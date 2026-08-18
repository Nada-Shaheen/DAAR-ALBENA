import Image from "next/image";
import Container from "../ui/Container";
import ScrollReveal from "../ui/ScrollReveal";
import { projects } from "@/src/data/projects";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";
export default function Projects() {
    return (
        <section aria-labelledby="projects-title" className="pt-5 bg-linear-to-b from-primary via-wavy-blue to-white flex flex-col min-h-screen pb-10">
            <div className='mx-auto w-40 border-b-2 border-wavy-blue pb-8 my-10'>
                <h2 id="projects-title" className='text-wavy-blue text-center text-2xl font-bold'>أبرز مشاريعنا</h2>
            </div>
            <ScrollReveal animation="right" className="pt-7 md:flex-1 md:flex md:items-center">
                <Container className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                    {
                        projects.map((project) => {
                            return <article key={project.id} className='sercard bg-base-100 md:w-[45%] lg:w-[30%] shadow-xl rounded-3xl h-87.5 mb-5 
                                    flex flex-col justify-between overflow-hidden'>
                                <Image
                                    src={project.image}
                                    alt={`${project.name} - مشروع ${project.type}`}
                                    className='w-full h-55 object-cover rounded-3xl '
                                    width={3000}
                                    height={3000}
                                />
                                <div className='border-r-4 flex flex-col justify-center border-primary-light pr-5 pl-1 h-12.5' >
                                    <h3 className='text-lg text-primary font-bold'>{project.name}</h3>
                                </div>
                                <div className='flex justify-between p-3'>
                                    <Link className='navlink group text-sm text-primary-gray font-bold pb-3 transition ease-linear duration-200  ml-4  ' href="/projects">
                                        < ArrowLeft className="text-gold inline ml-1"/>
                                        جميع المشاريع
                                    </Link>

                                    <p className='text-green-700 text-xs font-bold'> {project.type}</p>
                                </div>
                            </article>
                        })
                    }
                </Container>
            </ScrollReveal>
        </section>
    )
}
