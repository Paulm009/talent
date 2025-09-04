import React from 'react'
import { Link } from "react-router-dom";
function footer() {
  return (
    <footer className="border-t border-black/5 py-10 text-sm text-neutral-500">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Talent Scout. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a className="hover:text-neutral-700" href="#">Privacy</a>
            <a className="hover:text-neutral-700" href="#">Terms</a>
            <a className="hover:text-neutral-700" href="#">Status</a>
          </nav>
        </div>
      </footer>
  )
}

export default footer