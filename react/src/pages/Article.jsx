import React, { useEffect } from 'react';
import { postApi } from '../utils/fetchApi';
import axios from 'axios';

const Article = () => {
  const [data, setData] = React.useState({
    articleTitle: '',
    description: '',
  });
  async function getData() {
    const myDataApi = `http://localhost:1337/api/form-backends?populate=inputs.inputFields`;
    const fechData = await axios.get(myDataApi);

    console.log(fechData, 'LIFLose');
  }
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, 'handleChange');
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      data,
    };
    const responseData = await postApi(payload);
    setData({ articleTitle: '', description: '' });
    // setData(() => ({
    //   articleTitle: '',
    //   description: '',
    // }));
  };
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
        Create Your Article
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-xl">
        Share your thoughts, ideas, or stories with the world. Fill in the
        details below and get started!
      </p>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div>
          <label
            htmlFor="articleTitle"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Article articleTitle
          </label>
          <input
            onChange={handleChange}
            name="articleTitle"
            value={data.articleTitle}
            type="text"
            placeholder="Enter your article articleTitle"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Article description
          </label>
          <textarea
            onChange={handleChange}
            name="description"
            value={data.description}
            placeholder="Write your article description here..."
            className="w-full border border-gray-300 rounded-lg p-3 h-48 resize-none text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
        >
          Publish Article
        </button>
      </form>
    </div>
  );
};

export default Article;
