import { contactInfo, socialLinks } from "@/src/data/contactus";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Span } from "next/dist/trace";

export default function Footer() {
  return (
    <footer id="clients" aria-labelledby="footer-title" className=" flex flex-col h-[50vh] ">
      <div className="bg-primary-light ">
        <Container className=" flex flex-col items-center py-3 md:flex-row md:justify-between md:items-center min-h-70">
          <ul className="w-full md:w-[30%]">
            {
              contactInfo.map((item) => {
                const Icon = item.icon;
                return <li key={item.id} className="flex justify-between items-center mb-3">
                  <div className="bg-gold p-6 md:p-3 rounded-full  ">
                    <Icon className="text-primary-gray  " />
                  </div>
                  <div className=" w-[70%] md:w-[80%] flex flex-col justify-center">
                    <h3 className="text-primary-gray font-bold">{item.name} :</h3>
                    <p className="text-primary-dark">{item.details}</p>
                  </div>
                </li>
              })

            }

          </ul>
          <ul className="w-full md:w-[30%] flex justify-center py-8">
            {
              socialLinks.map((item) => {
                const Icon = item.icon;
                return <li key={item.id} className="icon transition duration-200 bg-wavy-blue p-2 md:p-4 mr-3 rounded-2xl">
                  <Link href={item.href} target="_blank">
                    <Icon className="w-7 h-7 " />
                  </Link>

                </li>
              })

            }
          </ul>
          <Image
            src="/images/logo.png"
            className="bg-wavy-blue md:w-[25%]"
            alt="دار البناء"
            width={200}
            height={50}
            priority
          />
        </Container>
      </div>
      <div className="bg-gray-200 flex-1 min-h-25 md:min-h-0 flex justify-center items-center">
          <p className="text-[13px] "><span className="text-gray-400 font-medium"> Copyright 2026 </span > DAAR ALBENA <span className="text-gray-400 font-medium">by</span> BAFANA <span className="text-gray-400 font-medium">©</span> </p>
      </div>
    </footer>
  )
}
