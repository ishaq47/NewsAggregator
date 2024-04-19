// components/NewsList.js
import React from 'react';

const GuardianNews = ({ news }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Guardian News </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article.webTitle}</h3>
              <p className="text-gray-700 mb-4">{article.sectionName}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Section: {article.pillarName}
                </p>
                <p className="text-gray-500 text-sm">
                  Published At: {new Date(article.webPublicationDate).toLocaleDateString()}
                </p>
              </div>
              <a
                href={article.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuardianNews;
