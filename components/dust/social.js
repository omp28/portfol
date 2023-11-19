import {
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaNpm,
} from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";

export default function Social({ type }) {
  let [social] = useState([
    {
      href: "/github",
      icon: {
        icon: FaGithub,
        fill: clsx("hover:fill-black"),
      },
    },
  ]);

  return (
    <>
      <div
        className={`flex text-2xl text-gray-500 ${
          type === "footer"
            ? "space-x-4 ml-2 md:space-x-6"
            : "space-x-7 mt-2 text-center md:text-left"
        }`}
      >
        {social.map(({ href, icon }) => {
          return (
            <Fragment key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <icon.icon className={`${icon.fill} transition delay-150`} />
              </a>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
