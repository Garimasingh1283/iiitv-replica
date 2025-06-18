import React, { useState } from "react";
import axios from "axios";

const StudentLogin = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/student/login", {
        studentId,
        password,
      });

      const token = res.data.token;

      const resultRes = await axios.get("http://localhost:5000/api/student/result", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResults(resultRes.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-500 to-gray-800 flex flex-col items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Student Login</h2>
        {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}

        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-4 rounded-md w-full hover:bg-gray-700 transition duration-200"
        >
          Login
        </button>
      </form>

      {results && (
        <div className="mt-8 bg-white border border-gray-200 p-6 rounded-xl shadow-sm w-full max-w-md">
          <h3 className="text-xl font-medium mb-4 text-gray-800">
            Results for <span className="font-semibold">{results.studentId}</span>
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {results.results.map((res, index) => (
              <li key={index}>
                {res.subject}: <span className="font-semibold">{res.grade}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentLogin;
