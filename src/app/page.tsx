import ProjectSection from "@/components/summary/Project";
import { AboutSummary, HomeSummary } from "@/components/summary/Summary";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
     <>
      <TracingBeam className="px-6 flex flex-col gap-y-52">
     <HomeSummary />
     <AboutSummary/>
     <ProjectSection />
      </TracingBeam>
     </>
  );
}
