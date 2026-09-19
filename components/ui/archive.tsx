import Image from "next/image";
import Link from "next/link";
import { editions } from "../../lib/editions";

const Archive: React.FC = () => {
  const items = editions.map((edition) => ({
    id: edition.number,
    title: edition.title,
    category: `Edition ${edition.number} (${new Date(
      edition.datePublished
    ).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })})`,
    description: edition.summary,
    imgSrc: edition.image,
    imgAlt: edition.imageAlt,
    link: `/${edition.slug}`,
  }));

  return (
    <section className="bg-neutral-950 font-poppins  text-neutral-400 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 ">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Archive
          </h2>
          <div className="h-1 w-20 bg-neutral-500 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <div key={item.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-neutral-800 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <p className="tracking-widest text-xs title-font font-medium text-neutral-500 mb-1">
                    {item.category}
                  </p>
                  <h3 className="title-font text-lg font-medium text-white mb-3">
                    {item.title}
                  </h3>
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
