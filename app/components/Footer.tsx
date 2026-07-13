import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const column1 = ["Audio and Subtitles", "Media Centre", "Privacy", "Contact Us"];
  const column2 = ["Audio Description", "Investor Relations", "Legal Notices"];
  const column3 = ["Help Centre", "Jobs", "Cookie Preferences"];
  const column4 = ["Gift Cards", "Terms of Use", "Corporate Information"];

  return (
    <footer className="bg-black text-[#757575] py-8 px-6 md:px-48 text-sm">
      <div className="max-w-5xl mx-auto">
        {/* Social Icons */}
        <div className="flex gap-6 mb-6 text-white text-2xl">
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[column1, column2, column3, column4].map((col, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              {col.map((link) => (
                <a key={link} href="#" className="hover:underline">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Service Code Button */}
        <button className="border border-[#757575] text-[#757575] px-3 py-1 hover:text-white hover:border-white transition-colors">
          SERVICE CODE
        </button>
      </div>
    </footer>
  );
}