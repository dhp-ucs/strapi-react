import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Blog from './pages/Blog.jsx';
import HomePage from './pages/HomePage';
import About from './pages/About.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Article from './pages/Article.jsx';
import ArticleStrapi from './pages/ArticleStrapi.jsx';

function App() {
  return (
    <>
      <div className="h-screen w-full text-white">
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="blogpost" element={<BlogPost />} />
            <Route path="articles/:slug" element={<Article />} />
            <Route path="/strapi/blog" element={<ArticleStrapi />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
