import Hero from "@/components/home/Hero";
import SpecializedProgramsSection from "@/components/home/SpecializedProgramsSection";
import InteractiveSessionSection from "@/components/home/InteractiveSessionSection";
import AcademyFeaturesSection from "@/components/home/AcademyFeaturesSection";
import FAQSection from "@/components/home/FAQSection";
import CommunitySection from "@/components/home/CommunitySection";
export default function HomePage() {
  return (
    <div className="bg-background-soft">
      <Hero />
      <SpecializedProgramsSection />
      <InteractiveSessionSection />
      <AcademyFeaturesSection />
      <FAQSection />
      <CommunitySection/>
      {/* الأقسام القادمة */}
    </div>
  );
}