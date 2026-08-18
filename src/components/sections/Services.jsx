import { services } from "@/src/data/services";
import Container from "../ui/Container";
import ScrollReveal from "../ui/ScrollReveal";
import ServiceCard from "../ui/ServiceCard";


export default function Services() {

    return (
        <section aria-labelledby="services-title" id="services" className="bg-primary flex flex-col min-h-screen">
            <div className='mx-auto w-40 border-b-2 border-wavy-blue pb-8 '>
                <h2 id="services-title" className='text-wavy-blue text-center text-2xl font-bold'>خدماتنا</h2>
            </div>
            <ScrollReveal animation="right" className="pt-7 md:pt-16 md:flex-1 md:flex md:items-center">
                <Container className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between">
                    {
                        services.map((service) => {
                            const Icon = service.icon;
                            return <ServiceCard key={service.id} title={service.title} description={service.description} Icon={Icon} />
                        })
                    }
                </Container>
            </ScrollReveal>
        </section>
    )
}
