import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
