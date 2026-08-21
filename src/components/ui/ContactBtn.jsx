import Link from "next/link";

export default function ContactBtn({ className = "",target, href, children }) {
  return (
    <Link href={href} target={target}  className={`btn bg-gold px-6 py-2 rounded-full border-2 border-gold transition-all duration-300 text-primary-dark ${className}`}>
      {children}
    </Link>
  )
}
