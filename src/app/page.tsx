import Contact from "@/components/links/Contact";
import ProjectSection from "@/components/section/Project";
import Skills from "@/components/section/Skills";
import { AboutSummary, HomeSummary } from "@/components/summary/Summary";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
     <>
      <TracingBeam className="px-6 ">
        <div className="flex flex-col gap-y-52 mt-[5rem]">
     <HomeSummary />
     <AboutSummary/>
     <Skills />
     <ProjectSection />
     <Contact/>
        </div>
      </TracingBeam>
     </>
  );
}
