


import React, { useState } from "react";
import mobile from "../../mobile.png.png";
import { FaGithubSquare, FaArrowRight } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import Mainforms from "./Mainforms";
import "./Add.css";
import { useUser } from "../Context/UserData";
import AddLinks from "./AddLinks";

const socialMediaIcons = {
  github: <FaGithubSquare className="ml-1 text-white" />,
  youtube: <CiYoutube className="ml-1 text-white" />,
  linkedin: <FaLinkedinIn className="mr-1 text-white" />,
};

export default function LinkForms() {
  const backgroundImgStyle = {
    backgroundImage: `url(${mobile})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  };
  const { socialLinks, userImage, userFirstName, userLastName, userGmail } = useUser();
  console.log(userGmail);
  console.log(socialLinks);

  const getBackgroundColor = (type) => {
    switch (type) {
      case "youtube":
        return "red";
      case "linkedin":
        return "blue";
      case "github":
        return "black";
      default:
        return "orange";
    }
  };

  const [goNext, setGoNext] = useState(false);

  return (
    <>
   

      <div className="flex flex-col lg:flex-row w-full bg-orange">
        <div className="flex flex-col items-center lg:w-[500px] w-full bg-white lg:sticky lg:top-0">
          <div className="flex flex-col items-center">
            <div style={backgroundImgStyle} className="mt-10 lg:w-[600px] lg:h-[600px] w-full h-auto">
              <div className="mx-auto">
                <div className="mx-auto rounded-full w-[100px] h-[100px] mt-12 overflow-hidden border-[3px] border-blue-300">
                  <img className="object-cover w-full h-full" src={userImage} alt="profile" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className="text-black text-center text-2xl font-[600]">{userFirstName}</p>
                <p className="text-black text-center text-2xl font-[600]">{userLastName}</p>
              </div>
              <p className="text-black text-center text-1xl font-[100]">{userGmail}</p>
              <div className="mb-4 ">

              <div className="flex justify-between  w-[250px] mx-auto h-[200px] mt-[80px]  flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[250px] h-[50px] "
                  >
                    <div
                      style={{ backgroundColor: getBackgroundColor(link.type) }}
                      className="flex items-center justify-between  w-[200px]  mx-auto rounded cursor-pointer h-[50px] p-2"
                    >
                      <p className="flex items-center text-white">
                        {socialMediaIcons[link.type]} {link.type.toUpperCase()}
                      </p>
                      <FaArrowRight className="mx-3 text-white" />
                    </div>
                  </a>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          {goNext ? <AddLinks />     :      <Mainforms />}
        </div>
      </div>

      <div className="flex justify-center w-full mt-4 lg:mt-0">
  <button
    className="fixed right-[20px] top-[20px] lg:right-[100px] lg:top-[50px] text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={() => setGoNext(!goNext)}
  >
    {!goNext ? "Go Next" : "Go Back"}
  </button>
</div>

    </>
  );
}
