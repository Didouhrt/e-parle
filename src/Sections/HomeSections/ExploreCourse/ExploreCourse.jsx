import { Link } from "react-router-dom";
import CourseCard from "../../../Component/CourseCard/CourseCard";
import { Courses_data } from "../../../Utils/Courses_data";
import "./ExploreCourse.css";
const ExploreCourse = () => {
  return (
    <section className="alter_body_color">
      <div className="container exploreCourse_container">
        <div className="heading_btn flex_center ">
          <div className="heading_title text_center">
            <h2>Explorez Nos cours</h2>
            <p>Découvrez notre gamme de cours de français.</p>
          </div>
          <Link to="/cours" className="secondary_btn aboveCoursesBtn">
            <span>voir tous les cours</span>
          </Link>
        </div>
        <div className="exploreCourses_grid flex_content_center flex_wrap gap2 pad_blk2">
          {Courses_data.slice(0, 3).map((item) => {
            return <CourseCard key={item.id} course={item} />;
          })}
        </div>
        <Link to="/cours" className="secondary_btn text_center underCoursesBtn">
          <span>voir tous les cours</span>
        </Link>
      </div>
    </section>
  );
};

export default ExploreCourse;
