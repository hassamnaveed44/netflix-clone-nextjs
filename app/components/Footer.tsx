import React from 'react';

const footerLinks = [
  { label: "FAQ", href: "#" },
  { label: "Help Centre", href: "#" },
  { label: "Account", href: "#" },
  { label: "Media Centre", href: "#" },
  { label: "Investor Relations", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Ways to Watch", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Cookie Preferences", href: "#" },
  { label: "Corporate Information", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Speed Test", href: "#" },
  { label: "Legal Notices", href: "#" },
  { label: "Only on Netflix", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-12 md:py-16 px-6 md:px-48 text-[#757575] text-sm">
      <div className="max-w-5xl mx-auto">
        {/* Contact info */}
        <p className="mb-6">Questions? Call 000-800-1843</p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {footerLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mb-6">
          <button className="flex items-center gap-2 px-3 py-1 border border-[#757575] bg-black text-white rounded hover:bg-[#1a1a1a]">
            <span>🌐 English</span>
            <span>▼</span>
          </button>
        </div>

        {/* Bottom Text */}
        <p>Netflix India</p>
      </div>
    </footer>
  );
}