"use client";
import React from "react";
import { TracingBeam } from "../../components/ui/tracing-beam";
import Header from "../../components/ui/header";
import Content1 from "./content1";
import Footer from "../../components/ui/footer";

export default function TracingBeamDemo() {
  return (
    <div className="bg-neutral-950">
      {/* Only on Mobile */}
      <div className=" block md:hidden">
        <Header />
        <Content1 />
        <Footer />
      </div>

      {/* Only on Desktop */}
      <div className=" hidden md:block">
        <Header />
       
        <TracingBeam>

          <Content1 />

        </TracingBeam>

        <Footer />
      </div>
    </div>
  );
}
