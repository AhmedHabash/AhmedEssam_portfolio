import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className="w-full my-6 h-fit  bg-[#f6f8fb] flex items-center justify-center rounded-tr-3xl rounded-bl-3xl">
      <div className="w-[95%]  flex items-center justify-between px-10 mx-auto text-center py-5 rounded-tr-3xl rounded-bl-3xl">
        <h1 className=" font-bold">Ahmed Essam</h1>
        <h1 className=" font-bold text-sm">© 2026 All rights reserved</h1>
        <div className="flex gap-3">
          <a href="https:github.com/AhmedHabash" target="_blank">
            <FaGithub
              className=" hover:text-[#4b40e0] transition-colors duration-200 cursor-pointer"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-essam-13959325a"
            target="_blank"
            className=" font-bold hover:text-[#4b40e0] transition-colors duration-200 cursor-pointer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer