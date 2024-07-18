import React from "react";

interface props {
  params: { photoId: number };
}

const PhotoNumber = ({ params: { photoId } }: props) => {
  return <div>PhotoNumber {photoId}</div>;
};

export default PhotoNumber;
