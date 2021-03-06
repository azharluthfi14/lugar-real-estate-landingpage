import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="mx-6 lg:mx-20">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="text-gray">
            <h1 className="text-xl text-white font-semibold mb-5">LUGAR</h1>
            <div className="flex items-center mb-3">
              <span className="material-icons mr-2 text-base">location_on</span>
              <span className="text-sm font-light">
                2118 Thornridge Cir. Dubai, UAE 35624
              </span>
            </div>
            <div className="flex items-center mb-3">
              <span className="material-icons mr-2 text-base">phone</span>
              <span className="text-sm font-light">+33 415 65356 - 9</span>
            </div>
            <div className="flex items-center mb-3">
              <span className="material-icons mr-2 text-base">mail</span>
              <span className="text-sm font-light">contact@lugar.com</span>
            </div>
          </div>
          <div className="grid grid-cols-1 space-y-10 lg:space-y-0 lg:grid-cols-3 lg:gap-16 mt-10 lg:mt-0">
            <div>
              <h1 className="uppercase mb-5 text-base text-white">
                Quick Links
              </h1>
              <ul className="text-sm text-gray space-y-5 lg:space-y-3">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h1 className="uppercase mb-5 text-base text-white">
                Legal Links
              </h1>
              <ul className="text-sm text-gray space-y-5 lg:space-y-3">
                <li>Terms</li>
                <li>Conditions</li>
                <li>Policy</li>
              </ul>
            </div>
            <div>
              <h1 className="uppercase mb-5 text-base text-white">
                Social Media
              </h1>
              <ul className="text-sm text-gray space-y-5 lg:space-y-3">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-28 text-center lg:text-left">
          <span className="text-sm text-gray">Copyright @ 2022 Lugar Inc.</span>
        </div>
      </div>
    </footer>
  );
}
