import HeroSection from "@/pages/HeroSection";
import FeaturedCourses from "@/pages/FeaturedCourses";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/95 antialiased bg-grid-white/[0.02]">
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Chai aur code
      </div> */}
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
