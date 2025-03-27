import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Stepwise",
  description: "This is About Page for Stepwise",
  // other metadata
};

const AboutPage = () => {
  return (
    <section className="pb-[120px] pt-[120px]">
      {/* <Breadcrumb pageName="About Us" description="" /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
    </section>
  );
};

export default AboutPage;
