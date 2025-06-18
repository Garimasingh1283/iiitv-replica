import React, { useState } from "react";
import cseImg from "../assets/csee.jpg";
import itImg from "../assets/itt.jpg";
import eceImg from "../assets/ecee.jpg";
import aiImg from "../assets/aii.jpg";
import { Link } from "react-router-dom";

const programs = {
  CSE: {
    img: cseImg,
    title: "B.Tech in Computer Science and Engineering",
    desc: `This program builds a solid foundation in CSE, covering programming, electronics, and hardware. Early semesters include core computing courses, followed by advanced electives and hands-on workshops. Students gain exposure to the latest technologies through labs, projects, and seminars.`,
    link: "https://drive.google.com/file/d/1H2GJ8reZQayxYnfUVnUn3e8tllqCi8vw/view"
  },
  IT: {
    img: itImg,
    title: "B.Tech in Information Technology",
    desc: `Focused on software systems, networking, and data-centric technologies, the IT program equips students with strong programming and system analysis skills. It emphasizes real-world problem-solving through projects and internships.`,
    link: "https://drive.google.com/file/d/1H2GJ8reZQayxYnfUVnUn3e8tllqCi8vw/view"
  },
  ECE: {
    img: eceImg,
    title: "B.Tech in Electronics and Communication Engineering",
    desc: `ECE blends electronics fundamentals with communication system design. Students learn signal processing, embedded systems, IoT, and VLSI design, preparing them for both core and software industries.`,
    link: "#"
  },
  AI: {
    img: aiImg,
    title: "B.Tech in Artificial Intelligence and Data Science",
    desc: `This interdisciplinary program trains students in AI, ML, and big data tools. With a strong focus on statistics, optimization, and deep learning, it prepares graduates for emerging tech domains.`,
    link: "#"
  }
};

const UGPrograms = () => {
  const [selected, setSelected] = useState("CSE");

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-700 py-16 px-4">
      <div className="p-8 max-w-6xl mx-auto bg-white bg-opacity-90 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Undergraduate Programs
        </h1>

        <div className="flex justify-center space-x-6 border-b mb-8">
          {Object.keys(programs).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`pb-2 px-4 font-medium transition-all duration-200 ${
                selected === key
                  ? "border-b-4 border-blue-600 text-blue-700"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={programs[selected].img}
            alt={selected}
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-2xl font-semibold mb-4">{programs[selected].title}</h2>
            <p className="mb-4 leading-relaxed">{programs[selected].desc}</p>
            <a
              href={programs[selected].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium hover:underline"
            >
              View Detailed Curriculum →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGPrograms;
