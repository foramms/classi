import React from "react";
import Image from "next/image"

const FeedPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-lg w-full">
        <section className="mx-4 mb-48">
          <div className="bg-white p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 relative">
            <div className="absolute left-0 top-0 flex justify-center w-full">
              <div className="w-20 h-20">
                <Image
                  src="/Icon-notepad.svg"
                  alt="camp"
                  width={75}
                  height={75}
                />
              </div>
            </div>
            <header className="space-y-4 mt-16">
            <h1 className="font-roboto bold-52 text-center lg:bold-76 text-blue-90">Welcome to the Feed</h1>
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">College: UC Davis</h2>
                <h2 className="font-semibold text-slate-900">Instructor: Professor Smith</h2>   
                <h2 className="font-semibold text-slate-900">Syllabus: Yes</h2>     
                <a href="/feed" className="hover:blue-90 group flex items-center rounded-md bg-blue-90 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                  <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                  </svg>
                  Add New Class
                </a>
              </div>
              <form className="group relative">
                <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input className="focus:ring-2 focus:ring-blue-90 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter classes" placeholder="Filter classes..." />
              </form>
            </header>
            <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6 mt-8 items-center justify-center">
              <li className="flex">
                <a href="/feed" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                  <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                  </svg>
                  New Review
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeedPage;