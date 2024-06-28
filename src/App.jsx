// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import AddLinks from './assets/Components/AddLinks'
// import LinkForms from './assets/Components/Linkforms'

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/Addlink' element={<AddLinks/>}/>
//       </Routes>
//     </BrowserRouter>
//     <LinkForms/>
//     </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkForms from './assets/Components/Linkforms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/Addlink' element={< AddLinks/>} /> */}
      </Routes>
      <LinkForms/>
    </BrowserRouter>
  );
}

export default App;

