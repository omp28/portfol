import Logo from "./dust/logo";
import {
  FaCode,
  FaHeart,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaNpm,
} from "react-icons/fa";
import Social from "./dust/social";

export default function Footer() {
  return (
    <>
      <div className="px-6">
        <div className="border-b border-gray-200"></div>
      </div>
      <footer className="footer p-10">
        <div>
          <p>
            <FaCode className="fill-indigo-500 hover:scale-110 transition delay-75 inline-block" />
            {` with `}
            <FaHeart className="fill-error hover:scale-110 transition delay-75 inline-block" />{" "}
            by <p className=" inline-block">Omkumar Patel</p>
            <br />
            &copy; {new Date().getFullYear()} omp.
          </p>
        </div>
      </footer>
    </>
  );
}
