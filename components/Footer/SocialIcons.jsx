import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillGitlab, AiFillInstagram } from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      <a href="http://" target="_blank" rel="noopener noreferrer">
      <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-1000 "
        >
          <AiFillInstagram/>
        </span>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
      <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-1000 "
        >
          <AiFillFacebook />
        </span>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
      <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-1000 "
        >
          <AiFillGithub />
        </span>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
      <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-1000 "
        >
          <AiFillGitlab />
        </span>
        </a>
    </div>
  );
};
export default SocialIcons;
