const columns = [
  ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
  ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
  ["Media Center", "Terms of Use", "Contact Us"],
];

export default function Footer() {
  return (
    <footer className="bg-netflixBlack text-gray-400 px-4 md:px-16 py-12 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="mb-6">Questions? Call 000-800-919-1743</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
          {columns.map((col, i) => (
            <ul key={i} className="space-y-3">
              {col.map((item) => (
                <li key={item} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <button className="border border-gray-500 px-3 py-1 text-sm mb-4">Service Code</button>
        <p className="text-sm">© 2026 Netflix Clone — built for learning purposes only.</p>
      </div>
    </footer>
  );
}