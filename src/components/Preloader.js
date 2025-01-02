import React from "react";

function Preloader() {
  return (
    <div className="preloader">
      {/* <button class="th-btn style3 preloaderCls">Cancel Preloader</button> */}
      <div className="preloader-inner">
        <span className="loader" />
      </div>
    </div>
  );
}

export default Preloader;
