"use client";

import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import Archive from "../components/ui/archive";
import Footer from "../components/ui/footer";


import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

		
export default function BackgroundBeamsDemo() {
  let placeholders = ["Enter your email"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className=" h-dvh lg:h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 text-center">
          <h1 className="relative z-10 text-3xl md:text-5xl xl:text-5xl bg-clip-text text-transparent font-poppins font-semibold bg-gray-300 ">
            Innovia
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-3 text-m relative z-10 font-poppins">
            Your weekly scoop of tech innovations, trends and insights.
          </p>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <BackgroundBeams />
      </div>
      <Archive />
      <Footer />
    </div>
  );
}
