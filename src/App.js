import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Homepage from "./components/Homepage";
import News from "./components/News";
import UGPrograms from "./components/UGPrograms";
import UGBranchDetails from "./components/UGBranchDetails";
import StudentLogin from "./components/StudentLogin";
import StudentResults from "./components/StudentResults";

const ScrollableSections = () => {
  const aboutRef = useRef(null);
  const exploreRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onAboutClick={scrollToAbout}
        onExploreClick={scrollToExplore}
        onHomeClick={scrollToHome}
      />
      <section ref={homeRef}>
        <Homepage />
      </section>
      <section ref={exploreRef}>
        <News />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
    </>
  );
};

// Route guard to protect results page
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("studentToken");
  return token ? children : <Navigate to="/student/login" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollableSections />} />
        <Route path="/programs/ug" element={<UGPrograms />} />
        <Route path="/programs/ug/:branch" element={<UGBranchDetails />} />
        
        {/* NEW routes */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route
          path="/student/results"
          element={
            <ProtectedRoute>
              <StudentResults />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
