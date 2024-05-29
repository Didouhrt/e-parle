import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import PreLoader from "./Component/preLoader/PreLoader";

// Lazy-loaded components
const SharedLayout = lazy(() => import("./Pages/SharedLayout"));
const Courses = lazy(() => import("./Pages/Courses"));
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));
const Login = lazy(() => import("./Pages/login/Login"));
const SignUp = lazy(() => import("./Pages/login/SignUp"));
const SingleCoursePage = lazy(() => import("./Pages/SingleCoursePage"));
const SingleCourseVideo = lazy(() =>
  import("./Sections/CoursesSections/SingleCourseVideo/SingleCourseVideo")
);
function App() {
  return (
    <>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/cours" element={<Courses />} />
            <Route path="/à propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cours/SingleCoursePage/:id"
              element={<SingleCoursePage />}
            />
          </Route>

          <Route
            path="/cours/SingleCourseVideo/:id"
            element={<SingleCourseVideo />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
