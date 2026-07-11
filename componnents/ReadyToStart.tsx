"use client";

import { useState } from "react";
import type React from "react";

function ReadyToStart() {
  const email = "ahmedessamhabash2002@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="w-full bg-[#f6f8fb] capitalize p-8">
      <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[60%] mx-auto text-center bg-[#131b2e] py-8 sm:py-6 rounded-tr-3xl rounded-bl-3xl">
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[75%] mx-auto text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white my-4 sm:my-6">
            ready to start your next project?
          </h1>

          <p className="text-sm text-white opacity-55 my-4">
            Currently accepting freelance opportunities and consulting
            engagements. Let's build something exceptional together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-[80%] md:w-[60%] justify-center m-auto">
            <div className="relative w-full sm:w-auto">
              <a
                href={`mailto:${email}?subject=Project%20Inquiry&body=Hi%20Ahmed%2C%20I'd%20like%20to%20discuss%20a%20project...`}
                onClick={handleCopy}
                className="block w-full sm:w-auto text-center border-2 border-[#4b40e0] cursor-pointer hover:scale-110 duration-300 p-2 rounded-full bg-[#4b40e0] text-white"
              >
                get in touch
              </a>

              {copied && (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs bg-white text-[#131b2e] px-3 py-1 rounded-md whitespace-nowrap shadow-md">
                  Email copied!
                </span>
              )}
            </div>

            <a
              href="/Ahmed_Essam_AbdElaziz.pdf"
              download="Ahmed_Essam_AbdElaziz.pdf"
              className="block w-full sm:w-auto text-center border-2 border-[#4b40e0] cursor-pointer hover:bg-[#4b40e0] hover:text-white hover:scale-110 duration-300 p-2 rounded-full bg-none text-[#4b40e0]"
            >
              view resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyToStart;