import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const FooterSection = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <footer className="bg-gray-50 dark:bg-black text-gray-800 dark:text-white py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Links */}
          <div className="col-span-1">
            <div className="flex flex-col space-y-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-vitruve-purple via-vitruve-cyan to-vitruve-yellow bg-clip-text text-transparent">
                Vitruve
              </div>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">Data sourcing</a></li>
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">AI sales agent</a></li>
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">Competitors comparison</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">Funding Round</a></li>
            </ul>
          </div>

          {/* Others Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Others</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-vitruve-cyan dark:hover:text-vitruve-cyan transition-colors">Pricing</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-white/70">© {new Date().getFullYear()} Vitruve AI · All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors">Terms of service</a>
            <a href="#" className="text-sm text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
