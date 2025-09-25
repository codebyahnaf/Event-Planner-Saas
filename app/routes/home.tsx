import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import Features from "~/components/feautres";
import About from "~/components/about";
import Testimonials from "~/components/testimonials";
import Footer from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MeetSync" },
    { name: "description", content: "Welcome to MeetSync!" },
  ];
}

export default function Home() {
  return (<>        
          <Hero />
          <Features />
          <About/>
          <Testimonials/>
          <Footer/>
          </>
          )
  ;
}
