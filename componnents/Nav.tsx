"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CodeXml, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const [activePage, setActivePage] = useState("home");

  const ulData = [
    { title: "Home", link: "/?page=home", key: "home" },
    { title: "About", link: "/about?page=about", key: "about" },
    { title: "Projects", link: "/projects?page=projects", key: "projects" },
    { title: "Contact", link: "/contact?page=contact", key: "contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hireMe, setHireMe] = useState<boolean>(false);

  useEffect(() => {
    const syncActivePage = () => {
      const params = new URLSearchParams(window.location.search);
      const pageFromQuery = params.get("page");
      const path = window.location.pathname;
      const resolvedPage =
        pageFromQuery ||
        (path === "/" ? "home" : path.replace("/", "") || "home");
      setActivePage(resolvedPage);
    };

    syncActivePage();
    window.addEventListener("popstate", syncActivePage);

    return () => window.removeEventListener("popstate", syncActivePage);
  }, []);

  return (
    <>
      <div className="w-full sticky top-0 z-50 text-[#898b8f] bg-[#f6f8fb]/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="w-[95%] mx-auto flex justify-between items-center py-4">
          <div className="logo flex gap-3  items-center text-[#2b2e30]">
            <CodeXml size={30} className="text-[#4b40e0]" />
            <h1 className="font-bold text-xl">Ahmed Essam</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 font-medium">
            {ulData.map((item, i) => (
              <li
                key={i}
                className={`cursor-pointer hover:text-[#4b40e0] transition-colors duration-200 ${activePage === item.key ? "text-[#4b40e0] font-semibold" : ""}`}
              >
                <Link href={item.link} onClick={() => setActivePage(item.key)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a
              href="/Ahmed_Essam_AbdElaziz.pdf"
              download="Ahmed_Essam_AbdElaziz.pdf"
              className="inline-block bg-[#4b40e0] text-white px-6 py-2 rounded-3xl hover:scale-105 hover:rotate-10 font-bold active:scale-95 active:rotate-0 cursor-pointer transition-transform duration-300 text-center"
            >
              Hire me
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#2b2e30] hover:text-[#4b40e0] rounded-lg transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Menu Overlay) */}
      {/* Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden`}
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Drawer Container */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[60%] max-w-[320px] bg-[#f6f8fb] shadow-2xl z-50 p-6 flex flex-col justify-between md:hidden`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="logo flex gap-2 items-center text-[#2b2e30]">
                  <CodeXml size={24} className="text-[#4b40e0]" />
                  <h2 className="font-bold text-lg">Ahmed</h2>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 text-[#2b2e30] hover:text-[#4b40e0] rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="flex flex-col gap-6 font-medium text-lg">
                {ulData.map((item, i) => (
                  <li
                    key={i}
                    className={`cursor-pointer hover:text-[#4b40e0] transition-colors duration-200 border-b border-gray-100 pb-2 ${activePage === item.key ? "text-[#4b40e0] font-semibold" : ""}`}
                  >
                    <Link
                      href={item.link}
                      onClick={() => {
                        setActivePage(item.key);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <a
                onClick={() => {
                  setHireMe(true);
                }}
                href="/Ahmed_Essam_AbdElaziz.pdf"
                download="Ahmed_Essam_AbdElaziz.pdf"
                className={`block w-full text-white py-3 rounded-2xl font-bold active:scale-95 cursor-pointer transition-all duration-200 shadow-md shadow-[#4b40e0]/20 text-center ${hireMe ? "bg-[#2a1ed2] text-yellow-600 cursor-none" : "bg-[#4b40e0]"}`}
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
