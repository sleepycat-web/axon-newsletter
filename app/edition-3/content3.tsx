"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const content2 = () => {
  return (
    <div className="bg-neutral-950 font-poppins">
      <div className="max-w-2xl mx-auto antialiased px-6 pt-4 relative">
        <div className="mb-10">
          <p className="text-xl mb-4">Two big updates!!</p>

          <div className="text-sm prose-sm prose-invert space-y-4">
            <p>
              OpenAI and Meta have dropped some updates and they are going to be
              game changing. Let&apos;s read about how SearchGPT and Llama 3.1
              will change the AI landscape.
            </p>

            <Image
              src="/innovia-3/aimg.jpg"
              alt="blog thumbnail"
              height="1000"
              width="1000"
              className="rounded-lg mb-8 object-fill"
            />
            <p className="text-xl">Search GPT is in the making.</p>
            <p>Open AI might just have cooked a billion dollar company.</p>
            <p>
              This week, they unveiled Search GPT, a prototype AI search feature
              that provides direct answers with clear and relevant sources. This
              development bears a striking resemblance to Perplexity AI&apos;s
              offering.
            </p>
            <p>
              In the tech industry, companies with the most power, resources and
              cutting-edge models can readily identify what&apos;s working
              elsewhere and build their own version of it.
            </p>
            <p>
              This scenario is unfolding now, Perplexity was reportedly planning
              to raise $250 million at a valuation approaching $3 billion, but
              now faces direct competition from OpenAI.
            </p>
            <p>
              However, Search GPT is currently in waitlist mode, and its
              performance remains to be seen. It&apos;s also worth noting that
              ChatGPT&apos;s browser plugin fell short of the high expectations
              set for it upon its launch.
            </p>

            <p>
              The tech community is now keenly watching how OpenAI plans to
              integrate Search GPT into ChatGPT.
            </p>

            <p className="text-xl ">Open Source is taking over AI.</p>

            <p>
              It&apos;s finally happened, open source is taking over OpenAI.
            </p>
            <p>
              Meta has recently released Llama 3.1, a 405 billion parameter
              open-source AI model and here&apos;s why it might be
              revolutionary. According to Meta&apos;s comprehensive evaluation,
              which included 150 benchmark datasets and extensive human
              assessments, Llama 3.1 demonstrates performance competitive with
              leading foundation models such as GPT-4 and Claude 3.5 Sonnet
              across a diverse range of tasks.
            </p>
            <p>
              Mark Zuckerberg&apos;s announcement draws an important parallel
              between AI&apos;s potential trajectory and the rise of Linux,
              while also critiquing closed ecosystems like Apple&apos;s. He
              reflects on his experience building services constrained by
              Apple&apos;s platform, emphasizing the frustrations of working
              within a closed system.
            </p>
            <p>
              Just as Linux emerged as an open-source alternative to closed Unix
              systems and eventually became the foundation for cloud computing
              and mobile operating systems, Zuckerberg believes open-source AI
              could follow a similar path.
            </p>
            <p>
              This comparison is crucial for understanding Meta&apos;s vision
              for AI development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content2;
