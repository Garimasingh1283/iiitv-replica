import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentResults = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResult = async () => {
      const token = localStorage.getItem("studentToken");
      if (!token) {
        navigate("/student/login");
        return;
      }

      try {
        const res = await axios.get("/api/student/result", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResult(res.data);
      } catch (err) {
        alert("Unable to fetch result.");
        navigate("/student/login");
      }
    };

    fetchResult();
  }, []);

  if (!result) return <div className="p-6 text-center">Loading your result...</div>;

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {result.name}</h2>
      <h3 className="text-lg mb-2">Semester {result.semester} Results</h3>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(result.marks).map(([subject, score], i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{subject}</td>
              <td className="border px-4 py-2">{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {result.resultFile && (
        <a
          href={result.resultFile}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-blue-600 underline"
        >
          Download Result PDF
        </a>
      )}
    </div>
  );
};

export default StudentResults;
