import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <HomeHero/>
      </div>
      <div className="pt-20">
          <CallToAction/>
      </div>
      <div className="pt-20 mb-10">
          <Testimonial/>
      </div>
    </div>
  );
}
