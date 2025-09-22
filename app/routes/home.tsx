import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import Features from "~/components/feautres";
import About from "~/components/about";
import Testimonials from "~/components/testimonials";

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
          </>
          )
  ;
}
