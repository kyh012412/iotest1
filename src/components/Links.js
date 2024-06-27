import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <>
      <br />
      <br />
      <Link to={''}>{'진짜 루트'}</Link>
      {['path1', 'path2', 'path3'].map((link) => {
        return (
          <>
            <br />
            <Link to={link}>{link}</Link>
          </>
        );
      })}
    </>
  );
};

export default Links;
