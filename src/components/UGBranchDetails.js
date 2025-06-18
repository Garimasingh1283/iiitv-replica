// src/pages/UGBranchDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const branchInfo = {
  cse: {
    title: "Computer Science & Engineering (CSE)",
    description:
      "CSE focuses on software, hardware, algorithms, AI/ML, and system design.",
  },
  it: {
    title: "Information Technology (IT)",
    description:
      "IT deals with networks, software systems, data management, and infrastructure.",
  },
};

const UGBranchDetails = () => {
  const { branch } = useParams();
  const data = branchInfo[branch];

  if (!data) return <div className="p-8">Branch not found.</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <p className="text-gray-700 text-lg">{data.description}</p>
    </div>
  );
};

export default UGBranchDetails;
