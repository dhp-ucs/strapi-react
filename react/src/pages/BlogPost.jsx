import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../utils/fetchApi';
import Markdown from 'react-markdown';

const BlogPost = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
  useEffect(() => {
    // /articles?populate=*
    fetchApi(`/articles/?filters[title][$eq]=${slug}&populate=*`)
      .then((res) => {
        setBlogPost(res.data.data);
      })
      .finally(() => {
        {
          setLoading(false);
        }
      });
  }, [slug]);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  if (!blogPost || blogPost.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-red-600 text-lg">Blog post not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {blogPost.map((ele) => (
        <div key={ele.id} className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="mb-10 border-b pb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
              {ele.title}
            </h1>
            <p className="text-gray-500 text-sm">
              By{' '}
              <span className="font-medium text-gray-700">
                {ele.author?.name}
              </span>{' '}
              • Updated on {new Date(ele.updatedAt).toLocaleDateString()}
            </p>
          </header>
          {/* Description */}
          <section>
            <p className="text-lg leading-relaxed text-gray-800">
              {ele.description}
            </p>
          </section>

          <div>
            {ele.blocks
              .filter((ele) => ele.__component === 'shared.rich-text')
              .map((item) => {
                return <Markdown key={item.id}>{item.body}</Markdown>;
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
