// src/components/NewsList.jsx
import React, { useEffect, useState } from "react";
import { getNews } from "../services/newsService";

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getNews();
      setNewsItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">News Updates</h2>
      {newsItems.map((item) => (
        <div key={item._id} className="border p-2 mb-2 rounded shadow">
          <h3 className="font-semibold">{item.category}</h3>
          <ul className="list-disc ml-6">
            {item.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
