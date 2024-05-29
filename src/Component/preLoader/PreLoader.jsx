import { HashLoader } from "react-spinners";

import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div className="preLoader flex_center">
      <HashLoader
        className=" margin_inline_auto pad_blk1"
        size={50}
        color={"#fa997b"}
      />
    </div>
  );
};

export default PreLoader;
