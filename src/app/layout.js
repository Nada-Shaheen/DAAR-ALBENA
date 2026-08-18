import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";



export const metadata = {
  title: {
    default: "الرئيسية | دار البناء",
    template: "%s | دار البناء",
  },
  description: "الصفحة الرئيسية للموقع",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="ar" dir="rtl"
      
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
