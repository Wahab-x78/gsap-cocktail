import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-indigo-300 flex-center">This is heading</h1>
    </div>
  );
}
