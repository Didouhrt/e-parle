import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Courses_data } from "../../../Utils/Courses_data";
import {
  FaQuestion,
  FaCheck,
  FaRegSquareMinus,
  FaRegSquarePlus,
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {
  calculateTotalDuration,
  totalVideosInChapter,
} from "../../../Utils/Functions";
import ResourceItem from "../../../Component/ResourceItem/ResourceItem";
import "./CoursePage.css";
import Review from "../../../Component/Review/Review";
const CoursePage = () => {
  // const { courseProgressCount, setCourseProgressCount } = useGlobalContext();

  const { id } = useParams();
  const CourseObject = Courses_data.find((item) => item.id === parseInt(id));
  const [openChapters, setOpenChapters] = useState({});

  const [activeTab, setActiveTab] = useState("cour");
  const [tabContainerHeight, setTabContainerHeight] = useState("auto");

  useEffect(() => {
    const setDynamicHeight = () => {
      const tabContainer = document.querySelector(".tab_container");
      if (tabContainer) {
        setTabContainerHeight(`${tabContainer.scrollHeight}px`);
      }
    };

    setDynamicHeight();

    window.addEventListener("resize", setDynamicHeight);

    return () => {
      window.removeEventListener("resize", setDynamicHeight);
    };
  }, [activeTab]);

  let content;
  if (activeTab === "cour") {
    content = (
      <div className="flex flex_column gap1-2">
        {CourseObject.chapters.map((chapter, index) => (
          <div key={index}>
            <div
              onClick={() => toggleChapter(index)}
              className="chapter_title_container flex_item_center  gap1-2"
            >
              {openChapters[index] ? (
                <FaRegSquareMinus
                  aria-label="chapter toggle button minus"
                  className="plus_minus_icon"
                />
              ) : (
                <FaRegSquarePlus
                  aria-label="chapter toggle button plus"
                  className="plus_minus_icon"
                />
              )}
              <h5>{chapter.name}</h5>
            </div>

            <div
              className={`allChapter_container ${
                openChapters[index] ? "expand_chapter" : ""
              }  `}
            >
              {chapter.videos.map((video, videoIndex) => (
                <div
                  key={videoIndex}
                  className={` chapter_container flex_between`}
                >
                  <div className="flex_center gap1-2">
                    <FaYoutube
                      aria-label="youtube icon"
                      className="youtube_icon"
                    />
                    <p>{video.title}</p>
                  </div>
                  <p>{video.duration}</p>
                </div>
              ))}
              {chapter.quiz && (
                <div className="chapter_container">
                  <div className="flex_item_center gap1-2">
                    <FaQuestion
                      aria-label="question mark icon"
                      className="youtube_icon"
                    />
                    <p> {chapter?.quiz?.name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  } else if (activeTab === "avis") {
    content = <Review />;
  } else if (activeTab === "supports") {
    content = CourseObject?.resources ? (
      <div className="flex flex_column gap1-2">
        {CourseObject.resources.map((res) => {
          return (
            <ResourceItem key={res.id} fileName={res.fileName} url={res.url} />
          );
        })}
      </div>
    ) : (
      <p>support non disponible</p>
    );
  }

  const toggleChapter = (chapterIndex) => {
    setOpenChapters({
      ...openChapters,
      [chapterIndex]: !openChapters[chapterIndex],
    });
  };

  const toggleTabBtn = (btn) => {
    setActiveTab(btn);
    setOpenChapters({});
  };

  const totalDuration = calculateTotalDuration(CourseObject);
  const totalVideos = totalVideosInChapter(CourseObject);

  return (
    <section className="singleCourse_section">
      <div className="singleCourse_container flex flex_column gap1 container">
        <div className="flex flex_column gap1-2 singleCourseIntro_container">
          <div className=" singleCourseIntro_img">
            <img src={CourseObject.image} alt={CourseObject.name} />
          </div>

          <Link
            to={`/cours/SingleCourseVideo/${CourseObject.id}`}
            className="primary_btn"
          >
            <span>continue vers le cours</span>
          </Link>
          <div className="pd1  singleCourseIntro_content ">
            <h4 className="pad_btm0-5">material du cours</h4>
            <div className="flex flex_column gap1-2 ">
              <div className="flex_item_center gap1-2">
                <FaCheck className="check_icon" />
                <span>{totalVideos} total vidéos</span>
              </div>
              <div className="flex_item_center gap1-2">
                <FaCheck className="check_icon" />
                <span>{totalDuration} de visionnage</span>
              </div>
              {CourseObject?.resources && (
                <div className="flex_item_center gap1-2">
                  <FaCheck className="check_icon" />
                  {CourseObject?.resources?.length} supports téléchargeables
                </div>
              )}
              <div className="flex_item_center gap1-2">
                <FaCheck className="check_icon" />
                <span>video jouer en arriere plan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex_column gap1 singleCourseData_container">
          <h3>{CourseObject.name}</h3>
          <div className="course_by_share_container flex flex_column flex_wrap gap1">
            <div className="flex flex_item_center gap1-2">
              <div className="profile_container">
                <img
                  src="https://source.unsplash.com/random/50x50/?portrait"
                  alt="course owner profile image"
                />
              </div>
              <p>
                par <b>Chariette meriem</b>
              </p>
            </div>
            <p>
              niveau de cours : <b>{CourseObject.level}</b>
            </p>
            <p className="flex gap1-2">
              partage sur :
              <div className="flex gap1">
                <b>
                  <a className="share_course_btn" href="">
                    fa
                  </a>
                </b>
                <b>
                  <a className="share_course_btn" href="">
                    in
                  </a>
                </b>
                <b>
                  <a className="share_course_btn" href="">
                    tw
                  </a>
                </b>
              </div>
            </p>
          </div>
          <div className="flex flex_column gap1-2">
            <h4>Statut de Cours</h4>
            <div className="progressBar_Completion_container flex_between  flex_wrap">
              <div className="progressBar">
                <div
                  style={{ width: /* courseProgressCount */ +2 + "%" }}
                  className="iner_progressBar"
                ></div>
              </div>
              <p>{/* courseProgressCount */}% completion</p>
            </div>
          </div>
          <div>
            <h4>A propos du Cours</h4>
            <p>{CourseObject.aboutCourse}</p>
          </div>
          <div>
            <h4>Description</h4>
            <p>{CourseObject.description}</p>
          </div>
          <div className="flex flex_column gap1-2">
            <h4>objectifs du cours</h4>
            <div className="flex_between gap1 flex_wrap">
              {CourseObject.whatYouLearn.map((item, index) => {
                return (
                  <div key={index} className="flex gap1-2">
                    <FaCheck className="check_icon" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{ minHeight: tabContainerHeight }}
            className="tab_container pad_top1 flex flex_column gap1"
          >
            <div className="tab_btn_container flex_item_center gap2">
              <span
                className={`${activeTab === "cour" ? "active_tab_btn" : ""}`}
                onClick={() => toggleTabBtn("cour")}
              >
                cours
              </span>
              <span
                className={`${activeTab === "avis" ? "active_tab_btn" : ""}`}
                onClick={() => toggleTabBtn("avis")}
              >
                avis
              </span>
              <span
                className={`${
                  activeTab === "supports" ? "active_tab_btn" : ""
                }`}
                onClick={() => toggleTabBtn("supports")}
              >
                supports
              </span>
            </div>
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePage;
