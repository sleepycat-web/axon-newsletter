import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const content1 = () => {
  return (
    <div className="bg-neutral-950 block  font-poppins ">
      <div className="max-w-2xl mx-auto antialiased px-6 pt-4 relative">
        <div className="mb-10">
          <p className={twMerge("text-xl mb-4")}>
            Ever heard of Generative UI?
          </p>
          <div className="text-sm prose-sm prose-invert space-y-2.5">
            <Image
              src="/innovia-1/ssat.jpg"
              alt="blog thumbnail"
              height="1000"
              width="1000"
              className="rounded-lg  mb-10 object-cover"
            />
            <p>
              Vercel has recently unveiled their AI sdk kit, which is pretty
              impressive.
            </p>

            <p>
              It can dynamically create customized user interfaces in real-time
              based on the prompts you provide. Whether you need components or a
              full website, it can deliver in HTML or React, depending on your
              preference.
            </p>
            <p>
              And honestly, the results are quite good, with some minor tweaks
              they can definitely be used in production.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <div className="text-sm prose-sm prose-invert">
            <Image
              src="/innovia-1/sshr.jpg"
              alt="blog thumbnail"
              height="1000"
              width="1000"
              className="rounded-lg mb-10 object-cover"
            />
            <Image
              src="/innovia-1/ssfr.jpg"
              alt="blog thumbnail"
              height="1000"
              width="1000"
              className="rounded-lg mb-10 object-cover"
            />
          </div>
        </div>

        <div className="mb-10">
          <p className={twMerge("text-xl mb-4")}>
            What does this mean for UI/UX designers?
          </p>
          <div className="text-sm prose-sm prose-invert space-y-2.5">
            <p>
              Well, this shift will drive a focus on outcome-oriented design,
              where designers prioritize user goals and set constraints for AI
              to work within, instead of designing individual interface
              elements.
            </p>
            <p>
              Outcome-oriented design emphasises aligning the user experience
              with a strong focus on user goals and end results, while
              strategically automating elements of interaction and interface
              design.
            </p>
            <p>
              Go to{" "}
              <Link
                href="https://v0.dev/"
                className="text-neutral-400 hover:underline"
              >
                v0.dev
              </Link>{" "}
              and check it out.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default content1