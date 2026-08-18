import {
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
export const contactInfo = [
  {
    id: 1,
    icon: Mail,
    name: "البريد الإلكتروني",
    details: "info@daaralbena.com",
  },
  {
    id: 2,
    icon: MapPin,
    name: "العنوان",
    details: "الرياض- ظهرة لبن - شارع نجد  ",
  },
  {
    id: 3,
    icon: Phone,
    name: "أرقام الهاتف",
    details: " 00966543020833",
  },
];


export const socialLinks = [
  {
    id: 1,
    icon: FaWhatsapp,
    name: "واتساب",
    details: "تواصل معنا عبر واتساب",
    href: "https://wa.me/00966543020833",
  },
  {
    id: 2,
    icon: FaInstagram,
    name: "إنستجرام",
    details: "تابعنا على إنستجرام",
    href: "https://www.instagram.com/daaralbenaa/?utm_source=ig_web_button_share_sheet",
  },
  {
    id: 3,
    icon: Mail,
    name: "البريد الإلكتروني",
    details: "info@daralbenaa.com",
    href: "mailto:info@daaralbena.com",
  },
];