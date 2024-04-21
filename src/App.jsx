// App.js

import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import GurdianNews from './components/GurdianNews';
import WorldNews from './components/WorldNews';

const App = () => {
  const [news, setNews] = useState([]);
  const [gurdianNews, setGurdianNews] = useState([]);
  const [worldNews, setWorldNews] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const fetchGurdianNews = async () => {
    const apiKey= 'c99b5e69-6038-41d8-afb2-5a9382bbff51'
    let apiUrl= `https://content.guardianapis.com/search?api-key=${apiKey}`
    // https://raw.githubusercontent.com/ddsky/world-news-api-clients/main/world-news-api-openapi-3.json
    // Apply filters
    if (filters.category) {
      apiUrl += `&category=${filters.category}`;
    }
    if (filters.source) {
      apiUrl += `&sources=${filters.source}`;
    }

    // Apply search query
    if (searchQuery) {
      apiUrl += `&q=${searchQuery}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data.response, "dat in sdklfhwiluhwuilefgkweuifgkweg")
      if (data.response) {
        setGurdianNews(data.response.results);
        console.log(data)
      }
    } catch (error) {
      console.log('Error fetching gurdian news:', error);
    }
  };
  const fetchNews = async () => {
    const apiKey = '9be3d3c0474644bbaa4e28bbe8bc4bdc';
    // const apiKey= 'c99b5e69-6038-41d8-afb2-5a9382bbff51'
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    // let apiUrl= `https://content.guardianapis.com/search?api-key=${apiKey}`
    // https://raw.githubusercontent.com/ddsky/world-news-api-clients/main/world-news-api-openapi-3.json
    // Apply filters
    if (filters.category) {
      apiUrl += `&category=${filters.category}`;
    }
    if (filters.source) {
      apiUrl += `&sources=${filters.source}`;
    }

    // Apply search query
    if (searchQuery) {
      apiUrl += `&q=${searchQuery}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.articles) {
        setNews(data.articles);
        console.log(data)
      }
    } catch (error) {
      console.log('Error fetching news:', error);
    }
  };
  const fetchWorldNews = async () => {
    const apiKey= '4CAWoeG46fZUZs1aKpfgcQwG29XJge8z'
    let apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=${apiKey}`;
   
    if (filters.category) {
      apiUrl += `&category=${filters.category}`;
    }
    if (filters.source) {
      apiUrl += `&sources=${filters.source}`;
    }

    // Apply search query
    if (searchQuery) {
      apiUrl += `&q=${searchQuery}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.response) {
        setWorldNews(data.response.docs);
        console.log(data)
      }
    } catch (error) {
      console.log('Error fetching news:', error);
    }
  };
 
  useEffect(() => {
  

    fetchNews();
    fetchGurdianNews();
    fetchWorldNews();
  }, [filters, searchQuery]);

  return (
  <>
 <Header />
    <div className="container  p-4 min-w-full bg-slate-100 min-h-screen">
    
      <SearchBar setSearchQuery={setSearchQuery} />
      <Filters setFilters={setFilters} />
      <NewsList  news={news} />
      <GurdianNews  news={gurdianNews}  />
      <WorldNews news={worldNews} />
      {/* <NewsList  news={gurdianNews} /> */}
    </div>
    </>
  );
};

export default App;
