import Image from "next/image";
import Container from "../ui/Container";
import ScrollReveal from "../ui/ScrollReveal";
import ContactBtn from "../ui/ContactBtn";

export default function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="flex flex-col min-h-screen py-14 bg-linear-to-b from-white via-wavy-blue to-primary">
      <div className='mx-auto w-40 border-b-2 border-primary pb-8'>
        <h2 id="about-title" className='text-primary text-center text-2xl font-bold'>من نكون</h2>
      </div>
      <ScrollReveal animation="right" className="md:flex-1 md:flex md:items-center pt-7 md:pt-0">
        <Container className="flex flex-col items-center justify-center md:flex-row md:justify-between  ">
          {/* <ScrollReveal animation="right"> */}
          <div className="flex flex-col justify-between p-3 md:w-[45%] md:min-h-90 rounded-2xl bg-white shadow-2xl">
            <h3 className="text-3xl font-bold text-primary">
              دار البناء للاستشارات الهندسية
            </h3>
            <p className="text-justify font-medium text-primary-dark">
              دار البناء للاستشارات الهندسية هي شركة متخصصة في تقديم
              الاستشارات والحلول الهندسية المتكاملة، وتسعى إلى تقديم خدمات
              هندسية عالية الجودة تلبي احتياجات ومتطلبات العملاء بمختلف
              أنواع مشاريعهم.
            </p>
            <p className="text-justify font-medium text-primary-dark">
              تقدم الشركة خدماتها لمجموعة متنوعة من المشاريع، بما يشمل
              المشاريع السكنية والصناعية والاقتصادية والترفيهية، من خلال
              توفير الحلول الهندسية المناسبة لطبيعة كل مشروع وأهدافه.
              وتعتمد دار البناء في عملها على الجودة والدقة وفهم متطلبات
              العميل، مع الحرص على تقديم حلول عملية ومدروسة تتناسب مع
              احتياجات كل مشروع.
            </p>
            <p className="text-justify font-medium text-primary-dark">
              وتهدف دار البناء للاستشارات الهندسية إلى بناء علاقات طويلة
              الأمد مع عملائها من خلال تقديم خدمات موثوقة وحلول هندسية
              تحقق القيمة والجودة التي يتطلع إليها العميل.
            </p>
          </div>
          <div className="grid grid-cols-5 grid-rows-3 h-60 mt-5 md:w-[50%] md:h-87.5 gap-0.5">
            <Image src="/images/projects/industrial.webp" width={3500} height={2200} alt="مصنع حديد وصلب" className="w-full h-full rounded-2xl col-span-3 col-start-1 row-start-1 object-cover" />
            <Image src="/images/projects/station.webp" width={3840} height={1960} alt="محطة وقود" className="w-full h-full rounded-2xl col-span-3 col-start-2 row-start-2 object-cover" />
            <Image src="/images/projects/bulding.webp" width={1920} height={1080} alt="مبنى تراثي " className="w-full h-full rounded-2xl col-span-3 col-start-3 row-start-3 object-cover" />
            <ContactBtn href="/about" className="w-fit h-fit col-span-2 col-start-1 row-start-3 self-end text-sm md:text-base ">اعرف المزيد عن دار البناء</ContactBtn>
          </div>
          {/* </ScrollReveal> */}
        </Container>
      </ScrollReveal>
    </section>
  )
}
