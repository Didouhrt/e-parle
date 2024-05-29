import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronDown,
  FaChevronUp,
  FaRegSquareMinus,
  FaRegSquarePlus,
  FaRegSquareCheck,
  FaSquareCheck,
  FaYoutube,
  FaQuestion,
} from "react-icons/fa6";

import { Courses_data } from "../../../Utils/Courses_data";
import ResourceItem from "../../../Component/ResourceItem/ResourceItem";
import "./SingleCourseVideo.css";
import QuizComponent from "../../../Component/QuizComponent/QuizComponent";
import { useGlobalContext } from "../../../Utils/Context";
import Review from "../../../Component/Review/Review";
import Note from "../../../Component/Note/Note";

function SingleCourseVideo() {
  const { courseProgressCount, setCourseProgressCount } = useGlobalContext();
  const { id } = useParams();
  const CourseObject = Courses_data.find(
    (course) => course.id === parseInt(id)
  );

  const [openChapters, setOpenChapters] = useState({});
  const [videoFinished, setVideoFinished] = useState({});
  const [activeTab, setActiveTab] = useState("note");
  const [isTabOpen, setIsTabOpen] = useState(true);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeQuizIndex, setActiveQuizIndex] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const iframeRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(`courseProgress_${id}`, courseProgressCount);
  }, [courseProgressCount, id]);

  const handleSectionCompletion = () => {
    setCourseProgressCount(courseProgressCount + 1);
  };

  const toggleVideoFinished = (chapterIndex, videoIndex) => {
    setVideoFinished((prevVideoFinished) => {
      const key = `${chapterIndex}-${videoIndex}`;
      return {
        ...prevVideoFinished,
        [key]: !prevVideoFinished[key],
      };
    });
    handleSectionCompletion();
  };

  const toggleChapter = (chapterIndex) => {
    setOpenChapters((prevOpenChapters) => {
      return {
        ...prevOpenChapters,
        [chapterIndex]: !prevOpenChapters[chapterIndex],
      };
    });
  };

  const toggleAnswer = (answer) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      if (prevSelectedAnswers.includes(answer)) {
        return [];
      } else {
        return [answer];
      }
    });
  };

  const chapter = CourseObject?.chapters[activeChapterIndex];
  const selectedVideo = chapter?.videos[activeVideoIndex];

  useEffect(() => {
    if (iframeRef.current) {
      setOpenChapters((prevOpenChapters) => {
        return {
          ...prevOpenChapters,
          [activeChapterIndex]: true,
        };
      });

      if (selectedVideo) {
        const selectedVideoUrl = selectedVideo.url;
        iframeRef.current.src = `https://www.youtube.com/embed/${selectedVideoUrl}?autoplay=1&rel=0`;
      }
    }
  }, [
    activeChapterIndex,
    activeVideoIndex,
    activeQuizIndex,
    selectedVideo,
    CourseObject,
  ]);

  const totalVideosAndQuiz = CourseObject.chapters.reduce((acc, chapter) => {
    acc += chapter.videos.length;
    if (chapter.quiz) {
      acc += 1;
    }
    return acc;
  }, 0);

  const checkedVideos = Object.values(videoFinished).filter(Boolean).length;
  const percentage = Math.round((checkedVideos / totalVideosAndQuiz) * 100);

  useEffect(() => {
    setCourseProgressCount(percentage);
  }, [percentage, setCourseProgressCount]);

  const handleNoteClick = (note) => {
    setActiveChapterIndex(note.chapterIndex);
    setActiveVideoIndex(note.SubChapterIndex);
  };

  let content;
  if (activeTab === "note") {
    content = (
      <Note
        activeChapterIndex={activeChapterIndex}
        activeVideoIndex={activeVideoIndex}
        selectedVideo={selectedVideo}
        chapter={chapter}
        onNoteClick={handleNoteClick}
      />
    );
  } else if (activeTab === "avis") {
    content = <Review />;
  } else if (activeTab === "resource") {
    content = CourseObject?.resources ? (
      <div className="flex flex_column gap1-2">
        {CourseObject.resources.map((res) => {
          return (
            <ResourceItem
              AllowDownload={true}
              key={res.id}
              fileName={res.fileName}
              url={res.url}
            />
          );
        })}
      </div>
    ) : (
      <p>support non disponible</p>
    );
  }

  const toggleTabBtn = (btn) => {
    setActiveTab(btn);
  };

  return (
    <section className="flex flex_column singleCourseVideo_section">
      <div className="flex flex_column courseDisplay_container">
        <div className="courseDisplay_header flex_between flex_wrap gap1 pd1">
          <div className="flex flex_item_center gap1">
            <Link to={`/cours/SingleCoursePage/${CourseObject.id}`}>
              <div className="flex_center courseDisplay_header_back_btn_container">
                <FaChevronLeft />
              </div>
            </Link>
            <h4>{CourseObject.name}</h4>
          </div>
          <span>
            Votre progression
            <b>{`${checkedVideos} / ${totalVideosAndQuiz}`}</b> (
            {courseProgressCount}%)
          </span>
        </div>
        <div className="courseDisplay_content">
          {activeQuizIndex === null ? (
            <iframe
              ref={iframeRef}
              className="courseDisplay_video"
              title="YouTube video player"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <QuizComponent
              quiz={{
                started: quizStarted,
                name: CourseObject.chapters[activeChapterIndex]?.quiz?.name,
                objective:
                  CourseObject.chapters[activeChapterIndex]?.quiz?.objective,
                questions:
                  CourseObject.chapters[activeChapterIndex]?.quiz?.questions ||
                  [],
              }}
              activeChapterIndex={activeChapterIndex}
              activeQuestionIndex={activeQuestionIndex}
              selectedAnswers={selectedAnswers}
              toggleAnswer={toggleAnswer}
              setQuizStarted={setQuizStarted}
              setActiveQuestionIndex={setActiveQuestionIndex}
              setSelectedAnswers={setSelectedAnswers}
            />
          )}
          <div
            className={`${
              isTabOpen ? "active_courseDisplayTab_container" : ""
            } container courseDisplayTab_container`}
          >
            <div className="tab_container  flex flex_column gap1">
              <div className="tab_btn_container pad_blk1 flex_between ">
                <div className="flex gap2">
                  <span
                    className={`${
                      activeTab === "note" ? "active_tab_btn" : ""
                    }`}
                    onClick={() => toggleTabBtn("note")}
                  >
                    note
                  </span>
                  <span
                    className={`${
                      activeTab === "avis" ? "active_tab_btn" : ""
                    }`}
                    onClick={() => toggleTabBtn("avis")}
                  >
                    avis
                  </span>
                  <span
                    className={`${
                      activeTab === "resource" ? "active_tab_btn" : ""
                    }`}
                    onClick={() => toggleTabBtn("resource")}
                  >
                    resource
                  </span>
                </div>
                <div
                  className="pointer"
                  onClick={() => setIsTabOpen(!isTabOpen)}
                >
                  {isTabOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className="pad_blk1">{content}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="courseContent_container">
        <div className="courseContent_header pd1">
          <h4>Contenu du cours</h4>
        </div>
        <div className="flex flex_column">
          {CourseObject.chapters.map((chapter, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  toggleChapter(index);
                }}
                className={`chapter_title_container pointer flex_item_center gap1-2 
                  ${openChapters[index] ? "active_chapter" : ""}
                `}
              >
                {openChapters[index] ? (
                  <FaRegSquareMinus className="plus_minus_icon" />
                ) : (
                  <FaRegSquarePlus className="plus_minus_icon" />
                )}
                <h5>{chapter.name}</h5>
              </div>
              {openChapters[index] && (
                <div>
                  {chapter.videos.map((video, videoIndex) => (
                    <div
                      key={videoIndex}
                      className={`chapter_container pointer gap2 flex_between ${
                        activeChapterIndex === index &&
                        activeVideoIndex === videoIndex &&
                        activeQuizIndex === null
                          ? "active_video"
                          : ""
                      }`}
                      onClick={() => {
                        if (
                          (activeChapterIndex !== index ||
                            activeVideoIndex !== videoIndex) &&
                          activeQuizIndex === null
                        ) {
                          const selectedVideoUrl = video.url;
                          iframeRef.current.src = `https://www.youtube.com/embed/${selectedVideoUrl}`;
                        }
                        setActiveChapterIndex(index);
                        setActiveVideoIndex(videoIndex);
                        setActiveQuizIndex(null);
                      }}
                    >
                      <div className="flex_center gap1-2">
                        <FaYoutube className="youtube_icon" />
                        <span className="flex1">{video.title}</span>
                      </div>
                      <div className="flex_center gap1-2">
                        <span>{video.duration}</span>{" "}
                        {/* Display formatted video duration */}
                        <div className="flex_center courseContent_chapter_check_btn_container">
                          {videoFinished[`${index}-${videoIndex}`] ? (
                            <FaSquareCheck
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleVideoFinished(index, videoIndex);
                              }}
                            />
                          ) : (
                            <FaRegSquareCheck
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleVideoFinished(index, videoIndex);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {chapter.quiz && (
                    <div
                      onClick={() => {
                        setActiveChapterIndex(index);
                        setActiveQuizIndex(index);
                        setActiveVideoIndex(null);
                      }}
                      className={`chapter_container pointer gap1-2 flex_between ${
                        activeChapterIndex === index &&
                        activeQuizIndex === index &&
                        activeVideoIndex === null
                          ? "active_video"
                          : ""
                      }`}
                    >
                      <div className="gap1-2 flex_item_center">
                        <FaQuestion className="youtube_icon" />
                        <span>
                          Quiz {index + 1} : {chapter.quiz.name}
                        </span>
                      </div>
                      <div className="courseContent_chapter_check_btn_container">
                        {videoFinished[`${index}-${chapter.quiz.name}`] ? (
                          <FaSquareCheck
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleVideoFinished(index, chapter.quiz.name);
                            }}
                          />
                        ) : (
                          <FaRegSquareCheck
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleVideoFinished(index, chapter.quiz.name);
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SingleCourseVideo;
