import  { Suspense, lazy } from "react";
import Hero from "../Sections/HomeSections/Hero/Hero";
import PrimaryCta from "../Sections/HomeSections/PrimaryCta/PrimaryCta";

const LazyExperience = lazy(() =>
  import("../Sections/HomeSections/Experience/Experience")
);
const LazyExploreCourse = lazy(() =>
  import("../Sections/HomeSections/ExploreCourse/ExploreCourse")
);
const LazyTestimonials = lazy(() =>
  import("../Sections/HomeSections/Testemonials/Testemonials")
);
const LazySecondaryCta = lazy(() =>
  import("../Sections/HomeSections/SecondaryCta/SecondaryCta")
);

const Home = () => {
  return (
    <div>
      <Hero />
      <PrimaryCta />
      <Suspense fallback={<div></div>}>
        <LazyExperience />
        <LazyExploreCourse />
        <LazyTestimonials />
        <LazySecondaryCta />
      </Suspense>
    </div>
  );
};

export default Home;
