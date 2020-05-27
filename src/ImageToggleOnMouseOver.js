import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src="/static/speakers/bw/Speaker-8590.jpg"
      ref={imageRef}
      alt=""
    />
  );
};

export default ImageToggleOnMouseOver;
