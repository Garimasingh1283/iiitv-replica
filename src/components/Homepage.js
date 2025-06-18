import React, { useState } from "react";
import { Link } from "react-router-dom";
import convoimg from "../assets/convo.png";
import direct from "../assets/dir.png";
import first from "../assets/fy.png";
import mom from "../assets/mou.png";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null); // to track sub-menu

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setSubOpen(null);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleToggle}
        className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow"
      >
        {title}
      </button>

      {open && (
        <div className="absolute mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1 text-left">
            {items.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.children ? (
                  <>
                    <button
                      onMouseEnter={() => setSubOpen(idx)}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      {item.label} ➤
                    </button>
                    {subOpen === idx && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg z-30">
                        {item.children.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            to={subItem.link}
                            className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                            onClick={() => {
                              setOpen(false);
                              setSubOpen(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Homepage = () => {
  const carouselItems = [
    { image: convoimg, caption: "Convocation Day" },
    { image: direct, caption: "Director Sir" },
    { image: first, caption: "First Year 2025" },
    { image: mom, caption: "Conferences & MoU" },
  ];

  const chunkSize = 3;
  const imageGroups = [];

  for (let i = 0; i < carouselItems.length; i += chunkSize) {
    imageGroups.push(carouselItems.slice(i, i + chunkSize));
  }

  const [currentGroup, setCurrentGroup] = useState(0);

  const handlePrev = () => {
    setCurrentGroup((prev) => (prev === 0 ? imageGroups.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentGroup((prev) => (prev === imageGroups.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-500 to-gray-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Indian Institute of Information Technology Vadodara
        </h1>
        <div className="space-x-4">
          <Dropdown
  title="Academics"
  items={[
    {
      label: "Programs",
      children: [
        { label: "UG", link: "/programs/ug" },
        { label: "PG", link: "/programs/pg" },
        { label: "PhD", link: "/programs/phd" },
      ],
    },
    { label: "Academic Calendar", link: "#" },
    { label: "Holidays", link: "#" },
  ]}
/>

          <Dropdown title="Admissions" items={["BTech", "MTech", "PhD", "MCA" , "BSC(online)"]} />
        </div>
      </section>

     <section className="py-16 px-6 grid md:grid-cols-4 gap-6 text-center">
  {[
    {
      title: "People",
      items: [
        { label: "Faculty", link: "#" },
        { label: "Staff", link: "#" },
        { label: "Former Faculty", link: "#" },
        { label: "PhD Scholars", link: "#" },
      ],
    },
    {
      title: "Research",
      items: [
        { label: "Publications", link: "#" },
        { label: "Projects", link: "#" },
        { label: "Highlights", link: "#" },
        { label: "Internship", link: "#" },
        { label: "Seminar", link: "#" },
      ],
    },
    {
      title: "Student Corner",
      items: [
        { label: "Gymkhana", link: "#" },
        { label: "Results", link: "/student/login" },
        { label: "Hostel", link: "#" },
        { label: "Alumni", link: "#" },
        { label: "Anti-Ragging", link: "#" },
        { label: "Notices", link: "#" },
      ],
    },
    {
      title: "Careers",
      items: [
        { label: "Faculty Recruitment", link: "#" },
        { label: "Staff Recruitment", link: "#" },
        { label: "Other Positions", link: "#" },
      ],
    },
  ].map((section, index) => (
    <div
      key={index}
      className="bg-gradient-to-r from-gray-500 to-gray-800 p-6 rounded-xl shadow hover:scale-105 transition relative"
    >
      <Dropdown title={section.title} items={section.items} />
      <p className="text-white text-sm mt-4">
        Explore our {section.title.toLowerCase()} and discover opportunities.
      </p>
    </div>
  ))}
</section>


      {/* Alumni Carousel Section */}
      <section className="py-16 px-6 text-center bg-white overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">Our Glory Moments</h2>
        <p className="mb-6 text-gray-600">
          IIIT-V shares glimpses from our journey of success.
        </p>

        <div className="relative flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
          >
            ❮
          </button>

          <div className="flex gap-6 transition-transform duration-500">
            {imageGroups[currentGroup].map((item, idx) => (
              <div
                key={idx}
                className="w-64 bg-gray-100 rounded-xl shadow overflow-hidden"
              >
                <img src={item.image} alt={item.caption} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-sm">{item.caption}</h4>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
          >
            ❯
          </button>
        </div>
      </section>

     {/* Quick Access */}
<section className="bg-gradient-to-r from-gray-500 to-gray-800 py-12 px-6 grid md:grid-cols-3 gap-4 text-center">
  <a
    href="https://betamoodle.iiitvadodara.ac.in/login/index.php"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-4 rounded-xl shadow hover:bg-gray-400 font-semibold flex items-center justify-center"
  >
    IIITV Moodle
  </a>
  <button className="bg-white p-4 rounded-xl shadow hover:bg-gray-400 font-semibold">
    Placements
  </button>
  <a
    href="https://diu.iiitvadodara.ac.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-4 rounded-xl shadow hover:bg-gray-400 font-semibold flex items-center justify-center"
  >
    IIITV(ICD)-Diu Campus
  </a>
</section>

    </div>
  );
};

export default Homepage;
