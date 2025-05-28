import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { postApi } from '../utils/fetchApi';

function ArticleStrapi() {
  const [fetchData, setFetchData] = useState([]);
  const [data, setData] = React.useState({
    articleTitle: '',
    description: '',
  });

  async function getData() {
    const myDataApi = `http://localhost:1337/api/form-backends?populate=inputs.inputFields`;
    const fechData = await axios.get(myDataApi);

    console.log(fechData.data.data[0], 'LIFLose');
    setFetchData(fechData.data.data[0].inputs);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "THisvalue");
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data,'lli')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      data,
    };
    console.log(data,"FLIlss")
    const responseData = await postApi(payload);
    console.log(responseData,"FLIllw")
    setData({ articleTitle: '', description: '' });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-white to-green-100 p-6">
      <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-green-700 text-center mb-4">
          {fetchData.heading}
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          {fetchData.description1}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {fetchData.inputFields &&
            fetchData.inputFields.map((val, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <label
                  htmlFor="articleTitle"
                  className="text-lg font-semibold text-gray-700"
                >
                  {val.title}
                </label>
                <input
                  onChange={handleChange}
                  name={val.description}
                  value={data['val.description']}
                  type="text"
                  placeholder={`Enter ${val.title}`}
                  className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
                />
              </div>
            ))}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Publish Article
          </button>
        </form>
      </div>
    </div>
  );
}

export default ArticleStrapi;
