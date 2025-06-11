import React from "react";
import Left from "./Home/Left/Left";
import Right from "./Home/right/Right";
import Logout from "./Home/left1/Logout";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      
    <div className='flex h-screen' >
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
    </div>
   
      {/* <Login/> */}
      {/* <Signup /> */}
    </>
  );
};

export default App;
