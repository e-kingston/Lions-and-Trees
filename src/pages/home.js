import About from "../components/about";
import Introduction from "../components/introduction";
import { Navigation } from "../components/navigation";
import SectionSeparator from "../components/section-separator";
import WhyUs from "../components/why-us";

export default function Home() {
  return (
    <>
      <Navigation />
      <Introduction />
      <About />
      <SectionSeparator />
      <WhyUs />
    </>
  );
}
