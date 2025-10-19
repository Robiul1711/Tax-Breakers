import About from "../pages/home/about/About";
import Banner from "../pages/home/banner/Banner";
import BlogSection from "../pages/home/blogSection/BlogSection";
import FaqSection from "../pages/home/faqSection/FaqSection";
import Pricing from "../pages/home/pricing/Pricing";
import Services from "../pages/home/services/Services";
import Testimonial from "../pages/home/testimonial/Testimonial";

export default function LandingPage() {

  return (
    <div>
      <Banner />
      <div className="section-padding-x">
        <About />
        <Services />
        <Pricing title="Pricing and Plans" description="Choose a plan that fits your financial needs. No hidden fees, no surprises—just expert services at fair rates."/>
        <BlogSection/>
        <FaqSection/>
      </div>
      <Testimonial/>
    </div>
  );
}