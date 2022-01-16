import React from "react";

const Loading = () => {
  return (
    <>
      <h3 class="d-flex justify-content-center text-success my-4">
        Loading...
      </h3>
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-success my-2" role="status"></div>
      </div>
    </>
  );
};

export default Loading;
