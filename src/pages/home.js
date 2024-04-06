import About from "../components/about";
import Introduction from "../components/introduction";
import SectionSeparator from "../components/section-separator";
import WhyUs from "../components/why-us";
import Clients from "../components/clients";
import Contact from "../components/contact-us";

export default function Home() {
  return (
    <>
      <Introduction />
      <About />
      <SectionSeparator />
      <WhyUs />
      <SectionSeparator />
      <Clients />
      <SectionSeparator />
      <Contact />
    </>
  );
}
