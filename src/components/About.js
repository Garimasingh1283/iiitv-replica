import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

const modalContent = {
  Institute:
    "Indian Institute of Information Technology Vadodara (IIIT V) is established by the Ministry of Education (MoE) , Government of India under Public Private Partnership (PPP) as Institute of National Importance with a view to develop new knowledge in information technology and to provide manpower of global standards for the information technology industry and to provide for certain other matters connected with such institutions or incidental thereto. The partners in this project are Government of India, Government of Gujarat, Gujarat Energy Research and Management Institute, Gujarat State Fertilizers and Chemicals Ltd and Tata Consultancy Services. The Institute was established in the year 2013. At present, IIIT V is operating from its temporary premises at Government Engineering College (Gandhinagar) till the time its new campus is made operational at Vadodara, Gujarat. The Government of Gujarat has lent support to the Institute by providing 62.5 acres of land at Dumad, Vadodara and a Academic Block at GEC, Gandhinagar",
  Vision:
    "Vision To create leaders who will be at the forefront of innovation, creating and applying pivotal technologies that will transform the world of tomorrow, and seek solution to problems of our businesses and our society .",
  Director:
    "Director's Message : Welcome to IIIT Vadodara, where innovation meets excellence. As an institution, academia has been a cornerstone of inspiration, driving both individual and organizational motivation. It is through quality education that we broaden our horizons for personal growth and contribute significantly to societal advancement in technical innovation and development. Over the years, I have witnessed first-hand the transformative impact that high-quality education has on students, organizations, and society. At IIIT Vadodara, our vision is clear: to harness the boundless talents of our youth and propel them towards global innovation. We are committed to building a community of motivated individuals and organizations dedicated to national growth and advancement. Through robust outreach programs, we tackle societal challenges head-on, fostering a culture of innovation, leadership, and entrepreneurial spirit. Our personalized educational approach ensures that our students emerge as world leaders and lifelong learners. As a proponent of people-centric leadership, I firmly believe that diversity, equality, and inclusion are the bedrocks of any successful organization. My leadership approach is rooted on consensus-building and inclusive decision-making, involving all stakeholders at every step. Upholding ethical standards will remain the foundation of our institution, guiding every action and decision we make. I extend a warm welcome to all who wish to join us. You are about to become part of a vibrant and dynamic community dedicated to excellence. Your journey at IIIT Vadodara will be rich with learning, discovery, and growth. Seize the opportunities, engage deeply with your peers and faculty, and make the most of the resources available to you. This experience will shape not only your career but also your character and vision for the future. Together, let's elevate IIIT Vadodara to a beacon of excellence, innovation, and societal impact. I am here to support each of you on your academic and professional journeys.",
  Governance:
    "The Institute is governed by a Board of Governors including representatives from government, industry, and academia.",
  "Annual Reports":
    "The Annual Reports of IIIT Vadodara provide insights into the academic and administrative achievements of each year.",
  FAQ:
    "Find answers to frequently asked questions about admissions, academics, campus facilities, and more.",
  MoU:
    "IIIT Vadodara has signed Memoranda of Understanding (MoUs) with leading institutions and industries for collaborative research and exchange programs.",
  "Statements & Reports":
    "Various institutional statements and compliance reports are published regularly for transparency.",
  Policies:
    "Institutional policies cover academic regulations, student conduct, grievance redressal, and data privacy.",
  Acts: (
    <>
      This includes rules and acts relevant to the functioning of IIIT Vadodara as per government norms.
      <br />
      <a
        href="https://iiitvadodara.ac.in/assets/files/IIIT_PPP_act_2017.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-2 inline-block"
      >
        View IIIT PPP Act 2017 (PDF)
      </a>
    </>
  ),
  "Dumad Campus":
    "Dumad Campus is the permanent campus of IIIT Vadodara currently under development with state-of-the-art infrastructure.",
};

const About = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (title) => setOpenModal(title);
  const handleClose = () => setOpenModal(null);

  return (
    <div className="text-center mt-12 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700 mb-8">Indian Institute of Information Technology Vadodara</p>

      {/* Grid Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-8">
        {[
          "Institute",
          "Vision",
          "Director",
          "Governance",
          "Annual Reports",
          "FAQ",
          "MoU",
          "Statements & Reports",
        ].map((item) => (
          <button
            key={item}
            onClick={() => handleOpen(item)}
            className="bg-gradient-to-r from-gray-500 to-gray-800 text-white px-4 py-2 rounded-full"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Flex Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["Policies", "Acts", "Dumad Campus"].map((item) => (
          <button
            key={item}
            onClick={() => handleOpen(item)}
            className="bg-gradient-to-r from-gray-500 to-gray-800 text-white px-10 py-2 rounded-full"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Contact Section */}
      <div>
        <p className="px-2 py-4 font-bold underline">Contact Us</p>
        <p>
          Address: C/O Block No. 9<br />
          Government Engineering College<br />
          Sector-28, Gandhinagar<br />
          Gujarat - 382028<br />
          Email: administration@iiitvadodara.ac.in<br />
          Phone: +91-79-29750281 / +91-8849303883
        </p>
      </div>

      {/* Disclaimer */}
      <p className="font-semibold mt-6 underline">Disclaimer</p>
      <p className="text-gray-700 mt-2">
        The contents in the website are for information purpose only. IIIT Vadodara regularly monitors and updates the information on this website.
        We attempt to ensure that the information on this website is correct, however, we do not warrant its completeness or accuracy...
      </p>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-500 to-gray-800 text-white py-4 px-4 text-center mt-10">
        <p>&copy; {new Date().getFullYear()} IIIT Vadodara. All rights reserved.</p>
        <div className="mt-2 space-x-4 text-xl flex justify-center">
          <a
            href="https://x.com/IIITVadodarasm?t=NheyDIydHMPFbbu_sdwdYQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="inline hover:text-blue-400 transition" />
          </a>
          <a
            href="https://www.linkedin.com/school/iiitvadodara/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="inline hover:text-blue-300 transition" />
          </a>
          <a
            href="https://www.youtube.com/@iiitvadodara6387"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="inline hover:text-red-500 transition" />
          </a>
          <a
            href="https://www.facebook.com/iiitvadodara.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="inline hover:text-blue-400 transition" />
          </a>
        </div>
      </footer>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 text-left relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={handleClose}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{openModal}</h3>
            <div className="text-gray-700">{modalContent[openModal]}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
