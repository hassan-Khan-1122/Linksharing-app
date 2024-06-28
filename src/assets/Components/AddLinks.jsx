

import React, { useState, useEffect } from 'react';
import { FaLink } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useUser } from '../Context/UserData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddLinks = () => {
  const { socialLinks, setSocialLinks } = useUser();
  const [links, setLinks] = useState(() => {
    const storedLinks = localStorage.getItem('links');
    return storedLinks ? JSON.parse(storedLinks) : [{ id: 1, type: '', link: '' }];
  });

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  const addLink = () => {
    setLinks([...links, { id: links.length + 1, type: '', link: '' }]);
  };

  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
    toast.info('Link removed successfully!');
  };

  const handleTypeChange = (id, type) => {
    const updatedLinks = links.map(link =>
      link.id === id ? { ...link, type } : link
    );
    setLinks(updatedLinks);
  };

  const handleLinkChange = (id, link) => {
    const updatedLinks = links.map(l =>
      l.id === id ? { ...l, link } : l
    );
    setLinks(updatedLinks);
  };

  const isValidURL = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const handleSave = () => {
    for (let link of links) {
      if (!link.type) {
        toast.error(`Please choose a platform for Link#${link.id}`);
        return;
      }
      if (!link.link) {
        toast.error(`Please enter a link for Link#${link.id}`);
        return;
      }
      if (!isValidURL(link.link)) {
        toast.error(`Please enter a valid URL for Link#${link.id}`);
        return;
      }
    }

    const filteredLinks = links.filter(link => link.type && link.link);
    setSocialLinks(filteredLinks);
    toast.success('Links saved successfully!');
  };

  return (
    <div className="w-full lg:w-[900px] mx-auto p-6 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl ml-3 mb-4 font-[700]">Customize Your Links</h2>
      <p className="mb-6 ml-3">
        Add/edit/remove links below and share all your profiles with the World!
      </p>
      <button 
        className="bg-blue-500 w-full lg:w-[800px] px-2 p-3 mx-auto text-white rounded-md hover:bg-blue-700"
        onClick={addLink}
      >
        + Add new link
      </button>
      {links.map(link => (
        <div key={link.id} className="w-full lg:w-[800px] bg-gray-100 mx-auto mt-12 p-4 rounded-md">
          <div className="flex justify-between items-center cursor-pointer mt-4">
            <p className="text-2xl font-sans">Link#{link.id}</p>
            <p 
              className="text-red-600"
              onClick={() => {removeLink(link.id)}}
            >
              Remove
            </p>
          </div>

          <div className="flex flex-col mt-3 gap-2">
            <p className="ml-1">Platform</p>

            <div className="relative inline-block w-full lg:w-[700px]">
              <select 
                className="block appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-full"
                value={link.type}
                onChange={(e) => handleTypeChange(link.id, e.target.value)}
              >
                <option value="">Choose a Link</option>
                <option value="Github">Github</option>
                <option value="Youtube">Youtube</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <IoMdArrowDropdown className="text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-3 gap-2">
            <p className="ml-1">Link</p>

            <div className="flex items-center border border-gray-300 rounded-md bg-white w-full lg:w-[700px] p-2">
              <FaLink className="mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="Copy and Paste your link here"
                className="bg-transparent w-full outline-none"
                value={link.link}
                onChange={(e) => handleLinkChange(link.id, e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-start lg:justify-end">
        <button 
          className="mt-5 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddLinks;
