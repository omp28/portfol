import Image from "next/legacy/image";
import {
  FaHtml5,
  FaNodeJs,
  FaAngleRight,
  FaGithub,
  FaLaravel,
} from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";

export default function Projects() {
  let gh = "https://github.com/omp28";
  let [projects] = useState([
    {
      name: "ecommerce",
      description: "a full stack e-Commerce website",
      isLeft: true,
      link: "/ecommerce",
      icon: {
        name: FaLaravel,
        fill: clsx("group-hover:fill-[#FF2D20]"),
      },
      image: {
        src: "/img/projects/siswa-crud.webp",
        alt: "Siswa CRUD",
        width: 448,
        height: 148,
      },
    },
    {
      name: "Nike-website",
      description:
        "A landing page source code for the Nike website (but you can use it for any kind of landing page)",
      isLeft: false,
      link: "/nike",
      icon: {
        name: FaHtml5,
        fill: clsx("group-hover:fill-[#E96228]"),
      },
      image: {
        src: "/img/projects/dcweb.webp",
        alt: "Discord Bot Landing Page",
        width: 500,
        height: 250,
      },
    },
    {
      name: "To-Do app",
      description: "A to-do app to keep track of all to do list in daily life.",
      isLeft: true,
      link: "/toDo",
      icon: {
        name: FaHtml5,
        fill: clsx("group-hover:fill-[#E96228]"),
      },
      image: {
        src: "/img/projects/rps.webp",
        alt: "Simple RPS",
        width: 448,
        height: 148,
      },
    },
    {
      name: "sustainable-Banking",
      description:
        "sustainable - banking giving incentives based on carbon Footprints",
      isLeft: false,
      link: "/hackthon-hacksummit",
      icon: {
        name: FaNodeJs,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/wcode.webp",
        alt: "whatscode.js logo",
        layout: "fill",
      },
    },
    {
      name: "Web-Humankind",
      description: "A functional humankind website .",
      isLeft: true,
      link: "/Web-Humankind",
      icon: {
        name: FaNodeJs,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/gempabot.webp",
        alt: "gempa bot",
        width: 448,
        height: 148,
      },
    },
  ]);
  return (
    <>
      {/* Projects Starts */}

      <div className="px-6">
        <Waypoints target={"toprojects"}>
          <section id="projects" className="pt-28">
            <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
              Some of My Projects
            </h1>
            <div className="flex justify-center">
              <span
                className="bg-[#6C63FF] w-[150px] h-[5px]"
                data-aos="fade-up"
                data-aos-delay="400"
              ></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
              {projects.map(
                ({ name, description, isLeft, link, icon, image }) => {
                  return (
                    <Fragment key={name}>
                      <div className="flex justify-center">
                        <a
                          className={`group hover:scale-110 ${
                            isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                          } transition delay-75`}
                          href={gh + link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div
                            className="card max-w-md bg-base-100 shadow-xl image-full"
                            data-aos="fade-up"
                          >
                            <figure>
                              <Image {...image} />
                            </figure>
                            <div className="card-body">
                              <h2 className="card-title">
                                <icon.name
                                  className={`${icon.fill} transition ease-in-out delay-150`}
                                />
                                {name}
                              </h2>
                              <p>{description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div></div>
                      <div></div>
                    </Fragment>
                  );
                }
              )}
            </div>

            <div className="text-center mt-20">
              <a
                className="btn btn-wide"
                href="https://github.com/omp28?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 w-5 h-5" />
                View all my Porjects. <FaAngleRight className="ml-2" />
              </a>
            </div>
          </section>
        </Waypoints>
      </div>

      {/* Projects Ends */}
    </>
  );
}
