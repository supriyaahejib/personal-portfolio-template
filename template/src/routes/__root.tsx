import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[transparent] text-[#2d2d2d]">

      {/* Navbar */}
      <header className="flex justify-between items-center px-12 py-8 bg-[#b68d94] shadow-md sticky top-0 z-50">
        <a href="#home" className="text-5xl font-extrabold hover:opacity-80 tracking-tight">
          CodeCollab
        </a>
        <nav className="flex gap-x-12 text-xl font-bold">
          <a href="#about" className="hover:text-[#a3747e] transition">About</a>
          <a href="#experience" className="hover:text-[#a3747e] transition">Experience</a>
          <a href="#projects" className="hover:text-[#a3747e] transition">Projects</a>
          <a
            href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a3747e] transition"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#b68d94] py-6 px-4 mt-10 text-[#2d2d2d] shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn transition-all duration-700">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/codeLogo.png"
              alt="CodeCollab Logo"
              className="w-20 h-20 rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="font-semibold text-xl hidden sm:block">UMass CodeCollab</p>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col md:items-end items-center">
            <h2 className="font-semibold text-base mb-2">Follow us:</h2>
            <div className="flex gap-6 text-lg">
              <a
                href="https://www.instagram.com/umasscodecollab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="w-7 h-7" />
                <span>Instagram</span>
              </a>
              <a
                href="https://github.com/supriyaahejib/personal-portfolio-template"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-7 h-7" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/umasscodecollab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs mt-4 text-center opacity-70">&copy; 2025 UMass CodeCollab</p>
      </footer>

    </div>
  );
}
