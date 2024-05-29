import AllCourses from "../Sections/CoursesSections/AllCourses/AllCourses";
import PageIntro from "../Sections/CoursesSections/PageIntro/PageIntro";
const Courses = () => {
  return (
    <>
      <PageIntro location={"Liste des cours"} navLink={"cours"} />
      <AllCourses />
    </>
  );
};

export default Courses;
