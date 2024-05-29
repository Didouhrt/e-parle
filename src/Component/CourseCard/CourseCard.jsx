import { FaChevronRight } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";

import { calculateTotalDuration } from "../../Utils/Functions";
import "./CourseCard.css";
const courseCard = ({ course }) => {
  return (
    <Link to={`/cours/SingleCoursePage/${course?.id}`}>
      <div className="flex flex_column course_card">
        <div className="course_imgBox">
          <img src={course?.image} alt={course?.name} />
        </div>
        <div className="course_content flex flex_column">
          <div className="flex_between  course_data">
            <span>{course?.category}</span>
            <div className="flex_item_center gap1-2">
              <PiGraduationCap size={15} />
              <span>{course?.chapters.length} chapitres</span>
            </div>
            <div className="flex_item_center gap1-2">
              <CiTimer size={15} />
              <span>{calculateTotalDuration(course)}</span>
            </div>
          </div>
          <h4 className="pad_blk1">{course?.name}</h4>
          <button className="flex flex_item_center gap1-2 margin_top_auto">
            <span>Voir Plus</span>
            <FaChevronRight className="chevron_icon" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default courseCard;
