"use client";
import React from "react";
import { TracingBeam } from "../../components/ui/tracing-beam";
import Header from "../../components/ui/header";
import Content1 from "@/public/innovia-1/content1";
import Footer from "../../components/ui/footer";

export default function TracingBeamDemo() {
  return (
    <div className="bg-neutral-950">
      {/* Only on Desktop */}
      <Header />
      <Content1 />
      <Footer />
     
    </div>
  );
}
