// components
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Contact } from "@/components/landing/contact";
import { Features } from "@/components/landing/features";
import { Programs } from "@/components/landing/programs";
import { UniversityHeader } from "@/components/landing/university-header";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <UniversityHeader />
      <Hero />
      <Features />
      <Stats />
      <Programs />
      <Contact />
      <Footer />
    </>
  );
}
