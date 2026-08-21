import ContactBtn from "@/src/components/ui/ContactBtn";
import Container from "@/src/components/ui/Container";
import { contactInfo, socialLinks } from "@/src/data/contactus";
import Link from "next/link";

export const metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع دار البناء للاستشارات الهندسية للاستفسار عن خدماتنا وحلولنا الهندسية ومشاريعنا.",
};

export default function Contactpage() {
    return (
        <section className="min-h-screen py-5 md:py-16" aria-labelledby="contact-title">
            <Container className="">
                <div className="h-37.5 md:h-24 flex flex-col justify-between">
                    <h1 id="contact-title" className=" text-xl font-medium text-primary md:text-3xl">تواصل مع دار البناء للاستشارات الهندسية</h1>
                    <p className="text-primary-dark font-medium text-justify md:text-xl lg:text-2xl"> تواصل معنا للاستفسار عن خدمات الاستشارات الهندسية ومناقشة متطلبات مشروعك.</p>
                </div>
                <div className="pt-12 flex flex-col-reverse md:flex-row md:justify-between md:items-center md:h-110">
                    <form className=" md:w-[45%] md:h-full flex flex-col md:justify-center px-3 rounded-2xl border-r-4 border-b-4 border-primary shadow-xl">
                        <input type="text" className="mb-5 border border-primary-gray text-primary-dark rounded-2xl p-2" name="" id="" placeholder="الإسم" />
                        <input type="email" className="mb-5 border border-primary-gray text-primary-dark rounded-2xl p-2" name="" id="" placeholder="الإيميل" />
                        <input type="number" className="mb-5 border border-primary-gray text-primary-dark rounded-2xl p-2" name="" id="" placeholder="الجوال" />
                        <textarea className="mb-5 border border-primary-gray text-primary-dark rounded-2xl p-2 h-24" name="" id="" placeholder="محتوى الإيميل" />
                        <button type="submit" className={`btn bg-gold px-6 py-2 rounded-full border-2 border-gold transition-all duration-300 text-primary-dark mb-5`}>إرسال</button>
                    </form>
                    <div className="mb-10 md:mb-0 flex flex-col justify-between md:items-center md:w-[45%] md:h-full rounded-2xl border-l-4 border-t-4 border-primary shadow-xl py-7 ">
                        <ul className="w-full md:flex md:flex-col md:items-center md:w-1/2 ">
                            {
                                contactInfo.map((item) => {
                                    const Icon = item.icon;
                                    return <li key={item.id} className="flex justify-between items-center md:w-full mb-3">
                                        <div className="bg-primary p-6 md:p-3 rounded-full  ">
                                            <Icon className="text-white  " />
                                        </div>
                                        <div className=" w-[70%] md:w-[80%] flex flex-col justify-center">
                                            <h3 className="text-primary-gray font-bold">{item.name} :</h3>
                                            <p className="text-primary-dark">{item.details}</p>
                                        </div>
                                    </li>
                                })
                            }

                        </ul>
                        <ContactBtn href="https://wa.me/966543020833" target="_blank">
                         طلب عرض سعر 
                        </ContactBtn>
                        <ul className="w-full flex justify-center">
                            {
                                socialLinks.map((item) => {
                                    const Icon = item.icon;
                                    return <li key={item.id} className="icon transition duration-200 bg-primary p-2 md:p-4 mr-3 rounded-2xl">
                                        <Link href={item.href} target="_blank">
                                            <Icon className="w-7 h-7 text-white" />
                                        </Link>
                                       
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
