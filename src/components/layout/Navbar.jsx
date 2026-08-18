import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { navLinks } from "../../data/navlink";
import ContactBtn from "../ui/ContactBtn";


export default function Navbar() {
  return (
    <header className="bg-wavy-blue ">
      <nav className="min-h-[20vh] md:min-h-[12vh] flex items-center py-3">
        <Container className="w-full flex flex-col gap-3 items-center md:flex-row md:justify-between ">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="دار البناء"
              width={200}
              height={50}
              priority
            />
          </Link>
          <ul className="flex justify-evenly flex-wrap md:flex-nowrap md:justify-between md:w-[70%] lg:w-[42%] ">
            {
              navLinks.map((link, key) => {
                return <li key={key} className="w-[30%]">
                  <Link href={link.href} className="navlink text-md text-primary-dark transition duration-200">
                    {link.title}
                  </Link>
                </li>
              })
            }
          </ul>
          <ContactBtn href="/contact">
            تواصل معنا
          </ContactBtn>
        </Container>
      </nav>
    </header>
  )
}
