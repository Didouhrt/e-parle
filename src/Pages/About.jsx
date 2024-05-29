import Faq from "../Sections/AboutSections/Faq/Faq";
import OurHistory from "../Sections/AboutSections/OurHistory/OurHistory";
import Statistics from "../Sections/AboutSections/Statistics/Statistics";
import PageIntro from "../Sections/CoursesSections/PageIntro/PageIntro";
const About = () => {
  return (
    <>
      <PageIntro location={"À propos"} navLink={"à propos"} />
      <OurHistory />
      <Statistics />
      <Faq />
    </>
  );
};

export default About;
