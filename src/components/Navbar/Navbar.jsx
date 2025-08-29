import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
      <div class="grid grid-cols-[300px_minmax(400px,_1050px)_1fr] ">
        <div class="max-w-16 h-full col-span-1 relative">
          <img
            className="w-full h-full top-0 object-contain"
            src="images/logo.png"
            alt=""
          />
        </div>
        <div class="col-span-1  p-4 h-14 flex justify-start items-center bg-red-600">
          <h2 className="text-3xl font-vazir">
            سلام، <span className="font-bold">ارشیا</span>
          </h2>
          <span className=" flex justify-center items-center mr-10 border-2 border-neutral-400 px-2 py-1 rounded-3xl  gap-2 font-sans text-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            5:30{" "}
          </span>
        </div>
        <div class="col-span-1 p-4 h-14 flex items-center justify-around bg-green-600">
          <div className="">
            <div className="bg-slate-200 w-auto h-10 px-4 rounded-full overflow-hidden flex items-center m-auto justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-vazir text-sm mr-1 text-gray-600">آخرین بازید  <span className="text-blue-700 font-bold">8h</span></span>
            </div>
          </div>
          <div className="">
            <div className="bg-slate-200 w-10 h-10 rounded-full overflow-hidden flex items-center m-auto justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <div className="bg-slate-200 w-10 h-10 rounded-full overflow-hidden flex items-center m-auto justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <div className="bg-slate-400 w-10 h-10 rounded-full overflow-hidden">
              <img className="" src="images/1.png " alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
