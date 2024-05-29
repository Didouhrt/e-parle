import ContactForm from "../Sections/ContactSections/ContactForm";
import PageIntro from "../Sections/CoursesSections/PageIntro/PageIntro";
const Contact = () => {
  return (
    <>
      <PageIntro location={"Contact"} navLink={"contact"} />
      <ContactForm/>
    </>
  );
}

export default Contact
