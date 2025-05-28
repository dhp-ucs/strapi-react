import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../utils/Loader';
import { fetchApi } from '../utils/fetchApi';
import Markdown from 'react-markdown';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetchApi('/landing-page')
    fetchApi('/landing-page')
      .then((res) => {
        setData(res.data.data);
        //  console.log(res.data.data);
      })
      .finally(() => {
        {
          setIsLoading(false);
        }
      });
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* {data.blocks.map((subGrp) => {
            console.log(subGrp)
            subGrp.__component == 'blocks.section-heading' ? (
              <div>
                <h1>{subGrp.heading}</h1>
              </div>
            ) : (
              <div></div>
            );
          })} */}
          {data.blocks.map((subGrp, index) => {
            if (subGrp.__component === 'blocks.section-heading') {
              return (
                <div key={index}>
                  <h1 className="text-4xl font-bold">{subGrp.heading}</h1>
                  <p>{subGrp.subHeading}</p>
                </div>
              );
            }

            if (subGrp.__component === 'blocks.markdown') {
              return (
                <div key={index}>
                  <Markdown>{subGrp.Content}</Markdown>
                </div>
              );
            }
            if (subGrp.__component === 'blocks.hero') {
              return (
                <div key={index}>
                  <h1 className="text-4xl font-bold">{subGrp.heading}</h1>
                  <p>{subGrp.subHeading}</p>
                  <img
                    className=" h-40 w-20"
                    src={'http://localhost:1337' + subGrp.image.url}
                    alt=""
                  />

                  <ul className="list-disc list-inside p-10 ">
                    <li>{subGrp.links[0].label}</li>
                    <li>{subGrp.links[1].label}</li>
                  </ul>

                  <div className="list">{subGrp.text}</div>
                </div>
              );
            }

            //  else if(subGrp.__component === '')
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
