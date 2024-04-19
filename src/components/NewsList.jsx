// components/NewsList.js
import React from 'react';

const NewsList = ({ news }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img
              src={article?.urlToImage}
              alt={article?.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article?.title}</h3>
              <p className="text-gray-700 mb-4">{article?.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Source: {article?.source.name}
                </p>
                <p className="text-gray-500 text-sm">
                  Published At: {new Date(article?.publishedAt).toLocaleDateString()}
                </p>
              </div>
              <a
                href={article?.url}
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

export default NewsList;
