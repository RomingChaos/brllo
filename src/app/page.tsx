import CallToAction from "@/components/call-to-action";
import Portfolio from "@/components/portfolio";
import FAQsTwo from "@/components/faq";
import Features from "@/components/ourprocess";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import Pricing from "@/components/whyus";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
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
