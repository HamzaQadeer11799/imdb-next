'use client';
import React, { useEffect } from 'react';

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button className=" bg-amber-600 p-2 rounded-lg" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
