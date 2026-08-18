import ProjectFilter from "@/src/components/sections/ProjectFilter";
import Container from "@/src/components/ui/Container";

export const metadata = {
   title: "مشاريع دار البناء للاستشارات الهندسية",
  description:
        "تعرف على مجموعة من مشاريع دار البناء للاستشارات الهندسية في مختلف المجالات، بما يشمل المشاريع السكنية والصناعية والتجارية والمشاريع والتصاميم المعمارية.",
};

export default function Projectspage() {

  

  return (
    <section className="min-h-screen py-5 md:py-16" aria-labelledby="projects-title">
      <Container>
        <header className="min-h-40 flex flex-col justify-between">
          <h1 id="projects-title" className=" text-xl font-medium text-primary md:text-3xl">مشاريع دار البناء للاستشارات الهندسية</h1>
          <p className="text-primary-dark font-medium text-justify md:text-xl">تعرف على مجموعة من مشاريع دار البناء للاستشارات الهندسية في مختلف المجالات، بدءًا من المشاريع السكنية والفلل والمجمعات السكنية، مرورًا بالمشاريع الصناعية والتجارية، وصولًا إلى المشاريع والتصاميم المعمارية. نعمل على تقديم حلول هندسية متكاملة تراعي طبيعة كل مشروع ومتطلباته، مع التركيز على جودة التصميم ودقة التنفيذ وتحقيق أفضل قيمة للعميل.</p>
        </header>
        <ProjectFilter />
      </Container>
    </section>
  )
}
