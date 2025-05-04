// src/app/page.tsx or pages/index.tsx

import StickyBanner from "@/components/sticky-banner"; // 1. Import the banner component
import CallToAction from "@/components/call-to-action";
import Portfolio from "@/components/portfolio";
import FAQsTwo from "@/components/faq";
import Features from "@/components/ourprocess"; // Assuming this is the component from the previous steps
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import Pricing from "@/components/whyus"; // Assuming this is the 'Why Us' section
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <StickyBanner /> {/* 2. Add the StickyBanner component */}
      <HeroSection />
      <Features />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <CallToAction />
      <FAQsTwo />
      <FooterSection />
    </>
  );
}