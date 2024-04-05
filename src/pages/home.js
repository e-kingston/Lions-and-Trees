import About from "../components/about";
import Introduction from "../components/introduction";
import SectionSeparator from "../components/section-separator";
import WhyUs from "../components/why-us";

export default function Home() {
  return (
    <>
      <Introduction />
      <About />
      <SectionSeparator />
      <WhyUs />
    </>
  );
}
