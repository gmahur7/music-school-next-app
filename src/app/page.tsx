import FeaturedCourses from "@/Components/FeaturedCourses";
import HeroSection from "@/Components/HeroSection";
import WhyChooseUs from "@/Components/WhyChooseUs";
import TestomonialCards from "@/Components/TestomonialCards"
import UpcomingWebinars from "@/Components/UpcomingWebinars";
import Instructors from "@/Components/Instructors";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[] antialised bg-grid-white[0.2]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestomonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
      </main>
  );
}
