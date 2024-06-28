

// import React, { useState, useCallback } from "react";
// import { useUser } from "../Context/UserData";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDropzone } from 'react-dropzone';
// import { FiUpload } from 'react-icons/fi'; // Importing icon for drag and drop indication

// export default function Mainforms() {
//   const { userImage, setUserImage, userFirstName, setUserFirstName, userLastName, setUserLastName, userGmail, setUserGmail } = useUser();
//   const [image, setImage] = useState(userImage || "");
//   const [fName, setFName] = useState(userFirstName || "");
//   const [lName, setLName] = useState(userLastName || "");
//   const [email, setEmail] = useState(userGmail || "");

//   const onDrop = useCallback((acceptedFiles) => {
//     if (acceptedFiles && acceptedFiles[0]) {
//       const file = acceptedFiles[0];
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//       setUserImage(imageUrl);
//     }
//   }, [setUserImage]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: 'image/png, image/jpeg, image/bmp'
//   });

//   const handleSave = () => {
//     if (!fName || !lName || !email) {
//       toast.error('All fields are required!');
//       return;
//     }
//     setUserFirstName(fName);
//     setUserLastName(lName);
//     setUserGmail(email);
//     toast.success('Profile details saved successfully!');
//   };

//   return (
//     <>
//       <div className="w-[900px] mx-5 p-6 bg-white shadow-md rounded-lg mt-10">
//         <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
//         <p className="mb-6">
//           Add your details to create a personal touch to your profile...
//         </p>
//         <div
//           {...getRootProps()}
//           className={`flex justify-between items-center bg-gray-100 shadow-md my-6 p-6 cursor-pointer ${isDragActive ? 'border-dashed border-4 border-gray-400' : ''}`}
//         >
//           <input {...getInputProps()} />
//           <div className="mx-3">Profile Picture</div>
//           <div className="w-[150px] h-[150px] relative overflow-hidden rounded-lg border-2 border-gray-300">
//             <img
//               src={image || ""}
//               alt="Profile"
//               className="w-[300px] object-cover"
//             />
//             {isDragActive && (
//               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm">
//                 <FiUpload className="text-4xl" />
//                 <span className="ml-2">Drop to upload</span>
//               </div>
//             )}
//           </div>
//           <div className="mx-3">
//             <p>
//               Image must be
//               <br /> below 1024 x 1024
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-center items-center mt-8 bg-gray-100">
//           <form className="p-6 rounded-lg shadow-md w-full mt-11">
//             <div className="mb-4 flex items-center w-[600px]">
//               <label htmlFor="firstName" className="w-1/3 text-gray-700 font-bold">
//                 First name*
//               </label>
//               <input
//                 value={fName}
//                 onChange={(e) => setFName(e.target.value)}
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 className="w-2/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//             </div>
//             <div className="mb-4 flex items-center w-[600px]">
//               <label htmlFor="lastName" className="w-1/3 text-gray-700 font-bold">
//                 Last name*
//               </label>
//               <input
//                 value={lName}
//                 onChange={(e) => setLName(e.target.value)}
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 className="w-2/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//             </div>
//             <div className="mb-4 flex items-center w-[600px]">
//               <label htmlFor="email" className="w-1/3 text-gray-700 font-bold">
//                 Email
//               </label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-2/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//             </div>
//           </form>
//         </div>
//         <button
//           onClick={handleSave}
//           className="mt-5 ml-auto mr-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Save
//         </button>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }

import React, { useState, useCallback } from "react";
import { useUser } from "../Context/UserData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

export default function Mainforms() {
  const { userImage, setUserImage, userFirstName, setUserFirstName, userLastName, setUserLastName, userGmail, setUserGmail } = useUser();
  const [image, setImage] = useState(userImage || "");
  const [fName, setFName] = useState(userFirstName || "");
  const [lName, setLName] = useState(userLastName || "");
  const [email, setEmail] = useState(userGmail || "");

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles[0]) {
      const file = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setUserImage(imageUrl);
    }
  }, [setUserImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/png, image/jpeg, image/bmp'
  });

  const handleSave = () => {
    if (!fName || !lName || !email) {
      toast.error('All fields are required!');
      return;
    }
    setUserFirstName(fName);
    setUserLastName(lName);
    setUserGmail(email);
    toast.success('Profile details saved successfully!');
  };

  return (
    <>
      <div className="w-full lg:w-[900px] mx-5 p-6 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
        <p className="mb-6">
          Add your details to create a personal touch to your profile...
        </p>
        <div
          {...getRootProps()}
          className={`flex flex-col lg:flex-row justify-between items-center bg-gray-100 shadow-md my-6 p-6 cursor-pointer ${isDragActive ? 'border-dashed border-4 border-gray-400' : ''}`}
        >
          <input {...getInputProps()} />
          <div className="mx-3">Profile Picture</div>
          <div className="w-[150px] h-[150px] relative overflow-hidden rounded-lg border-2 border-gray-300">
            <img
              src={image || ""}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            {isDragActive && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm">
                <FiUpload className="text-4xl" />
                <span className="ml-2">Drop to upload</span>
              </div>
            )}
          </div>
          <div className="mx-3 mt-4 lg:mt-0">
            <p>
              Image must be
              <br /> below 1024 x 1024
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 bg-gray-100">
          <form className="p-6 rounded-lg shadow-md w-full">
            <div className="mb-4 flex flex-col lg:flex-row items-center">
              <label htmlFor="firstName" className="w-full lg:w-1/3 text-gray-700 font-bold mb-2 lg:mb-0">
                First name*
              </label>
              <input
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                type="text"
                id="firstName"
                name="firstName"
                className="w-full lg:w-2/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row items-center">
              <label htmlFor="lastName" className="w-full lg:w-1/3 text-gray-700 font-bold mb-2 lg:mb-0">
                Last name*
              </label>
              <input
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
                className="w-full lg:w-2/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row items-center">
              <label htmlFor="email" className="w-full lg:w-1/3 text-gray-700 font-bold mb-2 lg:mb-0">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="w-full lg:w-2/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </form>
        </div>
        <button
          onClick={handleSave}
          className="mt-5 ml-auto mr-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
