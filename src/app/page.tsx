import { AboutSection } from "@/components/AboutSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { EngineeringSection } from "@/components/EngineeringSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <EngineeringSection />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
    </>
  );
}
