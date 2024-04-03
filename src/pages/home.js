import About from "../components/about";
import Introduction from "../components/introduction";
import { Navigation } from "../components/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <Introduction />
      <About />
    </>
  )
}