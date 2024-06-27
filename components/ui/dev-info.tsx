"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Sandesh Thorat",
    designation: "Software Engineer",
    image:
      "/sandesh.png",
  },
  {
    id: 2,
    name: "Darshan Thorat",
    designation: "Software Engineer",
    image:
      "/sandesh.png",
  },
//   {
//     id: 3,
//     name: "Jane Smith",
//     designation: "Data Scientist",
//     image:
//       "/sandesh.png",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     designation: "UX Designer",
//     image:
//       "/sandesh.png",
//   },
//   {
//     id: 5,
//     name: "Tyler Durden",
//     designation: "Soap Developer",
//     image:
//       "/sandesh.png",
//   },
//   {
//     id: 6,
//     name: "Dora",
//     designation: "The Explorer",
//     image:
//       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
//   },
];

export function DevInfo() {
  return (
    <div className="flex flex-row justify-center  -translate-y-[4rem] ml-[500px]  ">
            <AnimatedTooltip items={people} />
    </div>
  );
}
