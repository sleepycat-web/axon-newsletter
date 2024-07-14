import Image from "next/image";
import Link from "next/link";

const Archive: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Generative UI",
      category: "Edition 1",
      description:
        "Learn about Vercel's Generative UI and how it will shift the focus to outcome-oriented design. ",
      imgSrc: "/innovia-1/ssat.jpg",
      link: "/edition-1", // Add this line
    },
    // {
    //   id: 2,
    //   title: "Coming Soon",
    //   category: "Edition 2",
    //   description: "",
    //   imgSrc: "https://dummyimage.com/1",
    //   link: "", // Add this line
    // },
    // {
    //   id: 3,
    //   title: "Coming Soon",
    //   category: "Edition 3",
    //   description: "",
    //   imgSrc: "https://dummyimage.com/1",
    //   link: "", // Add this line
    // },
  ];

  return (
    <section className="bg-neutral-950 font-poppins text-neutral-400 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Archive
          </h1>
          <div className="h-1 w-20 bg-neutral-500 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <div key={item.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-neutral-800 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={item.imgSrc}
                  alt="blog"
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-neutral-500 mb-1">
                    {item.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center flex-wrap ">
                    {item.link && (
                      <Link href={item.link}>
                        <div className="text-neutral-400 hover:text-neutral-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="join">
          <button className="join-item btn btn-sm bg-neutral-900 text-neutral-300 hover:bg-neutral-800 btn-active">1</button>
        </div>
      </div>
    </section>
  );
};

export default Archive;
