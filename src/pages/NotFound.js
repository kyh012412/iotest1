import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NotFound = () => {
  const params = useParams();
  const setUpString = () => {
    if (!params) return;
    Object.keys(params);
  };
  const outputString = '';

  useEffect(() => {
    const setUpString = () => {
      if (!params) return;
      Object.keys(params).map((key) => {
        outputString += `${key} : ${params[key]}\n`;
      });
    };
  }, [params]);

  return <div>{outputString}</div>;
};

export default NotFound;
