import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <div className="flex items-center justify-between py-1 px-10 z-10">
      <div className="flex-[0.30]">
        <img
          src="/assets/w.png"
          alt="w_logo"
          className="rounded-full mx-auto w-[60px]"
        />
      </div>
      <nav className="flex-[0.40] hidden md:block">
        <ul className="flex gap-2 flex-wrap">
          <li>
            <a href="#" className="px-3 py-2 text-[var(--ilets-text)]">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 text-[var(--ilets-text)]">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 text-[var(--ilets-text)]">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 text-[var(--ilets-text)]">
              Resources
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex-[0.35] gap-1 flex-wrap text-[var(--ielts-text)] justify-end hidden md:flex">
        <button className="px-2 py-2 cursor-pointer bg-white rounded-xl">
          Enroll Now
        </button>
        <button className="px-2 py-2 cursor-pointer bg-white rounded-xl">
          Login/Signup
        </button>
      </div>
      <div className="md:hidden flex-[0.50]">
        {!state ? (
          <div className="">
            <h2 className="cursor-pointer rounded-lg px-4 py-1">
              <Menu
                className="bg-white text-[#333]"
                size={30}
                onClick={() => setState(!state)}
              />
            </h2>
          </div>
        ) : (
          <div className="md:hidden bg-white fixed right-0 top-0 w-[50%]">
            <div className="flex justify-end">
              <X
                className="cursor-pointer text-[#333] bg-[#d3d3d3] rounded-lg"
                size={30}
                onClick={() => setState(!state)}
              />
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <div>
                  <button>Enroll Now</button>
                  <button>Login/Signup</button>
                  <a
                    href="#"
                    target="_blank"
                    className="px-4 py-2 bg-white rounded-xl"
                  >
                    Student Portal Link
                  </a>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
