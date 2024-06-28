// import React, { createContext, useState, useContext } from "react";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userImage, setUserImage] = useState("");
//   const [userFirstName, setUserFirstName] = useState(""); 
//   const [userLastName, setUserLastName] = useState(""); 
//   const [userGmail, setUserGmail] = useState("");
//   const [socialLinks, setSocialLinks] = useState([]);

//   const value = {
//     userImage,
//     setUserImage,
//     userFirstName,
//     setUserFirstName,
//     userLastName,
//     setUserLastName,
//     userGmail,
//     setUserGmail,
//     socialLinks,
//     setSocialLinks
//   };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };

import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize state values with localStorage fallback
  const [userImage, setUserImage] = useState(localStorage.getItem("userImage") || "");
  const [userFirstName, setUserFirstName] = useState(localStorage.getItem("userFirstName") || "");
  const [userLastName, setUserLastName] = useState(localStorage.getItem("userLastName") || "");
  const [userGmail, setUserGmail] = useState(localStorage.getItem("userGmail") || "");
  const [socialLinks, setSocialLinks] = useState(JSON.parse(localStorage.getItem("socialLinks")) || []);

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("userImage", userImage);
    localStorage.setItem("userFirstName", userFirstName);
    localStorage.setItem("userLastName", userLastName);
    localStorage.setItem("userGmail", userGmail);
    localStorage.setItem("socialLinks", JSON.stringify(socialLinks));
  }, [userImage, userFirstName, userLastName, userGmail, socialLinks]);

  const value = {
    userImage,
    setUserImage,
    userFirstName,
    setUserFirstName,
    userLastName,
    setUserLastName,
    userGmail,
    setUserGmail,
    socialLinks,
    setSocialLinks
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
