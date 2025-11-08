import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCategories } from "@/components/PropertyCategories";
import { Services } from "@/components/Services";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <PropertyCategories />
      <Services />
      <FeaturedProperties />
      <Steps />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
}
