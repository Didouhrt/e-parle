import { FaCertificate, FaGraduationCap, FaUser, FaBook } from "react-icons/fa";
import StatisticCard from "../../../Component/StatisticCard/StatisticCard";
import "./Statistics.css";
const Statistics = () => {
  return (
    <div className="container flex_center gap1 flex_wrap statistics_container">
      <StatisticCard icon={<FaCertificate />} end={3} title="Certifications" />
      <StatisticCard icon={<FaGraduationCap />} end={12} title="Courses" />
      <StatisticCard icon={<FaUser />} end={50} title="Students" />
      <StatisticCard icon={<FaBook />} end={2} title="Books" />
    </div>
  );
};

export default Statistics;
