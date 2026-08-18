import Image from "next/image"
import ContactBtn from "../ui/ContactBtn"
import Container from "../ui/Container"
import Link from "next/link"

export default function Landing() {
  return (
    <section className="bg-linear-to-b from-wavy-blue to-white pt-10 md:pt-0 min-h-[80vh] md:h-[88vh]" >
      <Container className="h-full flex flex-col-reverse items-center justify-between md:flex-row md:justify-between ">
        <div className="flex flex-col justify-evenly min-h-87.5 md:w-[40%] rounded-2xl">
          <h1 className="mb-5 text-sm text-primary-dark font-medium md:text-xl md:font-bold ">
            دار البناء للاستشارات الهندسية
            <span className="block text-3xl font-bold text-primary leading-tight text-text md:text-4xl lg:text-5xl">
              حلول هندسية متكاملة لمشاريع ناجحة
            </span>
          </h1>
          <p className="text-justify font-medium text-primary-dark">
            دار البناء للاستشارات الهندسية شركة متخصصة في تقديم الحلول والخدمات
            الهندسية المتكاملة للمشاريع السكنية والصناعية والاقتصادية والترفيهية،
            مع التركيز على الجودة وتقديم حلول تلبي متطلبات واحتياجات كل عميل.
          </p>
          <ContactBtn href="/contact" className="w-fit mt-3">
            تواصل معنا
          </ContactBtn>
        </div >
        <div className="md:w-[55%] bg-amber-400 h-87.5 md:min-h-100 md:shadow-2xl rounded-2xl grid grid-cols-3 grid-rows-2 gap-2">
          <Image src="/images/projects/station.webp" width={1280} height={804} alt="محطة وقود" className="w-full h-full rounded-2xl col-span-2 object-cover" />
          <Image src="/images/projects/pic1.webp" width={1280} height={804} alt="فيلا سكنية" className="w-full h-full rounded-2xl col-span-1 object-cover" />
          <Image src="/images/projects/villa.webp" width={1280} height={804} alt="فيلا سكنية مودرن" className="w-full h-full rounded-2xl col-span-1 object-cover" />
          <Image src="/images/projects/bulding.webp" width={1280} height={804} alt="مبنى ذو تصميم تراثي" className="w-full h-full rounded-2xl col-span-2 object-cover" />
        </div>
      </Container>
    </section>
  )
}
