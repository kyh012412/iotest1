import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NotFound = () => {
  const params = useParams();
  const setUpString = () => {
    if (!params) return;
    Object.keys(params).forEach((key) => {
      outputString += `${key} : ${params[key]}\n`;
    });
  };
  let outputString = '';

  useEffect(() => {
    setUpString();
  }, [params]);

  return <div>{outputString}</div>;
};

export default NotFound;
