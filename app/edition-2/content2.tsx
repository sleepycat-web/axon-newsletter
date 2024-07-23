"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const content2 = () => {
  return (
    <div className="bg-neutral-950 font-poppins">
      <div className="max-w-2xl mx-auto antialiased px-6 pt-4 relative">
        <div className="mb-10">
          <p className="text-xl mb-4">SuperIntelligence is here!! </p>

          <div className="text-sm prose-sm prose-invert space-y-4">
            <p>
              OpenAI&apos;s secret roadmap to superintelligence has just been
              leaked, and they&apos;ve introduced a new system called the AI
              preparedness framework to monitor and assess progress towards
              human level AI.
            </p>

            <Image
              src="/innovia-2/rbt.jpg"
              alt="blog thumbnail"
              height="1000"
              width="1000"
              className="rounded-lg mb-8 object-fill"
            />
            <p className="text-xl">What does it do? </p>
            <p>
              So this framework aims to evaluate AI systems across 12 key
              capabilities on a five-level scale, ranging from chatbots to
              systems capable of running entire organizations.
            </p>
            <Image
              src="/innovia-2/rt.jpg"
              alt="blog thumbnail"
              height="1000"
              width="1000"
              className="rounded-lg mb-5 object-cover"
            />
            <p>
              And it gets more interesting, OpenAI believes it is already close
              to solving level two with AI that can reason almost as well as
              someone with a PhD.
            </p>
            <p>
              What we do know is that new leaks have revealed the existence of
              strawberry models, which will allow the AI to not just generate
              answers to queries but to also plan ahead enough to navigate the
              internet autonomously and reliably to perform deep research.
            </p>
            <p>
              But let&apos;s be honest, with the Sora and the Omni models still
              unreleased, we can&apos;t expect public access to this advanced
              model anytime soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content2;
