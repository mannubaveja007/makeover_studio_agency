import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Packages from "@/components/sections/Packages";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function USPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Work />
        <Packages region="us" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
