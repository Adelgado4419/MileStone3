import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Home />
//     <Dashboard/>
//     <CreateAccount/>
//   </React.StrictMode>
// );

// const index = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={"/"} element={<Home/>} />
//         <Route path={"/dashboard"} element={<Dashboard/>} />
//         <Route path={"/signup"} element={<SignUp/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
