import React, { useContext } from 'react';
// import { Context } from './context/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import UserProfile from './components/UserProfile/UserProfile';
// import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import Logout from './pages/Logout';
// import Register from './pages/Register';

function App() {
  // const { user } = useContext(Context);
  // const user=localStorage.getItem('user');
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/logout" element={<Logout />} />
          <Route path="/sign-up" element={<Register />} />
          <Route
            path="/login"
            element={
              user ? (
                user.email === 'admin@gmail.com' ? (
                  <Dashboard />
                ) : (
                  <Homepage />
                )
              ) : (
                <Login />
              )
            }
          /> */}
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/login" element={user?<Homepage/> : <Login />} /> */}
          {/* <Route path="/register" element={<SignUp/>} /> */}
          {/* <Route path="/user-profile" element={<UserProfile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
