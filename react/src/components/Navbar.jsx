import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchApi } from '../utils/fetchApi';

const Navbar = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetchApi('/landing-page')
    fetchApi('/global')
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data.data.header.logo.image['url']);
        // console.log(res.data.data);
      })
      .finally(() => {
        {
          setIsLoading(false);
        }
      });
  }, []);
  // {console.log(data.header)}
  // http://localhost:1337/uploads/OTR_web_RATIO_test_202_x_398_739bc386c2.jpg
  return (
    <header className="w-full bg-green-500 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Strapi</div>
        <img
          className=" h-15 w-15 text-left"
          src={`http://localhost:1337${data?.header?.logo.image['url']}`}
          alt=""
        />
        <ul className="flex space-x-8 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-200 transition">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
