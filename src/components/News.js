import React, { useEffect, useState } from "react";
import axios from "axios";
import "../news.css";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/news");
        setNewsItems(res.data);
      } catch (err) {
        console.error("Failed to load news", err);
      }
    };

    fetchNews();
  }, []);

  // Group by category
  const grouped = {
    ANNOUNCEMENT: [],
    NEWS: [],
    EVENTS: [],
  };

  newsItems.forEach((item) => {
    if (grouped[item.category]) grouped[item.category].push(...item.points);
  });

  const items = Object.keys(grouped).map((key) => ({
    title: key,
    points: grouped[key],
  }));

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-700 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-200 to-gray-700 rounded-3xl p-6 flex flex-col items-center shadow-md"
          >
            <div className="bg-black text-white rounded-full px-10 py-2 mb-4 text-sm font-semibold">
              {item.title}
            </div>

            <div className="relative h-48 w-full overflow-hidden group">
              <div className="scroll-inner space-y-4 w-full group-hover:pause-scroll">
                {item.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="bg-black text-white rounded-xl px-4 py-4 text-sm font-medium text-center"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
