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
import SingleBlog from './pages/SingleBlog.jsx';
import About from './pages/About.jsx';
import BlogPost from './pages/BlogPost.jsx';

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
            <Route path="blogpost/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
