import { createContext, useContext, useState } from "react";
const CustomContext = createContext();
export const useGlobalContext = () => useContext(CustomContext);
const Context = ({ courseId , children }) => {
   const [courseProgressCount, setCourseProgressCount] = useState(() => {
     const storedProgress = localStorage.getItem(
       `courseProgress_${courseId}`
     );
     return storedProgress ? parseInt(storedProgress) : 0;
   });
  return (
    <CustomContext.Provider
      value={{ courseProgressCount, setCourseProgressCount }}
    >
      {children}
    </CustomContext.Provider>
  );
};
export default Context;
