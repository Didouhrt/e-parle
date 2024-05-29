import { useEffect,useState } from "react";
import CourseCard from "../../../Component/CourseCard/CourseCard";
import { Courses_data } from "../../../Utils/Courses_data";
import "./AllCourses.css";
import { HashLoader } from "react-spinners";

const AllCourses = () => {
  const [page, setPage] = useState(6);
   const [filterBtn, setFilterBtn] = useState([]);
   const [activeFilter, setActiveFilter] = useState("all");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMoreData = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setPage(page + 6);
      setIsLoadingMore(false);
    }, 1000);
  };

   useEffect(() => {
     setFilterBtn(["all", ...new Set(Courses_data.map((flr) => flr.category))]);
   }, []);

   const filteredCourses =
     activeFilter === "all"
       ? Courses_data
       : Courses_data.filter((item) => item.category === activeFilter);
   const handleFilterClick = (btn) => {
     setActiveFilter(btn);
   };
  return (
    <section className="container">
      <div className="flex_center text_center flex_column ">
        <h2>Tous Les Cours</h2>
        <p>
          Explorez le savoir infini, découvrez votre potentiel – Parcourez nos
          cours dès maintenant! et apprenez sans limite avec e-Parle
        </p>
      </div>
      <div className="grid gap2 pad_blk4">
        <div className="filter_btn_container container  flex gap1">
          {filterBtn.map((btn, index) => (
            <button
              key={index}
              className={
                activeFilter === btn
                  ? "filter_btn active_filter_btn "
                  : "filter_btn"
              }
              onClick={() => handleFilterClick(btn)}
            >
              <span>{btn}</span>
            </button>
          ))}
        </div>
        <div className="allCourse_container flex gap1  flex_wrap">
          {filteredCourses.slice(0, page).map((item) => {
            return <CourseCard key={item.id} course={item} />;
          })}
        </div>
        {isLoadingMore ? (
          <HashLoader
            className=" margin_inline_auto pad_blk1"
            size={50}
            color={"#fa997b"}
            loading={isLoadingMore}
          />
        ) : (
          <button onClick={loadMoreData} className="primary_btn">
            <span>charger plus</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default AllCourses;
