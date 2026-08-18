import { clients } from "@/src/data/clients";
import Container from "../ui/Container";
import ScrollReveal from "../ui/ScrollReveal";
import Image from "next/image";


export default function Clients() {
    return (
        <section id="clients" aria-labelledby="clients-title" className="pt-5 bg-gray-200 flex flex-col min-h-[60vh] pb-12">
            <div className='mx-auto w-40 border-b-2 border-primary pb-8 my-10'>
                <h2 id="clients-title" className='text-primary text-center text-2xl font-bold'>عملاء دار البناء</h2>
            </div>
            <ScrollReveal animation="right" className="pt-7 md:flex-1 md:flex md:items-center">
                <Container className="flex flex-wrap ">
                    <ul className="flex flex-wrap">
                        {clients.map((client) => (
                            <li
                                key={client.id}
                                className="w-1/2 md:w-[20%] h-25 border-2 border-primary-light flex justify-center items-center overflow-hidden"
                            >
                                <Image
                                    src={client.image}
                                    alt={client.alt}
                                    width={2000}
                                    height={2000}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </li>
                        ))}
                    </ul>
                </Container>
            </ScrollReveal>
        </section>
    )
}
