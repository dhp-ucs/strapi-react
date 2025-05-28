import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { fetchApi } from '../utils/fetchApi';
import Loader from '../utils/Loader';
import Markdown from 'react-markdown';

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // /articles?populate=*
    fetchApi('/articles')
      .then((res) => {
        setBlog(res.data.data);
      })
      .finally(() => {
        {
          setIsLoading(false);
        }
      });
  }, []);
  // console.log(blog);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Blog Articles</h1>

          <Link to={'/articles/new'}>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Create New Article
            </button>
          </Link>

          <Link className=" ml-10" to={'/strapi/blog'}>
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Create New Article from strapi
            </button>
          </Link>

          <div className="grid md:grid-cols-2 gap-6">
            {blog.map((e, index) => {
              console.log(e, 'seedhe maut');
              return (
                <div key={e.id}>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
                    {e.title}
                  </h1>
                  <img
                    src={'http://localhost:1337' + e.featuredImage.url}
                    alt=""
                  />
                  <Markdown>{e.content}</Markdown>
                </div>
              );
            })}
            {/* {blog.map((e) => (
              <div
                key={e.id}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-green-600 mb-2">
                  <Link to={`/blogpost/${e.title}`}>
                    {e.title || e.attributes?.title}
                  </Link>
                </h2>
                <p className="text-gray-700 mb-2">
                  {e.description ||
                    e.attributes?.description ||
                    'No description'}
                </p>
                <p className="text-sm text-gray-500">
                  Last updated:{' '}
                  {new Date(
                    e.updatedAt || e.attributes?.updatedAt
                  ).toLocaleString()}
                </p>
              </div>
            ))} */}
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Blog;
// div className=" absolute">Loading...</div>;
