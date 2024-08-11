"use client";
import Error from "next/error";
import React from "react";

interface Props {
  error: Error;
  reset : () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("error", error);

  return (
    <>
      <div>An unexprected error has occurred.</div>
      <button className="btn" onClick={()=>{reset()}}>Reset</button>
    </>
  );
};

export default ErrorPage;
