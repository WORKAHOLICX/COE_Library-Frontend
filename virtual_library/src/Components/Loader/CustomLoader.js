import React from "react";
import { TailSpin } from "react-loader-spinner";

const CustomLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-70 bg-black z-20">
      <TailSpin
        height="35"
        width="35"
        color="#3d5af1"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default CustomLoader;
