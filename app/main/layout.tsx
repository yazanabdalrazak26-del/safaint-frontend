import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" className="min-h-screen bg-[#F8FAF8]">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
