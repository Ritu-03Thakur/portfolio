import Contact from "@/components/links/Contact";
import ProjectSection from "@/components/summary/Project";
import { AboutSummary, HomeSummary } from "@/components/summary/Summary";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
     <>
      <TracingBeam className="px-6 ">
        <div className="flex flex-col gap-y-52 mt-[5rem]">
        
     <HomeSummary />
     <AboutSummary/>
     <ProjectSection />
     <Contact/>
        </div>
      </TracingBeam>
     </>
  );
}
