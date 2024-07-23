"use client";
import React from "react";
import { TracingBeam } from "../../components/ui/tracing-beam";
import Header from "../../components/ui/header";
import Content2 from "./content2";
import Footer from "../../components/ui/footer";

export default function TracingBeamDemo() {
  return (
    <div className="bg-neutral-950">
      {/* Only on Mobile */}
      <div className=" block md:hidden">
        <Header />
        <Content2 />
        <Footer />
      </div>

      {/* Only on Desktop */}
      <div className=" hidden md:block">
        <Header />

        {/* <TracingBeam> */}

        <Content2 />

        {/* </TracingBeam> */}

        <Footer />
      </div>
    </div>
  );
}
